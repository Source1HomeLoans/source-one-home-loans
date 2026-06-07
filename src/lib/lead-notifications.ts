import { Resend } from "resend";
import { company, founder } from "@/lib/site-data";

type LeadNotificationPayload = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  loan_program_interest: string | null;
  message: string | null;
  lead_source: string;
  source_page: string;
  submitted_at_display: string;
};

const notificationRecipients = ["david@sourceonehomeloans.com", "support@sourceonehomeloans.com"];
const notificationSubject = "New Website Lead - Source One Home Loans";
const confirmationSubject = "We've Received Your Inquiry - Source One Home Loans";
const notificationFrom = "noreply@sourceonehomeloans.com";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatValue(value: string | null) {
  return value && value.trim() ? value.trim() : "Not provided";
}

function buildTextEmail(lead: LeadNotificationPayload) {
  const name = `${lead.first_name} ${lead.last_name}`.trim();

  return [
    "A new website lead was submitted.",
    "",
    `Name: ${name}`,
    `Email: ${lead.email}`,
    `Phone: ${lead.phone}`,
    `Loan Program Interest: ${formatValue(lead.loan_program_interest)}`,
    `Message: ${formatValue(lead.message)}`,
    `Timestamp: ${lead.submitted_at_display}`,
    `Lead Source: ${lead.lead_source}`,
  ].join("\n");
}

function buildHtmlEmail(lead: LeadNotificationPayload) {
  const name = `${lead.first_name} ${lead.last_name}`.trim();
  const rows = [
    ["Name", name],
    ["Email", lead.email],
    ["Phone", lead.phone],
    ["Loan Program Interest", formatValue(lead.loan_program_interest)],
    ["Message", formatValue(lead.message)],
    ["Timestamp", lead.submitted_at_display],
    ["Lead Source", lead.lead_source],
  ];

  return `
    <div style="font-family: Arial, sans-serif; color: #0D1B2A; line-height: 1.5;">
      <h1 style="font-size: 22px; margin-bottom: 16px;">New Website Lead</h1>
      <p>A new Source One Home Loans website lead was submitted.</p>
      <table cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%; max-width: 640px;">
        <tbody>
          ${rows
            .map(
              ([label, value]) => `
                <tr>
                  <th align="left" style="border: 1px solid #E5E7EB; background: #F2F4F7; width: 210px;">${escapeHtml(label)}</th>
                  <td style="border: 1px solid #E5E7EB;">${escapeHtml(value)}</td>
                </tr>
              `,
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function buildConfirmationTextEmail(lead: LeadNotificationPayload) {
  const name = `${lead.first_name} ${lead.last_name}`.trim();

  return [
    `Hi ${name || "there"},`,
    "",
    "Thank you for contacting Source One Home Loans. We have received your inquiry and will follow up soon to discuss your mortgage goals.",
    "",
    "Contact Information:",
    `Business Phone: ${company.phoneDisplay}`,
    `${founder.name}`,
    `${founder.title}`,
    `Email: ${company.email}`,
    `Company NMLS #${company.nmls}`,
    `Individual NMLS #${company.individualNmls}`,
    "",
    "Submitting an inquiry does not constitute a loan application or guarantee approval. Loan approvals are subject to credit approval, underwriting guidelines, property approval, and program requirements.",
  ].join("\n");
}

function buildConfirmationHtmlEmail(lead: LeadNotificationPayload) {
  const name = `${lead.first_name} ${lead.last_name}`.trim();

  return `
    <div style="font-family: Arial, sans-serif; color: #0D1B2A; line-height: 1.6;">
      <h1 style="font-size: 22px; margin-bottom: 16px;">We&apos;ve Received Your Inquiry</h1>
      <p>Hi ${escapeHtml(name || "there")},</p>
      <p>Thank you for contacting Source One Home Loans. We have received your inquiry and will follow up soon to discuss your mortgage goals.</p>
      <div style="margin-top: 24px; padding: 18px; border: 1px solid #E5E7EB; background: #F2F4F7;">
        <p style="margin: 0 0 8px;"><strong>Business Phone:</strong> ${escapeHtml(company.phoneDisplay)}</p>
        <p style="margin: 0 0 8px;"><strong>${escapeHtml(founder.name)}</strong></p>
        <p style="margin: 0 0 8px;">${escapeHtml(founder.title)}</p>
        <p style="margin: 0 0 8px;"><strong>Email:</strong> ${escapeHtml(company.email)}</p>
        <p style="margin: 0 0 8px;"><strong>Company NMLS #${escapeHtml(company.nmls)}</strong></p>
        <p style="margin: 0;"><strong>Individual NMLS #${escapeHtml(company.individualNmls)}</strong></p>
      </div>
      <p style="margin-top: 24px; font-size: 12px; color: #475569;">
        Submitting an inquiry does not constitute a loan application or guarantee approval. Loan approvals are subject to credit approval, underwriting guidelines, property approval, and program requirements.
      </p>
    </div>
  `;
}

function createResendClient() {
  if (!process.env.RESEND_API_KEY) {
    console.error("Resend email skipped: RESEND_API_KEY is not configured.");
    return null;
  }

  return new Resend(process.env.RESEND_API_KEY);
}

export async function sendLeadNotification(lead: LeadNotificationPayload) {
  const resend = createResendClient();

  if (!resend) {
    return { sent: false, reason: "missing_api_key" };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: notificationFrom,
      to: notificationRecipients,
      subject: notificationSubject,
      text: buildTextEmail(lead),
      html: buildHtmlEmail(lead),
    });

    if (error) {
      console.error("Resend notification failed for website lead.", {
        error,
        sourcePage: lead.source_page,
        submittedAt: lead.submitted_at_display,
      });

      return { sent: false, reason: "resend_error" };
    }

    console.info("Resend notification sent for website lead.", {
      emailId: data?.id,
      sourcePage: lead.source_page,
      submittedAt: lead.submitted_at_display,
    });

    return { sent: true, emailId: data?.id };
  } catch (error) {
    console.error("Resend notification threw for website lead.", {
      error,
      sourcePage: lead.source_page,
      submittedAt: lead.submitted_at_display,
    });

    return { sent: false, reason: "resend_exception" };
  }
}

export async function sendLeadConfirmation(lead: LeadNotificationPayload) {
  const resend = createResendClient();

  if (!resend) {
    return { sent: false, reason: "missing_api_key" };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: notificationFrom,
      to: lead.email,
      subject: confirmationSubject,
      text: buildConfirmationTextEmail(lead),
      html: buildConfirmationHtmlEmail(lead),
    });

    if (error) {
      console.error("Resend confirmation failed for website lead.", {
        error,
        leadEmail: lead.email,
        sourcePage: lead.source_page,
        submittedAt: lead.submitted_at_display,
      });

      return { sent: false, reason: "resend_error" };
    }

    console.info("Resend confirmation sent for website lead.", {
      emailId: data?.id,
      leadEmail: lead.email,
      sourcePage: lead.source_page,
      submittedAt: lead.submitted_at_display,
    });

    return { sent: true, emailId: data?.id };
  } catch (error) {
    console.error("Resend confirmation threw for website lead.", {
      error,
      leadEmail: lead.email,
      sourcePage: lead.source_page,
      submittedAt: lead.submitted_at_display,
    });

    return { sent: false, reason: "resend_exception" };
  }
}
