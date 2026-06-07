import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Home, LineChart, RefreshCcw } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { blogCategories, mortgageProgramPages } from "@/lib/seo-content";

export const metadata: Metadata = {
  title: "Mortgage Learning Center",
  description: "Mortgage education, home buying tips, real estate investing resources, and refinance strategy guides from Source One Home Loans.",
};

export default function LearningCenterPage() {
  return (
    <>
      <PageHero
        eyebrow="Mortgage Learning Center"
        title="Mortgage education built for Texas borrowers."
        description="Explore mortgage guides, blog resources, real estate investor education, and self-employed borrower strategies."
      />
      <section className="section-space bg-white">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-sm bg-navy p-8 text-white md:p-10">
            <BookOpen className="h-10 w-10 text-gold" />
            <h2 className="mt-6 text-4xl font-semibold">Start with the right question.</h2>
            <p className="mt-5 text-sm leading-7 text-white/70">
              Mortgage decisions are easier when borrowers understand options before pressure enters the process. The Learning Center brings together practical Texas mortgage education, loan program guides, and borrower planning resources.
            </p>
            <Link href="/learning-center/blog" className="button-gold mt-8">
              Visit the Blog <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {blogCategories.map((category) => (
              <Link key={category} href="/learning-center/blog" className="rounded-sm border border-navy/10 bg-light-gray p-6 transition hover:border-gold">
                <h3 className="font-semibold text-navy">{category}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">Browse completed educational articles in this category.</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section-space bg-light-gray">
        <div className="container-shell">
          <p className="eyebrow text-gold">Featured Guides</p>
          <h2 className="mt-4 text-4xl font-semibold text-navy">Mortgage Programs</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {mortgageProgramPages.slice(0, 6).map((page) => (
              <Link key={page.slug} href={`/mortgage-programs/${page.slug}`} className="rounded-sm bg-white p-6 transition hover:-translate-y-1">
                <h3 className="text-xl font-semibold text-navy">{page.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{page.metaDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section-space bg-white">
        <div className="container-shell grid gap-5 md:grid-cols-3">
          {[
            ["Home Buying Tips", "Prepare for pre-qualification, offers, documentation, and closing.", Home],
            ["Real Estate Investing", "Explore rental property, DSCR, and investor loan strategy.", LineChart],
            ["Refinancing", "Review payment, term, equity, and portfolio goals.", RefreshCcw],
          ].map(([title, text, Icon]) => (
            <div key={title as string} className="rounded-sm border border-navy/10 p-7">
              <Icon className="h-7 w-7 text-gold" />
              <h3 className="mt-5 text-xl font-semibold text-navy">{title as string}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{text as string}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
