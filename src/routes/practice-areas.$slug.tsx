import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PracticeAreaIcon } from "@/components/site/PracticeAreaIcon";
import { CTABanner } from "@/components/site/CTABanner";
import { firm, practiceAreas } from "@/lib/site-data";

export const Route = createFileRoute("/practice-areas/$slug")({
  loader: ({ params }) => {
    const area = practiceAreas.find((a) => a.slug === params.slug);
    if (!area) throw notFound();
    return { area };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Practice area not found" }, { name: "robots", content: "noindex" }],
      };
    }
    const { area } = loaderData;
    return {
      meta: [
        { title: area.seoTitle },
        { name: "description", content: area.metaDescription },
        { property: "og:title", content: area.seoTitle },
        { property: "og:description", content: area.metaDescription },
        { property: "og:type", content: "website" },
        { property: "og:url", content: `/practice-areas/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/practice-areas/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: `${area.title} — ${firm.name}`,
            description: area.metaDescription,
            areaServed: ["Abuja", "Nigeria"],
            address: {
              "@type": "PostalAddress",
              streetAddress: firm.address.street,
              addressLocality: "Abuja",
              addressRegion: "Federal Capital Territory",
              postalCode: firm.address.postalCode,
              addressCountry: "NG",
            },
          }),
        },
      ],
    };
  },
  component: PracticeAreaDetail,
  notFoundComponent: PracticeAreaNotFound,
});

function PracticeAreaNotFound() {
  return (
    <div className="container-page section-y text-center">
      <h1 className="text-3xl text-navy">Practice area not found</h1>
      <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground">
        The practice area you are looking for is not listed. View all areas of
        practice instead.
      </p>
      <Button asChild variant="navy" size="xl" className="mt-8">
        <Link to="/practice-areas">All Practice Areas</Link>
      </Button>
    </div>
  );
}

function PracticeAreaDetail() {
  const { area } = Route.useLoaderData();
  const related = practiceAreas.filter((a) => a.slug !== area.slug).slice(0, 3);

  return (
    <>
      <section className="surface-navy">
        <div className="container-page py-16 md:py-24">
          <nav aria-label="Breadcrumb" className="mb-8">
            <Link
              to="/practice-areas"
              className="inline-flex items-center gap-2 text-xs tracking-wide text-navy-foreground/60 transition-colors hover:text-gold"
            >
              <ArrowLeft className="size-3.5" aria-hidden="true" />
              All Practice Areas
            </Link>
          </nav>
          <div className="max-w-3xl fade-up">
            <PracticeAreaIcon name={area.icon} className="size-10 text-gold" />
            <h1 className="mt-6 text-[2rem] leading-[1.12] text-navy-foreground sm:text-[2.75rem]">
              {area.title}
            </h1>
            <p className="mt-6 text-base leading-relaxed text-navy-foreground/75 sm:text-[1.0625rem]">
              {area.intro}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="container-page section-y">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-12">
            <div>
              <h2 className="text-2xl text-navy">Services Covered</h2>
              <span className="gold-rule mt-5" aria-hidden="true" />
              <ul className="mt-6 space-y-3">
                {area.services.map((service) => (
                  <li key={service} className="flex gap-3 text-sm leading-relaxed text-charcoal/80">
                    <Check className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl text-navy">Who We Assist</h2>
              <span className="gold-rule mt-5" aria-hidden="true" />
              <ul className="mt-6 space-y-3">
                {area.whoWeAssist.map((who) => (
                  <li key={who} className="flex gap-3 text-sm leading-relaxed text-charcoal/80">
                    <span className="mt-2 size-1.5 shrink-0 bg-gold" aria-hidden="true" />
                    {who}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl text-navy">Common Legal Considerations</h2>
              <span className="gold-rule mt-5" aria-hidden="true" />
              <ul className="mt-6 space-y-3">
                {area.considerations.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-charcoal/80">
                    <span className="mt-2 size-1.5 shrink-0 bg-gold" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="related-heading" className="bg-ivory">
        <div className="container-page section-y">
          <h2 id="related-heading" className="text-2xl text-navy">
            Related Practice Areas
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                to="/practice-areas/$slug"
                params={{ slug: item.slug }}
                className="group border border-border bg-card p-6 transition-colors hover:border-gold/60"
              >
                <PracticeAreaIcon name={item.icon} className="size-7 text-gold" />
                <h3 className="mt-5 text-lg text-navy transition-colors group-hover:text-gold-dark">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.summary}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title={`Discuss a ${area.shortTitle} Matter`}
        description="Arrange a consultation to review your circumstances and consider the options available to you."
      />
    </>
  );
}
