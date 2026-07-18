import { enableVaLoans } from "@/lib/feature-flags";

const vaLoanPattern =
  /\bVA\b|VA Loan|VA Loans|Veterans Affairs loans|Veteran loan programs|VA financing|VA mortgage|VA home loans|VA home loan|VA eligibility|VA funding fee|military home financing|no-down-payment VA financing/i;

const vaSlugPattern = /(^|-)va($|-)|texas-va-loans|va-loan|va-loans/i;

export function hasVaLoanReference(value: string) {
  return vaLoanPattern.test(value);
}

export function isVaSlug(slug: string) {
  return vaSlugPattern.test(slug);
}

export function isVaContent(value: { slug?: string; title?: string; category?: string; keywords?: string[] }) {
  return Boolean(
    (value.slug && isVaSlug(value.slug)) ||
      (value.title && hasVaLoanReference(value.title)) ||
      (value.category && hasVaLoanReference(value.category)) ||
      value.keywords?.some((keyword) => hasVaLoanReference(keyword)),
  );
}

export function isPublicWhenVaDisabled<T extends { slug?: string; title?: string; category?: string; keywords?: string[] }>(value: T) {
  return enableVaLoans || !isVaContent(value);
}

export function stripVaRelatedSlugs(slugs: string[]) {
  return enableVaLoans ? slugs : slugs.filter((slug) => !isVaSlug(slug));
}

export function stripVaCategories(categories: string[]) {
  return enableVaLoans ? categories : categories.filter((category) => !hasVaLoanReference(category));
}

function scrubInlineVaText(value: string) {
  return value
    .replace(/,?\s*VA loan notes/gi, "")
    .replace(/,?\s*VA loans?/gi, "")
    .replace(/,?\s*Texas VA Loans/gi, "")
    .replace(/,?\s*VA home loans?/gi, "")
    .replace(/,?\s*VA mortgage/gi, "")
    .replace(/,\s*,/g, ",")
    .replace(/\s+,/g, ",")
    .replace(/,\s+and\s+/g, " and ")
    .replace(/\s{2,}/g, " ")
    .trim();
}

export function scrubVaText(value: string) {
  if (enableVaLoans || !hasVaLoanReference(value)) {
    return value;
  }

  return scrubInlineVaText(value);
}

export function omitVaStrings(values: string[]) {
  return enableVaLoans ? values : values.filter((value) => !hasVaLoanReference(value)).map(scrubVaText);
}

export function omitVaFaqs<T extends { question: string; answer: string }>(faqs: T[]) {
  return enableVaLoans
    ? faqs
    : faqs.filter((faq) => !hasVaLoanReference(faq.question) && !hasVaLoanReference(faq.answer));
}

