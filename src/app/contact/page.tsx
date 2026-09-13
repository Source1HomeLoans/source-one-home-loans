import type { Metadata } from "next";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { FounderImage } from "@/components/founder-image";
import { PageHero } from "@/components/page-hero";
import { company, founder } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Source One Home Loans for mortgage inquiries, general questions, business inquiries, and referral opportunities.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Source One"
        title="How can we help?"
        description="Start a mortgage inquiry or contact Source One Home Loans directly for general, business, and referral questions."
      />
      <section className="section-space bg-light-gray">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <aside className="rounded-sm bg-navy p-8 text-white md:p-10">
            <p className="eyebrow text-gold">Connect Directly</p>
            <h2 className="mt-4 text-3xl font-semibold">General / Business / Referral Inquiry</h2>
            <p className="mt-5 text-sm leading-7 text-white/65">
              For general questions, business opportunities, or referral inquiries, reach out by phone or email.
            </p>
            <div className="mt-9 grid gap-5">
              <a href={company.phoneHref} className="flex items-start gap-4 border-t border-white/10 pt-5 text-sm text-white/75 hover:text-gold" data-analytics-event="phone_call_click">
                <Phone className="mt-0.5 h-5 w-5 text-gold" /> <span><strong className="block text-white">Call Us</strong>{company.phoneDisplay}</span>
              </a>
              <a href={company.emailHref} className="flex items-start gap-4 border-t border-white/10 pt-5 text-sm text-white/75 hover:text-gold" data-analytics-event="email_click">
                <Mail className="mt-0.5 h-5 w-5 text-gold" /> <span><strong className="block text-white">Email Us</strong>{company.email}</span>
              </a>
              <p className="border-t border-white/10 pt-5 text-sm text-white/75"><strong className="block text-white">Company NMLS</strong>#{company.nmls}</p>
              <p className="border-t border-white/10 pt-5 text-sm text-white/75"><strong className="block text-white">{company.individualName}</strong>NMLS #{company.individualNmls}</p>
              <a href={company.nmlsConsumerAccessUrl} className="border-t border-white/10 pt-5 text-sm font-semibold text-gold hover:text-white" target="_blank" rel="noopener noreferrer">
                Verify licensing through NMLS Consumer Access
              </a>
              <p className="flex items-start gap-4 border-t border-white/10 pt-5 text-sm text-white/75">
                <Image
                  src="/images/equal-housing-opportunity.png"
                  alt="Equal Housing Opportunity"
                  width={20}
                  height={20}
                  className="mt-0.5 h-5 w-5 shrink-0 object-contain"
                />
                <span><strong className="block text-white">Equal Housing Opportunity</strong>{company.equalHousing}</span>
              </p>
            </div>
          </aside>
          <div className="rounded-sm bg-white p-7 shadow-[0_18px_50px_rgba(13,27,42,0.08)] md:p-10">
            <div className="mb-8 flex flex-col gap-5 rounded-sm border border-navy/10 bg-light-gray p-5 sm:flex-row sm:items-center">
              <FounderImage variant="avatar" />
              <div>
                <p className="text-xl font-bold text-navy">{founder.name}</p>
                <p className="mt-1 text-sm font-semibold text-gold">{founder.title}</p>
                <div className="mt-3 grid gap-1 text-sm leading-6 text-slate-600">
                  <p>Individual NMLS #{company.individualNmls}</p>
                  <p>Phone: <a href={company.phoneHref} className="font-semibold text-navy hover:text-gold">{company.phoneDisplay}</a></p>
                  <p>Email: <a href={company.emailHref} className="font-semibold text-navy hover:text-gold">{company.email}</a></p>
                </div>
              </div>
            </div>
            <h2 className="text-3xl font-semibold text-navy">Mortgage / Borrower Inquiry</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Buying a home, refinancing, or exploring financing for an investment property? Answer a few questions about your goals to start your mortgage inquiry.
            </p>
            <a href={company.borrowerInquiryUrl} className="button-gold mt-7" data-analytics-event="get_prequalified_click">
              Get Pre-Qualified
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
