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

// Uses the approved email logo crop and white Equal Housing Opportunity mark.
// Do not relabel the Equal Housing image as an ECOA logo.
const signatureHtml = `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:640px;border-collapse:collapse;background:#071B35;font-family:Arial,Helvetica,sans-serif;color:#FFFFFF;">
  <tr>
    <td style="padding:18px;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width:100%;border-collapse:collapse;">
        <tr>
          <td valign="middle" style="width:270px;padding:0 20px 0 0;">
            <a href="https://www.sourceonehomeloans.com" style="text-decoration:none;">
              <img src="https://www.sourceonehomeloans.com/branding/logo/source-one-email-logo.png" width="240" alt="Source One Home Loans" style="display:block;width:240px;max-width:100%;height:auto;border:0;outline:none;text-decoration:none;">
            </a>
          </td>
          <td valign="middle" style="padding:0 0 0 18px;border-left:2px solid #D4A017;">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width:100%;border-collapse:collapse;">
              <tr>
                <td style="padding:0 0 4px 0;font-size:22px;line-height:26px;font-weight:bold;color:#FFFFFF;">David Bates</td>
              </tr>
              <tr>
                <td style="padding:0 0 8px 0;font-size:13px;line-height:18px;color:#D4A017;font-weight:bold;">Broker | Mortgage Loan Originator</td>
              </tr>
              <tr>
                <td style="padding:0 0 10px 0;font-size:12px;line-height:17px;color:#FFFFFF;">Your Goal. Our Focus.</td>
              </tr>
              <tr>
                <td style="padding:0 0 2px 0;font-size:13px;line-height:20px;color:#FFFFFF;">
                  <span style="color:#D4A017;font-weight:bold;">P:</span>
                  <a href="tel:+14693100042" style="color:#FFFFFF;text-decoration:none;">(469) 310-0042</a>
                </td>
              </tr>
              <tr>
                <td style="padding:0 0 2px 0;font-size:13px;line-height:20px;color:#FFFFFF;">
                  <span style="color:#D4A017;font-weight:bold;">E:</span>
                  <a href="mailto:david@sourceonehomeloans.com" style="color:#FFFFFF;text-decoration:none;">david@sourceonehomeloans.com</a>
                </td>
              </tr>
              <tr>
                <td style="padding:0 0 8px 0;font-size:13px;line-height:20px;color:#FFFFFF;">
                  <span style="color:#D4A017;font-weight:bold;">W:</span>
                  <a href="https://www.sourceonehomeloans.com" style="color:#FFFFFF;text-decoration:none;">www.sourceonehomeloans.com</a>
                </td>
              </tr>
              <tr>
                <td style="padding:0;font-size:12px;line-height:18px;color:#FFFFFF;">
                  Company NMLS #2812359<br>
                  David Bates | Individual NMLS #2038179
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0 0 0;font-size:12px;line-height:18px;color:#FFFFFF;">
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
  <tr>
    <td style="padding:0 18px;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width:100%;border-collapse:collapse;">
        <tr>
          <td style="border-top:1px solid #D4A017;font-size:1px;line-height:1px;">&nbsp;</td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td style="padding:12px 18px 18px 18px;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width:100%;border-collapse:collapse;">
        <tr>
          <td valign="middle" style="width:124px;padding:0 14px 0 0;">
            <img src="https://www.sourceonehomeloans.com/images/equal-housing-opportunity.png" width="110" alt="Equal Housing Opportunity" style="display:block;width:110px;max-width:110px;height:auto;border:0;outline:none;text-decoration:none;">
          </td>
          <td valign="middle" style="padding:0;font-size:10px;line-height:14px;color:#D9E2EC;">
            Equal Housing Opportunity. Source One Home Loans provides equal credit opportunity and does not discriminate in any credit transaction on a basis prohibited by applicable federal or state law. Loans are subject to credit approval, underwriting guidelines, property eligibility, and program requirements. Rates, terms, and programs are subject to change without notice.
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>`;

const plainText = `David Bates
Broker | Mortgage Loan Originator
Source One Home Loans

Your Goal. Our Focus.

Phone: (469) 310-0042
Email: david@sourceonehomeloans.com
Website: https://www.sourceonehomeloans.com

Company NMLS #2812359
David Bates | Individual NMLS #2038179

Facebook: https://www.facebook.com/profile.php?id=61592025545198
Instagram: https://www.instagram.com/sourceonehomeloans/
LinkedIn: https://www.linkedin.com/in/dbates4800

Equal Housing Opportunity.

Source One Home Loans provides equal credit opportunity and does not discriminate in any credit transaction on a basis prohibited by applicable federal or state law.

Loans are subject to credit approval, underwriting guidelines, property eligibility, and program requirements. Rates, terms, and programs are subject to change without notice.`;

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
              <li>Send a test email to confirm links, email logo, Equal Housing image, and fair-lending wording render correctly.</li>
            </ol>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#071B35]">Test Checklist</h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-6 text-slate-700">
              <li>Email-specific logo and Equal Housing image load from public HTTPS URLs.</li>
              <li>Main logo has no circular border or black square background.</li>
              <li>Equal Housing image is the white mark and is not placed inside a square background.</li>
              <li>No unofficial ECOA logo is used.</li>
              <li>Fair-lending text is visible beside the Equal Housing mark.</li>
              <li>Formatting remains intact after pasting into Gmail.</li>
              <li>Signature remains readable on mobile email screens.</li>
              <li>Outlook renders the table layout without CSS Grid or Flexbox.</li>
              <li>Copy Signature writes both text/html and text/plain clipboard formats when supported by the browser.</li>
              <li>Phone, email, website, and social links are clickable.</li>
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
