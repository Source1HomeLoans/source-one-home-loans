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
    title: "Information You Provide",
    content: [
      "Source One Home Loans may collect information you voluntarily submit through contact, application, consultation, newsletter, or other website forms. This may include your name, email address, phone number, loan interests, property information, message details, preferred contact method, and other information you choose to provide.",
      "Please do not submit Social Security numbers, bank account numbers, tax returns, pay stubs, or other sensitive documents through a general website form unless a secure document process has been provided.",
    ],
  },
  {
    title: "Technical, Cookie, And Analytics Data",
    content: [
      "When you visit the website, limited technical information may be collected automatically, including IP address, browser type, device information, referring page, pages viewed, cookies, analytics data, and general site usage details.",
      "Cookies and analytics tools may help operate the website, understand traffic patterns, improve page performance, measure marketing effectiveness, prevent abuse, and troubleshoot technical issues. Browser settings may allow you to limit or block some cookies, although certain site features may not work as intended.",
    ],
  },
  {
    title: "How Information May Be Used",
    content: [
      "Information may be used to respond to inquiries, evaluate mortgage needs, communicate with users, schedule consultations, operate and improve the website, maintain records, prevent fraud or misuse, comply with legal obligations, and support business operations.",
      "Submitting information through this website does not constitute a loan application and does not mean a loan will be approved. Loan approvals are subject to credit approval, underwriting guidelines, property approval, and program requirements.",
    ],
  },
  {
    title: "How Information May Be Shared",
    content: [
      "Information may be shared with service providers that support website hosting, databases, email delivery, communications, analytics, security, customer relationship management, and related business operations.",
      "Source One Home Loans does not sell personal information as part of ordinary business operations. Information may be disclosed when required by law, regulation, legal process, fraud prevention needs, or business recordkeeping obligations.",
    ],
  },
  {
    title: "Security And Retention",
    content: [
      "Source One Home Loans uses reasonable administrative, technical, and operational safeguards designed to protect information. No website, internet transmission, email, database, or electronic storage method can be promised to be completely secure.",
      "Information may be retained for as long as reasonably necessary to respond to inquiries, maintain business records, comply with legal or regulatory obligations, resolve disputes, and support legitimate business purposes.",
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
      "This website is intended for adults seeking mortgage-related information and services. Source One Home Loans does not knowingly collect personal information from children under 13 through this website.",
    ],
  },
  {
    title: "Consumer Privacy Requests",
    content: [
      `You may contact Source One Home Loans at ${company.supportEmail} to request assistance with privacy-related questions, corrections, or deletion requests. Requests may be subject to identity verification, legal exceptions, record retention requirements, and applicable law.`,
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
