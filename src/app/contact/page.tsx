import type { Metadata } from "next";
import { Home, Mail, Phone } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { company, loanPrograms } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Source One Home Loans to discuss your home financing goals and get pre-qualified.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's talk about your home financing goals."
        description="Tell us a little about what you are planning. A member of our team will follow up to help you explore your options."
      />
      <section className="section-space bg-light-gray">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <aside className="rounded-sm bg-navy p-8 text-white md:p-10">
            <p className="eyebrow text-gold">Connect Directly</p>
            <h2 className="mt-4 text-3xl font-semibold">We are ready when you are.</h2>
            <p className="mt-5 text-sm leading-7 text-white/65">
              Reach out by phone or email, or send a message through the form. We look forward to learning more about your goals.
            </p>
            <div className="mt-9 grid gap-5">
              <a href={company.phoneHref} className="flex items-start gap-4 border-t border-white/10 pt-5 text-sm text-white/75 hover:text-gold">
                <Phone className="mt-0.5 h-5 w-5 text-gold" /> <span><strong className="block text-white">Call Us</strong>{company.phoneDisplay}</span>
              </a>
              <a href={company.emailHref} className="flex items-start gap-4 border-t border-white/10 pt-5 text-sm text-white/75 hover:text-gold">
                <Mail className="mt-0.5 h-5 w-5 text-gold" /> <span><strong className="block text-white">Email Us</strong>{company.email}</span>
              </a>
              <p className="border-t border-white/10 pt-5 text-sm text-white/75"><strong className="block text-white">Company NMLS</strong>#{company.nmls}</p>
              <p className="border-t border-white/10 pt-5 text-sm text-white/75"><strong className="block text-white">{company.individualName}</strong>NMLS #{company.individualNmls}</p>
              <a href={company.nmlsConsumerAccessUrl} className="border-t border-white/10 pt-5 text-sm font-semibold text-gold hover:text-white" target="_blank" rel="noreferrer">
                Verify licensing through NMLS Consumer Access
              </a>
              <p className="flex items-start gap-4 border-t border-white/10 pt-5 text-sm text-white/75">
                <Home className="mt-0.5 h-5 w-5 text-gold" />
                <span><strong className="block text-white">Equal Housing Opportunity</strong>{company.equalHousing}</span>
              </p>
            </div>
          </aside>
          <div className="rounded-sm bg-white p-7 shadow-[0_18px_50px_rgba(13,27,42,0.08)] md:p-10">
            {/* TODO: Wire this Phase 1 lead form to Resend, Supabase, the CRM dashboard, and the LOS handoff when backend services are ready. */}
            <form className="grid gap-5" aria-label="Mortgage inquiry form">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-navy">First Name<input className="form-field" type="text" name="firstName" autoComplete="given-name" required /></label>
                <label className="grid gap-2 text-sm font-semibold text-navy">Last Name<input className="form-field" type="text" name="lastName" autoComplete="family-name" required /></label>
                <label className="grid gap-2 text-sm font-semibold text-navy">Email<input className="form-field" type="email" name="email" autoComplete="email" required /></label>
                <label className="grid gap-2 text-sm font-semibold text-navy">Phone<input className="form-field" type="tel" name="phone" autoComplete="tel" required /></label>
              </div>
              <label className="grid gap-2 text-sm font-semibold text-navy">
                Loan Program Interest
                <select className="form-field" name="loanProgramInterest" defaultValue="">
                  <option value="" disabled>Select a loan program</option>
                  {loanPrograms.map((program) => <option key={program.title} value={program.title}>{program.title}</option>)}
                  <option value="Other">Other / Not Sure Yet</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm font-semibold text-navy">
                Message
                <textarea className="form-field min-h-36 resize-y" name="message" placeholder="Tell us about your goals, timeline, or questions." />
              </label>
              <label className="flex gap-3 rounded-sm border border-navy/10 bg-light-gray p-4 text-xs leading-6 text-slate-600">
                <input type="checkbox" name="consent" required className="mt-1 h-4 w-4 shrink-0 accent-gold" />
                <span>{company.formConsent}</span>
              </label>
              {/* TODO: Replace this frontend-only button with a Server Action or API route that validates, stores, emails, and routes leads. */}
              <button type="button" className="button-navy justify-self-start">Send My Inquiry</button>
              <p className="text-xs leading-6 text-slate-500">
                {company.formDisclaimer}
              </p>
              <p className="text-xs leading-6 text-slate-500">
                This form is prepared for future CRM/LOS integration. Please do not submit sensitive personal information.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
