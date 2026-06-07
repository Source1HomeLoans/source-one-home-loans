"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { submitLead, type LeadFormState } from "@/lib/lead-actions";
import { company, loanPrograms } from "@/lib/site-data";

const initialState: LeadFormState = {
  status: "idle",
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className="button-navy justify-self-start disabled:cursor-not-allowed disabled:opacity-70" disabled={pending}>
      {pending ? "Sending..." : "Send My Inquiry"}
    </button>
  );
}

export function LeadForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useActionState(submitLead, initialState);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  return (
    <form id="lead-form" ref={formRef} action={formAction} className="grid gap-5" aria-label="Mortgage inquiry form">
      <input type="hidden" name="source_page" value="/contact" />
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-navy">
          First Name
          <input className="form-field" type="text" name="first_name" autoComplete="given-name" required />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Last Name
          <input className="form-field" type="text" name="last_name" autoComplete="family-name" required />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Email
          <input className="form-field" type="email" name="email" autoComplete="email" required />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Phone
          <input className="form-field" type="tel" name="phone" autoComplete="tel" required />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold text-navy">
        Loan Program Interest
        <select className="form-field" name="loan_program_interest" defaultValue="">
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
      <label className="flex gap-3 rounded-sm border border-navy/10 bg-light-gray p-4 text-xs leading-6 text-slate-600">
        <input type="checkbox" name="consent_to_contact" required className="mt-1 h-4 w-4 shrink-0 accent-gold" />
        <span>{company.formConsent}</span>
      </label>
      <SubmitButton />
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
  );
}
