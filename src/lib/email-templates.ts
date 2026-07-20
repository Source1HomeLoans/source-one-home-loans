import { company, founder } from "@/lib/site-data";

export type LeadEmailPayload = {
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

const colors = {
  navy: "#0D1B2A",
  gold: "#D4AF37",
  white: "#FFFFFF",
  lightGray: "#F2F4F7",
  slate: "#475569",
  border: "#E2E8F0",
};

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

function fullName(lead: LeadEmailPayload) {
  return `${lead.first_name} ${lead.last_name}`.trim();
}

function telHref(phone: string) {
  const digits = phone.replace(/\D/g, "");
  const normalized = digits.length === 10 ? `1${digits}` : digits;

  return normalized ? `tel:+${normalized}` : company.phoneHref;
}

function mailtoHref(email: string) {
  return `mailto:${email.replaceAll("\r", "").replaceAll("\n", "")}`;
}

function layout({ eyebrow, title, children }: { eyebrow: string; title: string; children: string }) {
  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>${escapeHtml(title)}</title>
      </head>
      <body style="margin:0; padding:0; background:${colors.lightGray}; font-family:Arial, Helvetica, sans-serif; color:${colors.navy};">
        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:${colors.lightGray}; margin:0; padding:0;">
          <tr>
            <td align="center" style="padding:24px 12px;">
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%; max-width:680px; border-collapse:collapse;">
                <tr>
                  <td style="background:${colors.navy}; color:${colors.white}; padding:28px 28px 22px; border-radius:16px 16px 0 0;">
                    <p style="margin:0 0 8px; color:${colors.gold}; font-size:12px; font-weight:700; letter-spacing:1.8px; text-transform:uppercase;">${escapeHtml(eyebrow)}</p>
                    <h1 style="margin:0; font-size:26px; line-height:1.2; font-weight:700;">${escapeHtml(title)}</h1>
                  </td>
                </tr>
                <tr>
                  <td style="height:5px; line-height:5px; background:${colors.gold}; font-size:1px;">&nbsp;</td>
                </tr>
                <tr>
                  <td style="background:${colors.white}; padding:28px; border-radius:0 0 16px 16px; box-shadow:0 16px 42px rgba(13,27,42,0.10);">
                    ${children}
                  </td>
                </tr>
                <tr>
                  <td style="padding:20px 8px 0; text-align:center; color:${colors.slate}; font-size:12px; line-height:1.7;">
                    <p style="margin:0 0 4px; font-weight:700; color:${colors.navy};">${escapeHtml(company.name)}</p>
                    <p style="margin:0;">Company NMLS #${escapeHtml(company.nmls)}</p>
                    <p style="margin:0;">${escapeHtml(founder.name)} | Individual NMLS #${escapeHtml(company.individualNmls)}</p>
                    <p style="margin:0;">${escapeHtml(company.phoneDisplay)} | ${escapeHtml(company.email)}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
}

function leadRow(label: string, value: string) {
  return `
    <tr>
      <td style="padding:13px 14px; border-bottom:1px solid ${colors.border}; background:${colors.lightGray}; width:38%; font-size:13px; font-weight:700; color:${colors.navy}; vertical-align:top;">
        ${escapeHtml(label)}
      </td>
      <td style="padding:13px 14px; border-bottom:1px solid ${colors.border}; font-size:14px; line-height:1.6; color:${colors.navy}; vertical-align:top;">
        ${escapeHtml(value).replaceAll("\n", "<br>")}
      </td>
    </tr>
  `;
}

export function buildLeadNotificationText(lead: LeadEmailPayload) {
  return [
    "New Website Lead - Source One Home Loans",
    "",
    `First Name: ${lead.first_name}`,
    `Last Name: ${lead.last_name}`,
    `Email: ${lead.email}`,
    `Phone: ${lead.phone}`,
    `Loan Program Interest: ${formatValue(lead.loan_program_interest)}`,
    `Message: ${formatValue(lead.message)}`,
    `Source Page: ${lead.source_page}`,
    `Timestamp: ${lead.submitted_at_display}`,
    "",
    `Call Lead: ${telHref(lead.phone)}`,
    `Email Lead: ${mailtoHref(lead.email)}`,
    "",
    company.name,
    `Company NMLS #${company.nmls}`,
    `${founder.name} | Individual NMLS #${company.individualNmls}`,
    company.phoneDisplay,
    company.email,
  ].join("\n");
}

export function buildLeadNotificationHtml(lead: LeadEmailPayload) {
  const rows = [
    ["First Name", lead.first_name],
    ["Last Name", lead.last_name],
    ["Email", lead.email],
    ["Phone", lead.phone],
    ["Loan Program Interest", formatValue(lead.loan_program_interest)],
    ["Message", formatValue(lead.message)],
    ["Source Page", lead.source_page],
    ["Timestamp", lead.submitted_at_display],
  ];

  return layout({
    eyebrow: company.name,
    title: "New Website Lead",
    children: `
      <p style="margin:0 0 22px; color:${colors.slate}; font-size:15px; line-height:1.7;">
        A new website lead was submitted through Source One Home Loans.
      </p>
      <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border:1px solid ${colors.border}; border-radius:12px; overflow:hidden; border-collapse:separate; border-spacing:0;">
        <tbody>
          ${rows.map(([label, value]) => leadRow(label, value)).join("")}
        </tbody>
      </table>
      <table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:24px;">
        <tr>
          <td style="padding:0 10px 10px 0;">
            <a href="${escapeHtml(telHref(lead.phone))}" style="display:inline-block; background:${colors.gold}; color:${colors.navy}; text-decoration:none; font-weight:700; font-size:14px; padding:13px 18px; border-radius:8px;">
              Call Lead
            </a>
          </td>
          <td style="padding:0 0 10px 0;">
            <a href="${escapeHtml(mailtoHref(lead.email))}" style="display:inline-block; background:${colors.navy}; color:${colors.white}; text-decoration:none; font-weight:700; font-size:14px; padding:13px 18px; border-radius:8px;">
              Email Lead
            </a>
          </td>
        </tr>
      </table>
    `,
  });
}

export function buildBorrowerConfirmationText(lead: LeadEmailPayload) {
  const name = fullName(lead);

  return [
    `Hi ${name || "there"},`,
    "",
    "Thank you for contacting Source One Home Loans. Your inquiry has been received, and Source One Home Loans will follow up soon.",
    "",
    `Phone: ${company.phoneDisplay}`,
    `Email: ${company.email}`,
    "",
    `${company.name}`,
    `Company NMLS #${company.nmls}`,
    `${founder.name} | Individual NMLS #${company.individualNmls}`,
    "",
    company.equalHousing,
    "Loan approvals are subject to credit approval, underwriting guidelines, property approval, and program requirements. Not all applicants will qualify.",
  ].join("\n");
}

export function buildBorrowerConfirmationHtml(lead: LeadEmailPayload) {
  const name = fullName(lead);

  return layout({
    eyebrow: company.name,
    title: "Thank You For Reaching Out",
    children: `
      <p style="margin:0 0 16px; font-size:16px; line-height:1.7; color:${colors.navy};">Hi ${escapeHtml(name || "there")},</p>
      <p style="margin:0 0 16px; font-size:15px; line-height:1.7; color:${colors.slate};">
        Thank you for contacting Source One Home Loans. Your inquiry has been received, and Source One Home Loans will follow up soon.
      </p>
      <div style="margin:24px 0; padding:18px; border-radius:12px; background:${colors.lightGray}; border:1px solid ${colors.border};">
        <p style="margin:0 0 8px; font-size:14px; color:${colors.navy};"><strong>Phone:</strong> ${escapeHtml(company.phoneDisplay)}</p>
        <p style="margin:0; font-size:14px; color:${colors.navy};"><strong>Email:</strong> ${escapeHtml(company.email)}</p>
      </div>
      <p style="margin:0 0 10px; font-size:13px; line-height:1.7; color:${colors.slate};">
        ${escapeHtml(company.name)} | Company NMLS #${escapeHtml(company.nmls)}<br>
        ${escapeHtml(founder.name)} | Individual NMLS #${escapeHtml(company.individualNmls)}
      </p>
      <p style="margin:14px 0 0; font-size:12px; line-height:1.7; color:${colors.slate};">
        ${escapeHtml(company.equalHousing)} Loan approvals are subject to credit approval, underwriting guidelines, property approval, and program requirements. Not all applicants will qualify.
      </p>
    `,
  });
}
