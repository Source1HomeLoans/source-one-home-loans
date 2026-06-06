type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy pb-20 pt-36 text-white md:pb-24 md:pt-44">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(212,175,55,0.14),transparent_36%)]" />
      <div className="container-shell relative">
        <p className="eyebrow text-gold">{eyebrow}</p>
        <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 md:text-lg">{description}</p>
      </div>
    </section>
  );
}
