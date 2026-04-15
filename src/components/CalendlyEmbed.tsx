"use client";

import { useEffect } from "react";

const CALENDLY_URL =
  "https://calendly.com/support-ias/consultation-call-with-an-immigration-expert-29";

export function CalendlyFull() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=f9f9f7&text_color=1a1a1b&primary_color=1a1a1b`}
      style={{ minWidth: "320px", height: "700px", width: "100%" }}
    />
  );
}

export function CalendlySidebar() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-paper-warm border border-rule">
      <div className="px-3 py-2 border-b border-rule flex items-center justify-between">
        <span className="text-[9px] font-sans font-semibold text-ink uppercase tracking-[0.18em]">
          Schedule Consultation
        </span>
        <span className="text-[8px] font-sans text-ink-muted">Free</span>
      </div>
      <div
        className="calendly-inline-widget"
        data-url={`${CALENDLY_URL}?hide_gdpr_banner=1&hide_event_type_details=1&background_color=f4f3f0&text_color=1a1a1b&primary_color=1a1a1b`}
        style={{ minWidth: "280px", height: "580px", width: "100%" }}
      />
    </div>
  );
}

export function CalendlyButton({ text = "Schedule Consultation" }: { text?: string }) {
  const openCalendly = () => {
    if (typeof window !== "undefined" && (window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({
        url: `${CALENDLY_URL}?hide_gdpr_banner=1&background_color=f9f9f7&text_color=1a1a1b&primary_color=1a1a1b`,
      });
    } else {
      window.open(CALENDLY_URL, "_blank");
    }
  };

  useEffect(() => {
    // Load Calendly CSS for popup
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <button
      onClick={openCalendly}
      className="px-5 py-1.5 border border-ink text-ink text-[10px] font-sans font-semibold uppercase tracking-[0.15em] hover:bg-ink hover:text-paper transition-colors"
    >
      {text}
    </button>
  );
}
