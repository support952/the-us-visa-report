import Link from "next/link";
import { ChevronRight, CheckCircle, AlertTriangle } from "lucide-react";

export const metadata = {
  title: "DV-2027 Passport Scan Guide — The US Visa News",
  description: "Technical specifications and step-by-step instructions for preparing your passport scan for the DV-2027 Diversity Visa Lottery entry.",
};

export default function PassportGuidePage() {
  return (
    <div className="bg-paper">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-rule">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
          <nav className="flex items-center gap-1 text-[10px] font-sans text-ink-muted">
            <Link href="/" className="hover:text-ink transition-colors">Home</Link>
            <ChevronRight size={9} strokeWidth={1.5} />
            <Link href="/dv-2027-faq" className="hover:text-ink transition-colors">DV-2027</Link>
            <ChevronRight size={9} strokeWidth={1.5} />
            <span className="text-ink-soft">Passport Scan Guide</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white border-b border-rule">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <div className="max-w-2xl">
            <span className="text-[9px] font-sans font-semibold text-crimson-text uppercase tracking-[0.2em]">Technical Guide</span>
            <h1 className="font-serif text-2xl md:text-[2rem] font-bold text-ink mt-2 leading-[1.12] tracking-tight">
              How to Prepare Your Passport Scan for DV-2027
            </h1>
            <p className="text-[14px] font-sans text-ink-soft mt-3 leading-relaxed font-light">
              The principal applicant must upload a digital scan of their passport&apos;s biographic
              page as part of the entry form (DS-5501). Failure to include a compliant scan
              results in automatic disqualification.
            </p>
            <div className="flex items-center gap-3 mt-4 text-[9px] font-sans text-ink-faint">
              <span>Last updated: April 15, 2026</span>
              <span>&middot;</span>
              <span>Reviewed by Policy Desk</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-3xl">

          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="font-serif text-lg font-bold text-ink pb-2.5 border-b border-rule mb-5">
              1. Locate the Correct Page
            </h2>
            <div className="space-y-3 text-[13px] font-sans text-ink-soft leading-[1.85]">
              <p>
                <strong className="text-ink">The Biographic Page:</strong> This is the page containing your
                photograph, full name, date of birth, place of birth, and passport number.
              </p>
              <p>
                <strong className="text-ink">The Signature Page:</strong> If your signature is on a separate
                page from your biographic data, you must scan and include both in a single image file.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="font-serif text-lg font-bold text-ink pb-2.5 border-b border-rule mb-5">
              2. Technical Specifications
            </h2>
            <div className="bg-paper-warm border border-rule p-5 space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-[10px] font-sans font-semibold text-ink uppercase tracking-wider w-24 flex-shrink-0 pt-0.5">Format</span>
                <span className="text-[12px] font-sans text-ink-soft">JPEG (.jpg) only. The system will reject PDF files.</span>
              </div>
              <div className="flex items-start gap-3 border-t border-rule pt-3">
                <span className="text-[10px] font-sans font-semibold text-ink uppercase tracking-wider w-24 flex-shrink-0 pt-0.5">File Size</span>
                <span className="text-[12px] font-sans text-ink-soft">Must be 5 MB or less.</span>
              </div>
              <div className="flex items-start gap-3 border-t border-rule pt-3">
                <span className="text-[10px] font-sans font-semibold text-ink uppercase tracking-wider w-24 flex-shrink-0 pt-0.5">Color</span>
                <span className="text-[12px] font-sans text-ink-soft">Full color. No black-and-white scans.</span>
              </div>
              <div className="flex items-start gap-3 border-t border-rule pt-3">
                <span className="text-[10px] font-sans font-semibold text-ink uppercase tracking-wider w-24 flex-shrink-0 pt-0.5">Resolution</span>
                <span className="text-[12px] font-sans text-ink-soft">At least 300 DPI. Text must be sharp and legible.</span>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="font-serif text-lg font-bold text-ink pb-2.5 border-b border-rule mb-5">
              3. Step-by-Step Scanning Process
            </h2>
            <ol className="space-y-4">
              {[
                { title: "Preparation", desc: "Clean your passport cover and the scanner glass to ensure no smudges or dust particles." },
                { title: "Positioning", desc: "Place the passport flat on the scanner. Use a piece of white paper behind it if the scanner lid doesn't close fully." },
                { title: "Capture", desc: 'Scan the entire biographic and signature page(s) at minimum 300 DPI. Ensure the "Machine Readable Zone" (text lines at the bottom) is clear.' },
                { title: "Verification", desc: "Open the file to confirm your photo is visible and every letter of your name and passport number can be read." },
                { title: "Naming", desc: "Save the file clearly (e.g., MyName_Passport_DV2027.jpg) to avoid uploading the wrong file." },
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="font-serif text-sm font-bold text-ink-faint flex-shrink-0 w-6 pt-0.5">{i + 1}.</span>
                  <div>
                    <p className="text-[13px] font-sans font-medium text-ink">{step.title}</p>
                    <p className="text-[12px] font-sans text-ink-soft mt-0.5 leading-relaxed">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="font-serif text-lg font-bold text-ink pb-2.5 border-b border-rule mb-5">
              4. Upload Checklist
            </h2>
            <div className="space-y-2.5">
              {[
                "Passport is valid and unexpired at the time of entry",
                "Only the principal applicant needs to upload a scan",
                "File is JPEG format, under 5 MB, full color",
                "All text and the Machine Readable Zone are clearly legible",
                "Photo in passport is clearly visible",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle size={14} strokeWidth={1.5} className="text-emerald-700 flex-shrink-0 mt-0.5" />
                  <span className="text-[12px] font-sans text-ink-soft">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Exemptions */}
          <section className="mb-12">
            <h2 className="font-serif text-lg font-bold text-ink pb-2.5 border-b border-rule mb-5">
              5. Rare Passport Exemptions
            </h2>
            <div className="bg-paper-warm border border-rule p-5">
              <div className="flex items-start gap-2.5 mb-3">
                <AlertTriangle size={14} strokeWidth={1.5} className="text-crimson-text flex-shrink-0 mt-0.5" />
                <p className="text-[11px] font-sans text-ink-soft">
                  <strong className="text-ink">Note:</strong> Simply &ldquo;not having time&rdquo; to obtain a passport is not a valid exemption.
                </p>
              </div>
              <ul className="space-y-1.5 text-[12px] font-sans text-ink-soft pl-6 list-disc">
                <li>Stateless individuals who legally have no nationality</li>
                <li>Citizens of countries where the government refuses to issue passports</li>
                <li>Rare individual waivers approved by the Secretary of Homeland Security and Secretary of State</li>
              </ul>
            </div>
          </section>

          {/* CTA */}
          <div className="border-t border-b border-rule py-8 text-center">
            <p className="text-[12px] font-sans text-ink-soft mb-4">Need help ensuring your application meets all technical requirements?</p>
            <Link href="/assessment" className="inline-flex items-center gap-2 px-5 py-1.5 border border-ink text-ink text-[10px] font-sans font-semibold uppercase tracking-[0.15em] hover:bg-ink hover:text-paper transition-colors">
              Check Eligibility
            </Link>
          </div>

          <div className="mt-8 text-[10px] font-sans text-ink-faint leading-relaxed">
            <strong className="text-ink-muted">Disclaimer:</strong> This guide is for informational purposes only. Verify all requirements at dvprogram.state.gov before submitting your entry.
          </div>
        </div>
      </div>
    </div>
  );
}
