import Link from "next/link";
import { ChevronRight, Mail, MapPin } from "lucide-react";
import { CalendlyFull } from "@/components/CalendlyEmbed";
import BackButton, { BackButtonInline } from "@/components/BackButton";

export const metadata = {
  title: "Contact — The US Visa News",
  description: "Contact The US Visa News editorial team or schedule a consultation with an immigration expert.",
};

export default function ContactPage() {
  return (
    <div className="bg-paper">
      <div className="bg-white border-b border-rule">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between">
          <nav className="flex items-center gap-1 text-[10px] font-sans text-ink-muted min-w-0">
            <Link href="/" className="hover:text-ink transition-colors">Home</Link>
            <ChevronRight size={9} strokeWidth={1.5} />
            <span className="text-ink-soft">Contact</span>
          </nav>
          <BackButtonInline />
        </div>
      </div>

      <div className="bg-white border-b border-rule">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <div className="max-w-2xl">
            <h1 className="font-serif text-2xl md:text-3xl font-bold text-ink tracking-tight">Contact</h1>
            <p className="text-[13px] font-sans text-ink-soft mt-2 font-light">
              Reach our editorial team or schedule a consultation with an immigration expert.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left — Info */}
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-lg font-bold text-ink mb-3">Editorial Inquiries</h2>
              <p className="text-[13px] font-sans text-ink-soft leading-relaxed mb-4">
                For press inquiries, corrections, or editorial questions, contact our editorial desk.
              </p>
              <div className="space-y-2">
                <p className="flex items-center gap-2 text-[12px] font-sans text-ink-soft">
                  <Mail size={13} strokeWidth={1.5} className="text-ink-muted" />
                  support@theusvisanews.com
                </p>
                <p className="flex items-center gap-2 text-[12px] font-sans text-ink-soft">
                  <MapPin size={13} strokeWidth={1.5} className="text-ink-muted" />
                  Washington, D.C., United States
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-lg font-bold text-ink mb-3">Immigration Consultation</h2>
              <p className="text-[13px] font-sans text-ink-soft leading-relaxed">
                To speak with a senior immigration expert about your specific situation,
                schedule a private consultation using the booking tool. Our analysts
                specialize in the Diversity Visa Lottery, employment-based visas, and
                family-based immigration.
              </p>
            </div>

            <div className="p-5 bg-paper-warm border border-rule">
              <h3 className="text-[10px] font-sans font-semibold text-ink uppercase tracking-[0.15em] mb-2">
                Response Times
              </h3>
              <div className="space-y-1.5 text-[12px] font-sans text-ink-soft">
                <p>Editorial inquiries: 1-2 business days</p>
                <p>Consultation bookings: Confirmed immediately</p>
                <p>Corrections: Reviewed within 24 hours</p>
              </div>
            </div>
          </div>

          {/* Right — Calendly */}
          <div className="bg-white border border-rule overflow-hidden">
            <div className="px-4 py-2.5 border-b border-rule">
              <span className="text-[9px] font-sans font-semibold text-ink uppercase tracking-[0.18em]">
                Schedule Consultation
              </span>
            </div>
            <CalendlyFull />
          </div>
        </div>
        <BackButton />
      </div>
    </div>
  );
}
