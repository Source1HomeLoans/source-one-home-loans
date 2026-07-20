import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal-page";
import { company } from "@/lib/site-data";

const texasRegulatorUrl = "https://www.sml.texas.gov/";

export const metadata: Metadata = {
  title: "Texas Disclosure",
  description:
    "Texas consumer complaint and recovery fund disclosure information for Source One Home Loans.",
  alternates: {
    canonical: "/texas-disclosure",
  },
};

const sections = [
  {
    title: "Company And Licensing Information",
    content: [
      `${company.name}`,
      `Company NMLS #${company.nmls}`,
      `${company.individualName} | NMLS #${company.individualNmls}`,
      "Consumers may verify licensing information through NMLS Consumer Access.",
    ],
  },
  {
    title: "Texas Department Of Savings And Mortgage Lending",
    content: company.texasDisclosure,
  },
  {
    title: "Important Mortgage Disclosure",
    content: [
      company.compliance,
    ],
  },
];

export default function TexasDisclosurePage() {
  return (
    <>
      <LegalPage
        title="Texas Disclosure"
        description="Texas consumer complaint and recovery fund disclosure information for Source One Home Loans."
        sections={sections}
      />
      <section className="bg-light-gray pb-20">
        <div className="container-shell flex max-w-4xl flex-wrap gap-3">
          <Link href={texasRegulatorUrl} className="button-navy" target="_blank" rel="noopener noreferrer">
            Texas SML Website
          </Link>
          <Link href={company.nmlsConsumerAccessUrl} className="button-outline" target="_blank" rel="noopener noreferrer">
            NMLS Consumer Access
          </Link>
        </div>
      </section>
    </>
  );
}
