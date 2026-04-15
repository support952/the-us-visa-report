import { CalendlyFull } from "@/components/CalendlyEmbed";
import { Shield, CheckCircle, Users, Clock } from "lucide-react";

export const metadata = {
  title: "Schedule Consultation — The US Visa Report",
  description:
    "Book a free consultation call with a senior immigration expert. Get personalized guidance on the Diversity Visa Lottery, employment-based visas, and more.",
};

export default function AssessmentPage() {
  return (
    <div className="bg-paper">
      {/* Header */}
      <div className="bg-white border-b border-rule">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="max-w-lg mx-auto text-center">
            <p className="text-[9px] font-sans font-semibold text-crimson-text uppercase tracking-[0.2em] mb-3">
              Immigration Advisory Services
            </p>
            <h1 className="font-serif text-2xl md:text-3xl font-bold text-ink leading-tight tracking-tight">
              Book a Consultation
            </h1>
            <p className="text-[13px] font-sans text-ink-soft mt-3 leading-relaxed font-light">
              Speak directly with a senior immigration expert. Select a
              convenient time below to schedule your private consultation.
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="border-b border-rule bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto text-center">
            <div>
              <p className="text-[9px] font-sans text-ink-muted flex items-center justify-center gap-0.5">
                <Users size={9} strokeWidth={1.5} /> Consultations
              </p>
              <p className="font-serif text-base font-bold text-ink">
                14,200+
              </p>
            </div>
            <div>
              <p className="text-[9px] font-sans text-ink-muted flex items-center justify-center gap-0.5">
                <CheckCircle size={9} strokeWidth={1.5} /> Satisfaction
              </p>
              <p className="font-serif text-base font-bold text-emerald-700">
                98%
              </p>
            </div>
            <div>
              <p className="text-[9px] font-sans text-ink-muted flex items-center justify-center gap-0.5">
                <Clock size={9} strokeWidth={1.5} /> Duration
              </p>
              <p className="font-serif text-base font-bold text-ink">29 min</p>
            </div>
          </div>
        </div>
      </div>

      {/* Calendly Embed */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-3xl mx-auto bg-white border border-rule overflow-hidden">
          <CalendlyFull />
        </div>
        <p className="text-[9px] font-sans text-ink-faint text-center mt-5 leading-relaxed max-w-sm mx-auto">
          Your information is processed securely via Calendly. By scheduling,
          you agree to be contacted regarding your immigration inquiry. This
          does not constitute legal advice.
        </p>
      </div>
    </div>
  );
}
