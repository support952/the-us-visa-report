"use client";

import Link from "next/link";
import { Rss, Mail } from "lucide-react";
import { LogoIconDark } from "./Logo";

const footerLinks = {
  "News & Analysis": [
    { name: "Latest News", href: "/" },
    { name: "DV Lottery Updates", href: "/category/dv-lottery" },
    { name: "Visa Types", href: "/category/visa-types" },
    { name: "Policy Analysis", href: "/category/analysis" },
  ],
  Resources: [
    { name: "Eligibility Assessment", href: "/assessment" },
    { name: "DV-2027 FAQ", href: "/dv-2027-faq" },
    { name: "Passport Guide", href: "/passport-guide" },
    { name: "Official USCIS Forms", href: "https://www.uscis.gov/forms" },
  ],
  About: [
    { name: "About Us", href: "/about" },
    { name: "Editorial Policy", href: "/editorial-policy" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-ink text-ink-faint">
      {/* Newsletter */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-serif text-sm text-white font-bold">Policy Updates Newsletter</h3>
              <p className="text-[10px] font-sans text-white/30 mt-0.5">Weekly analysis. 12,400+ professionals.</p>
            </div>
            <form className="flex w-full md:w-auto gap-1.5" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="your@email.com" className="flex-1 md:w-56 px-3 py-1.5 bg-white/5 border border-white/8 text-[11px] text-white placeholder-white/25 focus:outline-none focus:border-white/15 font-sans" />
              <button type="submit" className="px-4 py-1.5 bg-white text-ink text-[10px] font-sans font-semibold hover:bg-white/90 transition-colors uppercase tracking-wider whitespace-nowrap">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <LogoIconDark size={24} />
              <span className="font-serif text-white font-bold text-sm">The US Visa Report</span>
            </div>
            <p className="text-[10px] font-sans text-white/25 leading-relaxed mt-2">
              Independent immigration policy analysis since 2019.
            </p>
            <p className="text-[8px] font-data text-white/15 mt-2">ISSN 2836-4172 (Online)</p>
            <div className="flex items-center gap-2.5 mt-3">
              <button className="text-white/20 hover:text-white/60 transition-colors" aria-label="RSS"><Rss size={13} strokeWidth={1.5} /></button>
              <button className="text-white/20 hover:text-white/60 transition-colors" aria-label="Email"><Mail size={13} strokeWidth={1.5} /></button>
            </div>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[9px] font-sans font-semibold text-white/60 uppercase tracking-[0.2em] mb-3">{title}</h4>
              <ul className="space-y-1.5">
                {links.map((link) => (
                  <li key={link.name}><Link href={link.href} className="text-[11px] font-sans text-white/30 hover:text-white/70 transition-colors">{link.name}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Legal */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-[9px] font-sans text-white/15 leading-relaxed space-y-2">
            <p>&copy; {new Date().getFullYear()} The US Visa Report. All rights reserved.</p>
            <p>
              <strong className="text-white/25">Legal Disclaimer:</strong> The US Visa Report
              is an independent news and analysis publication operated for informational purposes
              only. Nothing contained herein constitutes legal advice or creates an attorney-client
              relationship. The information presented reflects policy conditions as of the respective
              publication dates and is subject to change without notice. Immigration law is complex
              and fact-specific; individual circumstances vary significantly. Readers are strongly
              advised to consult with a qualified immigration attorney licensed in the appropriate
              jurisdiction before taking any action based on information published on this site.
              The US Visa Report is not affiliated with, endorsed by, or sponsored by the
              U.S. Department of State, U.S. Citizenship and Immigration Services (USCIS), the
              U.S. Department of Homeland Security, or any other governmental agency. All
              trademarks and service marks referenced herein are the property of their respective
              owners. Republication or redistribution of any content without express written
              consent is prohibited.
            </p>
            <p className="flex items-center gap-3">
              <Link href="/editorial-policy" className="text-white/25 hover:text-white/50 underline transition-colors">Editorial Policy</Link>
              <Link href="/privacy" className="text-white/25 hover:text-white/50 underline transition-colors">Privacy Policy</Link>
              <Link href="/contact" className="text-white/25 hover:text-white/50 underline transition-colors">Contact</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
