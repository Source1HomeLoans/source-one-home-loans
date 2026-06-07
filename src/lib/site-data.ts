import {
  BadgeDollarSign,
  Banknote,
  BriefcaseBusiness,
  Building2,
  FileCheck2,
  FileText,
  HandCoins,
  Home,
  KeyRound,
  Landmark,
  RefreshCcw,
} from "lucide-react";

export const company = {
  name: "Source One Home Loans",
  phoneDisplay: "(469) 310-0042",
  phoneHref: "tel:+14693100042",
  email: "david@sourceonehomeloans.com",
  emailHref: "mailto:david@sourceonehomeloans.com",
  nmls: "2812359",
  individualName: "David Bates",
  individualNmls: "2038179",
  domain: "www.sourceonehomeloans.com",
  crmDomain: "crm.sourceonehomeloans.com",
  siteUrl: "https://www.sourceonehomeloans.com",
  nmlsConsumerAccessUrl: "https://www.nmlsconsumeraccess.org/",
  compliance:
    "Loan approvals are subject to credit approval, underwriting guidelines, property approval, and program requirements. Not all applicants will qualify. Rates, terms, and loan programs are subject to change without notice. This website is for informational purposes only and does not constitute a commitment to lend.",
  equalHousing:
    "Source One Home Loans is an Equal Housing Opportunity mortgage company. We do not discriminate on the basis of race, color, religion, national origin, sex, marital status, age, receipt of public assistance, disability, or any other protected status under applicable law.",
  consumerAccess:
    "Consumers may verify licensing information through NMLS Consumer Access.",
  texasDisclosure: [
    "CONSUMERS WISHING TO FILE A COMPLAINT AGAINST A COMPANY OR A RESIDENTIAL MORTGAGE LOAN ORIGINATOR SHOULD COMPLETE AND SEND A COMPLAINT FORM TO THE TEXAS DEPARTMENT OF SAVINGS AND MORTGAGE LENDING, 2601 NORTH LAMAR, SUITE 201, AUSTIN, TEXAS 78705. COMPLAINT FORMS AND INSTRUCTIONS MAY BE OBTAINED FROM THE DEPARTMENT’S WEBSITE AT WWW.SML.TEXAS.GOV. A TOLL-FREE CONSUMER HOTLINE IS AVAILABLE AT 1-877-276-5550.",
    "THE DEPARTMENT MAINTAINS A RECOVERY FUND TO MAKE PAYMENTS OF CERTAIN ACTUAL OUT OF POCKET DAMAGES SUSTAINED BY BORROWERS CAUSED BY ACTS OF LICENSED RESIDENTIAL MORTGAGE LOAN ORIGINATORS. A WRITTEN APPLICATION FOR REIMBURSEMENT FROM THE RECOVERY FUND MUST BE FILED WITH AND INVESTIGATED BY THE DEPARTMENT PRIOR TO THE PAYMENT OF A CLAIM. FOR MORE INFORMATION ABOUT THE RECOVERY FUND, PLEASE CONSULT THE DEPARTMENT’S WEBSITE AT WWW.SML.TEXAS.GOV.",
  ],
  formConsent:
    "I consent to be contacted by Source One Home Loans by phone, text, or email. Message and data rates may apply.",
  formDisclaimer:
    "Submitting this form does not constitute a loan application or guarantee approval.",
};

export const founder = {
  name: "David Bates",
  title: "Mortgage Loan Originator",
  image: "/images/david-bates-headshot.jpg",
  imageAlt: "David Bates, Mortgage Loan Originator at Source One Home Loans.",
  shortBio:
    "As the founder of Source One Home Loans, David Bates is committed to helping homebuyers, homeowners, and real estate investors navigate the mortgage process with confidence. He brings experience in mortgage lending, real estate, military service, and aerospace quality assurance to deliver clear, detail-focused guidance.",
  bio: [
    "As the founder of Source One Home Loans, David Bates is committed to helping homebuyers, homeowners, and real estate investors navigate the mortgage process with confidence.",
    "David brings a unique combination of experience in mortgage lending, real estate, military service, and aerospace quality assurance. Throughout his career, he has built a reputation for attention to detail, professionalism, and a commitment to delivering exceptional service.",
    "As a licensed Mortgage Loan Originator, NMLS #2038179, David specializes in helping borrowers find financing solutions that fit their individual goals. Whether you're purchasing your first home, refinancing an existing mortgage, investing in rental properties, or exploring alternative income programs such as Investor Property, Bank Statement, P&L, or Non-QM loans, David works to simplify the process and provide clear guidance every step of the way.",
    "At Source One Home Loans, the focus is simple: provide honest advice, responsive communication, and mortgage solutions tailored to your needs.",
    "Your Home. Your Future. Our Focus.",
  ],
  signature: [
    "David Bates",
    "Mortgage Loan Originator",
    "Individual NMLS #2038179",
    "Source One Home Loans",
    "Company NMLS #2812359",
  ],
};

export const loanPrograms = [
  {
    title: "Conventional Loans",
    description: "Flexible financing for qualified buyers with competitive terms and a variety of down payment options.",
    icon: Landmark,
    category: "Traditional Loans",
    featured: true,
  },
  {
    title: "FHA Loans",
    description: "Government-backed financing designed to make homeownership more accessible for eligible borrowers.",
    icon: Home,
    category: "Traditional Loans",
    featured: true,
  },
  {
    title: "VA Loans",
    description: "Home financing benefits for eligible veterans, active-duty service members, and qualifying spouses.",
    icon: BadgeDollarSign,
    category: "Traditional Loans",
    featured: true,
  },
  {
    title: "Jumbo Loans",
    description: "Financing solutions for higher-value properties that exceed conforming loan limits.",
    icon: Building2,
    category: "Traditional Loans",
    featured: false,
  },
  {
    title: "Bank Statement Loans",
    description: "Alternative income documentation options for self-employed borrowers with strong bank deposit history.",
    icon: Banknote,
    category: "Self-Employed & Alternative Income",
    featured: true,
  },
  {
    title: "Profit & Loss (P&L) Loans",
    description: "A practical path for business owners who can document income through a prepared profit and loss statement.",
    icon: BriefcaseBusiness,
    category: "Self-Employed & Alternative Income",
    featured: true,
  },
  {
    title: "No Doc Loans",
    description: "Select financing options for qualified borrowers with unique income documentation needs.",
    icon: FileText,
    category: "Self-Employed & Alternative Income",
    featured: true,
  },
  {
    title: "Non-QM Loans",
    description: "Flexible mortgage solutions for borrowers whose financial profile falls outside traditional guidelines.",
    icon: FileCheck2,
    category: "Self-Employed & Alternative Income",
    featured: false,
  },
  {
    title: "Real Estate Investor Loans",
    description:
      "Financing solutions for real estate investors purchasing or refinancing rental properties, including DSCR and investor-focused lending programs.",
    icon: HandCoins,
    category: "Real Estate Investor Loans",
    featured: true,
  },
  {
    title: "Refinance Loans",
    description: "Explore options to adjust your rate, term, monthly payment, or access available home equity.",
    icon: RefreshCcw,
    category: "Additional Programs",
    featured: false,
  },
  {
    title: "First-Time Homebuyer Loans",
    description: "Guidance and financing options designed to help first-time buyers move forward with confidence.",
    icon: KeyRound,
    category: "Additional Programs",
    featured: false,
  },
];

export const loanProgramCategories = [
  "Traditional Loans",
  "Self-Employed & Alternative Income",
  "Real Estate Investor Loans",
  "Additional Programs",
] as const;

const featuredLoanProgramTitles = [
  "Conventional Loans",
  "FHA Loans",
  "VA Loans",
  "Real Estate Investor Loans",
  "Bank Statement Loans",
  "Profit & Loss (P&L) Loans",
  "No Doc Loans",
];

export const featuredLoanPrograms = featuredLoanProgramTitles.map(
  (title) => loanPrograms.find((program) => program.title === title)!,
);

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/loan-programs", label: "Loan Programs" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
