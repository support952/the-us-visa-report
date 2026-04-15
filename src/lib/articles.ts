import articlesData from "@/data/articles.json";

export interface Author {
  name: string;
  role: string;
  avatar: string;
}

export interface Article {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  publishedDate: string;
  author: Author;
  readTime: number;
  isFeatured: boolean;
  isBreaking: boolean;
  image: string;
  content: string;
}

export function getAllArticles(): Article[] {
  return (articlesData as Article[]).sort(
    (a, b) =>
      new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );
}

export function getFeaturedArticle(): Article | undefined {
  return (articlesData as Article[]).find((a) => a.isFeatured);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return (articlesData as Article[]).find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: string): Article[] {
  return getAllArticles().filter((a) => a.category === category);
}

export function getRelatedArticles(
  currentSlug: string,
  category: string,
  limit = 3
): Article[] {
  return getAllArticles()
    .filter((a) => a.slug !== currentSlug && a.category === category)
    .slice(0, limit);
}

export function getLatestArticles(limit = 6): Article[] {
  return getAllArticles().slice(0, limit);
}

export function getMostReadArticles(limit = 5): Article[] {
  // Simulate "most read" by picking articles with highest readTime
  return [...(articlesData as Article[])]
    .sort((a, b) => b.readTime - a.readTime)
    .slice(0, limit);
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function getCategories(): string[] {
  const cats = new Set((articlesData as Article[]).map((a) => a.category));
  return Array.from(cats);
}
