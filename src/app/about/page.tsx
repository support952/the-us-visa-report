import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata = {
  title: "About Us — The US Visa Report",
  description: "About The US Visa Report — independent immigration policy analysis and news coverage since 2019.",
};

export default function AboutPage() {
  return (
    <div className="bg-paper">
      <div className="bg-white border-b border-rule">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
          <nav className="flex items-center gap-1 text-[10px] font-sans text-ink-muted">
            <Link href="/" className="hover:text-ink transition-colors">Home</Link>
            <ChevronRight size={9} strokeWidth={1.5} />
            <span className="text-ink-soft">About</span>
          </nav>
        </div>
      </div>

      <div className="bg-white border-b border-rule">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <div className="max-w-2xl">
            <h1 className="font-serif text-2xl md:text-3xl font-bold text-ink tracking-tight">About Us</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-2xl space-y-6 text-[14px] font-sans text-ink-soft leading-[1.85]">
          <h2 className="font-serif text-lg font-bold text-ink">Our Mission</h2>
          <p>
            The US Visa Report is an independent publication dedicated to providing accurate, timely,
            and comprehensive analysis of U.S. immigration policy, visa programs, and administrative
            developments. Founded in 2019, we serve as a trusted resource for applicants, legal
            professionals, and policy analysts worldwide.
          </p>

          <h2 className="font-serif text-lg font-bold text-ink pt-4">What We Cover</h2>
          <p>
            Our editorial team tracks developments across the full spectrum of U.S. immigration law,
            including the Diversity Visa Lottery program, employment-based visa categories (H-1B, L-1,
            O-1, EB-1 through EB-5), family-based immigration, USCIS processing operations, consular
            affairs, and legislative activity in Congress.
          </p>

          <h2 className="font-serif text-lg font-bold text-ink pt-4">Our Team</h2>
          <p>
            Our analysts and correspondents bring decades of combined experience in immigration law,
            consular operations, and policy analysis. Team members include former State Department
            officers, legislative analysts, and award-winning journalists who have covered immigration
            for major news organizations.
          </p>

          <h2 className="font-serif text-lg font-bold text-ink pt-4">Editorial Independence</h2>
          <p>
            The US Visa Report maintains complete editorial independence. Our coverage is not influenced
            by any government agency, law firm, or advocacy organization. We adhere to established
            journalistic standards and correct errors promptly when identified.
          </p>

          <h2 className="font-serif text-lg font-bold text-ink pt-4">Contact</h2>
          <p>
            For press inquiries, corrections, or general questions, please visit our{" "}
            <Link href="/contact" className="text-ink underline hover:text-ink-soft transition-colors">
              contact page
            </Link>.
          </p>

          <div className="mt-8 pt-6 border-t border-rule text-[10px] text-ink-faint">
            <p>ISSN 2836-4172 (Online) &middot; Published from Washington, D.C.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
