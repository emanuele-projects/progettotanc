/**
 * Livello dati del blog — WordPress headless, con fallback mock.
 *
 * WP_API_URL assente/vuota  → articoli mock (src/data/mock-posts.ts)
 * WP_API_URL impostata      → fetch da {WP_API_URL}/posts in fase di build;
 *                             se la API risponde con errore la build FALLISCE
 *                             (mai pubblicare silenziosamente un sito stale).
 *
 * Esempio: WP_API_URL=https://www.fulviorossiplus.it/wp/wp-json/wp/v2
 */

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  contentHtml: string;
  date: Date;
  author: string | null;
  featuredImage: { url: string; alt: string } | null;
}

const API = (import.meta.env.WP_API_URL ?? '').replace(/\/$/, '');

let cache: Promise<Post[]> | null = null;

export function getPosts(): Promise<Post[]> {
  return (cache ??= load());
}

export async function getPost(slug: string): Promise<Post | undefined> {
  return (await getPosts()).find((p) => p.slug === slug);
}

async function load(): Promise<Post[]> {
  if (!API) {
    const { mockPosts } = await import('../data/mock-posts');
    return [...mockPosts].sort((a, b) => b.date.getTime() - a.date.getTime());
  }

  const posts: Post[] = [];
  let page = 1;
  let totalPages = 1;

  do {
    const url = `${API}/posts?_embed=1&status=publish&per_page=100&page=${page}`;
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`WP API: ${res.status} ${res.statusText} — ${url}`);
    }
    totalPages = Number(res.headers.get('X-WP-TotalPages') ?? '1');
    const batch = (await res.json()) as WpPost[];
    posts.push(...batch.map(mapPost));
    page++;
  } while (page <= totalPages);

  return posts.sort((a, b) => b.date.getTime() - a.date.getTime());
}

/* --- Mapping dalla shape REST di WordPress --- */

interface WpPost {
  slug: string;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  _embedded?: {
    author?: { name?: string }[];
    'wp:featuredmedia'?: { source_url?: string; alt_text?: string }[];
  };
}

function mapPost(wp: WpPost): Post {
  const media = wp._embedded?.['wp:featuredmedia']?.[0];
  return {
    slug: wp.slug,
    title: decode(stripTags(wp.title.rendered)),
    excerpt: decode(stripTags(wp.excerpt.rendered)).trim(),
    contentHtml: wp.content.rendered,
    date: new Date(wp.date),
    author: wp._embedded?.author?.[0]?.name ?? null,
    featuredImage: media?.source_url
      ? { url: media.source_url, alt: media.alt_text ?? '' }
      : null,
  };
}

function stripTags(html: string): string {
  return html.replace(/<[^>]*>/g, '');
}

function decode(text: string): string {
  return text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;/g, "'")
    .replace(/&#8217;/g, '’')
    .replace(/&#8216;/g, '‘')
    .replace(/&#8220;/g, '“')
    .replace(/&#8221;/g, '”')
    .replace(/&#8211;/g, '–')
    .replace(/&#8212;/g, '—')
    .replace(/&hellip;|&#8230;/g, '…')
    .replace(/&nbsp;/g, ' ');
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('it-IT', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}
