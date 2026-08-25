import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PracticeAreaIcon } from "./PracticeAreaIcon";
import type { PracticeArea } from "@/lib/site-data";

export function PracticeAreaCard({ area }: { area: PracticeArea }) {
  return (
    <article className="group relative flex h-full flex-col border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/60 hover:shadow-card lg:p-8">
      <span
        className="absolute inset-x-0 top-0 h-px scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100"
        aria-hidden="true"
      />
      <PracticeAreaIcon name={area.icon} className="size-8 text-gold" />
      <h3 className="mt-6 text-xl leading-snug text-navy">{area.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
        {area.summary}
      </p>
      <Link
        to="/practice-areas/$slug"
        params={{ slug: area.slug }}
        className="mt-6 inline-flex items-center gap-2 text-[0.8125rem] font-semibold tracking-wide text-navy transition-colors group-hover:text-gold-dark"
      >
        Learn More
        <ArrowRight
          className="size-4 transition-transform group-hover:translate-x-1"
          aria-hidden="true"
        />
        <span className="sr-only">about {area.title}</span>
      </Link>
    </article>
  );
}
