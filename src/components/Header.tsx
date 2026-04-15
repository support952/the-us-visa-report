"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import SearchModal from "./SearchModal";
import { LogoIcon } from "./Logo";

const navigation = [
  { name: "Latest News", href: "/" },
  { name: "DV-2027", href: "/news/diversity-visa-lottery-selection-opens-march-2026" },
  { name: "FAQ", href: "/dv-2027-faq" },
  { name: "Passport Guide", href: "/passport-guide" },
  { name: "Analysis", href: "/category/analysis" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur-sm">
        {/* Masthead — hidden on mobile, shown on tablet+ */}
        <div className="hidden md:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 text-center border-b border-rule">
          <Link href="/" className="inline-block">
            <h1 className="font-serif text-[28px] md:text-[32px] lg:text-[36px] font-bold text-ink tracking-tight leading-none">
              The US Visa News
            </h1>
            <div className="flex items-center justify-center gap-3 mt-2.5">
              <span className="w-8 h-px bg-rule" />
              <span className="text-[8px] font-sans font-semibold text-ink-muted uppercase tracking-[0.35em]">
                Founded 2019 &nbsp;&middot;&nbsp; Independent Policy Analysis
              </span>
              <span className="w-8 h-px bg-rule" />
            </div>
          </Link>
        </div>

        {/* Navigation bar */}
        <div className="border-b border-rule">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-12 md:h-10">
              {/* Desktop nav */}
              <nav className="hidden md:flex items-center gap-0">
                {navigation.map((item, i) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-4 py-2 text-[11px] font-sans font-medium text-ink-soft hover:text-ink transition-colors uppercase tracking-[0.12em] ${
                      i > 0 ? "border-l border-rule" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* Right controls */}
              <div className="hidden md:flex items-center gap-4 ml-auto">
                <button
                  onClick={() => setSearchOpen(true)}
                  className="p-1 text-ink-muted hover:text-ink transition-colors"
                  aria-label="Search"
                >
                  <Search size={15} strokeWidth={1.5} />
                </button>
                <Link
                  href="/assessment"
                  className="px-4 py-1 border border-ink text-ink text-[10px] font-sans font-semibold uppercase tracking-[0.15em] hover:bg-ink hover:text-paper transition-colors"
                >
                  Check Eligibility
                </Link>
              </div>

              {/* Mobile */}
              <div className="flex items-center gap-2 md:hidden w-full justify-between">
                <Link href="/" className="flex items-center gap-2">
                  <LogoIcon size={24} />
                  <span className="font-serif text-base font-bold text-ink">USVN</span>
                </Link>
                <div className="flex items-center gap-0.5">
                  <button onClick={() => setSearchOpen(true)} className="p-2.5 text-ink-muted active:text-ink" aria-label="Search">
                    <Search size={18} strokeWidth={1.5} />
                  </button>
                  <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2.5 text-ink-muted active:text-ink" aria-label="Menu">
                    {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-rule bg-paper">
            <div className="max-w-7xl mx-auto px-4 py-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-3.5 text-[13px] font-sans font-medium text-ink-soft active:text-ink border-b border-rule-light last:border-0 uppercase tracking-[0.08em]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/assessment"
                className="block text-center mt-3 mb-2 px-4 py-3 bg-ink text-paper text-[12px] font-sans font-semibold uppercase tracking-[0.12em] active:bg-ink-mid transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Check Eligibility
              </Link>
            </div>
          </div>
        )}
      </header>

      {searchOpen && <SearchModal onClose={() => setSearchOpen(false)} />}
    </>
  );
}
