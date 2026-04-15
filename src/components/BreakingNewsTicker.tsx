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
    <div className="bg-ink overflow-hidden h-8 sm:h-7 flex items-center font-sans">
      <div className="w-full flex items-center h-full">
        <div className="flex-shrink-0 flex items-center gap-1.5 px-3 sm:px-4 h-full bg-white/5 border-r border-white/10">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-crimson opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-crimson" />
          </span>
          <span className="font-semibold uppercase tracking-[0.2em] text-white/70 text-[8px] sm:text-[9px]">
            Bulletin
          </span>
        </div>
        <div className="overflow-hidden flex-1 h-full flex items-center">
          <div className="flex animate-ticker whitespace-nowrap">
            {doubled.map((item, i) => (
              <span key={i} className="inline-flex items-center text-[10px] sm:text-[10px] font-normal tracking-wide text-white/60">
                <span className="px-4 sm:px-5">{item}</span>
                <span className="text-white/20">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
