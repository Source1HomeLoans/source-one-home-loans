import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal-page";
import { company } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "SMS Terms",
  description:
    "Review SMS and telephone communication terms for Source One Home Loans website inquiries.",
  alternates: {
    canonical: "/sms-terms",
  },
};

const sections = [
  {
    title: "Program Description",
    content: [
      "Source One Home Loans may offer text-message communications for consumers who choose to provide consent through a website inquiry form or another appropriate consent process.",
      "Text messages may relate to your mortgage inquiry, consultation scheduling, follow-up questions, document or appointment reminders, service updates, or other communications related to products and services you requested or consented to receive.",
    ],
  },
  {
    title: "Message Frequency And Costs",
    content: [
      "Message frequency varies. Message and data rates may apply depending on your mobile carrier and service plan.",
      "Text-message availability may depend on your carrier, device, coverage, and wireless service. Source One Home Loans does not invent or use a shortcode on this page.",
    ],
  },
  {
    title: "STOP And HELP Instructions",
    content: [
      "Reply STOP to opt out of text messages. After you send STOP, you may receive a confirmation that you have been unsubscribed.",
      `Reply HELP for help, or contact Source One Home Loans at ${company.supportEmail} or ${company.phoneDisplay}.`,
    ],
  },
  {
    title: "Consent Not Required",
    content: [
      "Consent to receive text messages is not a condition of obtaining mortgage services from Source One Home Loans.",
      "You may contact Source One Home Loans by phone or email without agreeing to receive text messages.",
    ],
  },
  {
    title: "Carrier Liability",
    content: [
      "Wireless carriers are not liable for delayed or undelivered messages. Delivery is subject to effective transmission from your carrier and network operator.",
    ],
  },
  {
    title: "Privacy",
    content: [
      "Information submitted through website forms is handled as described in the Source One Home Loans Website Privacy Policy.",
    ],
  },
];

export default function SmsTermsPage() {
  return (
    <>
      <LegalPage
        title="SMS Terms"
        description="SMS and telephone communication terms for Source One Home Loans website inquiries."
        sections={sections}
      />
      <section className="bg-light-gray pb-20">
        <div className="container-shell max-w-4xl">
          <Link href="/privacy-policy" className="button-navy">
            View Privacy Policy
          </Link>
        </div>
      </section>
    </>
  );
}
