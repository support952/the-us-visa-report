"use client";

import { useState } from "react";
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

  return (
    <>
      <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur-sm">
        {/* Masthead */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 text-center border-b border-rule">
          <Link href="/" className="inline-block">
            <h1 className="font-serif text-[28px] md:text-[36px] font-bold text-ink tracking-tight leading-none">
              The US Visa Report
            </h1>
            <div className="flex items-center justify-center gap-3 mt-2.5">
              <span className="w-8 h-px bg-rule" />
              <LogoIcon size={18} />
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
            <div className="flex items-center justify-between h-10">
              {/* Desktop nav */}
              <nav className="hidden lg:flex items-center gap-0">
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
              <div className="hidden lg:flex items-center gap-4 ml-auto">
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
                  Begin Assessment
                </Link>
              </div>

              {/* Mobile */}
              <div className="flex items-center gap-2 lg:hidden w-full justify-between">
                <Link href="/" className="flex items-center gap-1.5">
                  <LogoIcon size={22} />
                  <span className="font-serif text-sm font-bold text-ink">USVR</span>
                </Link>
                <div className="flex items-center gap-1">
                  <button onClick={() => setSearchOpen(true)} className="p-2 text-ink-muted" aria-label="Search">
                    <Search size={16} strokeWidth={1.5} />
                  </button>
                  <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-ink-muted" aria-label="Menu">
                    {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-rule bg-paper">
            <div className="max-w-7xl mx-auto px-4 py-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-2 py-2.5 text-[11px] font-sans font-medium text-ink-soft hover:text-ink border-b border-rule-light last:border-0 uppercase tracking-[0.12em]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/assessment"
                className="block text-center mt-2 mb-1 px-4 py-2 border border-ink text-ink text-[10px] font-sans font-semibold uppercase tracking-[0.15em] hover:bg-ink hover:text-paper transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Begin Assessment
              </Link>
            </div>
          </div>
        )}
      </header>

      {searchOpen && <SearchModal onClose={() => setSearchOpen(false)} />}
    </>
  );
}
