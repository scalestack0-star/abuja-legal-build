import { Quote } from "lucide-react";

export function TestimonialCard({
  quote,
  author,
  context,
}: {
  quote: string;
  author: string;
  context: string;
}) {
  return (
    <figure className="flex h-full flex-col border border-dashed border-navy/20 bg-ivory p-7">
      <Quote className="size-6 text-gold" strokeWidth={1.25} aria-hidden="true" />
      <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-charcoal/80 italic">
        {quote}
      </blockquote>
      <figcaption className="mt-6 border-t border-navy/10 pt-5 text-sm">
        <span className="block font-medium text-navy">{author}</span>
        <span className="mt-1 block text-xs text-muted-foreground">{context}</span>
      </figcaption>
    </figure>
  );
}
