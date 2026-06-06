import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { company } from "@/lib/site-data";

export const metadata: Metadata = { title: "Privacy Policy" };

const sections = [
  {
    title: "Information We Collect",
    content: [
      "Source One Home Loans may collect information you voluntarily provide through this website, including your name, email address, telephone number, loan interest, and message details.",
      "We may also collect limited technical information such as browser type, device information, and website usage data to improve site performance and user experience.",
    ],
  },
  {
    title: "How We Use Information",
    content: [
      "Information submitted through this website may be used to respond to inquiries, provide information about mortgage products and services, improve our website, and comply with applicable legal or regulatory requirements.",
      "We do not sell personal information submitted through this website.",
    ],
  },
  {
    title: "Information Security",
    content: [
      "We use reasonable administrative, technical, and physical safeguards designed to protect information. However, no internet transmission or electronic storage system can be guaranteed to be completely secure.",
      "Please do not submit Social Security numbers, bank account numbers, or other highly sensitive information through the general contact form.",
    ],
  },
  {
    title: "Contact Us",
    content: [`Questions about this Privacy Policy may be directed to ${company.email}.`],
  },
];

export default function PrivacyPolicyPage() {
  return <LegalPage title="Privacy Policy" description="This policy explains how information submitted through the Source One Home Loans website may be collected, used, and protected." sections={sections} />;
}
