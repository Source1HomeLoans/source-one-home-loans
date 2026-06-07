"use server";

import { sendLeadNotification } from "@/lib/lead-notifications";

export type LeadFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

const initialErrorMessage = "We could not submit your inquiry. Please call or email Source One Home Loans directly.";

function readRequiredText(formData: FormData, key: string) {
  const value = formData.get(key);

  if (typeof value !== "string") {
    return "";
  }

  return value.trim();
}

export async function submitLead(_previousState: LeadFormState, formData: FormData): Promise<LeadFormState> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const submittedAt = new Date().toISOString();

  if (!supabaseUrl || !supabaseAnonKey) {
    return {
      status: "error",
      message: "Lead capture is not configured yet. Please call or email Source One Home Loans directly.",
    };
  }

  const consentToContact = formData.get("consent_to_contact") === "on";
  const payload = {
    first_name: readRequiredText(formData, "first_name"),
    last_name: readRequiredText(formData, "last_name"),
    email: readRequiredText(formData, "email"),
    phone: readRequiredText(formData, "phone"),
    loan_program_interest: readRequiredText(formData, "loan_program_interest") || null,
    message: readRequiredText(formData, "message") || null,
    consent_to_contact: consentToContact,
    source_page: readRequiredText(formData, "source_page") || "/contact",
    lead_status: "new",
  };

  if (!payload.first_name || !payload.last_name || !payload.email || !payload.phone || !consentToContact) {
    return {
      status: "error",
      message: "Please complete the required fields and consent checkbox before submitting.",
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
        submittedAt,
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
      source_page: payload.source_page,
      submitted_at: submittedAt,
    });

    return {
      status: "success",
      message: "Thank you. Your inquiry has been received, and Source One Home Loans will follow up soon.",
    };
  } catch (error) {
    console.error("Website lead submission failed.", {
      error,
      sourcePage: payload.source_page,
      submittedAt,
    });

    return {
      status: "error",
      message: initialErrorMessage,
    };
  }
}
