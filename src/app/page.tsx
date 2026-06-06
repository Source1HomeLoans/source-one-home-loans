import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChartNoAxesCombined, Handshake, Headphones, House, ShieldCheck, TrendingUp } from "lucide-react";
import { ContactCta } from "@/components/contact-cta";
import { FounderImage } from "@/components/founder-image";
import { LoanCard } from "@/components/loan-card";
import { company, featuredLoanPrograms, founder } from "@/lib/site-data";

const values = [
  { label: "Trust", text: "Clear guidance and transparent communication.", icon: ShieldCheck },
  { label: "Home", text: "Financing centered on your goals.", icon: House },
  { label: "Growth", text: "Strategies for today and what comes next.", icon: TrendingUp },
  { label: "Support", text: "A responsive team from start to finish.", icon: Headphones },
];

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[760px] overflow-hidden bg-navy text-white">
        <Image src="/brand/source-one-hero.png" alt="Modern home at sunset" fill priority className="object-cover object-[68%_center]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,27,42,0.98)_0%,rgba(13,27,42,0.88)_38%,rgba(13,27,42,0.28)_74%,rgba(13,27,42,0.12)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(13,27,42,0.45),transparent_45%)]" />
        <div className="container-shell relative flex min-h-[760px] items-center pt-20">
          <div className="max-w-3xl py-24">
            <p className="eyebrow text-gold">Mortgage Solutions Built Around You</p>
            <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl lg:text-[5.2rem]">
              Your Home. <br />Your Future. <span className="text-gold">Our Focus.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-white/75 md:text-lg">
              Smart mortgage solutions for homebuyers, investors, and self-employed borrowers.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="button-gold">Get Pre-Qualified <ArrowRight className="h-4 w-4" /></Link>
              <Link href="/loan-programs" className="button-outline">Explore Loan Programs</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-8">
        <div className="container-shell grid rounded-sm bg-white shadow-[0_24px_60px_rgba(13,27,42,0.14)] sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={value.label} className={`p-7 ${index > 0 ? "border-t border-slate-100 sm:border-l sm:border-t-0" : ""}`}>
                <Icon className="h-6 w-6 text-gold" strokeWidth={1.7} />
                <h2 className="mt-4 font-sans text-base font-bold text-navy">{value.label}</h2>
                <p className="mt-2 text-xs leading-6 text-slate-500">{value.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="container-shell grid gap-12 py-20 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="eyebrow text-gold">Meet David Bates</p>
            <div className="mt-5 h-1 w-20 bg-gold" />
            <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">Founder-led mortgage guidance.</h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/70">{founder.shortBio}</p>
            <p className="mt-6 text-sm font-semibold text-gold">
              {founder.title} | Individual NMLS #{company.individualNmls}
            </p>
            <Link href="/contact" className="button-gold mt-9">
              Schedule a Consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="rounded-2xl border border-gold/40 bg-white/5 p-3 shadow-[0_24px_70px_rgba(0,0,0,0.28)]">
            <FounderImage variant="home" />
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-shell">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow text-gold">Explore Your Options</p>
              <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-navy md:text-5xl">The right loan starts with the right conversation.</h2>
            </div>
            <Link href="/loan-programs" className="inline-flex items-center gap-2 text-sm font-bold text-navy hover:text-gold">
              View all loan programs <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featuredLoanPrograms.map((program) => <LoanCard key={program.title} program={program} />)}
          </div>
        </div>
      </section>

      <section className="bg-light-gray">
        <div className="container-shell grid gap-12 py-20 md:py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow text-gold">For Business Owners</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-navy md:text-5xl">Mortgage Solutions Beyond Traditional Income Documentation</h2>
            <p className="mt-6 text-base leading-8 text-slate-600">
              Traditional income documentation does not always tell the full story. We offer alternative paths designed for qualified entrepreneurs, contractors, and business owners.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {["Bank Statement Programs", "P&L Programs", "No Doc Options", "Non-QM Solutions"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-semibold text-navy">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" /> {item}
                </div>
              ))}
            </div>
            <Link href="/contact" className="button-navy mt-9">Discuss Your Options</Link>
          </div>
          <div className="relative rounded-sm bg-navy p-10 text-white shadow-[0_24px_60px_rgba(13,27,42,0.16)] md:p-14">
            <div className="absolute right-8 top-8 h-28 w-28 rounded-full border border-gold/20" />
            <div className="absolute right-14 top-14 h-16 w-16 rounded-full border border-gold/30" />
            <Handshake className="h-10 w-10 text-gold" strokeWidth={1.5} />
            <p className="mt-14 text-sm leading-7 text-white/65">We look beyond a one-size-fits-all checklist to help identify financing options that make sense for how you earn.</p>
            <p className="mt-8 font-serif text-3xl leading-tight">Your income may be unique. Your mortgage strategy should be, too.</p>
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="order-2 grid grid-cols-2 gap-4 lg:order-1">
            {[
              ["DSCR Loans", "Property cash-flow qualification"],
              ["Rental Property Financing", "Financing for your next investment"],
              ["Fix & Flip Opportunities", "Short-term renovation financing"],
              ["Portfolio Growth", "Flexible investor solutions"],
            ].map(([title, text], index) => (
              <div key={title} className={`rounded-sm p-6 ${index === 0 ? "bg-gold text-navy" : "bg-light-gray text-navy"}`}>
                <ChartNoAxesCombined className="h-6 w-6" strokeWidth={1.6} />
                <h3 className="mt-8 text-lg font-bold">{title}</h3>
                <p className="mt-2 text-xs leading-6 opacity-70">{text}</p>
              </div>
            ))}
          </div>
          <div className="order-1 lg:order-2 lg:pl-12">
            <p className="eyebrow text-gold">Investor Financing</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-navy md:text-5xl">Financing Built for Real Estate Investors</h2>
            <p className="mt-6 text-base leading-8 text-slate-600">
              Whether you are acquiring your first rental property or expanding an established portfolio, we can help you explore loan options aligned with your investment strategy.
            </p>
            <Link href="/contact" className="button-navy mt-9">Talk To An Investor Loan Specialist</Link>
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
