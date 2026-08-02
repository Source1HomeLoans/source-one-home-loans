import type { Metadata } from "next";
import { EmailSignaturePreview } from "./email-signature-preview";

export const metadata: Metadata = {
  title: "Email Signature Preview",
  description: "Preview and copy the Source One Home Loans production email signature.",
  robots: {
    index: false,
    follow: false,
  },
};

// Uses the approved email logo crop and compact text social links.
const signatureHtml = `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:400px;border-collapse:collapse;background:#071B35;font-family:Arial,Helvetica,sans-serif;color:#FFFFFF;">
  <tr>
    <td style="padding:8px 10px;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width:100%;border-collapse:collapse;">
        <tr>
          <td valign="middle" style="width:125px;padding:0 10px 0 0;">
            <a href="https://www.sourceonehomeloans.com" style="text-decoration:none;">
              <img src="https://www.sourceonehomeloans.com/branding/logo/source-one-email-logo.png" width="115" alt="Source One Home Loans" style="display:block;width:115px;max-width:100%;height:auto;border:0;outline:none;text-decoration:none;">
            </a>
          </td>
          <td valign="middle" style="padding:0 0 0 10px;border-left:1px solid #D4A017;word-break:break-word;">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width:100%;border-collapse:collapse;">
              <tr>
                <td style="padding:0 0 1px 0;font-size:17px;line-height:20px;font-weight:bold;color:#FFFFFF;">David Bates</td>
              </tr>
              <tr>
                <td style="padding:0 0 3px 0;font-size:10.5px;line-height:13px;color:#D4A017;font-weight:bold;">Broker | Mortgage Loan Originator</td>
              </tr>
              <tr>
                <td style="padding:0 0 4px 0;font-size:9.5px;line-height:12px;color:#FFFFFF;">Your Goal. Our Focus.</td>
              </tr>
              <tr>
                <td style="padding:0;font-size:9.5px;line-height:13px;color:#FFFFFF;">
                  <span style="color:#D4A017;font-weight:bold;">P:</span>
                  <a href="tel:+14693100042" style="color:#FFFFFF;text-decoration:none;">(469) 310-0042</a>
                </td>
              </tr>
              <tr>
                <td style="padding:0 0 3px 0;font-size:9.5px;line-height:13px;color:#FFFFFF;">
                  <span style="color:#D4A017;font-weight:bold;">W:</span>
                  <a href="https://www.sourceonehomeloans.com" style="color:#FFFFFF;text-decoration:none;word-break:break-word;">www.sourceonehomeloans.com</a>
                </td>
              </tr>
              <tr>
                <td style="padding:0;font-size:8.5px;line-height:11px;color:#FFFFFF;">
                  Company NMLS #2812359<br>
                  David Bates | Individual NMLS #2038179
                </td>
              </tr>
              <tr>
                <td style="padding:5px 0 0 0;font-size:9px;line-height:12px;color:#D4A017;">
                  <a href="https://www.facebook.com/profile.php?id=61592025545198" style="color:#D4A017;text-decoration:none;font-weight:bold;">Facebook</a>
                  <span style="color:#D4A017;"> | </span>
                  <a href="https://www.instagram.com/sourceonehomeloans/" style="color:#D4A017;text-decoration:none;font-weight:bold;">Instagram</a>
                  <span style="color:#D4A017;"> | </span>
                  <a href="https://www.linkedin.com/in/dbates4800" style="color:#D4A017;text-decoration:none;font-weight:bold;">LinkedIn</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>`;

const plainText = `David Bates
Broker | Mortgage Loan Originator
Your Goal. Our Focus.

P: (469) 310-0042
W: https://www.sourceonehomeloans.com

Company NMLS #2812359
David Bates | Individual NMLS #2038179

Facebook: https://www.facebook.com/profile.php?id=61592025545198
Instagram: https://www.instagram.com/sourceonehomeloans/
LinkedIn: https://www.linkedin.com/in/dbates4800`;

export default function EmailSignaturePage() {
  return (
    <section className="bg-[#F2F4F7] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl space-y-10">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#D4A017]">Production Email Asset</p>
          <h1 className="font-serif text-4xl font-bold tracking-tight text-[#071B35] sm:text-5xl">
            Source One Home Loans Email Signature
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            Preview the Gmail- and Outlook-compatible table signature, copy the formatted version, or copy the plain-text fallback.
          </p>
        </div>

        <EmailSignaturePreview html={signatureHtml} plainText={plainText} />

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#071B35]">Gmail Installation</h2>
            <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-6 text-slate-700">
              <li>Click <strong>Copy Signature</strong> above.</li>
              <li>Open Gmail settings and select <strong>See all settings</strong>.</li>
              <li>Under <strong>Signature</strong>, create or edit David Bates&apos; signature.</li>
              <li>Paste into the signature editor and save changes.</li>
              <li>Send a test email to confirm links, email logo, and social text links render correctly.</li>
            </ol>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#071B35]">Test Checklist</h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-6 text-slate-700">
              <li>Email-specific logo loads from a public HTTPS URL.</li>
              <li>Signature max width is 400px so it stays compact in normal Gmail messages.</li>
              <li>Main logo has no circular border or black square background.</li>
              <li>Visible email address row is removed from the signature.</li>
              <li>Fair housing footer and divider are removed from the signature.</li>
              <li>Social links render as gold inline text links, not images.</li>
              <li>Formatting remains intact after pasting into Gmail.</li>
              <li>Signature remains readable on mobile email screens.</li>
              <li>Outlook renders the table layout without CSS Grid or Flexbox.</li>
              <li>Copy Signature writes both text/html and text/plain clipboard formats when supported by the browser.</li>
              <li>Phone, website, and social text links are clickable.</li>
              <li>Plain-text fallback matches the HTML signature details.</li>
            </ul>
          </div>
        </div>

        <div className="rounded-2xl border border-[#D4A017]/30 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-[#071B35]">Public Files</h2>
          <div className="mt-4 space-y-2 text-sm text-slate-700">
            <p><a className="font-semibold text-[#071B35] underline decoration-[#D4A017] decoration-2 underline-offset-4" href="/email-signature.html">/email-signature.html</a></p>
            <p><a className="font-semibold text-[#071B35] underline decoration-[#D4A017] decoration-2 underline-offset-4" href="/email-signature.txt">/email-signature.txt</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}
