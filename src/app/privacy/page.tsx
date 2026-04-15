import Link from "next/link";
import { ChevronRight } from "lucide-react";
import BackButton, { BackButtonInline } from "@/components/BackButton";

export const metadata = {
  title: "Privacy Policy — The US Visa News",
  description: "Privacy policy for The US Visa News website.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-paper">
      <div className="bg-white border-b border-rule">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between">
          <nav className="flex items-center gap-1 text-[10px] font-sans text-ink-muted min-w-0">
            <Link href="/" className="hover:text-ink transition-colors">Home</Link>
            <ChevronRight size={9} strokeWidth={1.5} />
            <span className="text-ink-soft">Privacy Policy</span>
          </nav>
          <BackButtonInline />
        </div>
      </div>

      <div className="bg-white border-b border-rule">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <div className="max-w-2xl">
            <h1 className="font-serif text-2xl md:text-3xl font-bold text-ink tracking-tight">Privacy Policy</h1>
            <p className="text-[9px] font-sans text-ink-faint mt-2">Effective date: January 1, 2024 &middot; Last updated: January 2026</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-2xl space-y-6 text-[14px] font-sans text-ink-soft leading-[1.85]">
          <h2 className="font-serif text-lg font-bold text-ink">Information We Collect</h2>
          <p>
            When you use our website, we may collect information you voluntarily provide, such as your
            name, email address, and phone number when you subscribe to our newsletter or use our
            eligibility assessment tools. We also collect standard web analytics data including IP
            addresses, browser type, pages visited, and referring URLs.
          </p>

          <h2 className="font-serif text-lg font-bold text-ink pt-4">How We Use Your Information</h2>
          <p>
            Information collected is used to deliver requested services (such as newsletter delivery
            and eligibility assessments), improve our website and content, communicate with you
            regarding your inquiry, and comply with applicable legal obligations. We do not sell,
            rent, or trade your personal information to third parties.
          </p>

          <h2 className="font-serif text-lg font-bold text-ink pt-4">Data Security</h2>
          <p>
            We implement industry-standard security measures, including SSL encryption for all data
            transmission. However, no method of electronic transmission or storage is 100% secure,
            and we cannot guarantee absolute security.
          </p>

          <h2 className="font-serif text-lg font-bold text-ink pt-4">Cookies</h2>
          <p>
            Our website uses essential cookies to ensure proper functionality. Third-party analytics
            services may set additional cookies to help us understand site usage patterns. You may
            configure your browser to reject cookies, though some features may be affected.
          </p>

          <h2 className="font-serif text-lg font-bold text-ink pt-4">Third-Party Services</h2>
          <p>
            Our scheduling functionality is provided by Calendly, Inc. When you book a consultation,
            your information is processed according to Calendly&apos;s privacy policy. We encourage you
            to review their terms before submitting information through their platform.
          </p>

          <h2 className="font-serif text-lg font-bold text-ink pt-4">Your Rights</h2>
          <p>
            You may request access to, correction of, or deletion of your personal data at any time
            by contacting us through our{" "}
            <Link href="/contact" className="text-ink underline hover:text-ink-soft transition-colors">contact page</Link>.
            We will respond to such requests within 30 days.
          </p>

          <h2 className="font-serif text-lg font-bold text-ink pt-4">Changes to This Policy</h2>
          <p>
            We may update this policy periodically. Changes will be posted on this page with an
            updated effective date. Continued use of the website constitutes acceptance of the
            revised policy.
          </p>
          <BackButton />
        </div>
      </div>
    </div>
  );
}
