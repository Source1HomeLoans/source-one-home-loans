import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { company } from "@/lib/site-data";

export const metadata: Metadata = { title: "Terms of Use" };

const sections = [
  {
    title: "Website Use",
    content: [
      "This website is provided for general informational purposes only. By using this website, you agree to use it only for lawful purposes and in a manner that does not interfere with its operation or the use of the website by others.",
    ],
  },
  {
    title: "No Commitment To Lend",
    content: [
      "Nothing on this website constitutes a commitment to lend, a loan approval, a rate lock, or a guarantee of any loan terms. Loan program availability, rates, and terms are subject to qualification and underwriting approval.",
    ],
  },
  {
    title: "Accuracy Of Information",
    content: [
      "Source One Home Loans seeks to provide accurate and current information, but website content may change without notice and may not reflect every product guideline, eligibility requirement, or market condition.",
    ],
  },
  {
    title: "Intellectual Property",
    content: [
      "Website content, branding, graphics, and design elements are owned by or licensed to Source One Home Loans and may not be reproduced or distributed without permission.",
    ],
  },
  {
    title: "Contact Source One Home Loans",
    content: [`Questions about these Terms of Use may be directed to ${company.email}.`],
  },
];

export default function TermsOfUsePage() {
  return <LegalPage title="Terms of Use" description="Please review these terms governing your use of the Source One Home Loans website." sections={sections} />;
}
