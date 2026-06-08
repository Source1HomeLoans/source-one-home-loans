import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Compass, MessageSquareText, ShieldCheck } from "lucide-react";
import { ContactCta } from "@/components/contact-cta";
import { FounderImage } from "@/components/founder-image";
import { PageHero } from "@/components/page-hero";
import { TrustBadges } from "@/components/trust-badges";
import { company, founder } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About",
  description: "Meet David Bates, founder of Source One Home Loans and licensed Mortgage Loan Originator NMLS #2038179.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Source One"
        title="Meet David Bates"
        description="Founder-led mortgage guidance for homebuyers, homeowners, self-employed borrowers, and real estate investors."
      />

      <section className="section-space bg-white">
        <div className="container-shell grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="rounded-2xl border border-gold/30 bg-light-gray p-3 shadow-[0_24px_70px_rgba(13,27,42,0.12)]">
            <FounderImage variant="about" priority />
            <div className="p-6">
              <p className="font-serif text-3xl font-semibold text-navy">{founder.name}</p>
              <p className="mt-2 text-sm font-semibold text-gold">{founder.title}</p>
              <div className="mt-5 grid gap-2 text-sm leading-6 text-slate-600">
                <p>Individual NMLS #{company.individualNmls}</p>
                <p>{company.name}</p>
                <p>Company NMLS #{company.nmls}</p>
              </div>
            </div>
          </div>

          <div>
            <p className="eyebrow text-gold">Founder Biography</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-navy md:text-5xl">Your Home. Your Future. Our Focus.</h2>
            <div className="mt-7 grid gap-5 text-base leading-8 text-slate-600">
              {founder.bio.map((paragraph) => (
                <p key={paragraph} className={paragraph === "Your Home. Your Future. Our Focus." ? "font-serif text-3xl font-semibold leading-tight text-navy" : ""}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-9 rounded-sm border-l-4 border-gold bg-light-gray p-6">
              {founder.signature.map((line) => (
                <p key={line} className="text-sm font-semibold leading-7 text-navy">
                  {line}
                </p>
              ))}
            </div>
            <div className="mt-8">
              <TrustBadges />
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="button-navy">
                Contact David <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/loan-programs" className="inline-flex min-h-[2.85rem] items-center justify-center rounded-sm border border-navy/20 px-5 py-3 text-xs font-extrabold uppercase tracking-[0.04em] text-navy transition hover:border-gold hover:text-gold">
                Explore Loan Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="container-shell py-16">
          <p className="eyebrow text-gold">Professional Background</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">Experience shaped by lending, real estate, quality, and service.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              ["Mortgage Experience", "David helps borrowers compare loan options, organize documentation, and understand the mortgage process with clear, practical guidance."],
              ["Real Estate Experience", "His real estate perspective helps connect financing decisions to property goals, market realities, and long-term ownership plans."],
              ["Aerospace & Quality Background", "Aerospace quality assurance experience supports a detail-oriented approach to documentation, process, and follow-through."],
              ["Military Service", "Before entering mortgage and real estate, David served in the U.S. Navy Reserve as a Jet Engine Mechanic. That experience remains an important part of his commitment to service, discipline, and accountability."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-sm border border-white/10 bg-white/5 p-7">
                <h3 className="text-2xl font-semibold text-white">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/70">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-light-gray">
        <div className="container-shell grid gap-4 py-16 md:grid-cols-3">
          {[
            { title: "Clear Communication", text: "Straightforward explanations and timely updates throughout the process.", icon: MessageSquareText },
            { title: "Thoughtful Options", text: "A broad view of available loan programs based on your financial profile.", icon: Compass },
            { title: "Responsible Guidance", text: "A commitment to fair lending, compliance, and borrower-first service.", icon: ShieldCheck },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-sm border border-navy/10 bg-white p-6">
                <Icon className="h-6 w-6 text-gold" strokeWidth={1.7} />
                <h3 className="mt-4 text-lg font-bold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="container-shell flex flex-col gap-5 py-10 text-sm text-white/70 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <BadgeCheck className="h-5 w-5 text-gold" />
            <span>Company NMLS #{company.nmls}</span>
          </div>
          <div className="flex items-center gap-3">
            <BadgeCheck className="h-5 w-5 text-gold" />
            <span>{founder.name} | Individual NMLS #{company.individualNmls}</span>
          </div>
          <TrustBadges variant="dark" />
        </div>
      </section>

      <ContactCta />
    </>
  );
}
