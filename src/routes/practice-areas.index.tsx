import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { PracticeAreaIcon } from "@/components/site/PracticeAreaIcon";
import { CTABanner } from "@/components/site/CTABanner";
import { practiceAreas } from "@/lib/site-data";

const title = "Practice Areas | Abuja Law Firm | R. S. KINYA & CO.";
const description =
  "Practice areas of R. S. KINYA & CO., Abuja — corporate and commercial law, litigation, property and real estate, family law, employment, debt recovery and contracts.";

export const Route = createFileRoute("/practice-areas/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/practice-areas" },
    ],
    links: [{ rel: "canonical", href: "/practice-areas" }],
  }),
  component: PracticeAreasPage,
});

function PracticeAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Practice Areas"
        title="Legal Services Across Civil and Commercial Matters"
        description="The firm advises and represents clients in the areas set out below. Where a matter falls outside these areas, the firm will say so and, where possible, point you in the right direction."
      />

      <section aria-label="List of practice areas" className="bg-background">
        <div className="container-page section-y">
          <div className="space-y-px bg-border">
            {practiceAreas.map((area, index) => (
              <article
                key={area.slug}
                className="group grid gap-6 bg-background p-7 transition-colors hover:bg-ivory lg:grid-cols-[auto_1fr_auto] lg:items-start lg:gap-10 lg:p-10"
              >
                <div className="flex items-center gap-4">
                  <PracticeAreaIcon name={area.icon} className="size-9 text-gold" />
                  <span className="font-serif text-sm text-muted-foreground lg:hidden">
                    0{index + 1}
                  </span>
                </div>
                <div>
                  <h2 className="text-2xl leading-snug text-navy">
                    <Link
                      to="/practice-areas/$slug"
                      params={{ slug: area.slug }}
                      className="transition-colors hover:text-gold-dark"
                    >
                      {area.title}
                    </Link>
                  </h2>
                  <p className="mt-3 max-w-2xl text-[0.9375rem] leading-relaxed text-muted-foreground">
                    {area.intro}
                  </p>
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {area.services.slice(0, 4).map((service) => (
                      <li
                        key={service}
                        className="flex gap-2.5 text-sm text-charcoal/80"
                      >
                        <span
                          className="mt-2 size-1.5 shrink-0 bg-gold"
                          aria-hidden="true"
                        />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:pt-1">
                  <Button asChild variant="quiet" size="lg">
                    <Link to="/practice-areas/$slug" params={{ slug: area.slug }}>
                      Learn More
                      <ArrowRight aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Not Sure Which Area Your Matter Falls Under?"
        description="Describe your circumstances and the firm will confirm whether it can assist, and how."
        ctaLabel="Book a Consultation"
      />
    </>
  );
}
