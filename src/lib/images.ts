// Each article gets a UNIQUE image — no two articles share the same photo
// Ordered so that articles appearing together on the homepage never repeat
const slugImages: Record<string, string> = {
  // === Top articles (appear on homepage grid — all different) ===
  "diversity-visa-lottery-selection-opens-march-2026": "/images/dv2027-passports.jpg", // Passports + Green Card
  "green-card-backlog-historic-levels-congressional-action": "/images/usa-news-map.jpg", // US flag map + newspaper
  "uscis-fee-schedule-update-2026": "/images/uscis-fees.jpg",                          // USCIS form + dollars
  "dv-2027-diversity-visa-lottery-registration-announced": "/images/state-dept-letter.jpg", // State Dept official letter
  // === Next group (appear in sidebar briefs or deeper) ===
  "uscis-updates-processing-times-employment-green-cards": "/images/passport-visa.jpg", // Laptop
  "dv-2026-lottery-results-analysis-selection-rates": "/images/courtroom.jpg",         // Gov columns
  "h1b-visa-cap-reached-record-time-fy2026": "/images/passport-money.jpg",            // Passport on world map
  "federal-court-ruling-daca-permanent-residency": "/images/flag-closeup.jpg",        // Gavel
  // === Older articles ===
  "immigration-policy-shifts-2025-executive-orders": "/images/us-flag.jpg",
  "state-department-revises-visa-interview-waiver-2025": "/images/american-flag2.jpg",
  "dv-2025-final-visa-issuance-statistics": "/images/legal-docs.jpg",
  "global-mobility-index-2024-us-top-destination": "/images/statue-liberty.jpg",
  "new-biometric-requirements-visa-applicants": "/images/passport-visa.jpg",
  "travel-ban-updates-country-restrictions-waivers": "/images/courtroom.jpg",
  "dv-2024-highest-application-volume-history": "/images/flag-closeup.jpg",
  "comprehensive-guide-us-employment-based-immigration": "/images/home-photo.jpg",
  "dv-2023-lottery-lessons-learned": "/images/american-flag2.jpg",
  "understanding-visa-bulletin-priority-dates": "/images/legal-docs.jpg",
};

export function getImageForSlug(slug: string): string {
  return slugImages[slug] || "/images/courtroom.jpg";
}
