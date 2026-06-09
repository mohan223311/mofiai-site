import { marked } from "marked";

const SPACE_ID = import.meta.env.VITE_CONTENTFUL_SPACE_ID as string;
const ACCESS_TOKEN = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN as string;
const BASE = `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/master`;

// ─── Types ──────────────────────────────────────────────────────────────────

export interface ContentfulAsset {
  sys: { id: string };
  fields: {
    title: string;
    description?: string;
    file: {
      url: string;
      contentType: string;
      details?: { image?: { width: number; height: number } };
    };
  };
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  longText: string;
  htmlContent: string;
  featuredImageUrl: string | null;
  featuredImageAlt: string;
  publishedAt: string;
  updatedAt: string;
  excerpt: string;
  readTime: number;
}

interface RawEntry {
  sys: { id: string; createdAt: string; updatedAt: string };
  fields: {
    title?: string;
    longText?: string;
    slug?: string;
    feautredimage?: { sys: { type: string; linkType: string; id: string } };
  };
}

interface ContentfulResponse {
  total: number;
  skip: number;
  limit: number;
  items: RawEntry[];
  includes?: { Asset?: ContentfulAsset[] };
}

// ─── Helpers ────────────────────────────────────────────────────────────────

function resolveAsset(
  link: { sys: { id: string } } | undefined,
  assets: ContentfulAsset[] | undefined
): ContentfulAsset | null {
  if (!link || !assets) return null;
  return assets.find((a) => a.sys.id === link.sys.id) ?? null;
}

function makeExcerpt(text: string, max = 200): string {
  const cleaned = text
    .replace(/```[\s\S]*?```/g, "")   // fenced code blocks
    .replace(/<[^>]+>/g, " ")          // HTML tags
    .replace(/&[a-z#0-9]+;/gi, " ")   // HTML entities
    .replace(/`[^`]+`/g, "")
    .replace(/#{1,6}\s+/g, "")
    .replace(/\*{1,2}([^*]+)\*{1,2}/g, "$1")
    .replace(/_([^_]+)_/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/!\[[^\]]*\]\([^)]+\)/g, "")
    .replace(/\n+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return cleaned.length <= max ? cleaned : cleaned.slice(0, max).trimEnd() + "…";
}

function calcReadTime(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

function mapEntry(entry: RawEntry, assets?: ContentfulAsset[]): BlogPost {
  const asset = resolveAsset(entry.fields.feautredimage, assets);
  const raw = entry.fields.longText ?? "";
  const htmlContent = marked.parse(raw) as string;
  const imageUrl = asset ? `https:${asset.fields.file.url}` : null;
  return {
    id: entry.sys.id,
    title: entry.fields.title ?? "Untitled",
    slug: entry.fields.slug ?? entry.sys.id,
    longText: raw,
    htmlContent,
    featuredImageUrl: imageUrl,
    featuredImageAlt: asset?.fields.title ?? entry.fields.title ?? "",
    publishedAt: entry.sys.createdAt,
    updatedAt: entry.sys.updatedAt,
    excerpt: makeExcerpt(raw),
    readTime: calcReadTime(raw),
  };
}

// ─── API ────────────────────────────────────────────────────────────────────

async function contentfulFetch(params: Record<string, string>): Promise<ContentfulResponse> {
  const url = new URL(`${BASE}/entries`);
  url.searchParams.set("access_token", ACCESS_TOKEN);
  url.searchParams.set("content_type", "title");
  url.searchParams.set("include", "2");
  for (const [k, v] of Object.entries(params)) {
    url.searchParams.set(k, v);
  }
  const res = await fetch(url.toString());
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(`Contentful ${res.status}: ${(err as any).message ?? "Unknown error"}`);
  }
  return res.json() as Promise<ContentfulResponse>;
}

export async function getBlogPosts(
  limit = 20,
  skip = 0
): Promise<{ posts: BlogPost[]; total: number }> {
  const data = await contentfulFetch({
    limit: String(limit),
    skip: String(skip),
    order: "-sys.createdAt",
  });
  const posts = data.items.map((e) => mapEntry(e, data.includes?.Asset));
  return { posts, total: data.total };
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const data = await contentfulFetch({ "fields.slug": slug, limit: "1" });
  if (!data.items.length) return null;
  return mapEntry(data.items[0], data.includes?.Asset);
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
