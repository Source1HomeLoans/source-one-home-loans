import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ContactCta } from "@/components/contact-cta";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { getProgramContactHref } from "@/lib/program-contact-links";
import { company } from "@/lib/site-data";
import type { SeoPage } from "@/lib/seo-content";
import { getFaqSchema } from "@/lib/structured-data";

export function SeoProgramPage({ page }: { page: SeoPage }) {
  return (
    <>
      <JsonLd data={getFaqSchema(page.faqs)} />
      <PageHero eyebrow={page.eyebrow} title={page.title} description={page.metaDescription} />
      <section className="section-space bg-white">
        <div className="container-shell grid gap-12 lg:grid-cols-[1fr_0.36fr]">
          <article className="prose-content">
            <p className="text-lg leading-8 text-slate-700">{page.intro}</p>
            <h2>{page.primaryTopic}</h2>
            <p>
              Mortgage planning in Texas works best when the conversation starts with the borrower&apos;s actual goals rather than a generic product list. Source One Home Loans reviews the purpose of the loan, property type, income documentation, available assets, credit profile, timing, and long-term strategy before discussing possible program paths. That process matters for {page.audience} because small details can change which documentation is needed, which options are worth comparing, and how quickly a borrower can move from interest to action.
            </p>
            <p>
              The goal is to make the mortgage process feel clear, practical, and organized. Instead of asking borrowers to guess which program fits, Source One Home Loans helps compare available options, explains the likely documentation request, and outlines what may happen during underwriting. Loan approvals are subject to credit approval, property approval, underwriting guidelines, and program requirements, but a thoughtful pre-qualification conversation can help identify realistic next steps.
            </p>
            <h2>How Source One Home Loans Helps</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {page.benefits.map((benefit) => (
                <div key={benefit} className="rounded-sm border border-navy/10 bg-light-gray p-5">
                  <CheckCircle2 className="h-5 w-5 text-gold" />
                  <p className="mt-3 text-sm font-semibold leading-6 text-navy">{benefit}</p>
                </div>
              ))}
            </div>
            <h2>Local Texas Mortgage Strategy</h2>
            <p>
              Texas borrowers and investors face a wide range of property markets, from major metro areas to fast-growing suburbs and rental corridors. A strong mortgage strategy should account for monthly payment comfort, cash reserves, property use, documentation, and exit strategy. For real estate investors, that may include rental income, DSCR concepts, lease expectations, and refinance timing. For homeowners, it may include down payment, loan term, rate structure, and future plans.
            </p>
            <p>
              Source One Home Loans is built around responsive communication and clear guidance. Borrowers can start with a free consultation, discuss the loan goal, and then decide whether to move toward pre-qualification. The team keeps compliance, documentation, and program fit in view so the borrower understands both the opportunity and the requirements.
            </p>
            <h2>Related Mortgage Programs</h2>
            <div className="grid gap-3 md:grid-cols-3">
              {page.relatedProgramSlugs.map((slug) => (
                <Link key={slug} href={getProgramContactHref(slug)} className="rounded-sm border border-navy/10 p-4 text-sm font-semibold text-navy transition hover:border-gold hover:text-gold">
                  View related program <ArrowRight className="ml-1 inline h-4 w-4" />
                </Link>
              ))}
            </div>
            <h2>Frequently Asked Questions</h2>
            <div className="grid gap-4">
              {page.faqs.map((faq) => (
                <details key={faq.question} className="rounded-sm border border-navy/10 bg-white p-5">
                  <summary className="cursor-pointer font-semibold text-navy">{faq.question}</summary>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </article>
          <aside className="h-fit rounded-sm bg-navy p-7 text-white">
            <p className="eyebrow text-gold">Get Started</p>
            <h2 className="mt-4 text-3xl font-semibold">Get Pre-Qualified</h2>
            <p className="mt-4 text-sm leading-7 text-white/70">
              Talk with {company.individualName} about your goals, documentation, and next steps.
            </p>
            <div className="mt-7 grid gap-3">
              <Link href="/contact#lead-form" className="button-gold" data-analytics-event="get_prequalified_click">
                Get Pre-Qualified
              </Link>
              <Link href="/contact#lead-form" className="button-outline" data-analytics-event="schedule_consultation_click">
                Schedule a Free Mortgage Consultation
              </Link>
            </div>
          </aside>
        </div>
      </section>
      <ContactCta />
    </>
  );
}
