import { getAllArticles } from "@/lib/articles";
import { ArticleCardGrid } from "@/components/ArticleCard";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";

const categoryMap: Record<string, string> = {
  "dv-lottery": "DV Lottery",
  "visa-types": "Visa Types",
  "analysis": "Analysis",
  "latest-news": "Latest News",
};

export function generateStaticParams() {
  return Object.keys(categoryMap).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const label = categoryMap[slug];
  if (!label) return {};
  return {
    title: `${label} — The US Visa News`,
    description: `${label} articles and coverage from The US Visa News.`,
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const label = categoryMap[slug];
  if (!label) notFound();

  const articles = getAllArticles().filter((a) => a.category === label);

  return (
    <div className="bg-paper">
      <div className="bg-white border-b border-rule">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
          <nav className="flex items-center gap-1 text-[10px] font-sans text-ink-muted">
            <Link href="/" className="hover:text-ink transition-colors">Home</Link>
            <ChevronRight size={9} strokeWidth={1.5} />
            <span className="text-ink-soft">{label}</span>
          </nav>
        </div>
      </div>

      <div className="bg-white border-b border-rule">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <h1 className="font-serif text-2xl md:text-3xl font-bold text-ink tracking-tight">
            {label}
          </h1>
          <p className="text-[13px] font-sans text-ink-soft mt-2 font-light">
            {articles.length} {articles.length === 1 ? "article" : "articles"}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {articles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {articles.map((a) => (
              <ArticleCardGrid key={a.slug} article={a} />
            ))}
          </div>
        ) : (
          <p className="text-[13px] font-sans text-ink-muted text-center py-16">
            No articles in this category yet.
          </p>
        )}

        <div className="border-t border-rule mt-12 pt-8 text-center">
          <p className="text-[12px] font-sans text-ink-soft mb-4">Interested in exploring your immigration options?</p>
          <Link href="/assessment" className="inline-flex items-center gap-2 px-5 py-1.5 border border-ink text-ink text-[10px] font-sans font-semibold uppercase tracking-[0.15em] hover:bg-ink hover:text-paper transition-colors">
            Check Eligibility<ArrowRight size={11} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </div>
  );
}
