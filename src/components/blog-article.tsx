import { ContactCta } from "@/components/contact-cta";
import { PageHero } from "@/components/page-hero";
import type { blogPosts } from "@/lib/seo-content";

type BlogPost = (typeof blogPosts)[number];

export function BlogArticle({ post }: { post: BlogPost }) {
  return (
    <>
      <PageHero eyebrow={post.category} title={post.title} description={post.excerpt} />
      <section className="section-space bg-white">
        <article className="container-shell prose-content max-w-4xl">
          <p>
            This article is part of the Source One Home Loans Learning Center, an SEO-ready publishing system prepared for future CMS and admin dashboard integration. It gives borrowers a practical overview while leaving room for deeper market commentary, rate updates, and program-specific examples as the content library grows.
          </p>
          <h2>What Borrowers Should Know</h2>
          <p>
            Mortgage decisions are shaped by income, credit, assets, property type, occupancy, loan purpose, market conditions, and timeline. A good mortgage conversation starts by organizing goals, then reviewing documentation and program options in a way that is specific to the borrower. Source One Home Loans focuses on clear guidance, responsive communication, and loan strategies tailored to homebuyers, homeowners, real estate investors, and self-employed borrowers.
          </p>
          <h2>Next Steps</h2>
          <p>
            Borrowers can start by scheduling a free mortgage consultation or requesting pre-qualification. Loan approvals are subject to credit approval, underwriting guidelines, property approval, and program requirements. Not all applicants will qualify, and program availability may change without notice.
          </p>
        </article>
      </section>
      <ContactCta />
    </>
  );
}
