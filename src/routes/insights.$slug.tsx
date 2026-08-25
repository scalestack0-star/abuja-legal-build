import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InsightCard } from "@/components/site/InsightCard";
import { CTABanner } from "@/components/site/CTABanner";
import { disclaimer, firm, insights } from "@/lib/site-data";

export const Route = createFileRoute("/insights/$slug")({
  loader: ({ params }) => {
    const article = insights.find((i) => i.slug === params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Article not found" }, { name: "robots", content: "noindex" }],
      };
    }
    const { article } = loaderData;
    return {
      meta: [
        { title: `${article.seoTitle} | R. S. KINYA & CO.` },
        { name: "description", content: article.metaDescription },
        { property: "og:title", content: article.seoTitle },
        { property: "og:description", content: article.metaDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/insights/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/insights/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            datePublished: article.date,
            articleSection: article.category,
            publisher: { "@type": "Organization", name: firm.name },
          }),
        },
      ],
    };
  },
  component: InsightDetail,
  notFoundComponent: InsightNotFound,
});

function InsightNotFound() {
  return (
    <div className="container-page section-y text-center">
      <h1 className="text-3xl text-navy">Article not found</h1>
      <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground">
        This article is unavailable. Browse the firm's other insights instead.
      </p>
      <Button asChild variant="navy" size="xl" className="mt-8">
        <Link to="/insights">All Insights</Link>
      </Button>
    </div>
  );
}

function InsightDetail() {
  const { article } = Route.useLoaderData();
  const related = insights.filter((i) => i.slug !== article.slug).slice(0, 3);

  return (
    <>
      <section className="surface-navy">
        <div className="container-page py-16 md:py-20">
          <nav aria-label="Breadcrumb" className="mb-8">
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 text-xs tracking-wide text-navy-foreground/60 transition-colors hover:text-gold"
            >
              <ArrowLeft className="size-3.5" aria-hidden="true" />
              All Insights
            </Link>
          </nav>
          <div className="max-w-3xl fade-up">
            <p className="eyebrow text-gold">
              <span className="h-px w-6 bg-gold" aria-hidden="true" />
              {article.category}
            </p>
            <h1 className="mt-5 text-[1.875rem] leading-[1.15] text-navy-foreground sm:text-[2.5rem]">
              {article.title}
            </h1>
            <p className="mt-6 text-sm text-navy-foreground/60">
              <time dateTime={article.date}>{article.displayDate}</time> · {article.author}
            </p>
          </div>
        </div>
      </section>

      <article className="bg-background">
        <div className="container-page section-y">
          <img
            src={article.image}
            alt={article.imageAlt}
            loading="lazy"
            width={1200}
            height={800}
            className="w-full object-cover"
          />
          <div className="mx-auto mt-12 max-w-2xl">
            <p className="text-lg leading-relaxed text-charcoal/85">{article.excerpt}</p>
            {article.content.map((section) => (
              <section key={section.heading} className="mt-10">
                <h2 className="text-2xl leading-snug text-navy">{section.heading}</h2>
                {section.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="mt-4 text-[0.9375rem] leading-relaxed text-muted-foreground sm:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
            <p className="mt-12 border-t border-border pt-8 text-xs leading-relaxed text-muted-foreground">
              {disclaimer}
            </p>
          </div>
        </div>
      </article>

      <section aria-labelledby="more-insights" className="bg-ivory">
        <div className="container-page section-y">
          <h2 id="more-insights" className="text-2xl text-navy">
            More Insights
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <InsightCard key={item.slug} insight={item} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Discuss Your Legal Matter With the Firm"
        description="If this article touches on something you are dealing with, contact R. S. KINYA & CO. to arrange a consultation."
      />
    </>
  );
}
