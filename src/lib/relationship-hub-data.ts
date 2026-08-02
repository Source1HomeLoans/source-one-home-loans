export type ContactCategory =
  | "Borrower"
  | "Realtor"
  | "CPA"
  | "Financial Advisor"
  | "Insurance Agent"
  | "Attorney"
  | "Builder"
  | "Investor"
  | "Title Company"
  | "Lender"
  | "Past Client"
  | "Prospect"
  | "Other";

export type RelationshipTier = "Top Relationship" | "Strong Relationship" | "Active Relationship" | "Developing Relationship" | "Needs Attention";

export type ContactTask = {
  id: string;
  title: string;
  contactId: string;
  assignedUser: string;
  dueAt: string;
  priority: "Low" | "Normal" | "High";
  status: "Today" | "Upcoming" | "Overdue" | "Completed";
  notes: string;
};

export type TimelineEvent = {
  id: string;
  contactId: string;
  eventType: string;
  title: string;
  description: string;
  createdBy: string;
  createdAt: string;
};

export type ContactFile = {
  id: string;
  contactId: string;
  fileName: string;
  fileType: string;
  uploadedBy: string;
  createdAt: string;
};

export type RelationshipContact = {
  id: string;
  firstName: string;
  lastName: string;
  company: string;
  jobTitle: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  birthday: string;
  category: ContactCategory;
  tags: string[];
  relationshipScore: number;
  relationshipTier: RelationshipTier;
  assignedUser: string;
  lastContactedAt: string;
  nextFollowUpAt: string;
  followUpFrequency: string;
  followUpStatus: "Current" | "Due Today" | "Overdue";
  preferredContactMethod: "Call" | "Text" | "Email";
  referredBy: string;
  referralCount: number;
  completedTasks: number;
  meetingsCompleted: number;
  closedLoans: number;
  notes: string[];
  mortgageDetails?: {
    loanPurpose: string;
    loanProgram: string;
    estimatedLoanAmount: string;
    propertyState: string;
    ariveStatus: string;
    ariveLoanId: string;
    lastSyncedAt: string;
    syncError: string;
  };
};

export const contactCategories: ContactCategory[] = [
  "Borrower",
  "Realtor",
  "CPA",
  "Financial Advisor",
  "Insurance Agent",
  "Attorney",
  "Builder",
  "Investor",
  "Title Company",
  "Lender",
  "Past Client",
  "Prospect",
  "Other",
];

export const suggestedTags = [
  { name: "VA", color: "#C8A44D" },
  { name: "FHA", color: "#6B8AFD" },
  { name: "Conventional", color: "#0B1F3A" },
  { name: "DSCR", color: "#22A06B" },
  { name: "Non-QM", color: "#A855F7" },
  { name: "Investor", color: "#F97316" },
  { name: "Luxury", color: "#C8A44D" },
  { name: "Spanish", color: "#14B8A6" },
  { name: "Dallas", color: "#2563EB" },
  { name: "Austin", color: "#7C3AED" },
  { name: "Houston", color: "#0EA5E9" },
  { name: "San Antonio", color: "#EF4444" },
  { name: "Veteran", color: "#0B1F3A" },
  { name: "Repeat Client", color: "#22C55E" },
  { name: "Past Client", color: "#64748B" },
  { name: "Hot Lead", color: "#DC2626" },
  { name: "Referral Partner", color: "#C8A44D" },
  { name: "Top Partner", color: "#C8A44D" },
  { name: "Needs Follow-up", color: "#EA580C" },
  { name: "Birthday", color: "#EC4899" },
  { name: "Builder", color: "#475569" },
  { name: "First-Time Buyer", color: "#16A34A" },
];

export const relationshipContacts: RelationshipContact[] = [
  {
    id: "c-001",
    firstName: "David",
    lastName: "Smith",
    company: "Ebby Halliday",
    jobTitle: "Realtor",
    email: "david.smith@example.com",
    phone: "(469) 555-0142",
    address: "2100 McKinney Ave",
    city: "Dallas",
    state: "TX",
    zip: "75201",
    birthday: "2026-07-18",
    category: "Realtor",
    tags: ["Top Partner", "Dallas", "Referral Partner", "Luxury"],
    relationshipScore: 98,
    relationshipTier: "Top Relationship",
    assignedUser: "David Bates",
    lastContactedAt: "2026-08-01T15:30:00-05:00",
    nextFollowUpAt: "2026-08-05T09:00:00-05:00",
    followUpFrequency: "Weekly",
    followUpStatus: "Current",
    preferredContactMethod: "Text",
    referredBy: "Networking lunch",
    referralCount: 12,
    completedTasks: 18,
    meetingsCompleted: 9,
    closedLoans: 4,
    notes: ["Prefers fast text updates.", "Focuses on Dallas luxury listings and move-up buyers."],
  },
  {
    id: "c-002",
    firstName: "Maria",
    lastName: "Garcia",
    company: "Garcia Family Holdings",
    jobTitle: "Real Estate Investor",
    email: "maria.garcia@example.com",
    phone: "(214) 555-0188",
    address: "510 W 7th St",
    city: "Fort Worth",
    state: "TX",
    zip: "76102",
    birthday: "2026-08-09",
    category: "Investor",
    tags: ["Investor", "DSCR", "Spanish", "Needs Follow-up"],
    relationshipScore: 72,
    relationshipTier: "Active Relationship",
    assignedUser: "David Bates",
    lastContactedAt: "2026-07-20T10:15:00-05:00",
    nextFollowUpAt: "2026-08-02T11:00:00-05:00",
    followUpFrequency: "Biweekly",
    followUpStatus: "Due Today",
    preferredContactMethod: "Call",
    referredBy: "David Smith",
    referralCount: 2,
    completedTasks: 5,
    meetingsCompleted: 3,
    closedLoans: 1,
    notes: ["Looking at rental property cash flow options.", "Ask about LLC vesting and property count."],
    mortgageDetails: {
      loanPurpose: "Purchase",
      loanProgram: "Investor Property Loans",
      estimatedLoanAmount: "$525,000",
      propertyState: "TX",
      ariveStatus: "Ready to send",
      ariveLoanId: "",
      lastSyncedAt: "",
      syncError: "",
    },
  },
  {
    id: "c-003",
    firstName: "John",
    lastName: "Miller",
    company: "PennyMac",
    jobTitle: "Account Executive",
    email: "john.miller@example.com",
    phone: "(972) 555-0121",
    address: "7700 Windrose Ave",
    city: "Plano",
    state: "TX",
    zip: "75024",
    birthday: "2026-11-04",
    category: "Lender",
    tags: ["Conventional", "Jumbo", "Referral Partner"],
    relationshipScore: 81,
    relationshipTier: "Strong Relationship",
    assignedUser: "David Bates",
    lastContactedAt: "2026-07-31T16:45:00-05:00",
    nextFollowUpAt: "2026-08-14T10:00:00-05:00",
    followUpFrequency: "Monthly",
    followUpStatus: "Current",
    preferredContactMethod: "Email",
    referredBy: "Wholesale network",
    referralCount: 4,
    completedTasks: 11,
    meetingsCompleted: 6,
    closedLoans: 0,
    notes: ["Good resource for jumbo scenarios.", "Send clean summaries with pricing questions."],
  },
  {
    id: "c-004",
    firstName: "Angela",
    lastName: "Reed",
    company: "Reed CPA Group",
    jobTitle: "CPA",
    email: "angela.reed@example.com",
    phone: "(512) 555-0177",
    address: "600 Congress Ave",
    city: "Austin",
    state: "TX",
    zip: "78701",
    birthday: "2026-08-23",
    category: "CPA",
    tags: ["Self-Employed", "Bank Statement", "Austin", "Referral Partner"],
    relationshipScore: 68,
    relationshipTier: "Active Relationship",
    assignedUser: "Unassigned",
    lastContactedAt: "2026-07-11T13:00:00-05:00",
    nextFollowUpAt: "2026-08-04T09:30:00-05:00",
    followUpFrequency: "Monthly",
    followUpStatus: "Overdue",
    preferredContactMethod: "Email",
    referredBy: "Past client",
    referralCount: 3,
    completedTasks: 4,
    meetingsCompleted: 2,
    closedLoans: 1,
    notes: ["Works with entrepreneurs who need alternative income documentation."],
  },
  {
    id: "c-005",
    firstName: "Chris",
    lastName: "Taylor",
    company: "Taylor Family",
    jobTitle: "Homebuyer",
    email: "chris.taylor@example.com",
    phone: "(210) 555-0133",
    address: "8002 Broadway",
    city: "San Antonio",
    state: "TX",
    zip: "78209",
    birthday: "2026-09-12",
    category: "Prospect",
    tags: ["VA", "Veteran", "First-Time Buyer", "Hot Lead"],
    relationshipScore: 47,
    relationshipTier: "Developing Relationship",
    assignedUser: "David Bates",
    lastContactedAt: "2026-07-29T08:45:00-05:00",
    nextFollowUpAt: "2026-08-03T08:30:00-05:00",
    followUpFrequency: "Every 3 days",
    followUpStatus: "Current",
    preferredContactMethod: "Call",
    referredBy: "Website Contact Form",
    referralCount: 0,
    completedTasks: 1,
    meetingsCompleted: 1,
    closedLoans: 0,
    notes: ["Needs document checklist and payment comfort conversation."],
    mortgageDetails: {
      loanPurpose: "Purchase",
      loanProgram: "VA Loans",
      estimatedLoanAmount: "$360,000",
      propertyState: "TX",
      ariveStatus: "Not synced",
      ariveLoanId: "",
      lastSyncedAt: "",
      syncError: "",
    },
  },
];

export const timelineEvents: TimelineEvent[] = [
  {
    id: "t-001",
    contactId: "c-001",
    eventType: "Coffee meeting",
    title: "Met for partner check-in",
    description: "Discussed jumbo buyer expectations and fast pre-qualification follow-up.",
    createdBy: "David Bates",
    createdAt: "2026-08-01T15:30:00-05:00",
  },
  {
    id: "t-002",
    contactId: "c-002",
    eventType: "Note added",
    title: "DSCR scenario",
    description: "Maria is evaluating a duplex refinance and wants a cash-flow-first conversation.",
    createdBy: "David Bates",
    createdAt: "2026-07-20T10:15:00-05:00",
  },
  {
    id: "t-003",
    contactId: "c-005",
    eventType: "Task created",
    title: "Prepare pre-qualification checklist",
    description: "Send simple first-time buyer document list and schedule a call.",
    createdBy: "David Bates",
    createdAt: "2026-07-29T08:45:00-05:00",
  },
];

export const relationshipTasks: ContactTask[] = [
  {
    id: "task-001",
    contactId: "c-002",
    title: "Call Maria about investor property numbers",
    assignedUser: "David Bates",
    dueAt: "2026-08-02T11:00:00-05:00",
    priority: "High",
    status: "Today",
    notes: "Review DSCR and rental income assumptions.",
  },
  {
    id: "task-002",
    contactId: "c-004",
    title: "Reassign Angela and schedule CPA partner check-in",
    assignedUser: "David Bates",
    dueAt: "2026-08-01T09:30:00-05:00",
    priority: "Normal",
    status: "Overdue",
    notes: "Potential self-employed borrower referral relationship.",
  },
  {
    id: "task-003",
    contactId: "c-005",
    title: "Send first-time buyer checklist",
    assignedUser: "David Bates",
    dueAt: "2026-08-03T08:30:00-05:00",
    priority: "High",
    status: "Upcoming",
    notes: "Include VA and conventional comparison questions.",
  },
];

export const contactFiles: ContactFile[] = [
  {
    id: "file-001",
    contactId: "c-001",
    fileName: "partner-lunch-notes.pdf",
    fileType: "PDF",
    uploadedBy: "David Bates",
    createdAt: "2026-08-01T16:00:00-05:00",
  },
  {
    id: "file-002",
    contactId: "c-002",
    fileName: "rental-property-summary.xlsx",
    fileType: "Spreadsheet",
    uploadedBy: "David Bates",
    createdAt: "2026-07-20T11:10:00-05:00",
  },
];

export const scoringInputs = [
  ["Recency of last contact", "+25"],
  ["Frequency of contact", "+15"],
  ["Number of referrals", "+15"],
  ["Completed meetings", "+10"],
  ["Closed loans", "+10"],
  ["Tasks completed", "+10"],
  ["Upcoming follow-up scheduled", "+10"],
  ["Overdue follow-up penalty", "-20"],
] as const;
