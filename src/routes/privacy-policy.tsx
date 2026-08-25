import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { firm } from "@/lib/site-data";

const title = "Privacy Policy | R. S. KINYA & CO.";
const description =
  "How R. S. KINYA & CO. collects, uses and protects information submitted through this website. Placeholder policy for review by the firm.";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="This policy is a template for the firm's review and adoption. It should be confirmed before publication."
      />
      <div className="container-page section-y">
        <div className="mx-auto max-w-2xl space-y-8 text-[0.9375rem] leading-relaxed text-muted-foreground">
          <section>
            <h2 className="text-2xl text-navy">Information we collect</h2>
            <p className="mt-4">
              When you submit an enquiry through this website, we collect the
              details you choose to provide, such as your name, email address,
              telephone number, the nature of your legal matter and your preferred
              method of contact.
            </p>
          </section>
          <section>
            <h2 className="text-2xl text-navy">How the information is used</h2>
            <p className="mt-4">
              Information submitted is used to respond to your enquiry and, where
              the firm is instructed, to administer your matter. It is not sold or
              shared for marketing purposes.
            </p>
          </section>
          <section>
            <h2 className="text-2xl text-navy">Confidentiality</h2>
            <p className="mt-4">
              Please do not include highly confidential or sensitive information in
              the website enquiry form. Submitting an enquiry does not create a
              lawyer-client relationship, and information sent before a
              relationship is established may not attract professional privilege.
            </p>
          </section>
          <section>
            <h2 className="text-2xl text-navy">Retention and access</h2>
            <p className="mt-4">
              Enquiry records are retained for as long as necessary to respond to
              the enquiry or to comply with the firm's professional obligations. You
              may request access to, correction of, or deletion of information you
              have submitted.
            </p>
          </section>
          <section>
            <h2 className="text-2xl text-navy">Contact</h2>
            <p className="mt-4">
              Questions about this policy may be directed to the firm at{" "}
              {firm.emailPlaceholder} or {firm.phonePlaceholder}.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
