export type LoanProgramPage = {
  slug: string;
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  goodFit: string[];
  notIdeal: string[];
  documentation: string[];
};

export const loanProgramPages: LoanProgramPage[] = [
  {
    slug: "conventional-loans",
    title: "Conventional Loans",
    description:
      "Conventional loans are a common mortgage option for qualified buyers who want flexible financing for a primary residence, second home, or certain investment property scenarios.",
    metaTitle: "Conventional Loans | Source One Home Loans",
    metaDescription:
      "Explore conventional loan options for Texas homebuyers, including common qualification factors, documentation, and next steps with Source One Home Loans.",
    goodFit: [
      "You have steady income and want a mainstream mortgage option.",
      "You are purchasing or refinancing a primary residence, second home, or eligible investment property.",
      "You want to compare down payment, term, and mortgage insurance options.",
    ],
    notIdeal: [
      "Your credit, income, or property scenario does not fit standard agency guidelines.",
      "You need an alternative income documentation program.",
      "You may qualify for a VA loan benefit that better fits your goals.",
    ],
    documentation: [
      "Government-issued photo ID",
      "Recent pay stubs, W-2s, or income documentation",
      "Bank statements and asset documentation",
      "Credit authorization",
      "Purchase contract or current mortgage statement if applicable",
    ],
  },
  {
    slug: "jumbo-loans",
    title: "Jumbo Loans",
    description:
      "Jumbo loans are designed for higher-value homes where the loan amount exceeds standard conforming loan limits.",
    metaTitle: "Jumbo Loans | Source One Home Loans",
    metaDescription:
      "Learn about jumbo loan options for higher-value Texas properties, including reserves, documentation, and qualification considerations.",
    goodFit: [
      "You are buying or refinancing a higher-value home in Texas.",
      "Your loan amount is above conforming loan limits.",
      "You have strong credit, documented income, and sufficient assets or reserves.",
    ],
    notIdeal: [
      "You are looking for a low-documentation loan with minimal reserves.",
      "Your purchase price or loan amount fits within standard conforming limits.",
      "Your income or assets need more flexible underwriting than jumbo guidelines allow.",
    ],
    documentation: [
      "Government-issued photo ID",
      "Income documentation such as pay stubs, W-2s, tax returns, or business income records",
      "Bank, brokerage, retirement, and reserve statements",
      "Credit authorization",
      "Property details, purchase contract, or current mortgage statement",
    ],
  },
  {
    slug: "va-loans",
    title: "VA Loans",
    description:
      "VA loans provide home financing benefits for eligible veterans, active-duty service members, and qualifying surviving spouses.",
    metaTitle: "VA Loans | Source One Home Loans",
    metaDescription:
      "Explore VA loan options for eligible Texas veterans, active-duty service members, and qualifying spouses with Source One Home Loans.",
    goodFit: [
      "You are an eligible veteran, active-duty service member, or qualifying surviving spouse.",
      "You want to explore a mortgage option that may allow no down payment for qualified borrowers.",
      "You are buying or refinancing an eligible primary residence.",
    ],
    notIdeal: [
      "You do not meet VA eligibility requirements.",
      "The property will not be used as an eligible primary residence.",
      "Another loan program better matches your occupancy, property, or documentation goals.",
    ],
    documentation: [
      "Certificate of Eligibility or information needed to request it",
      "Government-issued photo ID",
      "Income documentation such as LES, pay stubs, W-2s, or retirement/disability income records",
      "Bank statements and asset documentation",
      "Purchase contract or current mortgage statement if applicable",
    ],
  },
  {
    slug: "investor-property-loans",
    title: "Investor Property Loans",
    description:
      "Investor property loans help real estate investors purchase or refinance rental properties using DSCR and other investor-focused loan programs.",
    metaTitle: "Investor Property Loans | Source One Home Loans",
    metaDescription:
      "Explore investor property loan options for Texas rental properties, including DSCR and investor-focused financing solutions.",
    goodFit: [
      "You are purchasing or refinancing a rental property.",
      "You want financing reviewed around investment property goals.",
      "You need to compare DSCR and other investor-focused loan options.",
    ],
    notIdeal: [
      "You are buying a primary residence and need owner-occupied financing.",
      "The property does not have a realistic rental income or investment plan.",
      "You need a loan program that relies only on traditional personal income qualification.",
    ],
    documentation: [
      "Government-issued photo ID",
      "Property address and rental income details",
      "Lease, market rent estimate, or operating information when available",
      "Bank statements and asset documentation",
      "Entity documents if purchasing through an LLC or business entity",
    ],
  },
  {
    slug: "fha-loans",
    title: "FHA Loans",
    description:
      "FHA loans are government-backed mortgages that may help eligible borrowers purchase or refinance with more flexible credit and down payment options.",
    metaTitle: "FHA Loans | Source One Home Loans",
    metaDescription:
      "Learn how FHA loans may help eligible Texas borrowers with flexible credit, down payment, and home financing options.",
    goodFit: [
      "You want to explore a government-backed mortgage option.",
      "You may benefit from flexible credit or down payment guidelines.",
      "You are buying or refinancing an eligible primary residence.",
    ],
    notIdeal: [
      "You are purchasing an investment property.",
      "You want to avoid FHA mortgage insurance requirements.",
      "A conventional, VA, jumbo, or alternative program better fits your profile.",
    ],
    documentation: [
      "Government-issued photo ID",
      "Recent pay stubs, W-2s, tax returns, or other income documentation",
      "Bank statements and asset documentation",
      "Credit authorization",
      "Purchase contract or current mortgage statement if applicable",
    ],
  },
  {
    slug: "bank-statement-loans",
    title: "Bank Statement Loans",
    description:
      "Bank statement loans are alternative income documentation options for qualified self-employed borrowers with strong deposit history.",
    metaTitle: "Bank Statement Loans | Source One Home Loans",
    metaDescription:
      "Explore bank statement loan options for self-employed Texas borrowers who may not fit traditional income documentation guidelines.",
    goodFit: [
      "You are self-employed or own a business.",
      "Your bank deposits better reflect your income than traditional tax return income.",
      "You want to explore alternative income documentation options.",
    ],
    notIdeal: [
      "You are a W-2 borrower with straightforward income documentation.",
      "Your bank deposits are inconsistent or difficult to document.",
      "A conventional, FHA, VA, or jumbo loan offers better terms for your profile.",
    ],
    documentation: [
      "Government-issued photo ID",
      "Personal or business bank statements",
      "Business license, CPA letter, or proof of self-employment when applicable",
      "Bank statements and asset documentation for funds to close",
      "Purchase contract or current mortgage statement if applicable",
    ],
  },
  {
    slug: "profit-and-loss-loans",
    title: "Profit & Loss Loans",
    description:
      "Profit and loss loans may help qualified business owners document income using a prepared P&L statement instead of relying only on traditional income documents.",
    metaTitle: "Profit & Loss Loans | Source One Home Loans",
    metaDescription:
      "Learn about P&L loan options for Texas business owners who need alternative income documentation for mortgage financing.",
    goodFit: [
      "You own a business and need an alternative way to document income.",
      "A prepared profit and loss statement gives a clearer picture of current business performance.",
      "You want to compare Non-QM and self-employed mortgage options.",
    ],
    notIdeal: [
      "Your income is easily documented with W-2s, pay stubs, and tax returns.",
      "Your business financials are not current or organized.",
      "A standard conventional, FHA, VA, or jumbo program is a better fit.",
    ],
    documentation: [
      "Government-issued photo ID",
      "Prepared profit and loss statement",
      "Business bank statements or supporting business records",
      "Proof of business ownership or self-employment",
      "Asset documentation and property details",
    ],
  },
  {
    slug: "non-qm-loans",
    title: "Non-QM Loans",
    description:
      "Non-QM loans are flexible mortgage options for qualified borrowers whose income, credit, property, or investment scenario falls outside traditional guidelines.",
    metaTitle: "Non-QM Loans | Source One Home Loans",
    metaDescription:
      "Explore Non-QM mortgage options for Texas borrowers with complex income, investor, or alternative documentation scenarios.",
    goodFit: [
      "Your financial profile does not fit standard agency mortgage guidelines.",
      "You need alternative income documentation or an investor-focused loan review.",
      "You want to compare flexible mortgage options with clear guidance.",
    ],
    notIdeal: [
      "You qualify cleanly for a traditional conventional, FHA, VA, or jumbo loan.",
      "You are seeking a no-review loan without underwriting.",
      "Your scenario does not meet credit, property, asset, or program requirements.",
    ],
    documentation: [
      "Government-issued photo ID",
      "Income documentation based on the selected Non-QM program",
      "Bank statements and asset documentation",
      "Property details and occupancy or investment purpose",
      "Entity documents if applicable",
    ],
  },
];

export function getLoanProgramPageBySlug(slug: string) {
  return loanProgramPages.find((page) => page.slug === slug);
}

export const loanProgramSlugByTitle = new Map(
  [
    ...loanProgramPages.map((page) => [page.title, page.slug] as const),
    ["Real Estate Investor Loans", "investor-property-loans"] as const,
    ["Profit & Loss (P&L) Loans", "profit-and-loss-loans"] as const,
  ],
);
