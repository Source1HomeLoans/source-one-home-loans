import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { company } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Review the terms governing use of the Source One Home Loans website.",
  alternates: {
    canonical: "/terms-of-use",
  },
};

const sections = [
  {
    title: "Informational Website Use",
    content: [
      "This website is provided for general informational purposes only. By using this website, you agree to use it for lawful purposes and in a way that does not interfere with website operation, security, or use by others.",
      "Website content is not a substitute for a complete mortgage review, underwriting decision, or written loan disclosures provided during an actual loan process.",
    ],
  },
  {
    title: "No Promise Of Loan Approval, Rates, Terms, Or Availability",
    content: [
      "Nothing on this website constitutes a commitment to lend, a loan approval, a rate lock, or a promise that any rate, term, payment, or program will be available. Loan approvals are subject to credit approval, underwriting guidelines, property approval, verification, investor requirements, and program requirements.",
      "Rates, terms, fees, loan programs, guidelines, and availability may change without notice. Not all applicants will qualify, and not all products are available in all states.",
    ],
  },
  {
    title: "No Financial, Legal, Tax, Or Investment Advice",
    content: [
      "Website content is educational in nature and should not be treated as legal, tax, financial, accounting, investment, or real estate advice. You should consult appropriate licensed professionals for advice specific to your situation.",
    ],
  },
  {
    title: "Accuracy And Availability Limitations",
    content: [
      "Source One Home Loans works to keep website information helpful and current, but content may contain errors, omissions, outdated information, or general examples that do not apply to every borrower or property.",
      "The website may be changed, interrupted, or unavailable at any time without notice.",
    ],
  },
  {
    title: "Intellectual Property",
    content: [
      "Website content, branding, text, graphics, design elements, and other materials are owned by or licensed to Source One Home Loans and may not be copied, modified, republished, or distributed without permission except as allowed by law.",
    ],
  },
  {
    title: "Prohibited Use",
    content: [
      "You may not use this website to submit false, misleading, unlawful, harmful, or abusive information; attempt to gain unauthorized access; interfere with website security; scrape content at scale; or use the website in a way that violates applicable law.",
    ],
  },
  {
    title: "Third-Party Links",
    content: [
      "This website may link to third-party websites for convenience, licensing verification, maps, analytics, or other resources. Source One Home Loans does not control and is not responsible for third-party websites or their content, privacy practices, or availability.",
    ],
  },
  {
    title: "Limitation Of Liability",
    content: [
      "To the fullest extent permitted by applicable law, Source One Home Loans is not liable for damages arising from use of, inability to use, or reliance on this website or third-party links.",
    ],
  },
  {
    title: "Changes To These Terms",
    content: [
      "Source One Home Loans may update these Terms of Use from time to time. Continued use of the website after changes are posted means you accept the updated terms.",
    ],
  },
  {
    title: "Governing Law",
    content: [
      "To the extent consistent with applicable law and confirmed company information, these terms are governed by the laws of the State of Texas, without regard to conflict-of-law principles.",
    ],
  },
  {
    title: "Contact",
    content: [`Questions about these Terms of Use may be directed to ${company.supportEmail}.`],
  },
];

export default function TermsOfUsePage() {
  return (
    <LegalPage
      title="Terms of Use"
      description="Please review these terms governing your use of the Source One Home Loans website."
      sections={sections}
    />
  );
}
