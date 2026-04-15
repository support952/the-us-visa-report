"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Search, X } from "lucide-react";
import Link from "next/link";
import { getAllArticles, formatDate, type Article } from "@/lib/articles";

function highlightMatch(text: string, query: string) {
  if (!query || query.length < 2) return text;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <mark className="bg-yellow-200/60 text-ink rounded-sm px-px">{text.slice(idx, idx + query.length)}</mark>
      {text.slice(idx + query.length)}
    </>
  );
}

export default function SearchModal({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Article[]>([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  useEffect(() => {
    if (query.length < 2) { setResults([]); setActiveIndex(-1); return; }
    const q = query.toLowerCase();
    setResults(getAllArticles().filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q) ||
        a.content.toLowerCase().includes(q)
    ).slice(0, 8));
    setActiveIndex(-1);
  }, [query]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1));
    } else if (e.key === "Enter" && activeIndex >= 0 && results[activeIndex]) {
      onClose();
      window.location.href = `/news/${results[activeIndex].slug}`;
    }
  }, [results, activeIndex, onClose]);

  useEffect(() => {
    if (activeIndex >= 0 && resultsRef.current) {
      const el = resultsRef.current.children[activeIndex] as HTMLElement;
      el?.scrollIntoView({ block: "nearest" });
    }
  }, [activeIndex]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-ink/30 backdrop-blur-sm flex items-start justify-center pt-[8vh] sm:pt-[12vh] px-3 sm:px-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-paper border border-rule w-full max-w-xl overflow-hidden shadow-lg animate-in fade-in slide-in-from-top-2 duration-150">
        <div className="flex items-center gap-3 px-4 py-3 border-b border-rule">
          <Search size={15} className="text-ink-muted flex-shrink-0" strokeWidth={1.5} />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search articles..."
            className="flex-1 text-[14px] sm:text-[13px] font-sans outline-none placeholder-ink-faint text-ink bg-transparent"
          />
          <kbd className="hidden sm:inline-block text-[9px] font-sans text-ink-faint border border-rule rounded px-1.5 py-0.5">ESC</kbd>
          <button onClick={onClose} className="text-ink-muted hover:text-ink transition-colors">
            <X size={16} strokeWidth={1.5} />
          </button>
        </div>

        {results.length > 0 && (
          <div ref={resultsRef} className="max-h-80 overflow-y-auto divide-y divide-rule">
            {results.map((a, i) => (
              <Link
                key={a.slug}
                href={`/news/${a.slug}`}
                onClick={onClose}
                className={`block px-4 py-3 transition-colors ${
                  i === activeIndex ? "bg-paper-warm" : "hover:bg-paper-warm"
                }`}
              >
                <span className="text-[9px] font-sans font-semibold text-crimson-text uppercase tracking-[0.18em]">
                  {a.category}
                </span>
                <h4 className="font-serif text-[13px] font-semibold text-ink mt-0.5 leading-snug">
                  {highlightMatch(a.title, query)}
                </h4>
                <p className="text-[11px] font-sans text-ink-soft mt-0.5 line-clamp-1">
                  {highlightMatch(a.excerpt, query)}
                </p>
                <p className="text-[10px] font-sans text-ink-muted mt-0.5">
                  {formatDate(a.publishedDate)} &middot; {a.readTime} min
                </p>
              </Link>
            ))}
          </div>
        )}

        {query.length >= 2 && results.length === 0 && (
          <div className="px-4 py-10 text-center">
            <p className="text-[12px] text-ink-muted font-sans">No results for &ldquo;{query}&rdquo;</p>
            <p className="text-[10px] text-ink-faint font-sans mt-1">Try different keywords or check the spelling</p>
          </div>
        )}

        {query.length < 2 && (
          <div className="px-4 py-4">
            <p className="text-[9px] font-sans text-ink-muted uppercase tracking-[0.2em] mb-2">Suggested</p>
            <div className="flex flex-wrap gap-1.5">
              {["DV Lottery", "H-1B", "Green Card", "USCIS Fees", "Visa Bulletin"].map((t) => (
                <button key={t} onClick={() => setQuery(t)} className="px-2.5 py-1 border border-rule text-[10px] font-sans text-ink-soft hover:border-ink-faint hover:text-ink transition-colors">
                  {t}
                </button>
              ))}
            </div>
          </div>
        )}

        {results.length > 0 && (
          <div className="px-4 py-2 border-t border-rule flex items-center gap-3 text-[9px] font-sans text-ink-faint">
            <span><kbd className="border border-rule rounded px-1 py-px mr-0.5">&uarr;</kbd><kbd className="border border-rule rounded px-1 py-px ml-0.5">&darr;</kbd> navigate</span>
            <span><kbd className="border border-rule rounded px-1 py-px">Enter</kbd> open</span>
          </div>
        )}
      </div>
    </div>
  );
}
