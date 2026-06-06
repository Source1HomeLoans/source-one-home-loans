import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { company } from "@/lib/site-data";

export const metadata: Metadata = { title: "Licensing & Disclosures" };

const sections = [
  {
    title: "Licensing Information",
    content: [
      `${company.name} | Company NMLS #${company.nmls}`,
      `${company.individualName} | NMLS #${company.individualNmls}`,
      company.consumerAccess,
      "Additional state-specific licensing information and required regulatory links may be added as applicable.",
    ],
  },
  {
    title: "General Mortgage Disclosure",
    content: [
      company.compliance,
      "Submitting a form through this website is not a loan application and does not guarantee approval.",
    ],
  },
  {
    title: "Equal Housing Opportunity",
    content: [
      company.equalHousing,
    ],
  },
  {
    title: "Texas Residents",
    content: company.texasDisclosure,
  },
  {
    title: "Third-Party Information",
    content: [
      "Any references to third-party programs, agencies, or guidelines are provided for general informational purposes. Program requirements are established by the applicable investor, agency, or insurer and may change.",
    ],
  },
];

export default function LicensingDisclosuresPage() {
  return <LegalPage title="Licensing & Disclosures" description="Important licensing information and general disclosures for Source One Home Loans." sections={sections} />;
}
