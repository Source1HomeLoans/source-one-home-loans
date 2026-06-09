"use client";

import Script from "next/script";
import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { submitLead, type LeadFormState } from "@/lib/lead-actions";
import { company, loanPrograms } from "@/lib/site-data";

const initialState: LeadFormState = {
  status: "idle",
  message: "",
};

const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    turnstile?: {
      reset: () => void;
    };
  }
}

function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className="button-navy justify-self-start disabled:cursor-not-allowed disabled:opacity-70" disabled={pending}>
      {pending ? "Sending..." : label}
    </button>
  );
}

type LeadFormProps = {
  variant?: "full" | "consultation";
  sourcePage?: string;
  defaultProgramInterest?: string;
  fixedProgramInterest?: boolean;
};

export function LeadForm({ variant = "full", sourcePage = "/contact", defaultProgramInterest = "", fixedProgramInterest = false }: LeadFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useActionState(submitLead, initialState);
  const isConsultation = variant === "consultation";

  useEffect(() => {
    if (state.status === "success") {
      window.gtag?.("event", "lead_form_submit", {
        form_name: isConsultation ? "free_mortgage_consultation" : "website_contact_form",
      });
      formRef.current?.reset();
    }

    if (state.status !== "idle") {
      window.turnstile?.reset();
    }
  }, [isConsultation, state.status]);

  return (
    <>
      {turnstileSiteKey ? <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive" /> : null}
      <form id={isConsultation ? "consultation-form" : "lead-form"} ref={formRef} action={formAction} className="grid gap-5" aria-label={isConsultation ? "Free mortgage consultation form" : "Mortgage inquiry form"}>
        <input type="hidden" name="source_page" value={sourcePage} />
        {isConsultation ? (
          <label className="grid gap-2 text-sm font-semibold text-navy">
            Name
            <input className="form-field" type="text" name="name" autoComplete="name" required />
          </label>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-navy">
              First Name
              <input className="form-field" type="text" name="first_name" autoComplete="given-name" required />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-navy">
              Last Name
              <input className="form-field" type="text" name="last_name" autoComplete="family-name" required />
            </label>
          </div>
        )}
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-semibold text-navy">
            Email
            <input className="form-field" type="email" name="email" autoComplete="email" required />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-navy">
            Phone
            <input className="form-field" type="tel" name="phone" autoComplete="tel" required />
          </label>
        </div>
        {isConsultation ? (
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-navy">
              Loan Goal
              <select className="form-field" name="loan_goal" defaultValue="" required>
                <option value="" disabled>
                  Select your goal
                </option>
                <option value="Purchase a home">Purchase a home</option>
                <option value="Refinance">Refinance</option>
                <option value="Real Estate Investor Loans">Real Estate Investor Loans</option>
                <option value="Self-employed mortgage options">Self-employed mortgage options</option>
                <option value="Explore my loan options">Explore my loan options</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm font-semibold text-navy">
              Preferred Contact Method
              <select className="form-field" name="preferred_contact_method" defaultValue="" required>
                <option value="" disabled>
                  Select preference
                </option>
                <option value="Phone">Phone</option>
                <option value="Email">Email</option>
                <option value="Text">Text</option>
              </select>
            </label>
          </div>
        ) : fixedProgramInterest && defaultProgramInterest ? (
          <>
            <div className="grid gap-2 text-sm font-semibold text-navy">
              Loan Program Interest
              <input type="hidden" name="loan_program_interest" value={defaultProgramInterest} />
              <div className="rounded-sm border border-navy/10 bg-white px-4 py-3 text-sm font-normal text-slate-700">
                {defaultProgramInterest}
              </div>
            </div>
            <label className="grid gap-2 text-sm font-semibold text-navy">
              Message
              <textarea className="form-field min-h-36 resize-y" name="message" placeholder="Tell us about your goals, timeline, or questions." />
            </label>
          </>
        ) : (
          <>
            <label className="grid gap-2 text-sm font-semibold text-navy">
              Loan Program Interest
              <select className="form-field" name="loan_program_interest" defaultValue={defaultProgramInterest}>
                <option value="" disabled>
                  Select a loan program
                </option>
                {loanPrograms.map((program) => (
                  <option key={program.title} value={program.title}>
                    {program.title}
                  </option>
                ))}
                <option value="Other">Other / Not Sure Yet</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm font-semibold text-navy">
              Message
              <textarea className="form-field min-h-36 resize-y" name="message" placeholder="Tell us about your goals, timeline, or questions." />
            </label>
          </>
        )}
        <label className="flex gap-3 rounded-sm border border-navy/10 bg-light-gray p-4 text-xs leading-6 text-slate-600">
          <input type="checkbox" name="consent_to_contact" required className="mt-1 h-4 w-4 shrink-0 accent-gold" />
          <span>{company.formConsent}</span>
        </label>
        {turnstileSiteKey ? <div className="cf-turnstile" data-sitekey={turnstileSiteKey} /> : null}
        <SubmitButton label={isConsultation ? "Schedule My Consultation" : "Send My Inquiry"} />
        {state.status !== "idle" ? (
          <p
            className={`rounded-sm border p-4 text-sm leading-6 ${
              state.status === "success" ? "border-emerald-200 bg-emerald-50 text-emerald-800" : "border-red-200 bg-red-50 text-red-700"
            }`}
            role={state.status === "error" ? "alert" : "status"}
          >
            {state.message}
          </p>
        ) : null}
        <p className="text-xs leading-6 text-slate-500">{company.formDisclaimer}</p>
        <p className="text-xs leading-6 text-slate-500">
          This form stores your inquiry for follow-up and future CRM/LOS workflow integration. Please do not submit sensitive personal information.
        </p>
      </form>
    </>
  );
}
