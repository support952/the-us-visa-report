import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import BackButton, { BackButtonInline } from "@/components/BackButton";

export const metadata = {
  title: "DV-2027 Diversity Visa Lottery FAQ — The US Visa News",
  description: "Comprehensive FAQ for the DV-2027 Green Card Lottery program. Registration dates, new passport requirements, eligibility, and official guidance.",
};

const faqSections = [
  {
    title: "Registration & Dates",
    items: [
      {
        q: "When does the registration for DV-2027 officially open?",
        a: "The registration was delayed to implement new federal regulations, including the mandatory passport rule and electronic fee. The U.S. Department of State is expected to announce specific dates imminently. Based on current updates, the system should go live in the second half of April 2026.",
      },
      {
        q: "Is there really a $1 fee to enter now?",
        a: "Yes. Starting with the DV-2027 program, the U.S. government has introduced a $1 non-refundable electronic registration fee. This fee must be paid online via the official portal at the time of submission using a major credit or debit card.",
      },
      {
        q: "Do I need a passport to enter?",
        a: 'Yes. The "Passport Rule" is back and stricter than before. The principal applicant must have a valid, unexpired international passport and must upload a clear scan of the biographic page during the entry process. See our Passport Scan Guide for technical specifications.',
      },
    ],
  },
  {
    title: "Eligibility Requirements",
    items: [
      {
        q: "Can I enter if I don't have a High School Diploma?",
        a: "Yes, but only if you have two years of work experience within the last five years in an occupation that requires at least two years of training or experience, as defined by the U.S. Department of Labor. If you have neither a diploma nor qualifying work experience, you are not eligible.",
      },
      {
        q: "Can my spouse and I both apply?",
        a: 'Yes, and this is highly recommended. If both spouses meet the eligibility requirements, each can submit one entry as the "Principal Applicant" and list the other as a "Dependent." This effectively doubles your family\'s chances of selection.',
      },
      {
        q: "My country of birth is NOT eligible. Is there any other way I can enter?",
        a: "Yes, there are two common methods: (1) Spousal Eligibility — if your spouse was born in an eligible country, you can claim their country of birth, provided you are both listed on the entry and receive visas together. (2) Parental Eligibility — if neither of your parents was born in your country and they were not legal residents there at the time of your birth, you may claim a parent's birth country.",
      },
      {
        q: "Can I use a vocational or technical school diploma?",
        a: 'Generally, no. The U.S. requires a "high school education or its equivalent" meeting U.S. standards of academic study, including languages, sciences, and mathematics. If your vocational training focused solely on a trade without general academic subjects, you must qualify via the two-year work experience route.',
      },
    ],
  },
  {
    title: "Selection & After Winning",
    items: [
      {
        q: "If I win, is my Green Card guaranteed?",
        a: "No. Being selected is only the first step. You must still meet all legal, medical, and security requirements and attend an interview at a U.S. Consulate. More people are selected than there are visas available (typically 100,000–120,000 selectees for 55,000 visas), so you must act quickly.",
      },
      {
        q: "Will the U.S. government email me if I win?",
        a: "NEVER. The only way to know if you were selected is to check your status manually at dvprogram.state.gov/ESC using your unique confirmation number. Any email claiming you won is a scam.",
      },
      {
        q: "If I win today, how long until I actually move to the United States?",
        a: "The process is not immediate. If you apply in April 2026, results are usually released in May 2027. Interviews and visa processing take place between October 2027 and September 2028. Expect the entire journey from entry to relocation to take approximately 1.5 to 2 years.",
      },
      {
        q: "I want to move alone first. Can my spouse and children join later?",
        a: 'Yes. This is called "Following to Join." While it is often easier to interview together, your family members can wait. However, they must be issued their visas and enter the U.S. before the DV program year ends (September 30th of the applicable fiscal year).',
      },
      {
        q: "Do I have to move to the U.S. immediately after receiving my visa?",
        a: "Once the visa is stamped in your passport, it is typically valid for 6 months based on the date of your medical exam. You must enter the U.S. at least once before it expires to activate your Green Card.",
      },
    ],
  },
  {
    title: "Life in the U.S. After Immigration",
    items: [
      {
        q: "After I move, do I have to stay permanently?",
        a: "A Green Card is for permanent residence. If you leave the U.S. for more than one year without a Re-entry Permit, your status may be considered abandoned. The U.S. should be your primary home.",
      },
      {
        q: "When will I get U.S. Citizenship?",
        a: "The lottery grants a Green Card (Permanent Residency), not citizenship. Generally, you can apply for Naturalization after living in the U.S. as a Green Card holder for 5 years, provided you meet physical presence and good moral character requirements.",
      },
      {
        q: "Can I change which state I move to?",
        a: "Yes. Unlike some employment visas, the Diversity Visa allows you to live and work anywhere in the United States. You are not tied to the address you provided in your initial application.",
      },
    ],
  },
  {
    title: "Special Circumstances",
    items: [
      {
        q: "I am in the U.S. on a different visa. Can I still enter?",
        a: 'Yes. If you are physically present in the U.S. and meet eligibility requirements, you can enter the lottery. If selected, you may be eligible to "Adjust Status" through USCIS without leaving the country.',
      },
      {
        q: "What if I have a criminal record?",
        a: 'Not necessarily disqualifying. You must provide a Police Certificate from every country where you lived for more than 6 months since age 16. Minor offenses may be acceptable, but "crimes involving moral turpitude" (fraud, theft, violent crimes) or drug offenses usually lead to disqualification. Consult a qualified attorney.',
      },
      {
        q: "Does my baby need a separate passport for the entry?",
        a: "No. Only the Principal Applicant needs to provide passport details and a scan at registration. However, all family members will need their own passports later if selected.",
      },
      {
        q: "What happens if the Principal Applicant dies after being selected?",
        a: "If the principal applicant dies before the visa is issued, the entire entry is canceled. The spouse and children cannot inherit the selection.",
      },
      {
        q: "Can I change my marital status after submitting?",
        a: "You must be truthful at the time of entry. If single when you apply but marry after selection (before the interview), you can typically add your new spouse. However, if you were already married but claimed single, you will be permanently disqualified for misrepresentation.",
      },
      {
        q: "I have a medical condition. Will that stop me?",
        a: 'Only communicable diseases of public health significance (like active TB) or certain mental disorders associated with harmful behavior are grounds for denial. Most chronic conditions (diabetes, heart disease) do not disqualify you, provided you demonstrate you won\'t become a "public charge."',
      },
      {
        q: "Does a prior visa denial affect my eligibility?",
        a: "A prior denial for a tourist visa (often under Section 214b for lack of ties) does not affect DV lottery eligibility. However, a previous denial for fraud or overstaying will likely affect your Green Card interview.",
      },
      {
        q: "What vaccines are required for the medical exam?",
        a: "You must show proof of age-appropriate vaccinations for Measles, Mumps, Rubella (MMR), Polio, Tetanus, and Hepatitis B. Check the Official Vaccination List closer to your interview as requirements may change.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="bg-paper">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-rule">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between">
          <nav className="flex items-center gap-1 text-[10px] font-sans text-ink-muted min-w-0">
            <Link href="/" className="hover:text-ink transition-colors">Home</Link>
            <ChevronRight size={9} strokeWidth={1.5} />
            <span className="text-ink-soft">DV-2027 FAQ</span>
          </nav>
          <BackButtonInline />
        </div>
      </div>

      {/* Header */}
      <div className="bg-white border-b border-rule">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <div className="max-w-2xl">
            <span className="text-[9px] font-sans font-semibold text-crimson-text uppercase tracking-[0.2em]">
              DV Lottery
            </span>
            <h1 className="font-serif text-2xl md:text-[2.2rem] font-bold text-ink mt-2 leading-[1.12] tracking-tight">
              DV-2027 Diversity Visa Lottery: Frequently Asked Questions
            </h1>
            <p className="text-[14px] font-sans text-ink-soft mt-4 leading-relaxed font-light">
              A comprehensive reference covering registration, eligibility, the selection
              process, and life after winning. Updated for the 2026-2027 cycle.
            </p>
            <div className="flex items-center gap-3 mt-5 text-[9px] font-sans text-ink-faint">
              <span>Last updated: April 15, 2026</span>
              <span>&middot;</span>
              <span>Reviewed by Policy Desk</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-3xl space-y-12">
          {faqSections.map((section) => (
            <div key={section.title}>
              <h2 className="font-serif text-lg font-bold text-ink pb-2.5 border-b border-rule mb-4">
                {section.title}
              </h2>
              <FAQAccordion items={section.items} />
            </div>
          ))}

          {/* CTA */}
          <div className="border-t border-b border-rule py-8 text-center">
            <p className="text-[12px] font-sans text-ink-soft mb-4">
              Need personalized guidance on your DV-2027 application?
            </p>
            <Link href="/assessment" className="inline-flex items-center gap-2 px-5 py-1.5 border border-ink text-ink text-[10px] font-sans font-semibold uppercase tracking-[0.15em] hover:bg-ink hover:text-paper transition-colors">
              Check Eligibility
            </Link>
          </div>

          {/* Disclaimer */}
          <div className="text-[10px] font-sans text-ink-faint leading-relaxed">
            <strong className="text-ink-muted">Disclaimer:</strong> This FAQ is for informational
            purposes only and does not constitute legal advice. Immigration law is complex and
            fact-specific. Consult a qualified immigration attorney for advice on your situation.
          </div>
          <BackButton />
        </div>
      </div>
    </div>
  );
}
