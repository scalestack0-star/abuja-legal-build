import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, Navigation, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { ContactForm } from "@/components/site/ContactForm";
import { GoogleMapSection } from "@/components/site/GoogleMapSection";
import { firm, disclaimer } from "@/lib/site-data";

const title = "Contact Our Abuja Law Firm | R. S. KINYA & CO.";
const description =
  "Contact R. S. KINYA & CO. at 10 Atbara Street II, off Cairo Street, Wuse, Abuja. Request a legal consultation using the enquiry form, or visit the office.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          name: firm.name,
          description,
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
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Discuss Your Legal Matter"
        description="If you require legal advice or representation, contact R. S. KINYA & CO. to arrange a consultation."
      />

      <section aria-labelledby="contact-details" className="bg-background">
        <div className="container-page section-y">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <h2 id="contact-details" className="text-2xl text-navy">
                Office &amp; Contact Details
              </h2>
              <span className="gold-rule mt-5" aria-hidden="true" />

              <ul className="mt-8 space-y-7 text-sm">
                <li className="flex gap-4">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-gold" strokeWidth={1.25} aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold tracking-[0.16em] text-gold-dark uppercase">
                      Address
                    </p>
                    <address className="mt-2 leading-relaxed text-charcoal/80 not-italic">
                      <span className="font-medium text-navy">{firm.name}</span>
                      <br />
                      {firm.address.line1}
                      <br />
                      {firm.address.line2}
                      <br />
                      {firm.address.region}
                    </address>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Phone className="mt-0.5 size-5 shrink-0 text-gold" strokeWidth={1.25} aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold tracking-[0.16em] text-gold-dark uppercase">
                      Phone
                    </p>
                    <p className="mt-2 text-charcoal/80">
                      {firm.phoneHref ? (
                        <a href={firm.phoneHref} className="hover:text-gold-dark">
                          {firm.phonePlaceholder}
                        </a>
                      ) : (
                        firm.phonePlaceholder
                      )}
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Mail className="mt-0.5 size-5 shrink-0 text-gold" strokeWidth={1.25} aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold tracking-[0.16em] text-gold-dark uppercase">
                      Email
                    </p>
                    <p className="mt-2 text-charcoal/80">
                      {firm.emailHref ? (
                        <a href={firm.emailHref} className="hover:text-gold-dark">
                          {firm.emailPlaceholder}
                        </a>
                      ) : (
                        firm.emailPlaceholder
                      )}
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Clock className="mt-0.5 size-5 shrink-0 text-gold" strokeWidth={1.25} aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold tracking-[0.16em] text-gold-dark uppercase">
                      Opening Hours
                    </p>
                    <dl className="mt-2 space-y-1.5 text-charcoal/80">
                      {firm.hours.map((entry) => (
                        <div key={entry.days} className="flex flex-wrap gap-x-3">
                          <dt className="min-w-[11rem]">{entry.days}</dt>
                          <dd className="text-muted-foreground">{entry.time}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </li>
              </ul>

              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild variant="quiet" size="lg">
                  <a href={firm.googleDirectionsUrl} target="_blank" rel="noopener noreferrer">
                    <Navigation aria-hidden="true" />
                    Get Directions
                  </a>
                </Button>
                {firm.whatsappHref ? (
                  <Button asChild variant="quiet" size="lg">
                    <a href={firm.whatsappHref} target="_blank" rel="noopener noreferrer">
                      <MessageCircle aria-hidden="true" />
                      Message on WhatsApp
                    </a>
                  </Button>
                ) : null}
              </div>

              <div className="mt-10 border-l-2 border-gold bg-ivory p-6">
                <h3 className="text-sm font-semibold text-navy">Directions</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  The office is located on Atbara Street II, off Cairo Street in
                  Wuse, Abuja. Use the map below for turn-by-turn directions from
                  your current location.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl text-navy">Request a Consultation</h2>
              <span className="gold-rule mt-5" aria-hidden="true" />
              <div className="mt-8">
                <ContactForm />
              </div>
              <p className="mt-8 text-xs leading-relaxed text-muted-foreground">
                {disclaimer}
              </p>
            </div>
          </div>
        </div>
      </section>

      <GoogleMapSection />
    </>
  );
}
