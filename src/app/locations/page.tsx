import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { locationPages } from "@/lib/seo-content";

export const metadata: Metadata = {
  title: "Texas Mortgage Broker Service Areas",
  description: "Explore Texas mortgage broker service area pages for Dallas, Fort Worth, Houston, Austin, San Antonio, Plano, Frisco, McKinney, and Arlington.",
};

export default function LocationsIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Local Mortgage Guidance"
        title="Texas Mortgage Broker Service Areas"
        description="Source One Home Loans serves borrowers and real estate investors across Texas with local market guidance and responsive mortgage support."
      />
      <section className="section-space bg-white">
        <div className="container-shell grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {locationPages.map((page) => (
            <Link key={page.slug} href={`/locations/${page.slug}`} className="group rounded-sm border border-navy/10 bg-light-gray p-7 transition hover:-translate-y-1 hover:border-gold">
              <p className="eyebrow text-gold">Texas</p>
              <h2 className="mt-4 text-2xl font-semibold text-navy">{page.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{page.metaDescription}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-navy group-hover:text-gold">
                View market page <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
