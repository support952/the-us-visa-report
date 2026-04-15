import { getAllArticles } from "@/lib/articles";
import { ArticleCardGrid } from "@/components/ArticleCard";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import BackButton, { BackButtonInline } from "@/components/BackButton";

export const metadata = {
  title: "Article Archive — The US Visa News",
  description: "Complete archive of immigration policy analysis, DV Lottery updates, and visa program coverage from The US Visa News.",
};

export default function ArchivePage() {
  const articles = getAllArticles();
  const years = [...new Set(articles.map((a) => new Date(a.publishedDate).getFullYear()))].sort((a, b) => b - a);

  return (
    <div className="bg-paper">
      <div className="bg-white border-b border-rule">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between">
          <nav className="flex items-center gap-1 text-[10px] font-sans text-ink-muted min-w-0">
            <Link href="/" className="hover:text-ink transition-colors">Home</Link>
            <ChevronRight size={9} strokeWidth={1.5} />
            <span className="text-ink-soft">Archive</span>
          </nav>
          <BackButtonInline />
        </div>
      </div>

      <div className="bg-white border-b border-rule">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <h1 className="font-serif text-2xl md:text-3xl font-bold text-ink tracking-tight">
            Article Archive
          </h1>
          <p className="text-[13px] font-sans text-ink-soft mt-2 font-light">
            Complete coverage of U.S. immigration policy — {articles.length} reports and counting.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {years.map((year) => {
          const yearArticles = articles.filter((a) => new Date(a.publishedDate).getFullYear() === year);
          return (
            <div key={year} className="mb-14">
              <h2 className="text-[9px] font-sans font-semibold text-ink uppercase tracking-[0.25em] pb-2.5 border-b-2 border-ink mb-6">
                {year}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {yearArticles.map((a) => (
                  <ArticleCardGrid key={a.slug} article={a} />
                ))}
              </div>
            </div>
          );
        })}
        <BackButton />
      </div>
    </div>
  );
}
