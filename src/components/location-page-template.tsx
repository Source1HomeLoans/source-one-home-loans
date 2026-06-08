import Link from "next/link";
import { MapPin } from "lucide-react";
import { ContactCta } from "@/components/contact-cta";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { company } from "@/lib/site-data";
import type { LocationPage } from "@/lib/seo-content";
import { getFaqSchema, organizationId } from "@/lib/structured-data";

export function LocationPageTemplate({ page }: { page: LocationPage }) {
  const localSchema = {
    "@context": "https://schema.org",
    "@type": "MortgageBroker",
    "@id": `${company.siteUrl}/locations/${page.slug}#mortgage-broker`,
    name: company.name,
    url: `${company.siteUrl}/locations/${page.slug}`,
    telephone: company.phoneDisplay,
    email: company.email,
    parentOrganization: {
      "@id": organizationId,
    },
    areaServed: {
      "@type": "City",
      name: page.city,
      addressRegion: "TX",
    },
  };

  return (
    <>
      <JsonLd data={localSchema} />
      <JsonLd data={getFaqSchema(page.faqs)} />
      <PageHero eyebrow="Texas Mortgage Broker" title={page.title} description={page.metaDescription} />
      <section className="section-space bg-white">
        <div className="container-shell grid gap-12 lg:grid-cols-[1fr_0.36fr]">
          <article className="prose-content">
            <p className="text-lg leading-8 text-slate-700">{page.intro}</p>
            <h2>Mortgage Guidance for {page.city} Borrowers</h2>
            <p>
              Borrowers in {page.city} need more than a rate quote. They need a mortgage conversation that accounts for property goals, income documentation, purchase timeline, refinance purpose, and long-term financial plans. Source One Home Loans works with Texas homebuyers, homeowners, self-employed borrowers, and real estate investors to compare mortgage paths and understand what documentation may be needed.
            </p>
            <p>
              Local markets move differently across Texas. A borrower purchasing in {page.city} may be comparing payment comfort, down payment strategy, property taxes, insurance, and commute needs. A real estate investor may be focused on rental income, DSCR concepts, cash flow, and portfolio growth. A business owner may need a bank statement, P&L, or Non-QM review. The right first step is a clear consultation.
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              {page.marketNotes.map((note) => (
                <div key={note} className="rounded-sm border border-navy/10 bg-light-gray p-5">
                  <MapPin className="h-5 w-5 text-gold" />
                  <p className="mt-3 text-sm leading-7 text-slate-700">{note}</p>
                </div>
              ))}
            </div>
            <h2>Loan Options in {page.city}</h2>
            <p>
              Source One Home Loans can help review conventional, FHA, VA, jumbo, refinance, self-employed, Non-QM, and real estate investor loan options. Program availability, rates, and terms are subject to qualification and underwriting approval. The value of working with a mortgage professional is not just finding a program name; it is understanding which path may fit the borrower&apos;s full scenario.
            </p>
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
            <p className="eyebrow text-gold">Serving {page.city}</p>
            <h2 className="mt-4 text-3xl font-semibold">Schedule a Free Mortgage Consultation</h2>
            <p className="mt-4 text-sm leading-7 text-white/70">
              Discuss your loan goals with Source One Home Loans.
            </p>
            <div className="mt-7 grid gap-3">
              <Link href="/contact#lead-form" className="button-gold" data-analytics-event="get_prequalified_click">
                Get Pre-Qualified
              </Link>
              <Link href="/loan-programs" className="button-outline">
                Explore Your Loan Options
              </Link>
            </div>
          </aside>
        </div>
      </section>
      <ContactCta />
    </>
  );
}
