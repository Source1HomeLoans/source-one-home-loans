import type { Metadata } from "next";
import { Compass, MessageSquareText, ShieldCheck } from "lucide-react";
import { ContactCta } from "@/components/contact-cta";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Source One Home Loans and our commitment to clear, thoughtful mortgage guidance.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Source One"
        title="Mortgage guidance grounded in clarity, care, and possibility."
        description="Source One Home Loans helps borrowers navigate an important financial decision with a thoughtful process, responsive communication, and financing options designed for real life."
      />
      <section className="section-space bg-white">
        <div className="container-shell grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="eyebrow text-gold">Our Approach</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-navy md:text-5xl">We start with your goals, not a product list.</h2>
            <p className="mt-6 text-base leading-8 text-slate-600">
              A mortgage is more than a transaction. It can shape where you live, how you invest, and what you build next. That is why we take the time to understand your priorities before helping you evaluate available options.
            </p>
            <p className="mt-5 text-base leading-8 text-slate-600">
              From first-time buyers and growing families to self-employed borrowers and real estate investors, our focus is to make the process feel informed, organized, and personal.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              { title: "Clear Communication", text: "Straightforward explanations and timely updates throughout the process.", icon: MessageSquareText },
              { title: "Thoughtful Options", text: "A broad view of available loan programs based on your financial profile.", icon: Compass },
              { title: "Responsible Guidance", text: "A commitment to fair lending, compliance, and borrower-first service.", icon: ShieldCheck },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-sm border border-navy/10 bg-light-gray p-6">
                  <Icon className="h-6 w-6 text-gold" strokeWidth={1.7} />
                  <h3 className="mt-4 text-lg font-bold text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-navy text-white">
        <div className="container-shell py-20 text-center md:py-24">
          <p className="eyebrow text-gold">Our Focus</p>
          <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-semibold tracking-tight md:text-5xl">
            Helping borrowers move forward with greater confidence.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/65">
            We believe a better mortgage experience begins with listening carefully, explaining clearly, and staying focused on the borrower from the first conversation through closing.
          </p>
        </div>
      </section>
      <ContactCta />
    </>
  );
}
