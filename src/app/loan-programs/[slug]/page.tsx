import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2, FileText, HelpCircle, XCircle } from "lucide-react";
import { ContactCta } from "@/components/contact-cta";
import { LeadForm } from "@/components/lead-form";
import { PageHero } from "@/components/page-hero";
import { getLoanProgramPageBySlug } from "@/lib/loan-program-pages";
import { company } from "@/lib/site-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getLoanProgramPageBySlug(slug);

  if (!page) {
    return {};
  }

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: `${company.siteUrl}/loan-programs/${page.slug}`,
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `${company.siteUrl}/loan-programs/${page.slug}`,
      siteName: company.name,
      type: "website",
    },
  };
}

export default async function LoanProgramDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getLoanProgramPageBySlug(slug);

  if (!page) {
    notFound();
  }

  return (
    <>
      <PageHero eyebrow="Loan Program" title={page.title} description={page.description} />
      <section className="section-space bg-white">
        <div className="container-shell grid gap-12 lg:grid-cols-[1fr_0.42fr] lg:items-start">
          <article className="grid gap-8">
            <InfoSection
              icon="check"
              title="This may be a good fit if..."
              items={page.goodFit}
            />
            <InfoSection
              icon="x"
              title="Who it may not be ideal for"
              items={page.notIdeal}
            />
            <InfoSection
              icon="file"
              title="Common documentation needed"
              items={page.documentation}
            />
            <div className="rounded-sm bg-light-gray p-6 text-sm leading-7 text-slate-600">
              <p className="font-semibold text-navy">Important disclaimer</p>
              <p className="mt-2">
                Loan approvals are subject to credit approval, underwriting guidelines, property approval, and program requirements. Not all applicants will qualify.
              </p>
            </div>
          </article>

          <aside id="lead-form" className="rounded-sm border border-navy/10 bg-light-gray p-6 md:p-8">
            <p className="eyebrow text-gold">Get Pre-Qualified</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-navy">
              Want to see if this loan program fits your situation?
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Share a few details and Source One Home Loans will follow up about {page.title.toLowerCase()}.
            </p>
            <div className="mt-8">
              <LeadForm
                sourcePage={`/loan-programs/${page.slug}`}
                defaultProgramInterest={page.title}
                fixedProgramInterest
              />
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-navy py-14 text-white">
        <div className="container-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="eyebrow text-gold">Next Step</p>
            <h2 className="mt-3 text-3xl font-semibold">Compare your loan options with clear guidance.</h2>
          </div>
          <Link href="/contact#lead-form" className="button-gold shrink-0">
            Contact Source One <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
      <ContactCta />
    </>
  );
}

function InfoSection({ icon, title, items }: { icon: "check" | "x" | "file"; title: string; items: string[] }) {
  const Icon = icon === "check" ? CheckCircle2 : icon === "x" ? XCircle : FileText;
  const iconClass = icon === "x" ? "text-slate-500" : "text-gold";

  return (
    <section className="rounded-sm border border-navy/10 bg-white p-6 shadow-[0_14px_40px_rgba(13,27,42,0.05)] md:p-8">
      <div className="flex items-start gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-light-gray">
          <Icon className={`h-5 w-5 ${iconClass}`} />
        </span>
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-navy">{title}</h2>
          <ul className="mt-5 grid gap-3">
            {items.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-7 text-slate-600">
                <HelpCircle className="mt-1 h-4 w-4 shrink-0 text-gold" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
