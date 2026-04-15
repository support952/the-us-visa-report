import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getArticleBySlug, getRelatedArticles, getAllArticles, formatDate } from "@/lib/articles";
import { ChevronRight, Clock } from "lucide-react";
import ReadingProgressBar from "@/components/ReadingProgressBar";
import KeyTakeaways from "@/components/KeyTakeaways";
import AuthorBio from "@/components/AuthorBio";
import SocialShare from "@/components/SocialShare";
import ArticleRenderer from "@/components/ArticleRenderer";
import EligibilityQuiz from "@/components/EligibilityQuiz";
import VisaSuccessTracker from "@/components/VisaSuccessTracker";
import { ArticleCardGrid } from "@/components/ArticleCard";
import { getImageForSlug } from "@/lib/images";
import BackButton, { BackButtonInline } from "@/components/BackButton";

function generateTakeaways(content: string): string[] {
  const lines = content.split("\n").filter((l) => l.trim());
  const tw: string[] = [];
  for (const l of lines) {
    if (l.startsWith("## ") && !l.includes("Key") && tw.length < 4) tw.push(l.replace("## ", "") + " — analysis below");
  }
  if (tw.length < 3) {
    for (const s of content.split(".").filter((s) => s.trim().length > 40 && s.trim().length < 150)) {
      if (tw.length >= 4) break;
      tw.push(s.trim() + ".");
    }
  }
  return tw.slice(0, 4);
}

export async function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article Not Found" };
  return {
    title: `${article.title} — The US Visa News`,
    description: article.excerpt,
    openGraph: { title: article.title, description: article.excerpt, type: "article", publishedTime: article.publishedDate, authors: [article.author.name] },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = getRelatedArticles(slug, article.category, 3);
  const takeaways = generateTakeaways(article.content);

  return (
    <>
      <ReadingProgressBar />
      <article className="bg-paper">
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-rule">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between">
            <nav className="flex items-center gap-1 text-[10px] font-sans text-ink-muted min-w-0">
              <Link href="/" className="hover:text-ink transition-colors flex-shrink-0">Home</Link>
              <ChevronRight size={9} strokeWidth={1.5} />
              <Link href={`/category/${article.category.toLowerCase().replace(/\s+/g, "-")}`} className="hover:text-ink transition-colors">{article.category}</Link>
              <ChevronRight size={9} strokeWidth={1.5} />
              <span className="text-ink-soft truncate max-w-[200px]">{article.title}</span>
            </nav>
            <BackButtonInline />
          </div>
        </div>

        {/* Header — WashPost style: text left, image right */}
        <header className="bg-white border-b border-rule">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-14">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left: headline + metadata */}
              <div>
                <span className="text-[9px] font-sans font-semibold text-crimson-text uppercase tracking-[0.2em]">
                  {article.category}
                  {article.isBreaking && <span className="ml-2 px-2 py-0.5 bg-crimson text-paper text-[8px] tracking-wider">Breaking</span>}
                </span>
                <h1 className="font-serif text-2xl sm:text-[1.85rem] lg:text-[2.5rem] font-bold text-ink mt-3 leading-[1.1] tracking-tight">
                  {article.title}
                </h1>
                <p className="text-[14px] sm:text-[16px] font-sans text-ink-soft mt-4 leading-[1.7] font-light">{article.excerpt}</p>

                {/* Author line — WashPost style */}
                <div className="mt-6 pt-4 border-t border-rule">
                  <div className="flex items-center gap-2 text-[12px] font-sans">
                    <span className="font-medium text-ink">By {article.author.name}</span>
                    <span className="text-ink-faint">&middot;</span>
                    <span className="text-ink-muted">{formatDate(article.publishedDate)}</span>
                    <span className="text-ink-faint">&middot;</span>
                    <span className="text-ink-muted flex items-center gap-0.5"><Clock size={11} strokeWidth={1.5} />{article.readTime} min</span>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex flex-wrap gap-x-4 text-[9px] font-sans text-ink-faint">
                      <span>{article.author.role}</span>
                      <span>Edited by Policy Desk</span>
                    </div>
                    <SocialShare title={article.title} />
                  </div>
                </div>
              </div>

              {/* Right: image */}
              <div className="order-first lg:order-last">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={getImageForSlug(article.slug)}
                    alt={article.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
                <p className="text-[10px] font-sans text-ink-faint mt-2 leading-relaxed italic">
                  {article.title}. (The US Visa News)
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Body — cream background */}
        <div style={{ background: "#f9f9f7" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-14">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
              <div className="lg:col-span-2">
                <KeyTakeaways takeaways={takeaways} />
                <ArticleRenderer content={article.content} topic={article.category} />

                <div className="mt-12 p-4 bg-paper-warm border border-rule text-[10px] font-sans text-ink-muted leading-relaxed">
                  <strong className="text-ink text-[9px] uppercase tracking-[0.15em] block mb-1">Policy Accuracy Disclaimer</strong>
                  This article reflects policy conditions as of the publication date. Immigration law is subject to change. Verify all information with official sources and consult a qualified attorney before acting.
                </div>
                <AuthorBio author={article.author} />
              </div>

              <aside className="space-y-6">
                <VisaSuccessTracker />
                <EligibilityQuiz />
                {related.length > 0 && (
                  <div className="bg-white border border-rule">
                    <div className="px-3 py-2 border-b border-rule">
                      <span className="text-[9px] font-sans font-semibold text-ink uppercase tracking-[0.18em]">Related</span>
                    </div>
                    <div className="p-3 space-y-3">
                      {related.map((a) => (
                        <Link key={a.slug} href={`/news/${a.slug}`} className="block group">
                          <span className="text-[8px] font-sans font-semibold text-crimson-text uppercase tracking-[0.2em]">{a.category}</span>
                          <h4 className="font-sans text-[11px] font-medium text-ink group-hover:text-ink-soft transition-colors leading-snug mt-0.5 line-clamp-2">{a.title}</h4>
                          <p className="text-[9px] font-sans text-ink-muted mt-0.5">{formatDate(a.publishedDate)}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </aside>
            </div>
          </div>
        </div>

        {/* Related articles — white */}
        {related.length > 0 && (
          <section style={{ background: "#ffffff" }} className="border-t border-rule py-14">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-[9px] font-sans font-semibold text-ink uppercase tracking-[0.25em] pb-2.5 border-b-2 border-ink mb-8 inline-block">
                More from {article.category}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {related.map((a) => <ArticleCardGrid key={a.slug} article={a} />)}
              </div>
            </div>
          </section>
        )}

        {/* Back — warm */}
        <div style={{ background: "#f4f3f0" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <BackButton />
          </div>
        </div>
      </article>
    </>
  );
}
