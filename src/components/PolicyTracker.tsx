"use client";

import { FileText, ExternalLink } from "lucide-react";

const resources = [
  { title: "I-130 — Petition for Alien Relative", url: "https://www.uscis.gov/i-130", type: "USCIS" },
  { title: "DS-260 — Immigrant Visa Application", url: "https://ceac.state.gov/ceac/", type: "State Dept" },
  { title: "DV Lottery Entrant Status Check", url: "https://dvprogram.state.gov/", type: "Official" },
  { title: "Visa Bulletin — Current Month", url: "https://travel.state.gov/content/travel/en/legal/visa-law0/visa-bulletin.html", type: "State Dept" },
  { title: "USCIS Case Status Online", url: "https://egov.uscis.gov/casestatus/landing.do", type: "Official" },
];

export default function PolicyTracker() {
  return (
    <div className="bg-paper-warm border border-rule">
      <div className="px-3 py-2 border-b border-rule">
        <span className="text-[9px] font-sans font-semibold text-ink uppercase tracking-[0.18em] flex items-center gap-1.5">
          <FileText size={10} strokeWidth={2} className="text-ink-muted" />
          Official Resources
        </span>
      </div>
      <div className="divide-y divide-rule">
        {resources.map((res, i) => (
          <a key={i} href={res.url} target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-between px-3 py-2 hover:bg-steel-light/50 transition-colors group">
            <div>
              <p className="text-[10px] font-sans font-medium text-ink group-hover:text-ink-soft transition-colors leading-snug">{res.title}</p>
              <p className="text-[8px] font-sans text-ink-muted uppercase tracking-wider">{res.type}</p>
            </div>
            <ExternalLink size={9} strokeWidth={1.5} className="text-ink-faint group-hover:text-ink-muted transition-colors flex-shrink-0" />
          </a>
        ))}
      </div>
    </div>
  );
}
