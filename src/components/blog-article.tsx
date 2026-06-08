import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { blogPosts, type BlogPost } from "@/lib/blogPosts";
import { getProgramContactHref } from "@/lib/program-contact-links";
import { mortgageProgramPages } from "@/lib/seo-content";

export function BlogArticle({ post }: { post: BlogPost }) {
  const relatedPrograms = post.relatedProgramSlugs
    .map((slug) => mortgageProgramPages.find((program) => program.slug === slug))
    .filter((program): program is (typeof mortgageProgramPages)[number] => Boolean(program));

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faq.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishDate,
    dateModified: post.publishDate,
    author: {
      "@type": "Organization",
      name: "Source One Home Loans",
    },
    publisher: {
      "@type": "Organization",
      name: "Source One Home Loans",
    },
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />
      <PageHero eyebrow={post.category} title={post.title} description={post.excerpt} />
      <section className="section-space bg-white">
        <article className="container-shell prose-content max-w-4xl">
          <div className="mb-8 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
            <span>{post.publishDate}</span>
            <span>{post.readTime}</span>
            <span>{post.category}</span>
          </div>
          <h2>Key Takeaways</h2>
          <div className="grid gap-4">
            {post.takeaways.map((takeaway) => (
              <div key={takeaway} className="flex gap-3 rounded-sm border border-navy/10 bg-light-gray p-4">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-gold" />
                <p className="m-0 text-sm leading-7 text-slate-700">{takeaway}</p>
              </div>
            ))}
          </div>
          {post.content.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.subheadings?.map((subheading) => (
                <div key={subheading.heading}>
                  <h3 className="mt-8 text-2xl font-semibold text-navy">{subheading.heading}</h3>
                  {subheading.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              ))}
            </section>
          ))}
          <h2>Related Mortgage Programs</h2>
          <div className="grid gap-3 md:grid-cols-2">
            {relatedPrograms.map((program) => (
              <Link key={program.slug} href={getProgramContactHref(program.slug)} className="rounded-sm border border-navy/10 p-4 transition hover:border-gold">
                <span className="text-sm font-semibold text-navy">{program.title}</span>
                <span className="mt-2 block text-xs leading-6 text-slate-600">{program.metaDescription}</span>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-[0.14em] text-gold">
                  Explore program <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
          <h2>Frequently Asked Questions</h2>
          <div className="grid gap-4">
            {post.faq.map((faq) => (
              <details key={faq.question} className="rounded-sm border border-navy/10 bg-white p-5">
                <summary className="cursor-pointer font-semibold text-navy">{faq.question}</summary>
                <p className="mt-3 text-sm leading-7 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
          <div className="mt-12 rounded-sm bg-navy p-7 text-white">
            <h2 className="m-0 text-3xl font-semibold text-white">Ready to explore your options?</h2>
            <p className="mt-4 text-sm leading-7 text-white/70">
              Talk with Source One Home Loans about your goals, documentation, and next steps.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact#lead-form" className="button-gold" data-analytics-event="get_prequalified_click">
                Get Pre-Qualified
              </Link>
              <Link href="/contact#lead-form" className="button-outline" data-analytics-event="schedule_consultation_click">
                Schedule a Consultation
              </Link>
            </div>
          </div>
          <h2>Related Articles</h2>
          <RelatedArticles currentSlug={post.slug} />
        </article>
      </section>
    </>
  );
}

function RelatedArticles({ currentSlug }: { currentSlug: string }) {
  const current = blogPosts.find((post) => post.slug === currentSlug);
  const relatedSlugs = current?.relatedPosts ?? [];
  const related = relatedSlugs
    .map((slug) => blogPosts.find((post) => post.slug === slug))
    .filter((post): post is BlogPost => Boolean(post));

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {related.map((post) => (
        <Link key={post.slug} href={`/blog/${post.slug}`} className="rounded-sm border border-navy/10 bg-light-gray p-5 transition hover:border-gold">
          <p className="eyebrow text-gold">{post.category}</p>
          <h3 className="mt-3 text-lg font-semibold text-navy">{post.title}</h3>
        </Link>
      ))}
    </div>
  );
}
