import type { Metadata } from "next";
import Link from "next/link";
import { Home } from "lucide-react";
import { LegalPage } from "@/components/legal-page";
import { company } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Licensing & Disclosures",
  description:
    "Review Source One Home Loans licensing information, NMLS Consumer Access verification, Equal Housing Opportunity disclosure, and general mortgage disclosures.",
  alternates: {
    canonical: "/licensing-disclosures",
  },
};

const sections = [
  {
    title: "Licensing Information",
    content: [
      `${company.name}`,
      `Company NMLS #${company.nmls}`,
      `${company.individualName} | Mortgage Loan Originator | NMLS #${company.individualNmls}`,
      "Consumers may verify licensing information through NMLS Consumer Access using the link below.",
    ],
  },
  {
    title: "General Mortgage Disclosures",
    content: [
      "Loan approval is subject to underwriting, verification, credit approval, property approval, program requirements, and property eligibility. Not all applicants will qualify.",
      "Advertised terms, rates, fees, examples, program guidelines, and loan availability are subject to change without notice.",
      "This website is provided for informational purposes only and does not constitute a commitment to lend, a loan application, a rate lock, or a credit decision.",
      "Not all products are available in all states. State-specific licensing information will be added as applicable when confirmed by company licensing records.",
    ],
  },
  {
    title: "Equal Housing Opportunity",
    content: [company.equalHousing],
  },
  {
    title: "State Licensing Information",
    content: [
      "Texas-specific disclosure information is provided on the Texas Disclosure page. Additional state licensing sections may be added later as Source One Home Loans expands or confirms state-specific licensing details.",
      "This section is intentionally limited to licensing information currently available in the project and should not be read as a claim of licensing in any unlisted state.",
    ],
  },
];

export default function LicensingDisclosuresPage() {
  return (
    <>
      <LegalPage
        title="Licensing & Disclosures"
        description="Important licensing information and general mortgage disclosures for Source One Home Loans."
        sections={sections}
      />
      <section className="bg-light-gray pb-20">
        <div className="container-shell grid max-w-4xl gap-4 sm:grid-cols-2">
          <Link href={company.nmlsConsumerAccessUrl} className="button-navy text-center" target="_blank" rel="noreferrer">
            Verify Licensing Through NMLS Consumer Access
          </Link>
          <Link href="/texas-disclosure" className="button-outline text-center">
            View Texas Disclosure
          </Link>
          <div className="sm:col-span-2 rounded-2xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-600">
            <p className="flex items-start gap-3">
              <Home className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              <span>
                <strong className="text-navy">Equal Housing Opportunity.</strong> Source One Home Loans supports fair and
                responsible access to mortgage information and services.
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
