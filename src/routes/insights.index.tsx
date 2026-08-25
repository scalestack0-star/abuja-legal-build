import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { InsightCard } from "@/components/site/InsightCard";
import { CTABanner } from "@/components/site/CTABanner";
import { insights } from "@/lib/site-data";

const title = "Legal Insights & Updates | R. S. KINYA & CO. Abuja";
const description =
  "Legal insights and commentary from R. S. KINYA & CO., Abuja — contracts, property transactions, commercial disputes and starting a business in Nigeria.";

export const Route = createFileRoute("/insights/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/insights" },
    ],
    links: [{ rel: "canonical", href: "/insights" }],
  }),
  component: InsightsPage,
});

function InsightsPage() {
  const featured = insights[0]!;
  const rest = insights.slice(1);

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Legal Insights & Updates"
        description="Commentary on legal questions that frequently arise for clients in Abuja and across Nigeria. General information only — not legal advice."
      />

      <section aria-label="Featured article" className="bg-background">
        <div className="container-page section-y">
          <article className="grid gap-8 border border-border bg-card lg:grid-cols-2 lg:gap-0">
            <img
              src={featured.image}
              alt={featured.imageAlt}
              loading="lazy"
              width={1200}
              height={800}
              className="h-full w-full object-cover"
            />
            <div className="p-7 lg:p-12">
              <p className="text-[0.6875rem] font-semibold tracking-[0.16em] text-gold-dark uppercase">
                Featured · {featured.category}
              </p>
              <h2 className="mt-5 text-2xl leading-snug text-navy sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-5 text-[0.9375rem] leading-relaxed text-muted-foreground">
                {featured.excerpt}
              </p>
              <p className="mt-6 text-xs text-muted-foreground">
                <time dateTime={featured.date}>{featured.displayDate}</time> ·{" "}
                {featured.author}
              </p>
              <a
                href={`/insights/${featured.slug}`}
                className="mt-8 inline-flex text-[0.8125rem] font-semibold tracking-wide text-navy underline decoration-gold decoration-2 underline-offset-4 transition-colors hover:text-gold-dark"
              >
                Read the article
              </a>
            </div>
          </article>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((insight) => (
              <InsightCard key={insight.slug} insight={insight} />
            ))}
          </div>

          <p className="mt-12 max-w-2xl text-xs leading-relaxed text-muted-foreground">
            Articles published here are sample entries demonstrating the firm's
            publishing structure. Each article supports a title, featured image,
            author, publication date, category, SEO title, meta description and
            article content.
          </p>
        </div>
      </section>

      <CTABanner
        eyebrow="Speak With Us"
        title="Have a Question About Your Own Matter?"
        description="General commentary cannot address individual circumstances. Contact the firm to discuss your specific situation."
      />
    </>
  );
}
