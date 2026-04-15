import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata = {
  title: "Editorial Policy — The US Visa Report",
  description: "Editorial standards, corrections policy, and journalistic guidelines of The US Visa Report.",
};

export default function EditorialPolicyPage() {
  return (
    <div className="bg-paper">
      <div className="bg-white border-b border-rule">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
          <nav className="flex items-center gap-1 text-[10px] font-sans text-ink-muted">
            <Link href="/" className="hover:text-ink transition-colors">Home</Link>
            <ChevronRight size={9} strokeWidth={1.5} />
            <span className="text-ink-soft">Editorial Policy</span>
          </nav>
        </div>
      </div>

      <div className="bg-white border-b border-rule">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <div className="max-w-2xl">
            <h1 className="font-serif text-2xl md:text-3xl font-bold text-ink tracking-tight">Editorial Policy</h1>
            <p className="text-[9px] font-sans text-ink-faint mt-2">Last updated: January 2026</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-2xl space-y-6 text-[14px] font-sans text-ink-soft leading-[1.85]">
          <h2 className="font-serif text-lg font-bold text-ink">Standards of Accuracy</h2>
          <p>
            The US Visa Report is committed to factual accuracy in all published content. Our reporters
            verify information through official government sources, including the U.S. Department of State,
            U.S. Citizenship and Immigration Services (USCIS), and the Department of Homeland Security,
            before publication. When official sources are unavailable, we rely on credentialed legal
            practitioners and identified policy analysts.
          </p>

          <h2 className="font-serif text-lg font-bold text-ink pt-4">Source Attribution</h2>
          <p>
            All factual claims are attributed to identifiable sources. We distinguish clearly between
            confirmed facts, official statements, and analysis or opinion. Anonymous sourcing is used
            only when necessary to protect individuals and is subject to editorial review.
          </p>

          <h2 className="font-serif text-lg font-bold text-ink pt-4">Corrections Policy</h2>
          <p>
            When errors are identified, we correct them promptly and transparently. Corrections are
            noted at the end of the relevant article with a description of what was changed and when.
            Requests for corrections may be submitted through our{" "}
            <Link href="/contact" className="text-ink underline hover:text-ink-soft transition-colors">
              contact page
            </Link>.
          </p>

          <h2 className="font-serif text-lg font-bold text-ink pt-4">Independence</h2>
          <p>
            Editorial decisions are made independently of any commercial, governmental, or advocacy
            interests. Sponsored content, if any, is clearly labeled and segregated from editorial
            material. Our analysts and correspondents are prohibited from accepting compensation or
            gifts from entities they cover.
          </p>

          <h2 className="font-serif text-lg font-bold text-ink pt-4">Legal Disclaimer</h2>
          <p>
            Content published by The US Visa Report is for informational purposes only and does not
            constitute legal advice. Immigration law is complex and fact-specific. Readers should
            consult with a qualified immigration attorney licensed in the appropriate jurisdiction
            before taking any action based on information published on this site.
          </p>
        </div>
      </div>
    </div>
  );
}
