"use client";

import Link from "next/link";

const tickerItems = [
  { text: "DV-2027 Green Card Lottery: New Passport Rule, $1 Fee, and Registration Updates", href: "/news/diversity-visa-lottery-selection-opens-march-2026" },
  { text: "DV-2027 Registration Delayed — Expected to Open Late April 2026", href: "/news/dv-2027-diversity-visa-lottery-registration-announced" },
  { text: "USCIS Fee Schedule Update — New Rates Effective January 2026", href: "/news/uscis-fee-schedule-update-2026" },
  { text: "H-1B Visa Cap Reached in Record Time for FY2026", href: "/news/h1b-visa-cap-reached-record-time-fy2026" },
  { text: "Green Card Backlog Reaches Historic Levels — 1.8M Petitions Waiting", href: "/news/green-card-backlog-historic-levels-congressional-action" },
  { text: "State Dept. Revises Visa Interview Waiver Program for 2025", href: "/news/state-department-revises-visa-interview-waiver-2025" },
];

export default function BreakingNewsTicker() {
  const doubled = [...tickerItems, ...tickerItems];

  return (
    <div className="bg-ink overflow-hidden h-8 sm:h-7 flex items-center font-sans sticky top-0 z-[60]">
      <div className="w-full flex items-center h-full">
        <div className="flex-shrink-0 flex items-center gap-1.5 px-3 sm:px-4 h-full bg-white/5 border-r border-white/10">
          <span className="relative flex" style={{ width: 6, height: 6 }}>
            <span
              className="absolute inline-flex h-full w-full rounded-full"
              style={{
                backgroundColor: "#8b1a1a",
                animation: "pulse-slow 2.5s ease-in-out infinite",
              }}
            />
            <span className="relative inline-flex rounded-full" style={{ width: 6, height: 6, backgroundColor: "#8b1a1a" }} />
          </span>
          <span className="font-semibold uppercase tracking-[0.2em] text-white/70 text-[8px] sm:text-[9px]">
            News Alert
          </span>
        </div>
        <div className="overflow-hidden flex-1 h-full flex items-center">
          <div className="flex animate-ticker whitespace-nowrap will-change-transform">
            {doubled.map((item, i) => (
              <span key={i} className="inline-flex items-center text-[10px] sm:text-[11px] font-normal tracking-wide">
                <Link href={item.href} className="px-4 sm:px-5 text-white hover:text-white/70 transition-colors">
                  {item.text}
                </Link>
                <span className="text-white/30">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
