"use server";

import { headers } from "next/headers";
import { sendLeadNotification } from "@/lib/lead-notifications";

export type LeadFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

const initialErrorMessage = "We could not submit your inquiry. Please call or email Source One Home Loans directly.";
const leadSource = "Website Contact Form";

function readRequiredText(formData: FormData, key: string) {
  const value = formData.get(key);

  if (typeof value !== "string") {
    return "";
  }

  return value.trim();
}

function formatUsPhone(phone: string) {
  const digits = phone.replace(/\D/g, "");
  const normalized = digits.length === 11 && digits.startsWith("1") ? digits.slice(1) : digits;

  if (normalized.length !== 10) {
    return phone;
  }

  return `(${normalized.slice(0, 3)}) ${normalized.slice(3, 6)}-${normalized.slice(6)}`;
}

function formatArizonaTimestamp(date: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Phoenix",
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZoneName: "short",
  }).formatToParts(date);

  const getPart = (type: Intl.DateTimeFormatPartTypes) => parts.find((part) => part.type === type)?.value ?? "";

  return `${getPart("month")} ${getPart("day")}, ${getPart("year")} ${getPart("hour")}:${getPart("minute")} ${getPart("dayPeriod")} ${getPart("timeZoneName")}`;
}

function getClientIp(headersList: Headers) {
  const forwardedFor = headersList.get("x-forwarded-for")?.split(",")[0]?.trim();

  return headersList.get("cf-connecting-ip") ?? headersList.get("x-real-ip") ?? forwardedFor ?? "unknown";
}

async function verifyTurnstile(token: string, remoteIp: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret) {
    console.error("Turnstile verification skipped: TURNSTILE_SECRET_KEY is not configured.");
    return true;
  }

  if (!token) {
    console.error("Turnstile verification failed: missing token.", { remoteIp });
    return false;
  }

  try {
    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        secret,
        response: token,
        remoteip: remoteIp === "unknown" ? undefined : remoteIp,
      }),
      cache: "no-store",
    });

    const result = (await response.json()) as { success?: boolean; "error-codes"?: string[] };

    if (!result.success) {
      console.error("Turnstile verification failed.", {
        errorCodes: result["error-codes"],
        remoteIp,
      });
    }

    return result.success === true;
  } catch (error) {
    console.error("Turnstile verification error.", { error, remoteIp });
    return false;
  }
}

export async function submitLead(_previousState: LeadFormState, formData: FormData): Promise<LeadFormState> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const submittedAt = new Date();
  const submittedAtIso = submittedAt.toISOString();
  const submittedAtDisplay = formatArizonaTimestamp(submittedAt);
  const headersList = await headers();
  const ipAddress = getClientIp(headersList);
  const userAgent = headersList.get("user-agent") ?? "unknown";

  if (!supabaseUrl || !supabaseAnonKey) {
    return {
      status: "error",
      message: "Lead capture is not configured yet. Please call or email Source One Home Loans directly.",
    };
  }

  const consentToContact = formData.get("consent_to_contact") === "on";
  const turnstileToken = readRequiredText(formData, "cf-turnstile-response");
  const payload = {
    first_name: readRequiredText(formData, "first_name"),
    last_name: readRequiredText(formData, "last_name"),
    email: readRequiredText(formData, "email"),
    phone: formatUsPhone(readRequiredText(formData, "phone")),
    loan_program_interest: readRequiredText(formData, "loan_program_interest") || null,
    message: readRequiredText(formData, "message") || null,
    consent_to_contact: consentToContact,
    source_page: readRequiredText(formData, "source_page") || "/contact",
    lead_source: leadSource,
    lead_status: "New",
    ip_address: ipAddress,
    user_agent: userAgent,
  };

  if (!payload.first_name || !payload.last_name || !payload.email || !payload.phone || !consentToContact) {
    return {
      status: "error",
      message: "Please complete the required fields and consent checkbox before submitting.",
    };
  }

  const turnstileVerified = await verifyTurnstile(turnstileToken, ipAddress);

  if (!turnstileVerified) {
    return {
      status: "error",
      message: "Please complete the verification challenge and try again.",
    };
  }

  try {
    const response = await fetch(`${supabaseUrl.replace(/\/$/, "")}/rest/v1/leads`, {
      method: "POST",
      headers: {
        apikey: supabaseAnonKey,
        Authorization: `Bearer ${supabaseAnonKey}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    if (!response.ok) {
      console.error("Supabase lead insert failed.", {
        status: response.status,
        statusText: response.statusText,
        sourcePage: payload.source_page,
        submittedAt: submittedAtIso,
      });

      return {
        status: "error",
        message: initialErrorMessage,
      };
    }

    // TODO: Add spam protection before launch scale-up, such as Turnstile, reCAPTCHA, rate limiting, or a honeypot.
    // TODO: Add CRM assignment/routing logic when the CRM dashboard and LOS workflow are connected.
    await sendLeadNotification({
      first_name: payload.first_name,
      last_name: payload.last_name,
      email: payload.email,
      phone: payload.phone,
      loan_program_interest: payload.loan_program_interest,
      message: payload.message,
      lead_source: payload.lead_source,
      source_page: payload.source_page,
      submitted_at_display: submittedAtDisplay,
    });

    return {
      status: "success",
      message: "Thank you. Your inquiry has been received, and Source One Home Loans will follow up soon.",
    };
  } catch (error) {
    console.error("Website lead submission failed.", {
      error,
      sourcePage: payload.source_page,
      submittedAt: submittedAtIso,
    });

    return {
      status: "error",
      message: initialErrorMessage,
    };
  }
}
