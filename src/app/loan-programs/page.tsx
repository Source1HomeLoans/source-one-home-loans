import type { Metadata } from "next";
import { ContactCta } from "@/components/contact-cta";
import { LoanCard } from "@/components/loan-card";
import { PageHero } from "@/components/page-hero";
import { company, loanProgramCategories, loanPrograms } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Texas VA, Jumbo, and Conventional Loan Programs",
  description:
    "Explore Source One Home Loans mortgage programs, with a primary focus on Texas VA loans, jumbo loans, and conventional loans.",
  keywords: [
    "Texas VA Loans",
    "Veteran Mortgage Texas",
    "Texas Jumbo Loans",
    "Conventional Loans Texas",
    "VA Mortgage Broker Texas",
  ],
};

export default function LoanProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Loan Programs"
        title="VA, jumbo, and conventional loans are our primary focus."
        description="Explore mortgage options for veterans, active-duty service members, high-value homebuyers, conventional borrowers, first-time buyers, self-employed borrowers, and Texas real estate investors."
      />
      <section className="section-space bg-light-gray">
        <div className="container-shell">
          <div className="grid gap-16">
            {loanProgramCategories.map((category) => (
              <div key={category}>
                <p className="eyebrow text-gold">{category}</p>
                <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {loanPrograms
                    .filter((program) => program.category === category)
                    .map((program) => <LoanCard key={program.title} program={program} />)}
                </div>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-12 max-w-3xl text-center text-xs leading-6 text-slate-500">
            {company.compliance}
          </p>
        </div>
      </section>
      <ContactCta />
    </>
  );
}
