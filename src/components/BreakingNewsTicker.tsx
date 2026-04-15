"use client";

const tickerItems = [
  "DV-2027 Lottery Selection Results Available March 11, 2026",
  "USCIS Fee Schedule Update — New Rates Effective January 2026",
  "H-1B FY2026 Cap Reached in Record Time",
  "Green Card Backlog Exceeds 1.8M Approved Petitions",
  "State Dept. Announces Revised Visa Interview Waiver Procedures",
];

export default function BreakingNewsTicker() {
  const doubled = [...tickerItems, ...tickerItems];

  return (
    <div className="bg-ink text-ink-faint overflow-hidden h-7 sm:h-6 flex items-center text-[10px] font-sans">
      <div className="max-w-7xl mx-auto w-full flex items-center">
        <span className="flex-shrink-0 px-3 font-semibold uppercase tracking-[0.2em] text-crimson-text text-[9px]">
          Bulletin
        </span>
        <span className="w-px h-2.5 bg-white/10 flex-shrink-0" />
        <div className="overflow-hidden flex-1">
          <div className="flex animate-ticker whitespace-nowrap">
            {doubled.map((item, i) => (
              <span key={i} className="inline-block px-6 text-[10px] font-light tracking-wide text-white/50">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
