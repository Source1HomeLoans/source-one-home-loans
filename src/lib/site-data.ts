import {
  BadgeDollarSign,
  Banknote,
  BriefcaseBusiness,
  Building2,
  FileCheck2,
  HandCoins,
  Home,
  KeyRound,
  Landmark,
  RefreshCcw,
} from "lucide-react";
import { enableVaLoans } from "@/lib/feature-flags";
import { isPublicWhenVaDisabled } from "@/lib/va-visibility";

export const company = {
  name: "Source One Home Loans",
  phoneDisplay: "(469) 310-0042",
  phoneHref: "tel:+14693100042",
  email: "david@sourceonehomeloans.com",
  emailHref: "mailto:david@sourceonehomeloans.com",
  supportEmail: "support@sourceonehomeloans.com",
  supportEmailHref: "mailto:support@sourceonehomeloans.com",
  nmls: "2812359",
  individualName: "David Bates",
  individualNmls: "2038179",
  domain: "www.sourceonehomeloans.com",
  crmDomain: "crm.sourceonehomeloans.com",
  siteUrl: "https://www.sourceonehomeloans.com",
  borrowerLoginUrl: "https://sourceone.my1003app.com/2038179/register",
  borrowerRegisterUrl: "https://sourceone.my1003app.com/2038179/register",
  nmlsConsumerAccessUrl: "https://www.nmlsconsumeraccess.org/",
  compliance:
    "Loan approvals are subject to credit approval, underwriting guidelines, property approval, and program requirements. Not all applicants will qualify. Rates, terms, and loan programs are subject to change without notice. This website is for informational purposes only and does not constitute a commitment to lend.",
  equalHousing:
    "Source One Home Loans is committed to equal housing opportunity and does not discriminate in mortgage lending on any basis prohibited by applicable federal or state law, including race, color, religion, national origin, sex, familial status, disability, marital status, age, because an applicant receives income from a public-assistance program, or because an applicant has exercised rights under the Consumer Credit Protection Act.",
  consumerAccess:
    "Consumers may verify licensing information through NMLS Consumer Access.",
  texasDisclosure: [
    "TEXAS RESIDENTS: CONSUMERS WISHING TO FILE A COMPLAINT AGAINST A MORTGAGE COMPANY OR RESIDENTIAL MORTGAGE LOAN ORIGINATOR LICENSED IN TEXAS SHOULD SEND A COMPLETED COMPLAINT FORM TO THE DEPARTMENT OF SAVINGS AND MORTGAGE LENDING (SML): 2601 N. LAMAR BLVD., SUITE 201, AUSTIN, TEXAS 78705; TEL: 1-877-276-5550. INFORMATION AND FORMS ARE AVAILABLE ON SML'S WEBSITE: SML.TEXAS.GOV.",
  ],
  formConsent:
    "By checking this box, I agree that Source One Home Loans may contact me at the telephone number provided by call or text message regarding my inquiry. Message and data rates may apply. Message frequency varies. Reply STOP to opt out of text messages and HELP for help. Consent is not a condition of obtaining mortgage services.",
  formDisclaimer:
    "Submitting this form does not constitute a loan application or guarantee approval.",
};

export const founder = {
  name: "David Bates",
  title: "Mortgage Loan Originator",
  image: "/images/david-bates-headshot.jpg",
  imageAlt: "David Bates, Mortgage Loan Originator at Source One Home Loans.",
  shortBio:
    "As the founder of Source One Home Loans, David Bates is committed to helping homebuyers, homeowners, and real estate investors navigate the mortgage process with confidence. He brings experience in mortgage lending, real estate, aerospace quality assurance, and U.S. Navy Reserve service to deliver clear, detail-focused guidance.",
  bio: [
    "As the founder of Source One Home Loans, David Bates is committed to helping homebuyers, homeowners, and real estate investors navigate the mortgage process with confidence.",
    "David brings a unique combination of experience in mortgage lending, real estate, aerospace quality assurance, and U.S. Navy Reserve service. Throughout his career, he has built a reputation for attention to detail, professionalism, and a commitment to delivering exceptional service.",
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

export const allLoanPrograms = [
  {
    title: "Conventional Loans",
    description: "Flexible financing for qualified Texas buyers with competitive terms and a variety of down payment options.",
    icon: Landmark,
    category: "Primary Focus Programs",
    slug: "texas-conventional-loans",
    featured: true,
  },
  {
    title: "Jumbo Loans",
    description: "Financing solutions for higher-value Texas properties that exceed conforming loan limits.",
    icon: Building2,
    category: "Primary Focus Programs",
    slug: "texas-jumbo-loans",
    featured: true,
  },
  {
    title: "VA Loans",
    description: "Home financing benefits for eligible veterans, active-duty service members, and qualifying spouses.",
    icon: BadgeDollarSign,
    category: "Primary Focus Programs",
    slug: "texas-va-loans",
    featured: true,
  },
  {
    title: "First-Time Homebuyer Loans",
    description: "Guidance and financing options designed to help first-time buyers move forward with confidence.",
    icon: KeyRound,
    category: "Secondary Programs",
    slug: "texas-first-time-homebuyer-loans",
    featured: true,
  },
  {
    title: "Texas Self-Employed Mortgages",
    description: "Mortgage guidance for entrepreneurs, contractors, and business owners with complex income profiles.",
    icon: BriefcaseBusiness,
    category: "Secondary Programs",
    slug: "texas-self-employed-mortgages",
    featured: true,
  },
  {
    title: "Investor Property Loans",
    description:
      "Financing solutions for real estate investors purchasing or refinancing rental properties, including DSCR and investor-focused lending programs.",
    icon: HandCoins,
    category: "Secondary Programs",
    slug: "texas-investor-property-loans",
    featured: true,
  },
  {
    title: "FHA Loans",
    description: "Government-backed financing designed to make homeownership more accessible for eligible borrowers.",
    icon: Home,
    category: "Secondary Programs",
    slug: "texas-fha-loans",
    featured: true,
  },
  {
    title: "Bank Statement Loans",
    description: "Alternative income documentation options for self-employed borrowers with strong bank deposit history.",
    icon: Banknote,
    category: "Secondary Programs",
    slug: "texas-bank-statement-loans",
    featured: true,
  },
  {
    title: "Profit & Loss (P&L) Loans",
    description: "A practical path for business owners who can document income through a prepared profit and loss statement.",
    icon: BriefcaseBusiness,
    category: "Secondary Programs",
    slug: "texas-p-l-loans",
    featured: true,
  },
  {
    title: "Non-QM Loans",
    description: "Flexible mortgage solutions for borrowers whose financial profile falls outside traditional guidelines.",
    icon: FileCheck2,
    category: "Secondary Programs",
    slug: "texas-non-qm-loans",
    featured: true,
  },
  {
    title: "Refinance Loans",
    description: "Explore options to adjust your rate, term, monthly payment, or access available home equity.",
    icon: RefreshCcw,
    category: "Secondary Programs",
    slug: "texas-refinance-loans",
    featured: false,
  },
];

export const loanProgramCategories = [
  "Primary Focus Programs",
  "Secondary Programs",
] as const;

export const loanPrograms = allLoanPrograms.filter(isPublicWhenVaDisabled);

const featuredLoanProgramTitles = [
  "Conventional Loans",
  "Jumbo Loans",
  "FHA Loans",
  "Investor Property Loans",
  "Bank Statement Loans",
  "Profit & Loss (P&L) Loans",
  "Non-QM Loans",
];

const enabledFeaturedLoanProgramTitles = enableVaLoans
  ? ["Conventional Loans", "Jumbo Loans", "VA Loans", "Investor Property Loans", "FHA Loans", "Bank Statement Loans", "Profit & Loss (P&L) Loans", "Non-QM Loans"]
  : featuredLoanProgramTitles;

export const featuredLoanPrograms = enabledFeaturedLoanProgramTitles
  .map((title) => loanPrograms.find((program) => program.title === title))
  .filter((program): program is (typeof loanPrograms)[number] => Boolean(program));

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/loan-programs", label: "Loan Programs" },
  { href: "/mortgage-calculator", label: "Mortgage Calculator" },
  { href: "/learning-center", label: "Mortgage Learning Center" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
