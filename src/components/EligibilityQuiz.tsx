"use client";

import { useState } from "react";
import {
  Globe,
  GraduationCap,
  Briefcase,
  User,
  ChevronRight,
  ChevronLeft,
  CheckCircle,
  Lock,
} from "lucide-react";

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

const visaStatuses = [
  "No Current U.S. Visa",
  "Tourist Visa (B1/B2)",
  "Student Visa (F-1/J-1)",
  "Work Visa (H-1B/L-1/O-1)",
  "DACA",
  "Temporary Protected Status (TPS)",
  "Pending Asylum",
  "Other Nonimmigrant Status",
];

interface FormData {
  country: string;
  education: string;
  visaStatus: string;
  fullName: string;
  email: string;
  phone: string;
}

export default function EligibilityQuiz({ variant = "sidebar" }: { variant?: "sidebar" | "full" }) {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    country: "", education: "", visaStatus: "", fullName: "", email: "", phone: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const steps = [
    { title: "Country of Birth", icon: Globe },
    { title: "Education Level", icon: GraduationCap },
    { title: "Immigration Status", icon: Briefcase },
    { title: "Contact Information", icon: User },
  ];

  const canProceed = () => {
    switch (step) {
      case 0: return formData.country !== "";
      case 1: return formData.education !== "";
      case 2: return formData.visaStatus !== "";
      case 3: return formData.fullName !== "" && formData.email !== "";
      default: return false;
    }
  };

  if (submitted) {
    return (
      <div className={`bg-paper-warm border border-rule ${variant === "full" ? "max-w-xl mx-auto" : ""}`}>
        <div className="p-6 text-center">
          <CheckCircle size={28} strokeWidth={1.5} className="text-emerald-700 mx-auto mb-3" />
          <h4 className="font-serif text-base font-bold text-ink mb-1">Assessment Submitted</h4>
          <p className="text-[11px] font-sans text-ink-soft leading-relaxed mb-3">
            A senior policy analyst will prepare your eligibility report within 24-48 hours.
          </p>
          <p className="text-[9px] font-data text-ink-muted">REF: USV-{Date.now().toString(36).toUpperCase()}</p>
        </div>
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
            {visaStatuses.map((status) => (
              <button
                key={status}
                onClick={() => setFormData({ ...formData, visaStatus: status })}
                className={`w-full text-left px-2.5 py-1.5 border text-[10px] font-sans transition-colors ${
                  formData.visaStatus === status
                    ? "border-ink bg-ink/5 text-ink font-medium"
                    : "border-rule text-ink-soft hover:border-ink-faint"
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        )}

        {step === 3 && (
          <div className="space-y-2">
            <div>
              <label className="text-[9px] font-sans text-ink-muted uppercase tracking-wider block mb-0.5">Full Legal Name</label>
              <input type="text" value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-2.5 py-1.5 border border-rule bg-white text-[11px] font-sans text-ink focus:outline-none focus:border-ink-muted" />
            </div>
            <div>
              <label className="text-[9px] font-sans text-ink-muted uppercase tracking-wider block mb-0.5">Email Address</label>
              <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-2.5 py-1.5 border border-rule bg-white text-[11px] font-sans text-ink focus:outline-none focus:border-ink-muted" />
            </div>
            <div>
              <label className="text-[9px] font-sans text-ink-muted uppercase tracking-wider block mb-0.5">Phone (Optional)</label>
              <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-2.5 py-1.5 border border-rule bg-white text-[11px] font-sans text-ink focus:outline-none focus:border-ink-muted" />
            </div>
          </div>
        )}
      </div>

      {/* Nav */}
      <div className="px-3 py-2.5 flex items-center justify-between border-t border-rule mt-2">
        {step > 0 ? (
          <button onClick={() => setStep(step - 1)} className="flex items-center gap-0.5 text-[10px] font-sans text-ink-muted hover:text-ink transition-colors">
            <ChevronLeft size={12} />Back
          </button>
        ) : <span />}
        {step < 3 ? (
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
            onClick={() => canProceed() && setSubmitted(true)}
            disabled={!canProceed()}
            className={`px-3 py-1 text-[10px] font-sans font-medium transition-colors ${
              canProceed() ? "bg-ink text-paper hover:bg-ink-mid" : "bg-rule text-ink-faint cursor-not-allowed"
            }`}
          >
            Submit Assessment
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
