import insightContract from "@/assets/insight-contract.jpg";
import insightProperty from "@/assets/insight-property.jpg";
import insightDispute from "@/assets/insight-dispute.jpg";
import insightBusiness from "@/assets/insight-business.jpg";

/**
 * EDITABLE CONTENT FILE
 * ---------------------
 * All firm details, practice areas, insights, team profiles and testimonials
 * live here so the firm can update copy without touching page layouts.
 * Placeholders written as [SQUARE BRACKETS] are awaiting firm-supplied details.
 */

export const firm = {
  name: "R. S. KINYA & CO.",
  tagline: "Legal Practitioners & Consultants",
  shortDescription:
    "An Abuja-based law firm providing professional legal counsel and representation to individuals, businesses and organizations across Nigeria.",
  address: {
    line1: "10 Atbara Street II, off Cairo Street",
    line2: "Wuse, Abuja 900288",
    region: "Federal Capital Territory, Nigeria",
    city: "Abuja",
    postalCode: "900288",
    street: "10 Atbara Street II, off Cairo Street, Wuse",
  },
  // Replace with the firm's verified contact details.
  phonePlaceholder: "[PHONE NUMBER]",
  emailPlaceholder: "[EMAIL ADDRESS]",
  // Once supplied, set these to real values to activate click-to-call / mailto / WhatsApp.
  phoneHref: "",
  emailHref: "",
  whatsappHref: "",
  // Replace with the firm's Google Business Profile URL once confirmed.
  googleProfileUrl:
    "https://www.google.com/maps/search/?api=1&query=R.+S.+KINYA+%26+CO.+10+Atbara+Street+II+Wuse+Abuja",
  googleDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=10+Atbara+Street+II%2C+off+Cairo+Street%2C+Wuse%2C+Abuja+900288%2C+Nigeria",
  googleMapEmbedUrl:
    "https://www.google.com/maps?q=10%20Atbara%20Street%20II%2C%20off%20Cairo%20Street%2C%20Wuse%2C%20Abuja%20900288%2C%20Nigeria&output=embed",
  google: {
    rating: "4.2",
    reviewCount: 13,
  },
  // Placeholder hours — replace with the firm's confirmed opening hours.
  hours: [
    { days: "Monday – Friday", time: "[9:00 AM – 5:00 PM]" },
    { days: "Saturday", time: "[By appointment]" },
    { days: "Sunday & Public Holidays", time: "[Closed]" },
  ],
};

export const disclaimer =
  "The information provided on this website is for general informational purposes and does not constitute legal advice. Viewing this website or contacting the firm through this website does not automatically create a lawyer-client relationship.";

export const formNotice =
  "Please do not include highly confidential or sensitive information in this form. Submission of this form does not create a lawyer-client relationship.";

export const navigation = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Practice Areas", to: "/practice-areas" },
  { label: "Why Choose Us", to: "/why-choose-us" },
  { label: "Insights", to: "/insights" },
  { label: "Contact", to: "/contact" },
] as const;

export type PracticeArea = {
  slug: string;
  title: string;
  shortTitle: string;
  icon: string;
  summary: string;
  intro: string;
  services: string[];
  whoWeAssist: string[];
  considerations: string[];
  seoTitle: string;
  metaDescription: string;
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "corporate-commercial-law",
    title: "Corporate & Commercial Law",
    shortTitle: "Corporate & Commercial",
    icon: "Briefcase",
    summary:
      "Legal advice and support for businesses, transactions, agreements and commercial matters.",
    intro:
      "Businesses operating in Abuja and across Nigeria face a regulatory and commercial environment that rewards careful preparation. R. S. KINYA & CO. advises companies, founders and organizations on the legal framework surrounding their operations, transactions and commercial relationships.",
    services: [
      "Company formation, structuring and post-incorporation filings",
      "Commercial transaction advisory and documentation",
      "Corporate governance and compliance guidance",
      "Shareholder, partnership and joint venture arrangements",
      "Regulatory correspondence and statutory obligations",
      "General retainer advisory for businesses",
    ],
    whoWeAssist: [
      "Start-ups and founders establishing a new venture",
      "Small and medium-sized enterprises",
      "Established companies and corporate groups",
      "Non-governmental and not-for-profit organizations",
      "Investors and business partners entering the Nigerian market",
    ],
    considerations: [
      "Choosing an appropriate corporate structure for the intended business",
      "Ensuring statutory registrations and filings remain current",
      "Documenting commercial understandings clearly before performance begins",
      "Allocating risk, liability and dispute resolution mechanisms in agreements",
    ],
    seoTitle: "Corporate & Commercial Lawyer in Abuja | R. S. KINYA & CO.",
    metaDescription:
      "Corporate and commercial legal services in Abuja, Nigeria — company formation, commercial agreements, governance and business advisory from R. S. KINYA & CO.",
  },
  {
    slug: "litigation-dispute-resolution",
    title: "Litigation & Dispute Resolution",
    shortTitle: "Litigation",
    icon: "Landmark",
    summary:
      "Professional representation and strategic legal support in disputes and litigation.",
    intro:
      "Disputes are disruptive, and the appropriate response depends on the facts, the relationship between the parties and the outcome the client is seeking. The firm assists clients in assessing their position, considering the available options and pursuing the course that best fits their circumstances.",
    services: [
      "Assessment of the merits and risks of a dispute",
      "Civil litigation before Nigerian courts",
      "Pre-action correspondence and demand letters",
      "Negotiated settlement and alternative dispute resolution",
      "Enforcement of judgments and orders",
      "Representation before tribunals and administrative panels",
    ],
    whoWeAssist: [
      "Individuals involved in civil disputes",
      "Companies facing or bringing commercial claims",
      "Landlords, tenants and property owners",
      "Employers and employees in workplace disputes",
      "Parties seeking to enforce contractual obligations",
    ],
    considerations: [
      "Whether the matter is better resolved by negotiation than by litigation",
      "Applicable limitation periods and procedural requirements",
      "The evidence available to support each element of a claim or defence",
      "The realistic cost, timeline and commercial impact of proceedings",
    ],
    seoTitle: "Litigation Lawyer in Abuja | Dispute Resolution | R. S. KINYA & CO.",
    metaDescription:
      "Litigation and dispute resolution services in Abuja, Nigeria. R. S. KINYA & CO. advises and represents clients in civil, commercial and property disputes.",
  },
  {
    slug: "property-real-estate",
    title: "Property & Real Estate Law",
    shortTitle: "Property & Real Estate",
    icon: "Building2",
    summary:
      "Legal assistance relating to property transactions, ownership, documentation and real estate matters.",
    intro:
      "Property transactions in the Federal Capital Territory involve documentation, consents and title considerations that benefit from careful legal review before commitments are made. The firm assists clients in understanding what they are acquiring and what remains outstanding.",
    services: [
      "Title investigation and documentation review",
      "Preparation of deeds of assignment, leases and tenancy agreements",
      "Perfection of title, including consents and registration steps",
      "Sale, purchase and lease transaction advisory",
      "Landlord and tenant matters",
      "Property-related dispute advisory",
    ],
    whoWeAssist: [
      "Individual buyers and sellers of land or property",
      "Developers and real estate companies",
      "Landlords and property managers",
      "Tenants and lessees",
      "Nigerians in the diaspora acquiring property at home",
    ],
    considerations: [
      "Verifying the root of title before payment is made",
      "Confirming required governmental consents and approvals",
      "Recording the commercial terms accurately in the transaction documents",
      "Completing registration and perfection steps after closing",
    ],
    seoTitle: "Property Lawyer in Abuja | Real Estate Law | R. S. KINYA & CO.",
    metaDescription:
      "Property and real estate legal services in Abuja — title review, deeds, tenancy agreements and perfection of title from R. S. KINYA & CO.",
  },
  {
    slug: "family-law",
    title: "Family & Matrimonial Law",
    shortTitle: "Family Law",
    icon: "Users",
    summary:
      "Legal guidance concerning family relationships, matrimonial matters and related disputes.",
    intro:
      "Family matters call for discretion as much as legal skill. The firm approaches these matters with confidentiality and care, helping clients understand their position and the options open to them.",
    services: [
      "Matrimonial proceedings and related applications",
      "Child custody, access and welfare matters",
      "Maintenance and financial arrangements",
      "Family settlement and mediation support",
      "Advisory on marriage and family documentation",
      "Estate and succession-related family matters",
    ],
    whoWeAssist: [
      "Spouses seeking advice on matrimonial matters",
      "Parents concerned with custody or welfare arrangements",
      "Family members involved in succession questions",
      "Clients seeking a discreet, measured resolution",
    ],
    considerations: [
      "The welfare of any children affected by the matter",
      "The documentation required to support an application",
      "Whether a negotiated arrangement is achievable",
      "Long-term financial and practical consequences of any settlement",
    ],
    seoTitle: "Family & Matrimonial Lawyer in Abuja | R. S. KINYA & CO.",
    metaDescription:
      "Discreet family and matrimonial legal guidance in Abuja, Nigeria — matrimonial proceedings, custody, maintenance and family settlements.",
  },
  {
    slug: "employment-labour-law",
    title: "Employment & Labour Law",
    shortTitle: "Employment & Labour",
    icon: "UserCheck",
    summary:
      "Advice and representation concerning employment relationships, workplace matters and labour-related issues.",
    intro:
      "The employment relationship is governed by contract, statute and practice. The firm advises both organizations and individuals on their rights and obligations, and on how to address workplace issues appropriately.",
    services: [
      "Employment contracts and staff handbooks",
      "Advisory on discipline, redundancy and termination",
      "Workplace policy review and compliance",
      "Representation in employment disputes",
      "Advisory on employee entitlements and benefits",
      "Independent contractor and consultancy arrangements",
    ],
    whoWeAssist: [
      "Employers structuring their workforce arrangements",
      "Employees seeking advice on their entitlements",
      "HR teams reviewing internal policies",
      "Organizations managing a workplace dispute",
    ],
    considerations: [
      "Whether contractual terms reflect the actual working arrangement",
      "Procedural fairness in disciplinary and termination processes",
      "Applicable statutory protections and entitlements",
      "Documentation of workplace decisions and communications",
    ],
    seoTitle: "Employment & Labour Lawyer in Abuja | R. S. KINYA & CO.",
    metaDescription:
      "Employment and labour law advice in Abuja, Nigeria — contracts, workplace policies, terminations and employment dispute representation.",
  },
  {
    slug: "debt-recovery",
    title: "Debt Recovery",
    shortTitle: "Debt Recovery",
    icon: "Banknote",
    summary:
      "Legal support for individuals and businesses seeking to recover outstanding obligations.",
    intro:
      "Unpaid obligations affect cash flow and commercial relationships. The firm assists clients in pursuing recovery through structured correspondence, negotiation and, where necessary, formal proceedings.",
    services: [
      "Review of the underlying debt and supporting documents",
      "Formal demand letters and recovery correspondence",
      "Negotiated repayment arrangements",
      "Recovery proceedings before the appropriate court",
      "Enforcement of judgments",
      "Advisory on credit documentation and security",
    ],
    whoWeAssist: [
      "Businesses with outstanding receivables",
      "Suppliers and service providers",
      "Landlords owed rent or service charges",
      "Individuals owed contractual sums",
    ],
    considerations: [
      "The strength of documentary evidence supporting the debt",
      "Whether the debtor has assets from which recovery is realistic",
      "Limitation periods applicable to the claim",
      "Whether recovery costs are proportionate to the sum owed",
    ],
    seoTitle: "Debt Recovery Lawyer in Abuja | R. S. KINYA & CO.",
    metaDescription:
      "Debt recovery legal services in Abuja, Nigeria — demand letters, negotiated repayment, recovery proceedings and enforcement of judgments.",
  },
  {
    slug: "contracts",
    title: "Contract & Commercial Agreements",
    shortTitle: "Contracts",
    icon: "FileText",
    summary: "Drafting, reviewing and advising on contracts and commercial agreements.",
    intro:
      "A clear agreement prevents most disputes before they begin. The firm drafts and reviews contracts so that each party's obligations, remedies and exit routes are recorded plainly.",
    services: [
      "Drafting bespoke commercial agreements",
      "Reviewing and marking up counterparty drafts",
      "Advisory on risk allocation and liability clauses",
      "Non-disclosure and confidentiality agreements",
      "Service, supply and distribution agreements",
      "Contract interpretation and performance advisory",
    ],
    whoWeAssist: [
      "Businesses entering commercial arrangements",
      "Professionals and consultants engaging clients",
      "Organizations standardising their contract templates",
      "Parties reviewing an agreement before signing",
    ],
    considerations: [
      "Whether the commercial intention is captured in the drafting",
      "Payment terms, milestones and consequences of default",
      "Termination rights and post-termination obligations",
      "Governing law and the agreed dispute resolution route",
    ],
    seoTitle: "Contract Review & Drafting Lawyer in Abuja | R. S. KINYA & CO.",
    metaDescription:
      "Contract drafting and review services in Abuja, Nigeria. R. S. KINYA & CO. advises on commercial agreements, risk allocation and contract terms.",
  },
  {
    slug: "legal-advisory",
    title: "Legal Advisory & Consultation",
    shortTitle: "Legal Advisory",
    icon: "MessagesSquare",
    summary:
      "Professional legal guidance designed around the client's specific circumstances.",
    intro:
      "Some matters simply require a considered view before a decision is taken. The firm offers consultations in which a client's circumstances are examined and the available legal options are explained in plain terms.",
    services: [
      "Consultation on a specific legal question",
      "Written legal opinions and advisory memoranda",
      "Document review and explanation",
      "Guidance on regulatory or procedural requirements",
      "Ongoing advisory support on a retainer basis",
      "Referral guidance where specialist input is required",
    ],
    whoWeAssist: [
      "Individuals seeking clarity on a legal position",
      "Businesses considering a decision with legal implications",
      "Organizations needing periodic legal input",
      "Clients seeking a second view on a matter",
    ],
    considerations: [
      "Identifying precisely what question needs answering",
      "Assembling the relevant documents before the consultation",
      "Understanding realistic options rather than ideal outcomes",
      "Agreeing the scope of any further work",
    ],
    seoTitle: "Legal Consultation in Abuja | Legal Advisory | R. S. KINYA & CO.",
    metaDescription:
      "Book a legal consultation in Abuja with R. S. KINYA & CO. Clear, practical legal advisory for individuals, businesses and organizations in Nigeria.",
  },
];

export const enquiryOptions = [
  "Corporate & Commercial",
  "Litigation & Dispute Resolution",
  "Property & Real Estate",
  "Family & Matrimonial",
  "Employment & Labour",
  "Debt Recovery",
  "Contract Review",
  "General Legal Consultation",
  "Other",
];

export const principles = [
  {
    title: "Clarity",
    description: "We communicate legal issues in a clear and understandable manner.",
  },
  {
    title: "Professionalism",
    description:
      "Every client matter is approached with diligence, discretion and professionalism.",
  },
  {
    title: "Strategy",
    description:
      "We consider the wider implications of each legal matter and pursue practical solutions.",
  },
  {
    title: "Client Focus",
    description: "We take time to understand the client's objectives and circumstances.",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Tell Us About Your Matter",
    description:
      "Contact the firm and provide a brief overview of your legal needs.",
  },
  {
    number: "02",
    title: "Initial Consultation",
    description:
      "Discuss your circumstances and explore the appropriate legal options.",
  },
  {
    number: "03",
    title: "Strategic Legal Support",
    description:
      "Where appropriate, the firm can advise, represent or assist you with the next steps.",
  },
];

export const trustPoints = [
  {
    title: "Professional Counsel",
    description: "Clear, considered legal advice.",
  },
  {
    title: "Client-Focused Representation",
    description: "Solutions tailored to each client's circumstances.",
  },
  {
    title: "Abuja-Based Practice",
    description: "Serving clients in Abuja and across Nigeria.",
  },
];

/** Placeholder testimonials — replace only with verified client feedback. */
export const testimonialPlaceholders = [
  {
    quote:
      "[Placeholder — replace this text with a verified client testimonial once the firm has obtained written permission to publish it.]",
    author: "[Client name or initials]",
    context: "[Matter type, e.g. Commercial client]",
  },
  {
    quote:
      "[Placeholder — this card is reserved for a verified client testimonial. No review has been published here.]",
    author: "[Client name or initials]",
    context: "[Matter type, e.g. Property client]",
  },
  {
    quote:
      "[Placeholder — a third verified testimonial can be added here, or this card may be removed.]",
    author: "[Client name or initials]",
    context: "[Matter type, e.g. Individual client]",
  },
];

/** Placeholder team profiles — replace with actual lawyer information. */
export const teamPlaceholders = [
  {
    name: "[Full Name]",
    title: "[Principal Partner]",
    practiceAreas: "[Practice areas]",
    biography:
      "[Professional biography to be supplied by the firm. This space is reserved for a factual summary of the lawyer's practice and experience.]",
    qualifications: "[Professional qualifications]",
    profileUrl: "",
  },
  {
    name: "[Full Name]",
    title: "[Associate]",
    practiceAreas: "[Practice areas]",
    biography:
      "[Professional biography to be supplied by the firm. No credentials have been assumed or invented for this profile.]",
    qualifications: "[Professional qualifications]",
    profileUrl: "",
  },
  {
    name: "[Full Name]",
    title: "[Associate]",
    practiceAreas: "[Practice areas]",
    biography:
      "[Professional biography to be supplied by the firm. Add a photograph, title and qualifications when available.]",
    qualifications: "[Professional qualifications]",
    profileUrl: "",
  },
];

export type Insight = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  displayDate: string;
  image: string;
  imageAlt: string;
  seoTitle: string;
  metaDescription: string;
  content: { heading: string; paragraphs: string[] }[];
};

/**
 * Sample articles. Titles, images and content are editable placeholders that
 * demonstrate the article structure the firm can publish against.
 */
export const insights: Insight[] = [
  {
    slug: "what-to-consider-before-signing-a-contract-in-nigeria",
    title: "What to Consider Before Signing a Contract in Nigeria",
    excerpt:
      "A short review before signature is usually less costly than a dispute afterwards. These are the clauses that most often deserve a second reading.",
    category: "Commercial",
    author: "[Author name]",
    date: "2026-06-18",
    displayDate: "18 June 2026",
    image: insightContract,
    imageAlt: "A commercial contract and fountain pen resting on a dark wooden desk",
    seoTitle: "What to Consider Before Signing a Contract in Nigeria",
    metaDescription:
      "Key points to review before signing a contract in Nigeria — scope, payment terms, liability, termination and dispute resolution, explained by R. S. KINYA & CO.",
    content: [
      {
        heading: "Read the obligations before the price",
        paragraphs: [
          "Most parties turn first to the commercial figures in an agreement. The clauses that decide how a relationship performs, however, are usually the ones describing what each party must do, by when, and to what standard.",
          "[Sample article content — the firm can replace this text with its own commentary. This paragraph exists to demonstrate the article layout, typography and reading width.]",
        ],
      },
      {
        heading: "Payment terms and consequences of default",
        paragraphs: [
          "An agreement should state when payment falls due, what documentation supports an invoice, and what follows if payment is late. Silence on these points tends to be resolved unfavourably for whichever party has less bargaining power at the time.",
        ],
      },
      {
        heading: "Termination and exit",
        paragraphs: [
          "Consider how the arrangement ends: on notice, on breach, or on the occurrence of a defined event. Consider also what survives termination — confidentiality, outstanding payments and the handling of materials or data.",
        ],
      },
      {
        heading: "Dispute resolution",
        paragraphs: [
          "Where a dispute would be resolved, and under which law, materially affects cost and timeline. Parties operating in Abuja frequently benefit from specifying a forum and process in advance rather than negotiating one mid-dispute.",
        ],
      },
    ],
  },
  {
    slug: "understanding-property-transactions-in-abuja",
    title: "Understanding Property Transactions in Abuja",
    excerpt:
      "Title, consent and documentation determine whether a property purchase in the Federal Capital Territory holds up over time.",
    category: "Property",
    author: "[Author name]",
    date: "2026-05-27",
    displayDate: "27 May 2026",
    image: insightProperty,
    imageAlt: "Modern residential apartment buildings in Abuja at golden hour",
    seoTitle: "Understanding Property Transactions in Abuja",
    metaDescription:
      "How property transactions work in Abuja — title verification, governmental consent, documentation and perfection, explained by R. S. KINYA & CO.",
    content: [
      {
        heading: "Start with title, not with price",
        paragraphs: [
          "Before any payment is made, the root of title should be traced and the documents examined. A transaction that begins with a deposit and ends with a search has the sequence reversed.",
          "[Sample article content — replace with the firm's own commentary on title verification practice in the Federal Capital Territory.]",
        ],
      },
      {
        heading: "Consents and approvals",
        paragraphs: [
          "Many property transactions require governmental consent before an interest can validly pass. Establishing early which approvals apply avoids delay at the point of completion.",
        ],
      },
      {
        heading: "Documentation and perfection",
        paragraphs: [
          "A signed agreement is one step. Registration and perfection of the resulting interest is what makes the transaction durable and enforceable against third parties.",
        ],
      },
    ],
  },
  {
    slug: "what-to-do-when-a-commercial-dispute-arises",
    title: "What to Do When a Commercial Dispute Arises",
    excerpt:
      "The first days of a dispute shape the options available later. Preserving records and choosing the right tone matters.",
    category: "Dispute Resolution",
    author: "[Author name]",
    date: "2026-04-30",
    displayDate: "30 April 2026",
    image: insightDispute,
    imageAlt: "Two professionals in discussion across a dark conference table",
    seoTitle: "What to Do When a Commercial Dispute Arises",
    metaDescription:
      "Practical first steps when a commercial dispute arises in Nigeria — preserving records, assessing position and choosing a resolution route.",
    content: [
      {
        heading: "Preserve the record",
        paragraphs: [
          "Correspondence, invoices, delivery notes and internal approvals often decide a commercial dispute. Collect and secure them before positions harden.",
          "[Sample article content — replace with the firm's own commentary.]",
        ],
      },
      {
        heading: "Assess the position soberly",
        paragraphs: [
          "An honest assessment of the strengths and weaknesses of a position is more useful than an optimistic one. It informs whether to negotiate, escalate or resolve.",
        ],
      },
      {
        heading: "Choose the route deliberately",
        paragraphs: [
          "Negotiation, mediation and litigation each carry a different cost, timeline and effect on the commercial relationship. The route should be chosen against the outcome the client actually wants.",
        ],
      },
    ],
  },
  {
    slug: "legal-considerations-for-starting-a-business-in-nigeria",
    title: "Legal Considerations for Starting a Business in Nigeria",
    excerpt:
      "Structure, registration and documentation decisions taken at the outset are far cheaper than corrections made later.",
    category: "Corporate",
    author: "[Author name]",
    date: "2026-03-19",
    displayDate: "19 March 2026",
    image: insightBusiness,
    imageAlt: "A Nigerian entrepreneur working at a laptop in a bright minimal office",
    seoTitle: "Legal Considerations for Starting a Business in Nigeria",
    metaDescription:
      "Legal steps to consider when starting a business in Nigeria — structure, registration, founder agreements, contracts and compliance obligations.",
    content: [
      {
        heading: "Choose a structure that fits the plan",
        paragraphs: [
          "The right structure depends on how the business will raise money, admit partners and allocate liability. Reorganising later is possible but rarely free.",
          "[Sample article content — replace with the firm's own commentary.]",
        ],
      },
      {
        heading: "Document the founder arrangement early",
        paragraphs: [
          "Ownership percentages, decision-making and what happens when a founder leaves should be recorded while relations are good, not when they are strained.",
        ],
      },
      {
        heading: "Build the compliance calendar",
        paragraphs: [
          "Statutory filings, tax registrations and sector-specific approvals recur. Tracking them from the beginning keeps the business in good standing.",
        ],
      },
    ],
  },
];

export const legalPages = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms of Use", to: "/terms-of-use" },
  { label: "Legal Disclaimer", to: "/legal-disclaimer" },
] as const;
