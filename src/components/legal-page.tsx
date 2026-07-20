import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { company } from "@/lib/site-data";

type LegalSection = {
  title: string;
  content: string[];
};

export function LegalPage({
  title,
  description,
  sections,
  lastUpdated = "July 19, 2026",
}: {
  title: string;
  description: string;
  sections: LegalSection[];
  lastUpdated?: string;
}) {
  return (
    <>
      <PageHero eyebrow="Legal & Compliance" title={title} description={description} />
      <section className="section-space bg-white">
        <div className="container-shell max-w-4xl">
          <p className="mb-10 text-sm text-slate-500">Last updated: {lastUpdated}</p>
          <div className="grid gap-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-2xl font-semibold text-navy">{section.title}</h2>
                <div className="mt-4 grid gap-4 text-sm leading-7 text-slate-600">
                  {section.content.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-2xl border border-slate-200 bg-light-gray p-6">
            <h2 className="text-xl font-semibold text-navy">Contact Source One Home Loans</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Questions about this page may be directed to Source One Home Loans at{" "}
              <a className="font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4" href={company.phoneHref}>
                {company.phoneDisplay}
              </a>{" "}
              or{" "}
              <a className="font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4" href={company.supportEmailHref}>
                {company.supportEmail}
              </a>
              .
            </p>
            <Link href="/" className="mt-5 inline-flex text-sm font-semibold text-gold transition hover:text-navy">
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
