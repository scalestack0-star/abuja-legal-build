import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { disclaimer, formNotice } from "@/lib/site-data";

const title = "Legal Disclaimer | R. S. KINYA & CO.";
const description =
  "Legal disclaimer for the R. S. KINYA & CO. website. Website content is general information and does not constitute legal advice or create a lawyer-client relationship.";

export const Route = createFileRoute("/legal-disclaimer")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/legal-disclaimer" },
    ],
    links: [{ rel: "canonical", href: "/legal-disclaimer" }],
  }),
  component: LegalDisclaimerPage,
});

function LegalDisclaimerPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Legal Disclaimer" />
      <div className="container-page section-y">
        <div className="mx-auto max-w-2xl space-y-8 text-[0.9375rem] leading-relaxed text-muted-foreground">
          <p className="border-l-2 border-gold bg-ivory p-6 text-charcoal/85">
            {disclaimer}
          </p>
          <section>
            <h2 className="text-2xl text-navy">No lawyer-client relationship</h2>
            <p className="mt-4">
              A lawyer-client relationship with R. S. KINYA &amp; CO. arises only
              where the firm has agreed in writing to act, and any applicable
              engagement requirements have been satisfied. Contacting the firm
              through this website does not by itself create such a relationship, nor
              does it oblige the firm to accept instructions.
            </p>
          </section>
          <section>
            <h2 className="text-2xl text-navy">No guarantee of outcome</h2>
            <p className="mt-4">
              Nothing on this website should be read as a promise or guarantee of any
              particular result. Outcomes depend on the facts, the applicable law and
              matters outside the firm's control.
            </p>
          </section>
          <section>
            <h2 className="text-2xl text-navy">Enquiries through this website</h2>
            <p className="mt-4">{formNotice}</p>
          </section>
          <section>
            <h2 className="text-2xl text-navy">Accuracy of content</h2>
            <p className="mt-4">
              The firm aims to keep website content accurate and current, but law and
              practice change. Content may not reflect the most recent legal
              developments and should not be relied upon as a substitute for advice.
            </p>
          </section>
          <section>
            <h2 className="text-2xl text-navy">Third-party information</h2>
            <p className="mt-4">
              Where the site displays third-party information — including the firm's
              Google rating and review count — that information is sourced from the
              third-party platform and may change independently of this website.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
