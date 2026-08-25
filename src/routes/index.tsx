import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Star } from "lucide-react";
import heroOffice from "@/assets/hero-office.jpg";
import aboutTeam from "@/assets/about-team.jpg";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/site/SectionHeader";
import { PracticeAreaCard } from "@/components/site/PracticeAreaCard";
import { InsightCard } from "@/components/site/InsightCard";
import { TestimonialCard } from "@/components/site/TestimonialCard";
import { GoogleRatingBadge } from "@/components/site/GoogleRatingBadge";
import { GoogleMapSection } from "@/components/site/GoogleMapSection";
import { ContactForm } from "@/components/site/ContactForm";
import {
  firm,
  insights,
  practiceAreas,
  principles,
  processSteps,
  testimonialPlaceholders,
  trustPoints,
} from "@/lib/site-data";

const title = "Law Firm in Abuja, Nigeria | R. S. KINYA & CO.";
const description =
  "R. S. KINYA & CO. is a law firm in Wuse, Abuja providing legal counsel and representation in corporate, litigation, property, family, employment and contract matters across Nigeria.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          name: firm.name,
          description,
          areaServed: ["Abuja", "Federal Capital Territory", "Nigeria"],
          address: {
            "@type": "PostalAddress",
            streetAddress: firm.address.street,
            addressLocality: "Abuja",
            addressRegion: "Federal Capital Territory",
            postalCode: firm.address.postalCode,
            addressCountry: "NG",
          },
          knowsAbout: practiceAreas.map((a) => a.title),
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-midnight">
        <img
          src={heroOffice}
          alt="Interior of a modern law office at dusk overlooking a city skyline"
          width={1920}
          height={1280}
          className="absolute inset-0 size-full object-cover"
          fetchPriority="high"
        />
        <div className="hero-overlay absolute inset-0" aria-hidden="true" />
        <div className="container-page relative py-24 md:py-32 lg:py-40">
          <div className="max-w-2xl fade-up">
            <p className="eyebrow text-gold">
              <span className="h-px w-6 bg-gold" aria-hidden="true" />
              Abuja · Federal Capital Territory
            </p>
            <h1 className="mt-6 text-[2.25rem] leading-[1.08] text-navy-foreground sm:text-5xl lg:text-[3.5rem]">
              Trusted Legal Counsel.
              <span className="block text-gold">Strategic Representation.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-navy-foreground/80 sm:text-lg">
              R. S. KINYA &amp; CO. provides professional legal counsel and
              representation to individuals, businesses and organizations in Abuja
              and across Nigeria.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button asChild variant="gold" size="xl">
                <Link to="/contact">Book a Consultation</Link>
              </Button>
              <Button asChild variant="onDark" size="xl">
                <Link to="/practice-areas">
                  Explore Our Practice Areas
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section aria-labelledby="trust-heading" className="border-b border-border bg-ivory">
        <div className="container-page py-14 md:py-16">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_2fr] lg:items-center lg:gap-16">
            <div>
              <h2 id="trust-heading" className="font-serif text-2xl text-navy">
                R. S. KINYA <span className="text-gold">&amp;</span> CO.
              </h2>
              <p className="mt-2 text-[0.6875rem] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                {firm.tagline}
              </p>
            </div>
            <dl className="grid gap-8 sm:grid-cols-3 sm:gap-6">
              {trustPoints.map((point) => (
                <div key={point.title} className="border-t border-gold/50 pt-5">
                  <dt className="text-[0.9375rem] font-semibold text-navy">
                    {point.title}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {point.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section aria-labelledby="about-heading" className="bg-background">
        <div className="container-page section-y">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHeader
                eyebrow="About the Firm"
                title="A Law Firm Built Around Sound Legal Counsel"
              />
              <div className="mt-6 space-y-5 text-[0.9375rem] leading-relaxed text-muted-foreground sm:text-base">
                <p>
                  R. S. KINYA &amp; CO. is an Abuja-based law firm concerned with
                  one thing above all: giving clients legal advice they can act on.
                  The firm works with individuals, businesses and organizations that
                  need a clear reading of their position and a practical route
                  forward.
                </p>
                <p>
                  Each matter begins with careful attention to detail — understanding
                  the facts, the documents and the client's objectives before any
                  strategy is proposed. Advice is given in plain language, so that
                  decisions are made with a full understanding of the legal issues
                  involved.
                </p>
                <p>
                  Client relationships are handled with confidentiality and
                  professionalism throughout. Where a matter calls for
                  representation, the firm acts with the same considered, strategic
                  approach it brings to advisory work.
                </p>
              </div>
              <Button asChild variant="quiet" size="xl" className="mt-9">
                <Link to="/about">
                  Learn More About Our Firm
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src={aboutTeam}
                alt="Two legal professionals reviewing documents together in an Abuja law office"
                loading="lazy"
                width={1408}
                height={1600}
                className="w-full object-cover shadow-elegant"
              />
              <span
                className="absolute -bottom-4 -left-4 hidden size-24 border-b-2 border-l-2 border-gold lg:block"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PRACTICE AREAS */}
      <section aria-labelledby="practice-heading" className="bg-ivory">
        <div className="container-page section-y">
          <SectionHeader
            eyebrow="Practice Areas"
            title="Legal Services for Individuals, Businesses and Organizations"
            description="The firm advises and represents clients across the following areas of practice. Each area can be tailored to the requirements of the matter at hand."
          />
          <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {practiceAreas.map((area) => (
              <PracticeAreaCard key={area.slug} area={area} />
            ))}
          </div>
          <div className="mt-12">
            <Button asChild variant="navy" size="xl">
              <Link to="/practice-areas">View All Practice Areas</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FEATURED / DARK SECTION */}
      <section aria-labelledby="stakes-heading" className="surface-navy">
        <div className="container-page section-y">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-20">
            <div>
              <p className="eyebrow text-gold">
                <span className="h-px w-6 bg-gold" aria-hidden="true" />
                Considered Counsel
              </p>
              <h2
                id="stakes-heading"
                className="mt-5 text-[1.875rem] leading-[1.15] text-navy-foreground sm:text-4xl lg:text-[2.75rem]"
              >
                When the Stakes Are High, Good Legal Advice Matters.
              </h2>
            </div>
            <div>
              <p className="text-base leading-relaxed text-navy-foreground/75">
                Whether you require legal advice, representation or assistance
                navigating a complex legal matter, our approach is focused on
                understanding the issue, identifying practical options and helping
                you make informed decisions.
              </p>
              <Button asChild variant="gold" size="xl" className="mt-8">
                <Link to="/contact">Speak With Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section aria-labelledby="principles-heading" className="bg-background">
        <div className="container-page section-y">
          <SectionHeader
            eyebrow="Why Choose Us"
            title="A Practical Approach to Legal Service"
            description="Four principles guide how the firm works with every client and every matter."
          />
          <dl className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {principles.map((principle, index) => (
              <div key={principle.title}>
                <p className="font-serif text-sm text-gold">
                  0{index + 1}
                </p>
                <span className="gold-rule mt-4" aria-hidden="true" />
                <dt className="mt-6 text-xl text-navy">{principle.title}</dt>
                <dd className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {principle.description}
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-12">
            <Button asChild variant="quiet" size="xl">
              <Link to="/why-choose-us">
                Why Clients Choose the Firm
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* PROCESS */}
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
          <div className="mt-12">
            <Button asChild variant="gold" size="xl">
              <Link to="/contact">Book a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section aria-labelledby="testimonial-heading" className="bg-background">
        <div className="container-page section-y">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeader
              eyebrow="Client Feedback"
              title="What Our Clients Say"
              description="The firm publishes only verified client testimonials. The cards below are placeholders awaiting client-approved feedback."
            />
            <div className="shrink-0">
              <GoogleRatingBadge />
            </div>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonialPlaceholders.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button asChild variant="quiet" size="xl">
              <a href={firm.googleProfileUrl} target="_blank" rel="noopener noreferrer">
                <Star aria-hidden="true" />
                View Our Google Reviews
              </a>
            </Button>
            <p className="max-w-md text-xs leading-relaxed text-muted-foreground">
              Rating and review count sourced from Google and correct at the time of
              publication. Update this figure if the firm's Google rating changes.
            </p>
          </div>
        </div>
      </section>

      {/* INSIGHTS */}
      <section aria-labelledby="insights-heading" className="bg-ivory">
        <div className="container-page section-y">
          <SectionHeader
            eyebrow="Insights"
            title="Legal Insights & Updates"
            description="Commentary on legal questions that frequently arise for clients in Abuja and across Nigeria."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {insights.map((insight) => (
              <InsightCard key={insight.slug} insight={insight} />
            ))}
          </div>
          <div className="mt-12">
            <Button asChild variant="navy" size="xl">
              <Link to="/insights">Read All Insights</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section aria-labelledby="contact-heading" className="bg-background">
        <div className="container-page section-y">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <SectionHeader
                eyebrow="Contact"
                title="Let's Discuss Your Legal Matter"
                description="If you require legal advice or representation, contact R. S. KINYA & CO. to arrange a consultation."
              />
              <div className="mt-10 space-y-6 text-sm">
                <div>
                  <p className="text-xs font-semibold tracking-[0.16em] text-gold-dark uppercase">
                    Office
                  </p>
                  <address className="mt-3 leading-relaxed text-charcoal/80 not-italic">
                    <span className="font-medium text-navy">{firm.name}</span>
                    <br />
                    {firm.address.line1}
                    <br />
                    {firm.address.line2}
                    <br />
                    {firm.address.region}
                  </address>
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-[0.16em] text-gold-dark uppercase">
                    Phone
                  </p>
                  <p className="mt-3 text-charcoal/80">{firm.phonePlaceholder}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-[0.16em] text-gold-dark uppercase">
                    Email
                  </p>
                  <p className="mt-3 text-charcoal/80">{firm.emailPlaceholder}</p>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <GoogleMapSection />
    </>
  );
}
