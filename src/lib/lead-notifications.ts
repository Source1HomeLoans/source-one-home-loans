import { Resend } from "resend";
import {
  buildBorrowerConfirmationHtml,
  buildBorrowerConfirmationText,
  buildLeadNotificationHtml,
  buildLeadNotificationText,
  type LeadEmailPayload,
} from "@/lib/email-templates";

type LeadNotificationPayload = LeadEmailPayload;

const notificationRecipients = ["david@sourceonehomeloans.com", "support@sourceonehomeloans.com"];
const notificationSubject = "New Website Lead - Source One Home Loans";
const confirmationSubject = "Thank you for contacting Source One Home Loans";
const notificationFrom = "Source One Home Loans <noreply@sourceonehomeloans.com>";

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
      text: buildLeadNotificationText(lead),
      html: buildLeadNotificationHtml(lead),
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
      text: buildBorrowerConfirmationText(lead),
      html: buildBorrowerConfirmationHtml(lead),
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
