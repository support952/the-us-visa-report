"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function NewsletterSidebar() {
  return (
    <div className="bg-white border border-rule p-4">
      <h3 className="font-serif text-sm font-bold text-ink mb-0.5">Weekly Policy Brief</h3>
      <p className="text-[10px] font-sans text-ink-muted mb-3 leading-relaxed">Expert analysis. Every Monday. 12,400+ subscribers.</p>
      <form onSubmit={(e) => e.preventDefault()} className="space-y-1.5">
        <input type="email" placeholder="your@email.com" className="w-full px-2.5 py-1.5 border border-rule text-[11px] font-sans focus:outline-none focus:border-ink-faint bg-white" />
        <button type="submit" className="w-full px-2.5 py-1.5 bg-ink text-paper text-[10px] font-sans font-medium hover:bg-ink-mid transition-colors">Subscribe</button>
      </form>
      <p className="text-[8px] font-sans text-ink-faint mt-1.5">Unsubscribe anytime.</p>
    </div>
  );
}

export function NewsletterInline() {
  return (
    <div className="border-t border-b border-rule py-10 text-center">
      <p className="text-[9px] font-sans font-semibold text-crimson-text uppercase tracking-[0.2em] mb-2">Policy Advisory</p>
      <h3 className="font-serif text-xl font-bold text-ink leading-tight">
        2026 Immigration Policy Changes
      </h3>
      <p className="text-[13px] font-sans text-ink-soft leading-relaxed mt-2 max-w-md mx-auto">
        Recent regulatory updates may impact your immigration pathway. Our analysts provide complimentary preliminary assessments.
      </p>
      <Link href="/assessment" className="inline-flex items-center gap-2 mt-5 px-5 py-1.5 border border-ink text-ink text-[10px] font-sans font-semibold uppercase tracking-[0.15em] hover:bg-ink hover:text-paper transition-colors">
        Check Eligibility<ArrowRight size={11} strokeWidth={1.5} />
      </Link>
    </div>
  );
}
