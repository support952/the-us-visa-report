import {
  getFeaturedArticle,
  getLatestArticles,
  formatDate,
} from "@/lib/articles";
import {
  ArticleCardLarge,
  ArticleBrief,
  ArticleCardGrid,
} from "@/components/ArticleCard";
import VisaSuccessTracker from "@/components/VisaSuccessTracker";
import EligibilityQuiz from "@/components/EligibilityQuiz";
import { NewsletterInline } from "@/components/NewsletterSignup";
import ImmigrantStories from "@/components/ImmigrantStories";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const featured = getFeaturedArticle();
  const latest = getLatestArticles(7);
  const topBriefs = latest.filter((a) => a.slug !== featured?.slug).slice(0, 4);
  const gridArticles = latest.filter((a) => a.slug !== featured?.slug).slice(0, 4);

  return (
    <div>
      {/* ── HERO — white ── */}
      <section className="border-b border-rule" style={{ background: "#ffffff" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
          {featured && <ArticleCardLarge article={featured} />}

          {/* Secondary headlines */}
          <div className="mt-6 lg:mt-8 pt-6 border-t border-rule grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4">
            {topBriefs.map((article) => (
              <Link key={article.slug} href={`/news/${article.slug}`} className="group block">
                <h3 className="font-serif text-[15px] sm:text-base font-bold text-ink leading-snug group-hover:text-ink-soft transition-colors">
                  {article.title}
                </h3>
                <p className="text-[10px] font-sans text-ink-muted mt-1.5">
                  By {article.author.name} &middot; {formatDate(article.publishedDate)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mobile CTA ── */}
      <div className="lg:hidden border-b border-rule" style={{ background: "#f4f3f0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <span className="text-[11px] font-sans text-ink-muted">Exploring your immigration options?</span>
          <Link
            href="/assessment"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 border border-rule text-ink text-[10px] font-sans font-medium uppercase tracking-[0.12em] active:bg-paper-warm transition-colors"
          >
            Check Eligibility<ArrowRight size={10} strokeWidth={1.5} />
          </Link>
        </div>
      </div>

      {/* ── LATEST REPORTS — warm cream ── */}
      <section style={{ background: "#f9f9f7" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[9px] font-sans font-semibold text-ink uppercase tracking-[0.25em] pb-2.5 border-b-2 border-ink">
              Latest Reports
            </h2>
            <Link href="/archive" className="text-[10px] font-sans text-ink-muted hover:text-ink transition-colors flex items-center gap-1">
              All articles<ArrowRight size={10} strokeWidth={1.5} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {gridArticles.map((a) => (
              <ArticleCardGrid key={a.slug} article={a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── IMMIGRANT STORIES — white ── */}
      <section style={{ background: "#ffffff" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
          <ImmigrantStories />
        </div>
      </section>

      {/* ── NEWSLETTER — cream ── */}
      <section style={{ background: "#f9f9f7" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
          <NewsletterInline />
        </div>
      </section>

      {/* ── SIDEBAR WIDGETS — warm ── */}
      <section style={{ background: "#f4f3f0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <VisaSuccessTracker />
            <EligibilityQuiz />
          </div>
        </div>
      </section>
    </div>
  );
}
