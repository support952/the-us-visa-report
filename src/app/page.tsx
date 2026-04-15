import {
  getFeaturedArticle,
  getLatestArticles,
} from "@/lib/articles";
import {
  ArticleCardLarge,
  ArticleBrief,
  ArticleCardGrid,
} from "@/components/ArticleCard";
import VisaSuccessTracker from "@/components/VisaSuccessTracker";
import EligibilityQuiz from "@/components/EligibilityQuiz";
import { NewsletterInline } from "@/components/NewsletterSignup";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const featured = getFeaturedArticle();
  const latest = getLatestArticles(7);
  const topBriefs = latest.filter((a) => a.slug !== featured?.slug).slice(0, 4);
  const gridArticles = latest.slice(0, 4);

  return (
    <div className="bg-paper">
      {/* ── HERO ── */}
      <section className="bg-white border-b border-rule">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            <div className="lg:col-span-3">
              {featured && <ArticleCardLarge article={featured} />}
            </div>
            <div className="lg:col-span-2">
              <h2 className="text-[9px] font-sans font-semibold text-ink-muted uppercase tracking-[0.25em] pb-2.5 border-b border-rule mb-0">
                Top Policy Briefs
              </h2>
              {topBriefs.map((article, i) => (
                <ArticleBrief key={article.slug} article={article} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 lg:gap-20">
          {/* Left */}
          <div className="lg:col-span-2 space-y-16">
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-[9px] font-sans font-semibold text-ink uppercase tracking-[0.25em] pb-2.5 border-b-2 border-ink">
                  Latest Reports
                </h2>
                <Link href="/archive" className="text-[10px] font-sans text-ink-muted hover:text-ink transition-colors flex items-center gap-1">
                  All articles<ArrowRight size={10} strokeWidth={1.5} />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {gridArticles.map((a) => (
                  <ArticleCardGrid key={a.slug} article={a} />
                ))}
              </div>
            </div>

            <NewsletterInline />
          </div>

          {/* Right — sidebar */}
          <aside className="space-y-6">
            <VisaSuccessTracker />
            <EligibilityQuiz />
          </aside>
        </div>
      </section>
    </div>
  );
}
