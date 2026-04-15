import Link from "next/link";
import Image from "next/image";
import { Clock } from "lucide-react";
import { formatDate, type Article } from "@/lib/articles";
import { getImageForSlug } from "@/lib/images";

/* ══════════════════════════════════════════════════════
   HERO — Split layout: image left, text right.
   Clean, no overlay, everything readable.
   ══════════════════════════════════════════════════════ */
export function ArticleCardLarge({ article }: { article: Article }) {
  return (
    <Link href={`/news/${article.slug}`} className="group block">
      <div className="grid grid-cols-1 md:grid-cols-2 bg-white border border-rule overflow-hidden">
        <div className="relative aspect-[4/3] md:aspect-auto">
          <Image
            src="/images/A_powerful_high-resolution_edi_Nano_Banana_2_35793.jpg"
            alt={article.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
          {article.isBreaking && (
            <span className="inline-block self-start bg-crimson text-white text-[9px] font-sans font-semibold uppercase tracking-[0.18em] px-2.5 py-0.5 mb-3">
              Breaking
            </span>
          )}
          <span className="text-[9px] font-sans font-semibold text-crimson-text uppercase tracking-[0.25em]">
            {article.category}
          </span>
          <h2 className="font-serif text-xl md:text-2xl lg:text-[1.75rem] font-bold text-ink mt-2 leading-[1.15] tracking-tight group-hover:text-ink-soft transition-colors">
            {article.title}
          </h2>
          <p className="text-[13px] text-ink-soft mt-3 leading-relaxed font-sans font-light line-clamp-3">
            {article.excerpt}
          </p>
          <div className="flex items-center gap-2 mt-4 pt-4 border-t border-rule text-[10px] text-ink-muted font-sans">
            <span className="font-medium text-ink-soft">{article.author.name}</span>
            <span>&middot;</span>
            <span>{formatDate(article.publishedDate)}</span>
            <span>&middot;</span>
            <span className="flex items-center gap-0.5">
              <Clock size={9} strokeWidth={1.5} />
              {article.readTime} min
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

/* ══════════════════════════════════════════════════════
   BRIEF — Text-only sidebar item (numbered)
   ══════════════════════════════════════════════════════ */
export function ArticleBrief({ article, index }: { article: Article; index: number }) {
  return (
    <Link href={`/news/${article.slug}`} className="group block py-3.5 border-b border-rule last:border-0">
      <div className="flex items-start gap-3">
        <span className="font-serif text-base font-bold text-ink-faint leading-none flex-shrink-0 mt-0.5">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="min-w-0">
          <span className="text-[8px] font-sans font-semibold text-crimson-text uppercase tracking-[0.2em]">
            {article.category}
          </span>
          <h3 className="font-serif text-[14px] font-semibold text-ink mt-0.5 leading-snug group-hover:text-ink-soft transition-colors line-clamp-2">
            {article.title}
          </h3>
          <span className="text-[9px] font-sans text-ink-muted mt-1 block">
            {formatDate(article.publishedDate)}
          </span>
        </div>
      </div>
    </Link>
  );
}

/* ══════════════════════════════════════════════════════
   GRID CARD — With unique thumbnail per article
   Pass `imageIndex` from parent to guarantee no repeats
   ══════════════════════════════════════════════════════ */
export function ArticleCardGrid({
  article,
  imageIndex,
}: {
  article: Article;
  imageIndex?: number;
}) {
  // Each card gets its image from the slug map — unique per article
  const img = getImageForSlug(article.slug);

  return (
    <Link
      href={`/news/${article.slug}`}
      className="group block bg-white border border-rule overflow-hidden hover:border-ink-faint transition-colors card-elevated"
    >
      <div className="relative aspect-[16/9]">
        <Image
          src={img}
          alt={article.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 30vw"
        />
      </div>
      <div className="p-4">
        <span className="text-[8px] font-sans font-semibold text-crimson-text uppercase tracking-[0.2em]">
          {article.category}
        </span>
        <h3 className="font-serif text-[14px] font-semibold text-ink leading-snug mt-1 group-hover:text-ink-soft transition-colors line-clamp-2">
          {article.title}
        </h3>
        <p className="text-[11px] font-sans text-ink-soft mt-1.5 line-clamp-2 leading-relaxed font-light">
          {article.excerpt}
        </p>
        <div className="flex items-center gap-2 mt-2.5 text-[9px] font-sans text-ink-muted">
          <span>{formatDate(article.publishedDate)}</span>
          <span>&middot;</span>
          <span className="flex items-center gap-0.5">
            <Clock size={8} strokeWidth={1.5} />
            {article.readTime} min
          </span>
        </div>
      </div>
    </Link>
  );
}

/* ══════════════════════════════════════════════════════
   MOST-READ — Numbered list (no images)
   ══════════════════════════════════════════════════════ */
export function MostReadItem({ article, index }: { article: Article; index: number }) {
  return (
    <Link href={`/news/${article.slug}`} className="group flex items-start gap-2.5 py-2 border-b border-rule last:border-0">
      <span className="font-serif text-base font-bold text-ink-faint/40 leading-none flex-shrink-0 w-5">
        {index + 1}
      </span>
      <div className="min-w-0">
        <h4 className="font-sans text-[11px] font-medium text-ink group-hover:text-ink-soft transition-colors leading-snug line-clamp-2">
          {article.title}
        </h4>
        <span className="text-[9px] font-sans text-ink-muted mt-0.5 block">
          {article.readTime} min read
        </span>
      </div>
    </Link>
  );
}
