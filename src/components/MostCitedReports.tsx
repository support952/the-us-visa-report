import Link from "next/link";

const reports = [
  { title: "Annual Diversity Visa Impact Study 2024", slug: "dv-2025-final-visa-issuance-statistics" },
  { title: "Employment-Based Immigration Processing Report", slug: "uscis-updates-processing-times-employment-green-cards" },
  { title: "Visa Bulletin Priority Date Analysis", slug: "understanding-visa-bulletin-priority-dates" },
  { title: "Global Mobility Index: U.S. Destination Report", slug: "global-mobility-index-2024-us-top-destination" },
];

export default function MostCitedReports() {
  return (
    <div className="bg-paper-warm border border-rule">
      <div className="px-3 py-2 border-b border-rule">
        <span className="text-[9px] font-sans font-semibold text-ink uppercase tracking-[0.18em]">
          Most Cited Reports
        </span>
      </div>
      <div className="divide-y divide-rule">
        {reports.map((r, i) => (
          <Link key={i} href={`/news/${r.slug}`} className="block px-3 py-2.5 hover:bg-steel-light/50 transition-colors group">
            <h4 className="text-[10px] font-sans font-medium text-ink group-hover:text-ink-soft transition-colors leading-snug">
              {r.title}
            </h4>
          </Link>
        ))}
      </div>
    </div>
  );
}
