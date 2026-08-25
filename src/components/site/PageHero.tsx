export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="surface-navy">
      <div className="container-page py-16 md:py-24">
        <div className="max-w-3xl fade-up">
          <p className="eyebrow text-gold">
            <span className="h-px w-6 bg-gold" aria-hidden="true" />
            {eyebrow}
          </p>
          <h1 className="mt-5 text-[2rem] leading-[1.12] text-navy-foreground sm:text-[2.75rem] lg:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-navy-foreground/75 sm:text-[1.0625rem]">
              {description}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
