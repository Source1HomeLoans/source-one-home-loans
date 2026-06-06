import { PageHero } from "@/components/page-hero";

type LegalSection = {
  title: string;
  content: string[];
};

export function LegalPage({ title, description, sections }: { title: string; description: string; sections: LegalSection[] }) {
  return (
    <>
      <PageHero eyebrow="Legal & Compliance" title={title} description={description} />
      <section className="section-space bg-white">
        <div className="container-shell max-w-4xl">
          <p className="mb-10 text-sm text-slate-500">Last updated: June 2, 2026</p>
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
        </div>
      </section>
    </>
  );
}
