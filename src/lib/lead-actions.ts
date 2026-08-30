"use server";

import { headers } from "next/headers";
import { sendLeadConfirmation, sendLeadNotification } from "@/lib/lead-notifications";

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
  const zapierWebhookUrl = process.env.ZAPIER_LEAD_WEBHOOK_URL;
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
  const consentDisclosureVersion = readRequiredText(formData, "consent_disclosure_version");
  const turnstileToken = readRequiredText(formData, "cf-turnstile-response");
  const fullName = readRequiredText(formData, "name");
  const [fallbackFirstName = "", ...fallbackLastNameParts] = fullName.split(/\s+/).filter(Boolean);
  const preferredContactMethod = readRequiredText(formData, "preferred_contact_method");
  const loanGoal = readRequiredText(formData, "loan_goal");
  const rawMessage = readRequiredText(formData, "message");
  const enhancedMessage = [
    rawMessage,
    preferredContactMethod ? `Preferred Contact Method: ${preferredContactMethod}` : "",
  ]
    .filter(Boolean)
    .join("\n\n");
  const formattedPhone = formatUsPhone(readRequiredText(formData, "phone"));
  const leadDetails = {
    first_name: readRequiredText(formData, "first_name") || fallbackFirstName,
    last_name: readRequiredText(formData, "last_name") || fallbackLastNameParts.join(" ") || "Not provided",
    email: readRequiredText(formData, "email"),
    phone: formattedPhone,
    loan_program_interest: readRequiredText(formData, "loan_program_interest") || loanGoal || null,
    message: enhancedMessage || null,
    consent_to_contact: consentToContact,
    consent_submitted_at: submittedAtIso,
    consent_disclosure_version: consentDisclosureVersion || "sms-telephone-consent-2026-07-19",
    consent_phone_number: formattedPhone,
    source_page: readRequiredText(formData, "source_page") || "/contact",
    form_source: readRequiredText(formData, "source_page") || "/contact",
    lead_source: leadSource,
    ip_address: ipAddress,
    user_agent: userAgent,
    lead_status: "new",
  };

  if (!leadDetails.first_name || !leadDetails.last_name || !leadDetails.email || !leadDetails.phone) {
    return {
      status: "error",
      message: "Please complete the required fields before submitting.",
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
    console.info("Submitting website lead to Supabase.", {
      payloadColumns: Object.keys(leadDetails),
      leadSource,
      sourcePage: leadDetails.source_page,
      ipAddress,
      userAgent,
      submittedAt: submittedAtIso,
    });

    const response = await fetch(`${supabaseUrl.replace(/\/$/, "")}/rest/v1/leads`, {
      method: "POST",
      headers: {
        apikey: supabaseAnonKey,
        Authorization: `Bearer ${supabaseAnonKey}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify(leadDetails),
      cache: "no-store",
    });

    if (!response.ok) {
      const errorBody = await response.text();

      console.error("Supabase lead insert failed.", {
        status: response.status,
        statusText: response.statusText,
        errorBody,
        payloadColumns: Object.keys(leadDetails),
        leadSource,
        sourcePage: leadDetails.source_page,
        ipAddress,
        userAgent,
        submittedAt: submittedAtIso,
      });

      return {
        status: "error",
        message: `Supabase insert failed: ${errorBody || response.statusText}`,
      };
    }

    // TODO: Add spam protection before launch scale-up, such as Turnstile, reCAPTCHA, rate limiting, or a honeypot.
    // TODO: Add CRM assignment/routing logic when the CRM dashboard and LOS workflow are connected.
    const savedLead = {
      first_name: leadDetails.first_name,
      last_name: leadDetails.last_name,
      email: leadDetails.email,
      phone: leadDetails.phone,
      loan_program_interest: leadDetails.loan_program_interest,
      message: leadDetails.message,
      lead_source: leadSource,
      source_page: leadDetails.source_page,
      submitted_at_display: submittedAtDisplay,
    };

    const zapierDelivery = zapierWebhookUrl
      ? fetch(zapierWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...savedLead,
            preferred_contact_method: preferredContactMethod || null,
            consent_to_contact: leadDetails.consent_to_contact,
            consent_submitted_at: leadDetails.consent_submitted_at,
            consent_disclosure_version: leadDetails.consent_disclosure_version,
            form_source: leadDetails.form_source,
          }),
          cache: "no-store",
        }).then(async (zapierResponse) => {
          if (!zapierResponse.ok) {
            throw new Error(`Zapier webhook failed with status ${zapierResponse.status}`);
          }

          console.info("Website lead delivered to Zapier.", {
            sourcePage: leadDetails.source_page,
            submittedAt: submittedAtIso,
          });
        }).catch((error) => {
          console.error("Website lead delivery to Zapier failed.", {
            error,
            sourcePage: leadDetails.source_page,
            submittedAt: submittedAtIso,
          });
          throw error;
        })
      : Promise.resolve();

    await Promise.allSettled([
      zapierDelivery,
      sendLeadNotification(savedLead),
      sendLeadConfirmation(savedLead),
    ]);

    return {
      status: "success",
      message: "Thank you. Your inquiry has been received, and Source One Home Loans will follow up soon.",
    };
  } catch (error) {
    console.error("Website lead submission failed.", {
      error,
      leadSource,
      sourcePage: leadDetails.source_page,
      ipAddress,
      userAgent,
      submittedAt: submittedAtIso,
    });

    return {
      status: "error",
      message: initialErrorMessage,
    };
  }
}
