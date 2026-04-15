"use client";

import { Share2, Printer, Bookmark } from "lucide-react";

export default function SocialShare({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <span className="text-[9px] font-sans text-slate-light uppercase tracking-widest mr-1">
        Share
      </span>
      <button
        onClick={() => {
          if (navigator.share) {
            navigator.share({ title, url: window.location.href });
          }
        }}
        className="w-7 h-7 flex items-center justify-center border border-steel text-slate-light hover:text-navy hover:border-navy/30 transition-colors"
        aria-label="Share"
      >
        <Share2 size={12} strokeWidth={1.5} />
      </button>
      <button
        onClick={() => window.print()}
        className="w-7 h-7 flex items-center justify-center border border-steel text-slate-light hover:text-navy hover:border-navy/30 transition-colors"
        aria-label="Print"
      >
        <Printer size={12} strokeWidth={1.5} />
      </button>
      <button
        className="w-7 h-7 flex items-center justify-center border border-steel text-slate-light hover:text-navy hover:border-navy/30 transition-colors"
        aria-label="Bookmark"
      >
        <Bookmark size={12} strokeWidth={1.5} />
      </button>
    </div>
  );
}
