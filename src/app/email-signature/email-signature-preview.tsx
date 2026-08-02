"use client";

type EmailSignaturePreviewProps = {
  html: string;
  plainText: string;
};

export function EmailSignaturePreview({ html, plainText }: EmailSignaturePreviewProps) {
  async function copySignature() {
    if (typeof navigator === "undefined" || !navigator.clipboard) {
      return;
    }

    if (typeof ClipboardItem !== "undefined") {
      await navigator.clipboard.write([
        new ClipboardItem({
          "text/html": new Blob([html], { type: "text/html" }),
          "text/plain": new Blob([plainText], { type: "text/plain" }),
        }),
      ]);
      return;
    }

    await navigator.clipboard.writeText(html);
  }

  async function copyPlainText() {
    if (typeof navigator === "undefined" || !navigator.clipboard) {
      return;
    }

    await navigator.clipboard.writeText(plainText);
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={copySignature}
          className="rounded-full bg-[#071B35] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0D2A52]"
        >
          Copy Signature
        </button>
        <button
          type="button"
          onClick={copyPlainText}
          className="rounded-full border border-[#D4A017] bg-white px-5 py-3 text-sm font-semibold text-[#071B35] transition hover:bg-[#FFF8E1]"
        >
          Copy Plain Text
        </button>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
}
