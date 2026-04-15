import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getArticleBySlug, getRelatedArticles, getAllArticles, formatDate } from "@/lib/articles";
import { ChevronRight, Clock, User, Calendar } from "lucide-react";
import ReadingProgressBar from "@/components/ReadingProgressBar";
import KeyTakeaways from "@/components/KeyTakeaways";
import AuthorBio from "@/components/AuthorBio";
import SocialShare from "@/components/SocialShare";
import ArticleRenderer from "@/components/ArticleRenderer";
import EligibilityQuiz from "@/components/EligibilityQuiz";
import VisaSuccessTracker from "@/components/VisaSuccessTracker";
import { ArticleCardGrid } from "@/components/ArticleCard";
import { getImageForSlug } from "@/lib/images";

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
    title: `${article.title} — The US Visa Report`,
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
            <nav className="flex items-center gap-1 text-[10px] font-sans text-ink-muted">
              <Link href="/" className="hover:text-ink transition-colors">Home</Link>
              <ChevronRight size={9} strokeWidth={1.5} />
              <Link href={`/category/${article.category.toLowerCase().replace(/\s+/g, "-")}`} className="hover:text-ink transition-colors">{article.category}</Link>
              <ChevronRight size={9} strokeWidth={1.5} />
              <span className="text-ink-soft truncate max-w-[200px]">{article.title}</span>
            </nav>
          </div>
        </div>

        {/* Header */}
        <header className="bg-white border-b border-rule">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
            <div className="max-w-3xl">
              <span className="text-[9px] font-sans font-semibold text-crimson-text uppercase tracking-[0.2em]">
                {article.category}
                {article.isBreaking && <span className="ml-2 px-2 py-0.5 bg-crimson text-paper text-[8px] tracking-wider">Breaking</span>}
              </span>
              <h1 className="font-serif text-2xl md:text-[2.2rem] font-bold text-ink mt-3 leading-[1.12] tracking-tight">
                {article.title}
              </h1>
              <p className="text-[15px] font-sans text-ink-soft mt-4 leading-relaxed font-light">{article.excerpt}</p>

              {/* Editorial metadata */}
              <div className="mt-8 pt-5 border-t border-rule space-y-3">
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-paper-warm border border-rule flex items-center justify-center">
                      <User size={14} strokeWidth={1.5} className="text-ink-faint" />
                    </div>
                    <div>
                      <p className="text-[11px] font-sans font-medium text-ink">{article.author.name}</p>
                      <p className="text-[9px] font-sans text-ink-muted">{article.author.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-[10px] font-sans text-ink-muted">
                    <span className="flex items-center gap-0.5"><Calendar size={10} strokeWidth={1.5} />{formatDate(article.publishedDate)}</span>
                    <span className="flex items-center gap-0.5"><Clock size={10} strokeWidth={1.5} />{article.readTime} min read</span>
                  </div>
                  <div className="ml-auto"><SocialShare title={article.title} /></div>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-0.5 text-[9px] font-sans text-ink-faint">
                  <span>Reported by {article.author.name}</span>
                  <span>Edited by Policy Desk</span>
                  <span>Last verified {formatDate(article.publishedDate)}</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <div className="relative aspect-[21/9] max-w-3xl overflow-hidden border border-rule">
            <Image
              src={getImageForSlug(article.slug)}
              alt={article.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 66vw"
              priority
            />
          </div>
        </div>

        {/* Body */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 lg:gap-20">
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

        {related.length > 0 && (
          <section className="bg-white border-t border-rule py-14">
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
      </article>
    </>
  );
}
