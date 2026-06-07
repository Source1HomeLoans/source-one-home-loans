export type SeoPage = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  eyebrow: string;
  intro: string;
  primaryTopic: string;
  audience: string;
  benefits: string[];
  relatedProgramSlugs: string[];
  faqs: { question: string; answer: string }[];
};

export type LocationPage = {
  slug: string;
  city: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  marketNotes: string[];
  faqs: { question: string; answer: string }[];
};

export const blogCategories = [
  "Mortgage Education",
  "Home Buying Tips",
  "Real Estate Investing",
  "Self-Employed Borrowers",
  "Market Updates",
  "Refinancing Strategies",
];

const baseFaqs = (topic: string) => [
  {
    question: `How do I know if ${topic} is the right fit?`,
    answer:
      "The right loan depends on your credit profile, income documentation, property type, occupancy, down payment, and long-term goals. Source One Home Loans reviews the full scenario before recommending a path.",
  },
  {
    question: "Can I get pre-qualified before I find a property?",
    answer:
      "Yes. A pre-qualification conversation can help you understand potential loan options, documentation needs, and next steps before you make an offer or refinance decision.",
  },
  {
    question: "Are rates and terms guaranteed?",
    answer:
      "No. Rates, terms, and program availability are subject to credit approval, underwriting guidelines, property approval, and program requirements.",
  },
];

export const mortgageProgramPages: SeoPage[] = [
  {
    slug: "texas-dscr-loans",
    title: "Texas DSCR Loans",
    metaTitle: "Texas DSCR Loans | Source One Home Loans",
    metaDescription: "Explore Texas DSCR loans for real estate investors using rental income and property cash flow to evaluate investment property financing options.",
    keywords: ["Texas DSCR Loans", "DSCR loans Texas", "rental property loans", "investment property financing"],
    eyebrow: "Real Estate Investor Loans",
    intro:
      "Texas DSCR loans are designed for real estate investors who want financing options that may focus on rental income and property cash flow rather than traditional personal income documentation.",
    primaryTopic: "DSCR loan options for Texas rental property investors",
    audience: "investors purchasing or refinancing rental properties in Texas",
    benefits: ["Rental-income focused qualification discussion", "Options for purchase and refinance scenarios", "Guidance for portfolio growth and investor documentation"],
    relatedProgramSlugs: ["texas-investor-property-loans", "texas-non-qm-loans", "texas-refinance-loans"],
    faqs: baseFaqs("a Texas DSCR loan"),
  },
  {
    slug: "texas-bank-statement-loans",
    title: "Texas Bank Statement Loans",
    metaTitle: "Texas Bank Statement Loans | Source One Home Loans",
    metaDescription: "Learn about Texas bank statement loans for self-employed borrowers and business owners who need alternative income documentation options.",
    keywords: ["Texas Bank Statement Loans", "bank statement mortgage Texas", "self-employed mortgage Texas"],
    eyebrow: "Self-Employed Borrower Solutions",
    intro:
      "Texas bank statement loans can help qualified self-employed borrowers document income through business or personal bank statement activity when traditional W-2 documentation does not tell the full story.",
    primaryTopic: "bank statement mortgage options in Texas",
    audience: "business owners, entrepreneurs, contractors, and self-employed borrowers",
    benefits: ["Alternative income review", "Business-owner documentation guidance", "Options for purchase or refinance goals"],
    relatedProgramSlugs: ["texas-self-employed-mortgages", "texas-p-l-loans", "texas-non-qm-loans"],
    faqs: baseFaqs("a Texas bank statement loan"),
  },
  {
    slug: "texas-p-l-loans",
    title: "Texas P&L Loans",
    metaTitle: "Texas P&L Loans | Source One Home Loans",
    metaDescription: "Explore Texas profit and loss mortgage options for self-employed borrowers seeking alternative income documentation programs.",
    keywords: ["Texas P&L Loans", "profit and loss mortgage Texas", "self-employed home loan Texas"],
    eyebrow: "Alternative Income Programs",
    intro:
      "Texas P&L loan options may help qualified business owners use a prepared profit and loss statement as part of an alternative documentation strategy.",
    primaryTopic: "profit and loss mortgage options for Texas borrowers",
    audience: "self-employed borrowers with business income and nontraditional documentation",
    benefits: ["Practical documentation review", "Clear guidance for business owners", "Purchase and refinance strategy support"],
    relatedProgramSlugs: ["texas-bank-statement-loans", "texas-self-employed-mortgages", "texas-non-qm-loans"],
    faqs: baseFaqs("a Texas P&L loan"),
  },
  {
    slug: "texas-self-employed-mortgages",
    title: "Texas Self-Employed Mortgages",
    metaTitle: "Texas Self-Employed Mortgages | Source One Home Loans",
    metaDescription: "Mortgage solutions for Texas self-employed borrowers, entrepreneurs, contractors, and business owners with complex income profiles.",
    keywords: ["Texas Self-Employed Mortgages", "self-employed mortgage Texas", "business owner mortgage Texas"],
    eyebrow: "Self-Employed Borrowers",
    intro:
      "Self-employed borrowers in Texas often need a more thoughtful mortgage review because tax returns, bank deposits, business deductions, and cash flow can tell different parts of the story.",
    primaryTopic: "mortgage options for Texas self-employed borrowers",
    audience: "entrepreneurs, business owners, freelancers, and contractors",
    benefits: ["Clear income-documentation planning", "Alternative program review", "Guidance from first conversation to closing"],
    relatedProgramSlugs: ["texas-bank-statement-loans", "texas-p-l-loans", "texas-non-qm-loans"],
    faqs: baseFaqs("a Texas self-employed mortgage"),
  },
  {
    slug: "texas-non-qm-loans",
    title: "Texas Non-QM Loans",
    metaTitle: "Texas Non-QM Loans | Source One Home Loans",
    metaDescription: "Explore Texas Non-QM loans for borrowers with unique income, credit, investor, or documentation needs outside traditional mortgage guidelines.",
    keywords: ["Texas Non-QM Loans", "Non-QM mortgage Texas", "alternative mortgage Texas"],
    eyebrow: "Flexible Mortgage Options",
    intro:
      "Texas Non-QM loans may provide flexible mortgage paths for qualified borrowers whose income, property, credit, or documentation profile does not fit a traditional agency checklist.",
    primaryTopic: "Non-QM mortgage options in Texas",
    audience: "borrowers with unique income, investor, or documentation needs",
    benefits: ["Expanded scenario review", "Alternative documentation options", "Investor and self-employed strategy support"],
    relatedProgramSlugs: ["texas-bank-statement-loans", "texas-dscr-loans", "texas-self-employed-mortgages"],
    faqs: baseFaqs("a Texas Non-QM loan"),
  },
  {
    slug: "texas-investor-property-loans",
    title: "Texas Investor Property Loans",
    metaTitle: "Texas Investor Property Loans | Source One Home Loans",
    metaDescription: "Real estate investor loan options in Texas, including DSCR and rental property financing solutions for purchase and refinance goals.",
    keywords: ["Texas Investor Property Loans", "Real Estate Investor Loans", "Investment Property Financing", "Investor Mortgage Loans"],
    eyebrow: "Real Estate Investor Loans",
    intro:
      "Texas investor property loans are built for real estate investors purchasing or refinancing rental properties, including DSCR and investor-focused lending programs.",
    primaryTopic: "investor property financing in Texas",
    audience: "real estate investors growing rental portfolios",
    benefits: ["Rental property purchase guidance", "Refinance strategy review", "Investor-focused program options"],
    relatedProgramSlugs: ["texas-dscr-loans", "texas-non-qm-loans", "texas-refinance-loans"],
    faqs: baseFaqs("a Texas investor property loan"),
  },
  {
    slug: "texas-first-time-homebuyer-loans",
    title: "Texas First-Time Homebuyer Loans",
    metaTitle: "Texas First-Time Homebuyer Loans | Source One Home Loans",
    metaDescription: "Guidance for Texas first-time homebuyers comparing FHA, VA, conventional, down payment, and pre-qualification options.",
    keywords: ["Texas First-Time Homebuyer Loans", "first-time homebuyer Texas", "home loan Texas"],
    eyebrow: "Home Buying Tips",
    intro:
      "Buying your first home in Texas is easier to navigate when you understand loan options, documentation needs, payment comfort, and the steps between pre-qualification and closing.",
    primaryTopic: "first-time homebuyer mortgage planning in Texas",
    audience: "buyers preparing for their first home purchase",
    benefits: ["Pre-qualification planning", "Loan option comparison", "Step-by-step homebuyer guidance"],
    relatedProgramSlugs: ["texas-fha-loans", "texas-va-loans", "texas-bank-statement-loans"],
    faqs: baseFaqs("a Texas first-time homebuyer loan"),
  },
  {
    slug: "texas-refinance-loans",
    title: "Texas Refinance Loans",
    metaTitle: "Texas Refinance Loans | Source One Home Loans",
    metaDescription: "Explore Texas refinance loan options to review payment goals, term changes, available equity, and investment property strategies.",
    keywords: ["Texas Refinance Loans", "mortgage refinance Texas", "cash-out refinance Texas"],
    eyebrow: "Refinancing Strategies",
    intro:
      "Texas refinance loans can help homeowners and investors review payment goals, loan terms, available equity, and overall mortgage strategy as needs change.",
    primaryTopic: "mortgage refinance options in Texas",
    audience: "homeowners and investors evaluating refinance options",
    benefits: ["Payment and term strategy", "Equity-access conversation", "Owner-occupied and investor scenario review"],
    relatedProgramSlugs: ["texas-dscr-loans", "texas-jumbo-loans", "texas-non-qm-loans"],
    faqs: baseFaqs("a Texas refinance loan"),
  },
  {
    slug: "texas-jumbo-loans",
    title: "Texas Jumbo Loans",
    metaTitle: "Texas Jumbo Loans | Source One Home Loans",
    metaDescription: "Explore Texas jumbo loan options for higher-value homes that exceed conforming loan limits.",
    keywords: ["Texas Jumbo Loans", "jumbo mortgage Texas", "high balance mortgage Texas"],
    eyebrow: "Premium Home Financing",
    intro:
      "Texas jumbo loans can help qualified borrowers finance higher-value properties that exceed standard conforming loan limits.",
    primaryTopic: "jumbo mortgage options in Texas",
    audience: "buyers and homeowners financing higher-value properties",
    benefits: ["Higher loan amount review", "Documentation planning", "Purchase and refinance guidance"],
    relatedProgramSlugs: ["texas-refinance-loans", "texas-bank-statement-loans", "texas-non-qm-loans"],
    faqs: baseFaqs("a Texas jumbo loan"),
  },
  {
    slug: "texas-fha-loans",
    title: "Texas FHA Loans",
    metaTitle: "Texas FHA Loans | Source One Home Loans",
    metaDescription: "Learn about Texas FHA loan options for eligible buyers seeking accessible home financing with flexible qualification features.",
    keywords: ["Texas FHA Loans", "FHA mortgage Texas", "FHA home loan Texas"],
    eyebrow: "Home Buying Programs",
    intro:
      "Texas FHA loans are government-backed mortgage options that may help eligible borrowers with flexible credit, down payment, and qualification features.",
    primaryTopic: "FHA mortgage options in Texas",
    audience: "eligible Texas homebuyers comparing accessible mortgage paths",
    benefits: ["FHA eligibility review", "Down payment planning", "Clear purchase-process guidance"],
    relatedProgramSlugs: ["texas-first-time-homebuyer-loans", "texas-refinance-loans", "texas-va-loans"],
    faqs: baseFaqs("a Texas FHA loan"),
  },
  {
    slug: "texas-va-loans",
    title: "Texas VA Loans",
    metaTitle: "Texas VA Loans | Source One Home Loans",
    metaDescription: "Explore Texas VA loan options for eligible veterans, active-duty service members, and qualifying spouses.",
    keywords: ["Texas VA Loans", "VA mortgage Texas", "VA home loan Texas"],
    eyebrow: "Veteran Home Financing",
    intro:
      "Texas VA loans offer valuable mortgage benefits for eligible veterans, active-duty service members, and qualifying spouses.",
    primaryTopic: "VA mortgage options in Texas",
    audience: "eligible military borrowers and qualifying spouses",
    benefits: ["VA eligibility discussion", "Purchase and refinance planning", "Clear documentation guidance"],
    relatedProgramSlugs: ["texas-first-time-homebuyer-loans", "texas-refinance-loans", "texas-fha-loans"],
    faqs: baseFaqs("a Texas VA loan"),
  },
];

const cityFaqs = (city: string) => [
  {
    question: `Can Source One Home Loans help with mortgages in ${city}?`,
    answer: `Yes. Source One Home Loans helps borrowers and real estate investors evaluate mortgage options throughout Texas, including ${city}.`,
  },
  {
    question: `What loan programs are available in ${city}?`,
    answer:
      "Program availability depends on borrower qualification, property type, loan purpose, and underwriting guidelines. Conventional, FHA, VA, jumbo, refinance, self-employed, Non-QM, and investor property options may be reviewed.",
  },
  {
    question: "How do I get started?",
    answer:
      "Start with a pre-qualification or free consultation so the loan scenario, goals, documentation, and timeline can be reviewed before choosing a mortgage strategy.",
  },
];

export const locationPages: LocationPage[] = [
  "Dallas",
  "Fort Worth",
  "Houston",
  "Austin",
  "San Antonio",
  "Plano",
  "Frisco",
  "McKinney",
  "Arlington",
].map((city) => ({
  slug: `${city.toLowerCase().replaceAll(" ", "-")}-mortgage-broker`,
  city,
  title: `${city} Mortgage Broker`,
  metaTitle: `${city} Mortgage Broker | Source One Home Loans`,
  metaDescription: `Work with Source One Home Loans for ${city} mortgage broker guidance, Texas home loans, refinance options, and investor property financing.`,
  intro: `Source One Home Loans helps ${city} homebuyers, homeowners, self-employed borrowers, and real estate investors compare mortgage options with clear guidance and responsive communication.`,
  marketNotes: [
    `${city} borrowers often need loan guidance that accounts for local price points, property types, commute patterns, and long-term ownership goals.`,
    `Real estate investors in ${city} may benefit from investor property loan reviews that consider rental income, DSCR concepts, refinance goals, and portfolio growth.`,
    `Self-employed borrowers in ${city} can review bank statement, P&L, and Non-QM options when traditional income documentation does not fully reflect business cash flow.`,
  ],
  faqs: cityFaqs(city),
}));

export const blogPosts = [
  {
    slug: "how-texas-buyers-can-prepare-for-pre-qualification",
    title: "How Texas Buyers Can Prepare for Mortgage Pre-Qualification",
    category: "Home Buying Tips",
    excerpt: "A practical checklist for organizing income, credit, assets, goals, and timeline before starting a Texas mortgage conversation.",
  },
  {
    slug: "dscr-loans-for-texas-real-estate-investors",
    title: "DSCR Loans for Texas Real Estate Investors",
    category: "Real Estate Investing",
    excerpt: "Learn how DSCR concepts may fit rental property financing conversations for Texas real estate investors.",
  },
  {
    slug: "mortgage-options-for-self-employed-borrowers",
    title: "Mortgage Options for Self-Employed Borrowers in Texas",
    category: "Self-Employed Borrowers",
    excerpt: "A plain-English overview of bank statement, P&L, and Non-QM mortgage paths for business owners.",
  },
];

export function getProgramBySlug(slug: string) {
  return mortgageProgramPages.find((page) => page.slug === slug);
}

export function getLocationBySlug(slug: string) {
  return locationPages.find((page) => page.slug === slug);
}
