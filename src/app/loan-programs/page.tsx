import type { Metadata } from "next";
import { ContactCta } from "@/components/contact-cta";
import { LoanCard } from "@/components/loan-card";
import { PageHero } from "@/components/page-hero";
import { company, loanProgramCategories, loanPrograms } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Loan Programs",
  description:
    "Explore conventional, FHA, VA, jumbo, investor property, self-employed, non-QM, refinance, and first-time homebuyer loan options.",
};

export default function LoanProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Loan Programs"
        title="More options. More flexibility. A loan strategy built around you."
        description="Every borrower has a different story. Explore financing options for traditional homebuyers, business owners, investors, and borrowers with unique income profiles."
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
