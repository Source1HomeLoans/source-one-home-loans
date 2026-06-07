import { Resend } from "resend";

type LeadNotificationPayload = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  loan_program_interest: string | null;
  message: string | null;
  source_page: string;
  submitted_at: string;
};

const notificationRecipients = ["david@sourceonehomeloans.com", "support@sourceonehomeloans.com"];
const notificationSubject = "New Website Lead - Source One Home Loans";
const notificationFrom = "Source One Home Loans <noreply@sourceonehomeloans.com>";

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
  return [
    "A new website lead was submitted.",
    "",
    `First Name: ${lead.first_name}`,
    `Last Name: ${lead.last_name}`,
    `Email: ${lead.email}`,
    `Phone: ${lead.phone}`,
    `Loan Program Interest: ${formatValue(lead.loan_program_interest)}`,
    `Message: ${formatValue(lead.message)}`,
    `Timestamp: ${lead.submitted_at}`,
    `Source Page: ${lead.source_page}`,
  ].join("\n");
}

function buildHtmlEmail(lead: LeadNotificationPayload) {
  const rows = [
    ["First Name", lead.first_name],
    ["Last Name", lead.last_name],
    ["Email", lead.email],
    ["Phone", lead.phone],
    ["Loan Program Interest", formatValue(lead.loan_program_interest)],
    ["Message", formatValue(lead.message)],
    ["Timestamp", lead.submitted_at],
    ["Source Page", lead.source_page],
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

export async function sendLeadNotification(lead: LeadNotificationPayload) {
  if (!process.env.RESEND_API_KEY) {
    console.error("Resend notification skipped: RESEND_API_KEY is not configured.");
    return { sent: false, reason: "missing_api_key" };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
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
      submittedAt: lead.submitted_at,
    });

    return { sent: false, reason: "resend_error" };
  }

  console.info("Resend notification sent for website lead.", {
    emailId: data?.id,
    sourcePage: lead.source_page,
    submittedAt: lead.submitted_at,
  });

  return { sent: true, emailId: data?.id };
}
