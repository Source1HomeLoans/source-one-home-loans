const googleReviewsEnabled = process.env.ENABLE_GOOGLE_REVIEWS === "true";

export function Reviews() {
  if (!googleReviewsEnabled) {
    return null;
  }

  // TODO: Connect Google Business Profile data when API access is available.
  return null;
}
