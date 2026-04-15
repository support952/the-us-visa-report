import EligibilityQuiz from "@/components/EligibilityQuiz";
import { CheckCircle, Users, Clock } from "lucide-react";

export const metadata = {
  title: "2026 Eligibility Assessment — The US Visa Report",
  description: "Free preliminary eligibility screening for U.S. immigration programs including the Diversity Visa Lottery.",
};

export default function AssessmentPage() {
  return (
    <div className="bg-paper">
      <div className="bg-white border-b border-rule">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="max-w-lg mx-auto text-center">
            <p className="text-[9px] font-sans font-semibold text-crimson-text uppercase tracking-[0.2em] mb-3">
              Policy Analysis Division
            </p>
            <h1 className="font-serif text-2xl md:text-3xl font-bold text-ink leading-tight tracking-tight">
              Immigration Eligibility Assessment
            </h1>
            <p className="text-[13px] font-sans text-ink-soft mt-3 leading-relaxed font-light">
              Complimentary preliminary eligibility screening due to 2026 policy changes.
            </p>
          </div>
        </div>
      </div>

      <div className="border-b border-rule bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto text-center">
            <div>
              <p className="text-[9px] font-sans text-ink-muted flex items-center justify-center gap-0.5"><Users size={9} strokeWidth={1.5} />Assessed</p>
              <p className="font-serif text-base font-bold text-ink">14,200+</p>
            </div>
            <div>
              <p className="text-[9px] font-sans text-ink-muted flex items-center justify-center gap-0.5"><CheckCircle size={9} strokeWidth={1.5} />Eligible</p>
              <p className="font-serif text-base font-bold text-emerald-700">68%</p>
            </div>
            <div>
              <p className="text-[9px] font-sans text-ink-muted flex items-center justify-center gap-0.5"><Clock size={9} strokeWidth={1.5} />Response</p>
              <p className="font-serif text-base font-bold text-ink">24hr</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-xl mx-auto">
          <EligibilityQuiz variant="full" />
          <p className="text-[9px] font-sans text-ink-faint text-center mt-5 leading-relaxed max-w-sm mx-auto">
            Data encrypted via SSL. Information used solely for preliminary policy analysis.
            Does not constitute legal advice.
          </p>
        </div>
      </div>
    </div>
  );
}
