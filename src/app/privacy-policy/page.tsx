import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { company } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Source One Home Loans collects, uses, protects, and retains information submitted through its website.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

const sections = [
  {
    title: "Scope",
    content: [
      "This Website Privacy Policy applies to public visits to the Source One Home Loans website, contact forms, consultation requests, newsletter registrations if offered, website-based lead forms, and calls, emails, or text messages that arise from a website inquiry.",
      "This policy does not govern third-party lender portals, credit applications, document-upload systems, or other websites or platforms unless Source One Home Loans controls the applicable service and expressly states that this policy applies.",
    ],
  },
  {
    title: "Financial Privacy Notices",
    content: [
      "This Website Privacy Policy describes information practices related to the public Source One Home Loans website and website-based inquiries. It is separate from any financial privacy notice that may be provided in connection with a mortgage application, transaction, or customer relationship as required by applicable law.",
    ],
  },
  {
    title: "Information You Provide",
    content: [
      "Source One Home Loans may collect information you voluntarily submit through public website forms or inquiry channels. This may include your name, email address, telephone number, loan interest, property or financing information voluntarily submitted, communications, inquiry details, preferred contact method, and other information you choose to provide.",
      "The public website forms are not intended to collect Social Security numbers, bank-account information, tax returns, or other sensitive mortgage application documents. Please do not submit those items through a general website form unless a secure document process has been provided.",
    ],
  },
  {
    title: "Technical, Cookie, And Analytics Data",
    content: [
      "When you visit the website, limited technical information may be collected automatically, including IP address, browser type, device information, referring page, pages viewed, cookies, analytics data, and general site usage details.",
      "Cookies and similar technologies may help operate the website, understand traffic patterns, improve page performance, measure marketing effectiveness, prevent abuse, and troubleshoot technical issues. Browser settings may allow you to limit or block some cookies, although certain site features may not work as intended.",
    ],
  },
  {
    title: "How Information May Be Used",
    content: [
      "Information may be used to respond to inquiries, discuss mortgage options, schedule consultations, operate the website, improve website performance, maintain records, detect misuse or fraud, comply with legal and regulatory requirements, send communications requested or consented to by the user, and support business operations.",
      "Submitting information through this website does not constitute a loan application and does not mean a loan will be approved. Loan approvals are subject to credit approval, underwriting guidelines, property approval, and program requirements.",
    ],
  },
  {
    title: "How Information May Be Shared",
    content: [
      "Information may be disclosed to service providers that support website hosting, database infrastructure, email delivery, business communications, analytics, customer relationship management, security, and operational support.",
      "Source One Home Loans does not sell personal information in the ordinary course of its mortgage business. Information may be disclosed to service providers, business partners, regulators, law-enforcement authorities, or other parties when permitted or required by law or when necessary to respond to a consumer's request.",
    ],
  },
  {
    title: "Security And Retention",
    content: [
      "Source One Home Loans uses reasonable administrative, technical, and organizational safeguards designed to protect information. No website, internet transmission, email, database, or electronic storage method can be promised to be completely secure.",
      "Records may be retained for as long as reasonably necessary for business, legal, regulatory, dispute-resolution, fraud-prevention, and recordkeeping purposes. No specific retention period is published by this website policy.",
    ],
  },
  {
    title: "Third-Party Websites",
    content: [
      "This website may link to third-party websites, including licensing, analytics, or service provider websites. Source One Home Loans is not responsible for the privacy practices, security, or content of third-party websites.",
    ],
  },
  {
    title: "Children's Privacy",
    content: [
      "This website is intended for adults seeking mortgage-related information and services and is not intended for children under 13. Source One Home Loans does not knowingly collect personal information from children under 13 through this website.",
    ],
  },
  {
    title: "Consumer Privacy Requests",
    content: [
      `You may contact Source One Home Loans at ${company.supportEmail} or ${company.phoneDisplay} for privacy-related questions or consumer requests. Identity verification may be required before acting on certain requests. Requests may be subject to legal exceptions, record retention requirements, jurisdiction-specific rules, and applicable law.`,
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="This policy explains how information submitted through the Source One Home Loans website may be collected, used, shared, and protected."
      sections={sections}
    />
  );
}
