import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { company } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "Source One Home Loans accessibility statement, including assistance and issue-reporting contact information.",
  alternates: {
    canonical: "/accessibility",
  },
};

const sections = [
  {
    title: "Our Accessibility Commitment",
    content: [
      "Source One Home Loans is committed to providing a website experience that is accessible and usable for as many visitors as reasonably possible.",
      "Our goal is to support generally recognized accessibility practices, including the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA where reasonably practicable.",
    ],
  },
  {
    title: "Ongoing Effort",
    content: [
      "Accessibility is an ongoing effort. As the website grows and technology changes, Source One Home Loans may continue reviewing pages, components, forms, images, navigation, contrast, keyboard access, and content structure to improve usability.",
      "The website may include third-party services or embedded tools that are not fully controlled by Source One Home Loans, but we still welcome reports about barriers users encounter.",
    ],
  },
  {
    title: "Request Assistance Or Report An Issue",
    content: [
      `If you need assistance using this website or want to report an accessibility concern, please contact Source One Home Loans by phone at ${company.phoneDisplay} or by email at ${company.supportEmail}.`,
      "When reporting an issue, please describe the page or feature involved, the issue you encountered, the assistive technology or browser you were using if relevant, and the best way to contact you for follow-up.",
      "Where reasonably practicable, Source One Home Loans will work to provide assistance through an alternative communication method so you can access the information or service you were seeking.",
    ],
  },
  {
    title: "No Certification Claim",
    content: [
      "This statement describes Source One Home Loans' accessibility goals and improvement process. It is not a claim of full certification or perfect compliance with any specific accessibility standard.",
    ],
  },
];

export default function AccessibilityPage() {
  return (
    <LegalPage
      title="Accessibility Statement"
      description="Source One Home Loans is committed to making the website accessible and useful for visitors seeking mortgage information."
      sections={sections}
    />
  );
}
