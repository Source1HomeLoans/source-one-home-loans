import { enableVaLoans } from "@/lib/feature-flags";

export const programQueryToInterest: Record<string, string> = {
  ...(enableVaLoans ? { va: "VA Loans" } : {}),
  conventional: "Conventional Loans",
  jumbo: "Jumbo Loans",
};

const programSlugToQuery: Record<string, string> = {
  ...(enableVaLoans ? { "texas-va-loans": "va" } : {}),
  "texas-conventional-loans": "conventional",
  "texas-jumbo-loans": "jumbo",
};

export function getProgramContactHref(slug: string) {
  const program = programSlugToQuery[slug];

  return program ? `/contact?program=${program}` : "/contact";
}

export function getProgramInterestFromQuery(program?: string | string[]) {
  if (!program || Array.isArray(program)) {
    return "";
  }

  return programQueryToInterest[program.toLowerCase()] ?? "";
}
