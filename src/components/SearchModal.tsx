"use client";

import { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import Link from "next/link";
import { getAllArticles, formatDate, type Article } from "@/lib/articles";

export default function SearchModal({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Article[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    const handleEsc = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  useEffect(() => {
    if (query.length < 2) { setResults([]); return; }
    const q = query.toLowerCase();
    setResults(getAllArticles().filter(
      (a) => a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q) || a.category.toLowerCase().includes(q)
    ).slice(0, 8));
  }, [query]);

  return (
    <div className="fixed inset-0 z-[100] bg-ink/30 backdrop-blur-sm flex items-start justify-center pt-24 px-4">
      <div className="bg-paper border border-rule w-full max-w-xl overflow-hidden shadow-lg">
        <div className="flex items-center gap-3 px-4 py-3 border-b border-rule">
          <Search size={15} className="text-ink-muted flex-shrink-0" strokeWidth={1.5} />
          <input ref={inputRef} type="text" value={query} onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles, topics, visa categories..."
            className="flex-1 text-[13px] font-sans outline-none placeholder-ink-faint text-ink bg-transparent" />
          <button onClick={onClose} className="text-ink-muted hover:text-ink transition-colors"><X size={16} strokeWidth={1.5} /></button>
        </div>
        {results.length > 0 && (
          <div className="max-h-72 overflow-y-auto divide-y divide-rule">
            {results.map((a) => (
              <Link key={a.slug} href={`/news/${a.slug}`} onClick={onClose} className="block px-4 py-3 hover:bg-paper-warm transition-colors">
                <span className="text-[9px] font-sans font-semibold text-crimson-text uppercase tracking-[0.18em]">{a.category}</span>
                <h4 className="font-serif text-[13px] font-semibold text-ink mt-0.5 leading-snug">{a.title}</h4>
                <p className="text-[10px] font-sans text-ink-muted mt-0.5">{formatDate(a.publishedDate)} &middot; {a.readTime} min</p>
              </Link>
            ))}
          </div>
        )}
        {query.length >= 2 && results.length === 0 && (
          <div className="px-4 py-8 text-center"><p className="text-[12px] text-ink-muted font-sans">No results for &ldquo;{query}&rdquo;</p></div>
        )}
        {query.length < 2 && (
          <div className="px-4 py-4">
            <p className="text-[9px] font-sans text-ink-muted uppercase tracking-[0.2em] mb-2">Suggested</p>
            <div className="flex flex-wrap gap-1.5">
              {["DV Lottery", "H-1B", "Green Card", "USCIS Fees", "Visa Bulletin"].map((t) => (
                <button key={t} onClick={() => setQuery(t)} className="px-2.5 py-1 border border-rule text-[10px] font-sans text-ink-soft hover:border-ink-faint transition-colors">{t}</button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
