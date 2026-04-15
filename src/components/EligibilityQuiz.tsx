"use client";

import { useState, useEffect } from "react";
import {
  Globe,
  GraduationCap,
  Briefcase,
  ChevronRight,
  ChevronLeft,
  Lock,
  CalendarCheck,
} from "lucide-react";

const CALENDLY_URL =
  "https://calendly.com/support-ias/consultation-call-with-an-immigration-expert-29";

const countries = [
  "Afghanistan", "Albania", "Algeria", "Bangladesh", "Brazil", "Cameroon",
  "Colombia", "Congo (DRC)", "Egypt", "Ethiopia", "Ghana", "India", "Iran",
  "Iraq", "Kenya", "Morocco", "Nepal", "Nigeria", "Pakistan", "Philippines",
  "South Africa", "Sudan", "Turkey", "Ukraine", "Uzbekistan", "Vietnam",
  "Other (Eligible)", "Other (Check Eligibility)",
];

const educationLevels = [
  "High School Diploma or Equivalent",
  "Some College / Associate Degree",
  "Bachelor's Degree",
  "Master's Degree",
  "Doctoral / Professional Degree",
  "Trade Certificate (2+ Years)",
];

const criminalOptions = [
  "No — Clean Record",
  "Minor Traffic Violations Only",
  "Misdemeanor (Non-Violent)",
  "Pending Case / Under Investigation",
  "Yes — Prior Conviction",
  "Prefer Not to Answer",
];

export default function EligibilityQuiz({ variant = "sidebar" }: { variant?: "sidebar" | "full" }) {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    country: "", education: "", criminalRecord: "",
  });
  const [showCalendly, setShowCalendly] = useState(false);

  // Load Calendly widget script when we reach the booking step
  useEffect(() => {
    if (!showCalendly) return;
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, [showCalendly]);

  const steps = [
    { title: "Country of Birth", icon: Globe },
    { title: "Education Level", icon: GraduationCap },
    { title: "Criminal Record", icon: Briefcase },
  ];

  const canProceed = () => {
    switch (step) {
      case 0: return formData.country !== "";
      case 1: return formData.education !== "";
      case 2: return formData.criminalRecord !== "";
      default: return false;
    }
  };

  // After 3 steps → show Calendly embed
  if (showCalendly) {
    return (
      <div className={`bg-paper-warm border border-rule ${variant === "full" ? "max-w-xl mx-auto" : ""}`}>
        <div className="px-3 py-2 border-b border-rule flex items-center justify-between">
          <span className="text-[9px] font-sans font-semibold text-ink uppercase tracking-[0.18em] flex items-center gap-1">
            <CalendarCheck size={10} strokeWidth={2} />
            Schedule Your Consultation
          </span>
          <button
            onClick={() => { setShowCalendly(false); setStep(0); }}
            className="text-[8px] font-sans text-ink-muted hover:text-ink transition-colors"
          >
            Start Over
          </button>
        </div>
        <div className="px-3 py-2 bg-white/50 border-b border-rule">
          <p className="text-[10px] font-sans text-ink-soft leading-relaxed">
            Based on your profile, you may be eligible for several immigration
            pathways. Select a time below to speak with a senior analyst.
          </p>
        </div>
        <div
          className="calendly-inline-widget"
          data-url={`${CALENDLY_URL}?hide_gdpr_banner=1&hide_event_type_details=1&background_color=f4f3f0&text_color=1a1a1b&primary_color=1a1a1b`}
          style={{ minWidth: "280px", height: variant === "full" ? "650px" : "520px", width: "100%" }}
        />
      </div>
    );
  }

  return (
    <div className={`bg-paper-warm border border-rule ${variant === "full" ? "max-w-xl mx-auto" : ""}`}>
      {/* Title */}
      <div className="px-3 py-2 border-b border-rule flex items-center justify-between">
        <span className="text-[9px] font-sans font-semibold text-ink uppercase tracking-[0.18em]">
          2026 Eligibility Screener
        </span>
        <span className="text-[8px] font-sans text-ink-muted flex items-center gap-0.5">
          <Lock size={7} strokeWidth={2} />SSL Encrypted
        </span>
      </div>

      {/* Progress */}
      <div className="px-3 pt-2.5 pb-1">
        <div className="flex gap-0.5">
          {steps.map((_, i) => (
            <div key={i} className={`flex-1 h-[2px] ${i <= step ? "bg-ink" : "bg-rule"}`} />
          ))}
        </div>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-1.5">
            {(() => { const Icon = steps[step].icon; return <Icon size={11} strokeWidth={1.5} className="text-ink-muted" />; })()}
            <span className="text-[11px] font-sans font-medium text-ink">{steps[step].title}</span>
          </div>
          <span className="text-[9px] font-data text-ink-muted">{step + 1}/{steps.length}</span>
        </div>
      </div>

      {/* Content */}
      <div className="px-3 pt-2 pb-1">
        {step === 0 && (
          <select
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            className="w-full px-2.5 py-2 border border-rule bg-white text-[11px] font-sans text-ink focus:outline-none focus:border-ink-muted"
          >
            <option value="">— Select —</option>
            {countries.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        )}

        {step === 1 && (
          <div className="space-y-0.5">
            {educationLevels.map((level) => (
              <button
                key={level}
                onClick={() => setFormData({ ...formData, education: level })}
                className={`w-full text-left px-2.5 py-1.5 border text-[10px] font-sans transition-colors ${
                  formData.education === level
                    ? "border-ink bg-ink/5 text-ink font-medium"
                    : "border-rule text-ink-soft hover:border-ink-faint"
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        )}

        {step === 2 && (
          <div className="space-y-0.5">
            <p className="text-[10px] font-sans text-ink-muted mb-1.5">Do you have any criminal history?</p>
            {criminalOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setFormData({ ...formData, criminalRecord: opt })}
                className={`w-full text-left px-2.5 py-1.5 border text-[10px] font-sans transition-colors ${
                  formData.criminalRecord === opt
                    ? "border-ink bg-ink/5 text-ink font-medium"
                    : "border-rule text-ink-soft hover:border-ink-faint"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="px-3 py-2.5 flex items-center justify-between border-t border-rule mt-2">
        {step > 0 ? (
          <button onClick={() => setStep(step - 1)} className="flex items-center gap-0.5 text-[10px] font-sans text-ink-muted hover:text-ink transition-colors">
            <ChevronLeft size={12} />Back
          </button>
        ) : <span />}
        {step < 2 ? (
          <button
            onClick={() => canProceed() && setStep(step + 1)}
            disabled={!canProceed()}
            className={`flex items-center gap-1 px-3 py-1 text-[10px] font-sans font-medium transition-colors ${
              canProceed() ? "bg-ink text-paper hover:bg-ink-mid" : "bg-rule text-ink-faint cursor-not-allowed"
            }`}
          >
            Continue<ChevronRight size={12} />
          </button>
        ) : (
          <button
            onClick={() => canProceed() && setShowCalendly(true)}
            disabled={!canProceed()}
            className={`flex items-center gap-1.5 px-3 py-1 text-[10px] font-sans font-medium transition-colors ${
              canProceed() ? "bg-ink text-paper hover:bg-ink-mid" : "bg-rule text-ink-faint cursor-not-allowed"
            }`}
          >
            <CalendarCheck size={11} />
            Schedule Consultation
          </button>
        )}
      </div>

      {/* Security notice */}
      <div className="px-3 py-1.5 border-t border-rule bg-steel-light/50">
        <p className="text-[8px] font-sans text-ink-muted leading-relaxed">
          Data encrypted via SSL. Information used solely for preliminary policy analysis.
          Not shared with third parties. See Privacy Policy.
        </p>
      </div>
    </div>
  );
}
