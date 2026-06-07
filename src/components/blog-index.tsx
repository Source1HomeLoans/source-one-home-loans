import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { blogCategories, blogPosts } from "@/lib/seo-content";

export function BlogIndex({ basePath = "/blog" }: { basePath?: string }) {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Mortgage insights for Texas borrowers."
        description="An SEO-ready blog system prepared for future CMS/admin publishing."
      />
      <section className="section-space bg-light-gray">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <aside className="rounded-sm bg-white p-7">
            <h2 className="text-2xl font-semibold text-navy">Categories</h2>
            <div className="mt-5 grid gap-3">
              {blogCategories.map((category) => (
                <p key={category} className="rounded-sm bg-light-gray px-4 py-3 text-sm font-semibold text-navy">
                  {category}
                </p>
              ))}
            </div>
          </aside>
          <div className="grid gap-5">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`${basePath}/${post.slug}`} className="group rounded-sm bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl">
                <p className="eyebrow text-gold">{post.category}</p>
                <h2 className="mt-3 text-2xl font-semibold text-navy">{post.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{post.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-navy group-hover:text-gold">
                  Read article <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
