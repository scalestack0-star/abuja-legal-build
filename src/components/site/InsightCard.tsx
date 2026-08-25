import { Link } from "@tanstack/react-router";
import type { Insight } from "@/lib/site-data";

export function InsightCard({ insight }: { insight: Insight }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden border border-border bg-card transition-all duration-300 hover:border-gold/60 hover:shadow-card">
      <Link
        to="/insights/$slug"
        params={{ slug: insight.slug }}
        className="block overflow-hidden"
        tabIndex={-1}
        aria-hidden="true"
      >
        <img
          src={insight.image}
          alt={insight.imageAlt}
          loading="lazy"
          width={1200}
          height={800}
          className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-[0.6875rem] font-semibold tracking-[0.16em] text-gold-dark uppercase">
          {insight.category}
        </p>
        <h3 className="mt-3 text-lg leading-snug text-navy">
          <Link
            to="/insights/$slug"
            params={{ slug: insight.slug }}
            className="transition-colors hover:text-gold-dark"
          >
            {insight.title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {insight.excerpt}
        </p>
        <p className="mt-5 text-xs text-muted-foreground">
          <time dateTime={insight.date}>{insight.displayDate}</time> · {insight.author}
        </p>
      </div>
    </article>
  );
}
