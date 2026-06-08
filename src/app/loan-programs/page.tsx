import type { Metadata } from "next";
import { ContactCta } from "@/components/contact-cta";
import { LoanCard } from "@/components/loan-card";
import { PageHero } from "@/components/page-hero";
import { company, loanProgramCategories, loanPrograms } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Texas Mortgage Loan Programs",
  description:
    "Explore Source One Home Loans mortgage programs, including conventional loans, jumbo loans, VA loans, investor property loans, and flexible borrower options.",
  keywords: [
    "Conventional Loans Texas",
    "Texas Jumbo Loans",
    "Texas VA Loans",
    "Investor Property Loans Texas",
  ],
};

export default function LoanProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Loan Programs"
        title="Mortgage options built around your goals."
        description="Explore conventional, jumbo, VA, investor property, first-time homebuyer, self-employed, and flexible mortgage options for Texas borrowers."
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
