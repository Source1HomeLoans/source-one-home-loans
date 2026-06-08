export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishDate: string;
  readTime: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  takeaways: string[];
  content: {
    heading: string;
    paragraphs: string[];
    subheadings?: { heading: string; paragraphs: string[] }[];
  }[];
  faq: { question: string; answer: string }[];
  relatedPosts: string[];
  relatedProgramSlugs: string[];
};

export const blogCategories = [
  "Veteran Homeownership",
  "Mortgage Education",
  "Home Buying Tips",
  "Self-Employed Borrowers",
  "Real Estate Investing",
  "Jumbo Loans",
];

const primaryProgramLinks = ["texas-va-loans", "texas-conventional-loans", "texas-jumbo-loans"];

const standardFaq = (topic: string) => [
  {
    question: `When should I talk with Source One Home Loans about ${topic}?`,
    answer:
      "The best time is before you shop seriously or make a major financing decision. A pre-qualification conversation can help clarify documents, payment comfort, loan options, and next steps.",
  },
  {
    question: "Does pre-qualification mean I am approved?",
    answer:
      "No. Pre-qualification is an early planning step. Loan approvals are subject to credit approval, underwriting guidelines, property approval, and program requirements.",
  },
  {
    question: "Can veterans compare VA, conventional, and jumbo options?",
    answer:
      "Yes. Eligible veterans and active-duty borrowers can review VA benefits alongside conventional and jumbo options when the property, loan amount, and borrower profile make comparison useful.",
  },
];

const standardTakeaways = (topic: string) => [
  `${topic} should be reviewed before borrowers shop seriously or make an offer.`,
  "Source One Home Loans is a Veteran-Owned Mortgage Company with added emphasis on VA, conventional, and jumbo loan planning.",
  "Texas borrowers should include taxes, insurance, HOA dues, documentation, and payment comfort in the conversation.",
  "Pre-qualification is a planning step; final loan approval depends on underwriting, credit, property, and program requirements.",
];

function buildSections(topic: string, audience: string, emphasis: string): BlogPost["content"] {
  return [
    {
      heading: `Understanding ${topic}`,
      paragraphs: [
        `${topic} is an important mortgage planning topic for ${audience}. The right answer depends on the borrower, property, income documentation, credit profile, assets, loan amount, occupancy, and timeline. Source One Home Loans is a Veteran-Owned Mortgage Company, so the conversation is built around service, accountability, and clear guidance rather than one-size-fits-all advice.`,
        `${emphasis} Texas borrowers should also think locally. Property taxes, homeowners insurance, HOA dues, neighborhood price points, and commute patterns can change the affordability conversation from Dallas to Fort Worth, Houston, Austin, San Antonio, Plano, Frisco, McKinney, and Arlington.`,
      ],
      subheadings: [
        {
          heading: "Why the first conversation matters",
          paragraphs: [
            "A strong mortgage conversation starts before a borrower is under contract. It gives time to review documents, compare loan programs, discuss payment comfort, and identify questions that could slow the process later.",
          ],
        },
      ],
    },
    {
      heading: "Documents Borrowers Should Gather",
      paragraphs: [
        "Most borrowers should be ready to discuss pay stubs, W-2s, bank statements, identification, debts, assets, and property goals. Active-duty military borrowers may also need to discuss orders, allowances, service status, and occupancy timing. Veterans may need help reviewing VA eligibility and Certificate of Eligibility questions.",
        "Self-employed borrowers should prepare for a deeper documentation conversation. Tax returns, business bank statements, profit and loss information, and explanations of business income can help determine whether a conventional loan, bank statement loan, P&L loan, Non-QM loan, VA loan, or jumbo strategy deserves review.",
      ],
    },
    {
      heading: "Credit, DTI, and Income Considerations",
      paragraphs: [
        "Credit score preparation matters because credit history can affect available programs, pricing, documentation, and timing. Borrowers should review credit early, avoid new debts, and be ready to explain recent credit events. Paying every account on time and keeping balances controlled can make the pre-qualification conversation more productive.",
        "Debt-to-income ratio considerations are also important. Car payments, credit cards, student loans, personal loans, child support, and other obligations can affect the mortgage review. Employment and income verification help determine whether the file supports the requested payment and loan amount.",
      ],
    },
    {
      heading: "VA, Conventional, and Jumbo Loan Context",
      paragraphs: [
        "VA Loans are a primary focus at Source One Home Loans. Eligible veterans, active-duty service members, and qualifying spouses should review VA benefits early, especially when no-down-payment options, VA eligibility, and service-related documentation are part of the conversation.",
        "Conventional Loans can be a strong fit for qualified borrowers with traditional documentation, stable income, and a loan amount within program limits. Jumbo Loans may be needed for higher-value Texas homes or larger loan amounts. Comparing VA, conventional, and jumbo options helps borrowers understand cash to close, payment, documentation, and long-term strategy.",
      ],
    },
    {
      heading: "Texas-Specific Planning",
      paragraphs: [
        "Texas homebuyers should not evaluate affordability from principal and interest alone. Property taxes, homeowners insurance, HOA dues, and local market conditions can materially affect payment comfort. A home in Houston may require a different insurance conversation than a home in Plano or San Antonio. A higher-value property in Austin or Frisco may require jumbo preparation.",
        "First-time buyers may need extra education around earnest money, inspections, appraisal timing, and closing costs. Real estate investors should also review rental income, DSCR concepts, reserves, and whether investor property financing is a better fit than a traditional owner-occupied loan.",
      ],
    },
    {
      heading: "Common Mistakes to Avoid",
      paragraphs: [
        "Common mistakes include shopping before pre-qualification, opening new credit, moving money without documentation, changing jobs without discussing the impact, ignoring taxes and insurance, or assuming one program is always best. Mortgage planning works better when the borrower compares real numbers and real documentation.",
        "Another mistake is waiting until after an offer is accepted to ask detailed questions. Borrowers should understand the loan path, documents, payment estimate, and program fit before the clock is running. Source One Home Loans helps borrowers move from uncertainty to a practical next step.",
      ],
    },
    {
      heading: "Call to Action",
      paragraphs: [
        "Ready to explore your options? Start with a focused pre-qualification conversation or schedule a consultation with Source One Home Loans. David Bates can help review VA, conventional, jumbo, self-employed, and investor scenarios with clear next steps.",
      ],
    },
  ];
}

const posts: Omit<BlogPost, "content" | "faq" | "relatedProgramSlugs" | "takeaways">[] = [
  {
    slug: "how-texas-buyers-can-prepare-for-pre-qualification",
    title: "How Texas Buyers Can Prepare for Mortgage Pre-Qualification",
    excerpt: "A practical Texas mortgage pre-qualification guide covering documents, credit, DTI, VA, conventional, jumbo, and self-employed considerations.",
    category: "Mortgage Education",
    publishDate: "2026-06-07",
    readTime: "9 min read",
    metaTitle: "Texas Mortgage Pre-Qualification Guide | Source One Home Loans",
    metaDescription: "Learn how Texas buyers can prepare for mortgage pre-qualification, including documents, credit, DTI, VA loans, conventional loans, and jumbo loans.",
    keywords: ["mortgage pre-qualification Texas", "mortgage pre-approval", "Texas VA Loans", "Conventional Loans Texas", "Texas Jumbo Loans"],
    relatedPosts: ["mortgage-pre-approval-vs-pre-qualification", "first-time-homebuyer-guide-texas", "texas-va-loan-benefits-for-veterans"],
  },
  {
    slug: "texas-va-loan-benefits-for-veterans",
    title: "Texas VA Loan Benefits for Veterans",
    excerpt: "A veteran-focused guide to VA loan benefits, eligibility conversations, Texas costs, and how VA compares with conventional and jumbo loans.",
    category: "Veteran Homeownership",
    publishDate: "2026-06-07",
    readTime: "9 min read",
    metaTitle: "Texas VA Loan Benefits for Veterans | Source One Home Loans",
    metaDescription: "Explore Texas VA loan benefits for eligible veterans, active-duty service members, and qualifying spouses with a Veteran-Owned Mortgage Company.",
    keywords: ["Texas VA Loans", "Veteran Mortgage Texas", "VA loan benefits", "VA Mortgage Broker Texas"],
    relatedPosts: ["va-loans-vs-conventional-loans", "how-veterans-can-buy-a-home-with-no-down-payment", "texas-veterans-home-buying-guide"],
  },
  {
    slug: "va-loans-vs-conventional-loans",
    title: "VA Loans vs Conventional Loans",
    excerpt: "Compare VA and conventional loans for Texas military borrowers, including cash to close, mortgage insurance, property requirements, and strategy.",
    category: "Veteran Homeownership",
    publishDate: "2026-06-07",
    readTime: "8 min read",
    metaTitle: "VA Loans vs Conventional Loans | Source One Home Loans",
    metaDescription: "Compare VA loans and conventional loans for eligible Texas veterans and active-duty borrowers deciding which mortgage option may fit.",
    keywords: ["VA loans vs conventional loans", "Texas VA Loans", "Conventional Loans Texas"],
    relatedPosts: ["texas-va-loan-benefits-for-veterans", "texas-conventional-loan-requirements", "texas-jumbo-loan-guide"],
  },
  {
    slug: "texas-jumbo-loan-guide",
    title: "Texas Jumbo Loan Guide",
    excerpt: "A guide to jumbo loan preparation for higher-value Texas homes, including documentation, reserves, credit, and comparison with conventional loans.",
    category: "Jumbo Loans",
    publishDate: "2026-06-07",
    readTime: "8 min read",
    metaTitle: "Texas Jumbo Loan Guide | Source One Home Loans",
    metaDescription: "Learn how Texas jumbo loans work for higher-value homes, including loan amount, documentation, reserves, and conventional loan comparisons.",
    keywords: ["Texas Jumbo Loans", "jumbo loan guide Texas", "luxury home financing Texas"],
    relatedPosts: ["va-loans-vs-conventional-loans", "texas-conventional-loan-requirements", "how-texas-buyers-can-prepare-for-pre-qualification"],
  },
  {
    slug: "texas-conventional-loan-requirements",
    title: "Texas Conventional Loan Requirements",
    excerpt: "A Texas conventional mortgage guide covering credit, income, assets, down payment, mortgage insurance, and first-time buyer planning.",
    category: "Mortgage Education",
    publishDate: "2026-06-07",
    readTime: "8 min read",
    metaTitle: "Texas Conventional Loan Requirements | Source One Home Loans",
    metaDescription: "Review Texas conventional loan requirements, including credit, income, assets, down payment, mortgage insurance, and property approval.",
    keywords: ["Conventional Loans Texas", "conventional loan requirements", "Texas home loan"],
    relatedPosts: ["va-loans-vs-conventional-loans", "first-time-homebuyer-guide-texas", "texas-jumbo-loan-guide"],
  },
  {
    slug: "texas-bank-statement-loans",
    title: "Texas Bank Statement Loans",
    excerpt: "A self-employed borrower guide to Texas bank statement loans, deposit review, business documentation, and alternative mortgage options.",
    category: "Self-Employed Borrowers",
    publishDate: "2026-06-07",
    readTime: "8 min read",
    metaTitle: "Texas Bank Statement Loans | Source One Home Loans",
    metaDescription: "Explore Texas bank statement loans for self-employed borrowers and business owners who need alternative income documentation.",
    keywords: ["Texas Bank Statement Loans", "self-employed mortgage Texas", "bank statement mortgage"],
    relatedPosts: ["texas-self-employed-mortgage-options", "texas-conventional-loan-requirements", "how-texas-buyers-can-prepare-for-pre-qualification"],
  },
  {
    slug: "texas-self-employed-mortgage-options",
    title: "Texas Self-Employed Mortgage Options",
    excerpt: "A guide for Texas business owners comparing bank statement, P&L, Non-QM, conventional, VA, and jumbo mortgage paths.",
    category: "Self-Employed Borrowers",
    publishDate: "2026-06-07",
    readTime: "9 min read",
    metaTitle: "Texas Self-Employed Mortgage Options | Source One Home Loans",
    metaDescription: "Learn about Texas self-employed mortgage options, including bank statement loans, P&L loans, Non-QM loans, conventional loans, and jumbo loans.",
    keywords: ["Texas Self-Employed Mortgages", "self-employed mortgage options", "Non-QM loans Texas"],
    relatedPosts: ["texas-bank-statement-loans", "texas-conventional-loan-requirements", "texas-jumbo-loan-guide"],
  },
  {
    slug: "texas-investor-property-loans",
    title: "Texas Investor Property Loans",
    excerpt: "A real estate investor guide to rental property financing, DSCR concepts, refinance planning, and investor-focused mortgage conversations.",
    category: "Real Estate Investing",
    publishDate: "2026-06-07",
    readTime: "8 min read",
    metaTitle: "Texas Investor Property Loans | Source One Home Loans",
    metaDescription: "Explore Texas investor property loans, including DSCR and rental property financing for real estate investors purchasing or refinancing.",
    keywords: ["Texas Investor Property Loans", "DSCR Loans", "rental property financing Texas"],
    relatedPosts: ["texas-bank-statement-loans", "texas-jumbo-loan-guide", "how-texas-buyers-can-prepare-for-pre-qualification"],
  },
  {
    slug: "mortgage-pre-approval-vs-pre-qualification",
    title: "Mortgage Pre-Approval vs Pre-Qualification",
    excerpt: "Understand the difference between mortgage pre-qualification and pre-approval so Texas buyers can prepare with realistic expectations.",
    category: "Mortgage Education",
    publishDate: "2026-06-07",
    readTime: "8 min read",
    metaTitle: "Mortgage Pre-Approval vs Pre-Qualification | Source One Home Loans",
    metaDescription: "Compare mortgage pre-approval and pre-qualification for Texas homebuyers preparing for VA, conventional, jumbo, or self-employed mortgage options.",
    keywords: ["mortgage pre-approval vs pre-qualification", "Texas mortgage pre-approval", "Get Pre-Qualified"],
    relatedPosts: ["how-texas-buyers-can-prepare-for-pre-qualification", "first-time-homebuyer-guide-texas", "texas-conventional-loan-requirements"],
  },
  {
    slug: "first-time-homebuyer-guide-texas",
    title: "First-Time Homebuyer Guide Texas",
    excerpt: "A Texas first-time buyer guide covering pre-qualification, documents, loan comparisons, VA benefits, conventional options, and common mistakes.",
    category: "Home Buying Tips",
    publishDate: "2026-06-07",
    readTime: "9 min read",
    metaTitle: "First-Time Homebuyer Guide Texas | Source One Home Loans",
    metaDescription: "A Texas first-time homebuyer guide covering pre-qualification, documents, VA loans, conventional loans, jumbo loans, and common mistakes.",
    keywords: ["first-time homebuyer guide Texas", "Texas first-time homebuyer", "Texas VA Loans", "Conventional Loans Texas"],
    relatedPosts: ["how-texas-buyers-can-prepare-for-pre-qualification", "mortgage-pre-approval-vs-pre-qualification", "texas-va-loan-benefits-for-veterans"],
  },
];

const focusBySlug: Record<string, string> = {
  "texas-va-loan-benefits-for-veterans":
    "The search intent is VA benefit education, so this article focuses on eligible veterans, active-duty service members, qualifying spouses, no-down-payment conversations, VA funding fee questions, and how a Veteran-Owned Mortgage Company can guide the process.",
  "va-loans-vs-conventional-loans":
    "The search intent is comparison, so this article focuses on down payment, mortgage insurance, VA funding fee, credit, property requirements, and when conventional or jumbo financing may deserve review.",
  "texas-jumbo-loan-guide":
    "The search intent is jumbo preparation, so this article focuses on higher-value Texas homes, stronger documentation, reserves, asset review, credit preparation, and conventional loan comparisons.",
  "texas-conventional-loan-requirements":
    "The search intent is conventional eligibility, so this article focuses on income, credit, assets, down payment, mortgage insurance, property approval, and first-time buyer considerations.",
  "texas-bank-statement-loans":
    "The search intent is alternative income documentation, so this article focuses on deposit patterns, business accounts, expense factors, self-employed borrower preparation, and Non-QM alternatives.",
  "texas-self-employed-mortgage-options":
    "The search intent is self-employed mortgage planning, so this article focuses on bank statement loans, P&L loans, Non-QM loans, conventional options, jumbo preparation, and business-owner documentation.",
  "texas-investor-property-loans":
    "The search intent is investor financing, so this article focuses on rental property purchases, DSCR concepts, cash-flow review, reserves, refinance strategy, and Texas investment property examples.",
  "mortgage-pre-approval-vs-pre-qualification":
    "The search intent is terminology and readiness, so this article explains the difference between early pre-qualification and more documented pre-approval while keeping underwriting approval expectations clear.",
  "first-time-homebuyer-guide-texas":
    "The search intent is first-time buyer education, so this article focuses on readiness, documents, credit, cash to close, VA benefits, conventional loans, and common Texas homebuyer mistakes.",
};

export const blogPosts: BlogPost[] = posts.map((post) => ({
  ...post,
  takeaways: standardTakeaways(post.title),
  relatedProgramSlugs: primaryProgramLinks,
  faq: standardFaq(post.title),
  content: buildSections(post.title, post.category.toLowerCase(), focusBySlug[post.slug] ?? "This article focuses on mortgage readiness, program comparison, and practical Texas borrower planning."),
}));

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
