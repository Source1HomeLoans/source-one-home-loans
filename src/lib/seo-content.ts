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

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  keywords: string[];
  takeaways: string[];
  sections: {
    heading: string;
    paragraphs: string[];
    subheadings?: { heading: string; paragraphs: string[] }[];
  }[];
  faqs: { question: string; answer: string }[];
  relatedProgramSlugs: string[];
};

export const blogCategories = [
  "Mortgage Education",
  "Home Buying Tips",
  "Real Estate Investing",
  "Self-Employed Borrowers",
  "Refinancing",
  "Market Updates",
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

export const blogPosts: BlogPost[] = [
  {
    slug: "how-texas-buyers-can-prepare-for-pre-qualification",
    title: "How Texas Buyers Can Prepare for Mortgage Pre-Qualification",
    metaTitle: "Texas Mortgage Pre-Qualification Guide | Source One Home Loans",
    metaDescription:
      "Learn how Texas homebuyers can prepare for mortgage pre-qualification, organize documents, compare loan options, and move forward with confidence.",
    category: "Home Buying Tips",
    excerpt: "A practical checklist for organizing income, credit, assets, goals, and timeline before starting a Texas mortgage conversation.",
    date: "2026-06-07",
    readTime: "8 min read",
    keywords: ["Texas mortgage pre-qualification", "mortgage pre-approval", "home buying process", "first-time homebuyer loans"],
    takeaways: [
      "Pre-qualification is a planning conversation, not a guarantee of loan approval.",
      "Texas buyers should organize income, assets, credit information, and property goals before shopping seriously.",
      "The best loan path depends on the borrower, property, timeline, and documentation profile.",
      "A focused consultation can help first-time buyers, repeat buyers, and self-employed borrowers compare realistic next steps.",
    ],
    relatedProgramSlugs: ["texas-first-time-homebuyer-loans", "texas-fha-loans", "texas-va-loans", "texas-jumbo-loans"],
    sections: [
      {
        heading: "Why Pre-Qualification Matters for Texas Homebuyers",
        paragraphs: [
          "Mortgage pre-qualification gives Texas buyers a starting point before they tour homes, compare neighborhoods, or make an offer. It helps clarify how a lender may view income, assets, debts, credit, down payment funds, and the overall purchase goal. It is not the same thing as final underwriting approval, but it can help a borrower understand whether the next step is improving readiness, gathering documents, or moving toward a more complete application review.",
          "In markets like Dallas, Fort Worth, Houston, Austin, San Antonio, Plano, Frisco, McKinney, and Arlington, buyers often face different price points, property tax expectations, insurance costs, commute needs, and competition levels. A buyer looking at a starter home in one market may have a very different payment comfort level than a buyer comparing new construction in another. Pre-qualification gives the conversation some structure so the buyer is not guessing.",
          "At Source One Home Loans, the goal is to help buyers understand the road ahead. That includes reviewing loan program possibilities, down payment strategy, closing cost expectations, documentation needs, and timeline. A buyer who is self-employed, using gift funds, relocating, buying after a major life event, or comparing FHA, VA, conventional, or jumbo options may need a more tailored review than a generic online estimate can provide.",
        ],
        subheadings: [
          {
            heading: "Pre-qualification versus pre-approval",
            paragraphs: [
              "People often use pre-qualification and pre-approval interchangeably, but they can involve different levels of review depending on the lender and documentation provided. Pre-qualification is commonly an early conversation based on information supplied by the borrower. A stronger pre-approval process may include a deeper document review, credit review, automated underwriting findings, or additional lender conditions. Neither phrase should be treated as a final promise to lend because underwriting, property approval, and program requirements still matter.",
              "For Texas buyers, the practical takeaway is simple: the more complete the information, the more useful the guidance. If a buyer only provides a rough income number, the conversation may stay general. If the buyer provides pay stubs, W-2s, bank statements, business documentation, or other relevant records, the discussion can become more specific.",
            ],
          },
        ],
      },
      {
        heading: "Documents to Gather Before the Conversation",
        paragraphs: [
          "A smooth mortgage conversation starts with organization. Texas buyers should be ready to discuss income, employment, monthly debts, available funds, and the type of property they want to buy. W-2 employees may gather recent pay stubs, W-2s, bank statements, and identification. Self-employed borrowers may need tax returns, bank statements, profit and loss information, business details, or alternative documentation depending on the program being reviewed.",
          "Assets matter because the lender needs to understand down payment funds, reserves, and potential closing costs. If a family member plans to provide gift funds, that should be discussed early. If funds are coming from a business account, retirement account, sale of another property, or another source, the documentation path may look different. Surprises around funds can slow down a file later, so it is better to discuss them upfront.",
          "Credit and debt also shape the conversation. Buyers should be prepared to review car payments, student loans, credit cards, personal loans, child support, or other recurring obligations. The exact impact depends on underwriting guidelines and the loan program, but debt can affect qualifying capacity and payment comfort. A buyer does not need to solve every issue before calling; they just need a clear picture so the conversation is useful.",
        ],
      },
      {
        heading: "How Loan Options Fit Different Texas Buyers",
        paragraphs: [
          "First-time homebuyers may compare FHA loans, conventional loans, VA loans if eligible, and other options that fit their down payment and credit profile. FHA loans may appeal to some buyers because of flexible qualification features, while conventional loans may make sense for others based on credit, assets, and property goals. VA loans can offer meaningful benefits for eligible veterans, active-duty service members, and qualifying spouses.",
          "Higher-price buyers may need to discuss jumbo loans if the loan amount exceeds conforming limits. Self-employed borrowers may need to explore bank statement loans, P&L loans, or Non-QM options when traditional income documentation does not fully reflect their business cash flow. Real estate investors may want to compare investor property loan options, including DSCR concepts, when purchasing or refinancing rental properties.",
          "The best loan is not always the one with the lowest advertised rate. It is the one that fits the borrower's eligibility, property, payment comfort, cash to close, long-term plans, and underwriting path. That is why a pre-qualification conversation should include goals, not just numbers.",
        ],
      },
      {
        heading: "Texas-Specific Costs Buyers Should Consider",
        paragraphs: [
          "Texas buyers should pay close attention to property taxes and homeowners insurance because they can make a meaningful difference in the monthly payment. Two homes with similar purchase prices may have different tax rates, insurance costs, homeowners association dues, or special assessments. Buyers comparing communities around Dallas-Fort Worth, Houston, Austin, or San Antonio should review the full estimated payment rather than only principal and interest.",
          "Homeowners association dues can also affect payment comfort and qualifying. Some neighborhoods, condominiums, townhomes, and planned communities include HOA dues that vary widely. Mortgage insurance may apply depending on the loan type, down payment, and program. Closing costs, prepaid taxes, prepaid insurance, escrows, appraisal fees, and title-related costs should also be part of the planning conversation.",
          "A strong pre-qualification conversation helps buyers look at the whole picture. It may reveal that a slightly lower purchase price with higher taxes is not as comfortable as expected, or that a higher price with lower monthly obligations may fit differently. The numbers should be reviewed carefully before a buyer becomes emotionally attached to a property.",
        ],
      },
      {
        heading: "What Happens After Pre-Qualification",
        paragraphs: [
          "After pre-qualification, the buyer may choose to continue gathering documents, improve credit or savings, shop for homes, or move into a more complete application process. The right next step depends on timing. A buyer planning to purchase in six months may focus on preparation, while a buyer making offers immediately may need faster document review and coordination with a real estate agent.",
          "Communication matters during this stage. Buyers should update their mortgage professional if income changes, debt changes, funds move, employment changes, or the target property type changes. A condominium, manufactured home, multi-unit property, or investment property can introduce different requirements than a standard single-family primary residence. Keeping the loan team informed can prevent avoidable surprises.",
          "Source One Home Loans encourages buyers to ask questions early and often. A mortgage decision is too important to navigate with assumptions. Whether the buyer is preparing for a first home, comparing refinance timing, or planning a move across Texas, a structured conversation can turn uncertainty into a clear action plan.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is mortgage pre-qualification the same as loan approval?",
        answer:
          "No. Pre-qualification is not a final loan approval or commitment to lend. Final approval depends on credit approval, underwriting guidelines, property approval, and program requirements.",
      },
      {
        question: "Can I get pre-qualified before choosing a Texas city or neighborhood?",
        answer:
          "Yes. Many buyers start before choosing a specific property. The conversation can help you understand price range, estimated payment, documentation needs, and next steps.",
      },
      {
        question: "What if I am self-employed?",
        answer:
          "Self-employed borrowers may need additional documentation or alternative programs. Bank statement loans, P&L loans, and Non-QM options may be discussed depending on the scenario.",
      },
      {
        question: "Should I use a mortgage calculator before pre-qualification?",
        answer:
          "A mortgage calculator can be helpful for rough planning, but it does not replace a full review of taxes, insurance, HOA dues, mortgage insurance, credit profile, and program guidelines.",
      },
    ],
  },
  {
    slug: "dscr-loans-for-texas-real-estate-investors",
    title: "DSCR Loans for Texas Real Estate Investors",
    metaTitle: "Texas DSCR Loans for Real Estate Investors | Source One Home Loans",
    metaDescription:
      "Learn how DSCR loans may help Texas real estate investors evaluate rental property financing using income, cash flow, and investor-focused loan options.",
    category: "Real Estate Investing",
    excerpt: "Learn how DSCR concepts may fit rental property financing conversations for Texas real estate investors.",
    date: "2026-06-07",
    readTime: "9 min read",
    keywords: ["Texas DSCR Loans", "real estate investor loans", "rental property loans", "investment property financing"],
    takeaways: [
      "DSCR stands for debt service coverage ratio and is commonly used to evaluate rental property cash flow.",
      "Texas investors may use DSCR concepts when purchasing or refinancing rental properties.",
      "Lease income, market rent, property taxes, insurance, HOA dues, and loan terms can all affect the scenario.",
      "DSCR loans are not guaranteed approvals; underwriting, property approval, credit, assets, and program rules still matter.",
    ],
    relatedProgramSlugs: ["texas-dscr-loans", "texas-investor-property-loans", "texas-non-qm-loans", "texas-refinance-loans"],
    sections: [
      {
        heading: "What a DSCR Loan Is",
        paragraphs: [
          "A DSCR loan is an investor-focused mortgage option that looks at the relationship between a rental property's income and the proposed mortgage payment. DSCR stands for debt service coverage ratio. In simple terms, it compares income generated by the property to the debt payment associated with the loan. For Texas real estate investors, this can be useful because the conversation may focus more on the rental property's cash-flow profile than a traditional personal income review.",
          "This does not mean documentation disappears or approval is automatic. DSCR loan programs still have requirements. Credit profile, assets, property type, appraisal, lease details, market rent, taxes, insurance, HOA dues, loan purpose, and program guidelines can all matter. The point is that the framework is designed around investment property analysis rather than the same documentation structure used for a primary residence borrower.",
          "Texas investors often explore DSCR concepts when buying single-family rentals, townhomes, condominiums, or small residential investment properties. Markets such as Dallas, Fort Worth, Houston, Austin, San Antonio, Plano, Frisco, McKinney, and Arlington can all present different rent expectations, tax levels, insurance costs, and acquisition strategies. A DSCR conversation should account for the actual property and the investor's broader plan.",
        ],
        subheadings: [
          {
            heading: "How DSCR is generally viewed",
            paragraphs: [
              "While exact calculations vary by program, DSCR generally compares rental income to the payment obligations on the property. A ratio above 1.00 may indicate that the income is greater than the payment being measured. A lower ratio may indicate a tighter cash-flow picture. Investors should not assume that one ratio threshold applies everywhere because guidelines can differ by lender, investor, occupancy, property type, loan-to-value, and other details.",
              "The payment used in the calculation may include principal, interest, taxes, insurance, HOA dues, and other required costs. Because Texas property taxes and insurance can be significant, investors should be careful not to rely on rent estimates alone. A property with strong rent may still have a different DSCR outcome if taxes, insurance, or association dues are high.",
            ],
          },
        ],
      },
      {
        heading: "Why Texas Investors Consider DSCR Loans",
        paragraphs: [
          "Many real estate investors build income through rentals, self-employment, partnerships, or business activity. Traditional mortgage documentation may not always reflect the way an investor evaluates a property. DSCR loans can provide a more investment-oriented conversation because the rental property's income potential becomes central to the analysis.",
          "An investor purchasing a rental in Dallas may be focused on long-term appreciation, rent stability, and tenant demand. An investor refinancing a property in Houston may want to review cash flow, existing equity, or portfolio strategy. An investor comparing suburban growth markets near Austin, San Antonio, Frisco, or McKinney may want to know whether projected rent can support the proposed payment. DSCR concepts help organize that conversation.",
          "Investors also like clarity. A DSCR-focused review can help identify what information is needed, such as lease agreements, rent schedules, appraisal rent analysis, insurance estimates, property tax details, and entity documentation if applicable. The more complete the information, the easier it is to evaluate a realistic path.",
        ],
      },
      {
        heading: "Purchase and Refinance Scenarios",
        paragraphs: [
          "DSCR loans may be discussed for both purchases and refinances. On a purchase, the investor may be acquiring a property that already has a lease or may rely on market rent analysis. On a refinance, the investor may have an operating history, current lease, equity position, and a clearer picture of property expenses. Each scenario should be reviewed on its own facts.",
          "A purchase scenario often requires careful attention to acquisition cost, down payment, reserves, projected rent, and property condition. A refinance scenario may include questions about current loan payoff, equity, cash-out goals, seasoning, title, and whether the property is held personally or through an entity. None of these details should be left until the last minute because they can affect documentation and timing.",
          "Source One Home Loans helps investors think through the complete file. That includes not only the loan structure but also whether the financing strategy supports the investor's next step. Some investors want to acquire one rental and hold it long term. Others are building a portfolio and need repeatable processes. The right review should support both the immediate transaction and the bigger picture.",
        ],
      },
      {
        heading: "Texas Examples to Think Through",
        paragraphs: [
          "Consider a Texas investor buying a rental property in Fort Worth. The purchase price may appear attractive, but property taxes, insurance, HOA dues, and rent expectations need to be reviewed together. A lower purchase price does not automatically mean stronger cash flow. The investor should look at the estimated full monthly obligation and compare it with realistic rental income.",
          "Now consider an investor refinancing a rental in Austin. The property may have appreciated, but the investor should still review the proposed payment, current lease, insurance renewal, and tax assessment. If the goal is to access equity, the investor should understand how the new payment may affect the property's cash-flow position.",
          "In a market like McKinney or Frisco, investors may be evaluating newer properties, strong tenant demand, and higher purchase prices. In Houston or San Antonio, the analysis may include different insurance considerations, neighborhood dynamics, or rent ranges. DSCR is a useful framework, but the details remain local and property-specific.",
        ],
      },
      {
        heading: "How to Prepare for a DSCR Conversation",
        paragraphs: [
          "Investors should be ready to discuss the property address if available, estimated purchase price or current value, down payment or equity, current or projected rent, property taxes, insurance, HOA dues, credit profile, assets, and whether the loan will be in an individual name or entity. If the property is already rented, a lease can be helpful. If it is vacant or being purchased, market rent analysis may be part of the discussion.",
          "It is also helpful to clarify the strategy. Are you buying your first rental? Refinancing to improve your payment? Accessing equity for another purchase? Consolidating portfolio debt? Holding long term? These answers help shape the conversation and make it easier to compare options.",
          "A DSCR loan can be a powerful tool for the right investor, but it should be reviewed carefully. Source One Home Loans provides investor-focused guidance while keeping compliance and underwriting realities in view. The goal is to help Texas investors understand what may be possible, what documentation may be needed, and what next step makes sense.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do DSCR loans require personal income documentation?",
        answer:
          "DSCR programs often focus on rental property income, but requirements vary. Credit, assets, property documentation, lease or market rent information, and other program requirements may still apply.",
      },
      {
        question: "Can DSCR loans be used for Texas rental property refinances?",
        answer:
          "They may be available for certain refinance scenarios, depending on property type, equity, loan purpose, seasoning, credit profile, and program guidelines.",
      },
      {
        question: "Is a DSCR loan a guaranteed approval?",
        answer:
          "No. DSCR loans are subject to credit approval, underwriting guidelines, property approval, and program requirements.",
      },
      {
        question: "What expenses matter for DSCR analysis?",
        answer:
          "Principal and interest, property taxes, insurance, HOA dues, and other required property costs may affect the cash-flow analysis depending on the program.",
      },
    ],
  },
  {
    slug: "mortgage-options-for-self-employed-borrowers",
    title: "Mortgage Options for Self-Employed Borrowers in Texas",
    metaTitle: "Texas Self-Employed Mortgage Options | Source One Home Loans",
    metaDescription:
      "Explore Texas mortgage options for self-employed borrowers, including bank statement loans, P&L loans, Non-QM loans, and documentation strategies.",
    category: "Self-Employed Borrowers",
    excerpt: "A plain-English overview of bank statement, P&L, and Non-QM mortgage paths for business owners.",
    date: "2026-06-07",
    readTime: "9 min read",
    keywords: ["Texas Self-Employed Mortgages", "Texas Bank Statement Loans", "Texas P&L Loans", "Texas Non-QM Loans"],
    takeaways: [
      "Self-employed borrowers should prepare for a documentation conversation before choosing a loan path.",
      "Bank statement loans, P&L loans, and Non-QM loans may help when traditional tax-return income does not tell the full story.",
      "Texas business owners should review both qualifying strategy and payment comfort.",
      "A mortgage consultation can help organize income, assets, credit, and loan goals before application.",
    ],
    relatedProgramSlugs: ["texas-self-employed-mortgages", "texas-bank-statement-loans", "texas-p-l-loans", "texas-non-qm-loans"],
    sections: [
      {
        heading: "Why Self-Employed Mortgage Files Need a Different Conversation",
        paragraphs: [
          "Self-employed borrowers in Texas often have strong earning power but more complex documentation. A W-2 employee may show income through pay stubs and W-2s, while a business owner may have tax returns, bank deposits, business deductions, seasonal revenue, contractor income, retained earnings, or multiple entities. The mortgage conversation needs to account for how the borrower actually earns and documents income.",
          "Traditional underwriting may review tax returns and calculate qualifying income after certain deductions. That can surprise business owners because taxable income is not always the same as business cash flow. A borrower may run a healthy business and still show lower taxable income because of legitimate deductions, depreciation, reinvestment, or timing. That does not mean the borrower has no options; it means the loan strategy needs to be reviewed carefully.",
          "Source One Home Loans helps self-employed borrowers compare documentation paths. Some borrowers may fit traditional conventional, FHA, VA, or jumbo options. Others may need to explore bank statement loans, profit and loss loans, or Non-QM programs. The right answer depends on the borrower's goals, documentation, credit profile, assets, property type, and timeline.",
        ],
      },
      {
        heading: "Bank Statement Loans in Texas",
        paragraphs: [
          "Bank statement loans may allow qualified self-employed borrowers to use bank deposit history as part of the income review. Depending on the program, the review may look at personal or business bank statements over a defined period. The goal is to evaluate income patterns when traditional tax-return calculations do not fully reflect business activity.",
          "For example, a Dallas consultant with consistent deposits but substantial tax deductions may want to compare a bank statement program with a traditional option. A Houston contractor with seasonal income may need to discuss deposit trends and business expenses. A San Antonio business owner with multiple accounts may need help identifying which statements are relevant and how the deposits may be reviewed.",
          "Bank statement loans are still subject to guidelines. Not every deposit will necessarily count, and expense factors or other calculations may apply. Borrowers should be ready to provide complete statements, explain business activity, and discuss the source of funds. The more organized the borrower is, the smoother the review tends to be.",
        ],
        subheadings: [
          {
            heading: "What to prepare",
            paragraphs: [
              "A borrower considering a bank statement loan should gather recent bank statements, business details, identification, asset information, and a clear explanation of how income flows through the business. If deposits come from multiple sources, it is useful to explain the pattern before underwriting asks.",
            ],
          },
        ],
      },
      {
        heading: "P&L Loans and Profit-and-Loss Documentation",
        paragraphs: [
          "Profit and loss loans may use a prepared P&L statement as part of the income documentation strategy. This can be useful for certain business owners who keep clean records and can show revenue and expenses in a structured way. The P&L may need to be prepared by a qualified professional or meet program-specific standards, depending on the loan option.",
          "A P&L approach may fit borrowers who have a clear business history but need an alternative to traditional tax-return income. It can also help organize the conversation around gross revenue, expenses, net income, and business stability. As with any mortgage option, the full file still matters. Credit, assets, property type, occupancy, loan purpose, and underwriting requirements do not disappear.",
          "Texas entrepreneurs in growing markets like Austin, Frisco, Plano, or McKinney may have expanding businesses that change quickly year to year. A P&L conversation can help identify whether the current business picture supports the loan goal better than older tax documentation. The borrower should be prepared for questions and supporting documentation.",
        ],
      },
      {
        heading: "Non-QM Loans for Unique Borrower Profiles",
        paragraphs: [
          "Non-QM loans are designed for borrowers whose scenario does not fit standard qualified mortgage guidelines. For self-employed borrowers, Non-QM options may include bank statement loans, P&L loans, asset-related documentation, or other alternative approaches. These programs can be useful, but they require careful explanation because terms, pricing, documentation, and eligibility can vary widely.",
          "A Non-QM option may make sense for a borrower purchasing a primary residence, refinancing a current home, or buying an investment property. It may also help borrowers with complex income, recent credit events, multiple businesses, or nontraditional documentation. The key is not simply choosing Non-QM; it is understanding why the program fits and what tradeoffs may exist.",
          "Source One Home Loans works to simplify this review. Borrowers should expect a practical conversation about the loan goal, payment comfort, documentation, timeline, and property. The objective is to identify a responsible path, not force a borrower into a program that does not fit.",
        ],
      },
      {
        heading: "How Texas Business Owners Can Prepare",
        paragraphs: [
          "Start by organizing the basics: identification, business history, recent bank statements, tax returns if available, profit and loss information, asset statements, debt obligations, and the property goal. If the purchase or refinance involves a primary residence, second home, or investment property, say that early because occupancy affects the conversation.",
          "Next, be ready to explain the business in plain language. What services or products does it provide? How long has it operated? Are deposits consistent or seasonal? Are there large one-time deposits? Are there multiple owners? Does income flow through personal accounts, business accounts, or both? These details can matter more than borrowers expect.",
          "Finally, keep the big picture in view. A mortgage should support the borrower's financial goals and comfort level. Self-employed borrowers often have more than one possible path, and the best path may depend on timing, down payment, reserves, credit, and property details. A free consultation can help turn a pile of documents into an organized next step.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can self-employed borrowers qualify without W-2 income?",
        answer:
          "Yes, some self-employed borrowers may qualify through traditional or alternative documentation programs, depending on their full financial profile and program requirements.",
      },
      {
        question: "What is a Texas bank statement loan?",
        answer:
          "A bank statement loan may use bank deposit history as part of the income review for qualified self-employed borrowers when traditional tax-return income does not fully reflect cash flow.",
      },
      {
        question: "What is a P&L loan?",
        answer:
          "A P&L loan may use a prepared profit and loss statement as part of the income documentation strategy, subject to program guidelines and underwriting approval.",
      },
      {
        question: "Are Non-QM loans only for self-employed borrowers?",
        answer:
          "No. Non-QM loans can serve several types of unique borrower scenarios, including investors, borrowers with alternative income, and borrowers whose profile does not fit traditional guidelines.",
      },
    ],
  },
];

export function getProgramBySlug(slug: string) {
  return mortgageProgramPages.find((page) => page.slug === slug);
}

export function getLocationBySlug(slug: string) {
  return locationPages.find((page) => page.slug === slug);
}
