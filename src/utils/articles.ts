import { getCollection, type CollectionEntry } from 'astro:content';

export type Articulo = CollectionEntry<'articulos'>;

export async function getPublishedArticles(): Promise<Articulo[]> {
  const articles = await getCollection('articulos', ({ data }) => !data.draft);
  return articles.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function getArticleHref(slug: string): string {
  return `/articulos/${slug}`;
}

export function formatArticleDate(date: Date): string {
  return new Intl.DateTimeFormat('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

export function getRelatedArticles(article: Articulo, all: Articulo[], limit = 3): Articulo[] {
  const related = article.data.relatedSlugs
    .map((slug) => all.find((a) => a.id === slug))
    .filter((a): a is Articulo => Boolean(a));

  if (related.length >= limit) return related.slice(0, limit);

  const rest = all
    .filter((a) => a.id !== article.id && !related.includes(a))
    .slice(0, limit - related.length);

  return [...related, ...rest];
}

export function getArticlesForService(serviceSlug: string, all: Articulo[], limit = 3): Articulo[] {
  return all
    .filter((a) => a.data.serviceSlug === serviceSlug)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
    .slice(0, limit);
}

export function getArticlesBySlugs(slugs: string[], all: Articulo[]): Articulo[] {
  return slugs
    .map((slug) => all.find((a) => a.id === slug))
    .filter((a): a is Articulo => Boolean(a));
}
