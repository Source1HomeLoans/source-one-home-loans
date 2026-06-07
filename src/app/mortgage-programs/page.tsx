import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { mortgageProgramPages } from "@/lib/seo-content";

export const metadata: Metadata = {
  title: "Mortgage Programs",
  description: "Explore Texas mortgage program guides for homebuyers, real estate investors, self-employed borrowers, and homeowners.",
};

export default function MortgageProgramsIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Mortgage Learning Center"
        title="Texas Mortgage Programs"
        description="SEO-ready guides for Texas borrowers comparing home purchase, refinance, self-employed, Non-QM, and real estate investor loan options."
      />
      <section className="section-space bg-light-gray">
        <div className="container-shell grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {mortgageProgramPages.map((page) => (
            <Link key={page.slug} href={`/mortgage-programs/${page.slug}`} className="group rounded-sm border border-navy/10 bg-white p-7 transition hover:-translate-y-1 hover:border-gold">
              <p className="eyebrow text-gold">{page.eyebrow}</p>
              <h2 className="mt-4 text-2xl font-semibold text-navy">{page.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{page.metaDescription}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-navy group-hover:text-gold">
                Read guide <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
