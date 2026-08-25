import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function CTABanner({
  eyebrow = "Consultation",
  title,
  description,
  ctaLabel = "Book a Consultation",
}: {
  eyebrow?: string;
  title: string;
  description: string;
  ctaLabel?: string;
}) {
  return (
    <section className="surface-navy" aria-labelledby="cta-banner-heading">
      <div className="container-page section-y">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center text-gold">
            <span className="h-px w-6 bg-gold" aria-hidden="true" />
            {eyebrow}
          </p>
          <h2
            id="cta-banner-heading"
            className="mt-5 text-[1.75rem] leading-[1.2] text-navy-foreground sm:text-4xl"
          >
            {title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-navy-foreground/75">
            {description}
          </p>
          <div className="mt-9">
            <Button asChild variant="gold" size="xl">
              <Link to="/contact">{ctaLabel}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
