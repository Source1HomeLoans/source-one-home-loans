import type { Metadata } from "next";
import { MortgageCalculator } from "@/components/mortgage-calculator";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Mortgage Calculator",
  description:
    "Estimate your monthly mortgage payment with Source One Home Loans. Calculate principal, interest, taxes, insurance, HOA, and PMI.",
};

export default function MortgageCalculatorPage() {
  return (
    <>
      <PageHero
        eyebrow="Mortgage Calculator"
        title="Estimate your monthly mortgage payment."
        description="Calculate principal, interest, property taxes, homeowners insurance, HOA dues, and optional PMI using a simple mortgage payment estimate."
      />
      <section className="section-space bg-light-gray">
        <div className="container-shell">
          <MortgageCalculator />
          <p className="mt-8 rounded-sm border border-navy/10 bg-white p-5 text-xs leading-6 text-slate-500">
            This calculator is provided for informational purposes only and does not constitute a loan estimate, approval, or commitment to lend. Actual payment may vary based on credit profile, loan program, taxes, insurance, HOA dues, mortgage insurance, interest rate, closing costs, and underwriting guidelines.
          </p>
        </div>
      </section>
    </>
  );
}
