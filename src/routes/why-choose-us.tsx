import { createFileRoute } from "@tanstack/react-router";
import abujaArchitecture from "@/assets/abuja-architecture.jpg";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CTABanner } from "@/components/site/CTABanner";
import { GoogleRatingBadge } from "@/components/site/GoogleRatingBadge";
import { Button } from "@/components/ui/button";
import { firm, principles, processSteps } from "@/lib/site-data";

const title = "Why Choose Our Abuja Law Firm | R. S. KINYA & CO.";
const description =
  "Why clients instruct R. S. KINYA & CO. in Abuja — clarity of advice, professionalism, strategic thinking and a client-focused approach to every legal matter.";

export const Route = createFileRoute("/why-choose-us")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/why-choose-us" },
    ],
    links: [{ rel: "canonical", href: "/why-choose-us" }],
  }),
  component: WhyChooseUsPage,
});

function WhyChooseUsPage() {
  const detail = [
    "Legal issues are explained in plain terms, with the risks stated as clearly as the opportunities.",
    "Instructions are handled with diligence and discretion, and client information is treated as confidential.",
    "The wider commercial and personal implications of a matter are considered, not only the immediate legal question.",
    "Advice is shaped around what the client is actually trying to achieve.",
  ];

  return (
    <>
      <PageHero
        eyebrow="Why Choose Us"
        title="A Practical Approach to Legal Service"
        description="R. S. KINYA & CO. works to four principles that shape how every matter is handled, from the first consultation onwards."
      />

      <section aria-labelledby="principles-heading" className="bg-background">
        <div className="container-page section-y">
          <SectionHeader eyebrow="Our Principles" title="Four Commitments to Every Client" />
          <div className="mt-12 space-y-px bg-border">
            {principles.map((principle, index) => (
              <div
                key={principle.title}
                className="grid gap-4 bg-background p-7 lg:grid-cols-[auto_1fr_1.4fr] lg:items-baseline lg:gap-10 lg:p-9"
              >
                <p className="font-serif text-2xl text-gold">0{index + 1}</p>
                <h2 className="text-xl text-navy">{principle.title}</h2>
                <div>
                  <p className="text-[0.9375rem] leading-relaxed text-charcoal/80">
                    {principle.description}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {detail[index]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="local-heading" className="surface-navy">
        <div className="container-page section-y">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div>
              <p className="eyebrow text-gold">
                <span className="h-px w-6 bg-gold" aria-hidden="true" />
                Abuja Practice
              </p>
              <h2
                id="local-heading"
                className="mt-5 text-[1.75rem] leading-tight text-navy-foreground sm:text-4xl"
              >
                Based in Wuse, Serving Clients Across Nigeria
              </h2>
              <p className="mt-6 text-base leading-relaxed text-navy-foreground/75">
                The firm's office in Wuse places it within reach of clients,
                counterparties and institutions across the Federal Capital
                Territory. Instructions are also accepted from clients elsewhere in
                Nigeria and from Nigerians abroad with matters at home.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <GoogleRatingBadge />
                <Button asChild variant="onDark" size="xl">
                  <a href={firm.googleProfileUrl} target="_blank" rel="noopener noreferrer">
                    View Our Google Reviews
                  </a>
                </Button>
              </div>
            </div>
            <img
              src={abujaArchitecture}
              alt="Contemporary corporate architecture in Abuja at dusk"
              loading="lazy"
              width={1600}
              height={1008}
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section aria-labelledby="process-heading" className="bg-ivory">
        <div className="container-page section-y">
          <SectionHeader eyebrow="Our Process" title="How We Can Help" />
          <ol className="mt-12 grid gap-px bg-border md:grid-cols-3">
            {processSteps.map((step) => (
              <li key={step.number} className="bg-ivory p-7 lg:p-9">
                <p className="font-serif text-3xl text-gold">{step.number}</p>
                <h3 className="mt-5 text-xl leading-snug text-navy">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CTABanner
        title="Arrange a Consultation"
        description="Tell the firm about your matter and consider the appropriate legal options together."
      />
    </>
  );
}
