import { SITE_URL } from "@/lib/config";
import { getPopular, getTrending } from "@/lib/tmdb";
import { PROVIDERS, GENRES } from "@/lib/catalog";
import { getAllArticles } from "@/content/articles";
import { toSlug } from "@/lib/slug";

export const revalidate = 86400;

const STATIC_ROUTES = [
  "",
  "/explore/movie",
  "/explore/tv",
  "/streaming",
  "/lists",
  "/blog",
  "/about",
  "/contact",
  "/privacy-policy",
  "/terms-of-service",
  "/dmca",
];

// Programmatic streaming guide pages (provider + provider×genre).
const STREAMING_ROUTES = [
  ...PROVIDERS.map((p) => `/streaming/${p.slug}`),
  ...PROVIDERS.flatMap((p) => GENRES.map((g) => `/streaming/${p.slug}/${g.slug}`)),
];

export default async function sitemap() {
  const now = new Date();

  const base = STATIC_ROUTES.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "daily" : "weekly",
    priority: path === "" ? 1 : 0.7,
  }));

  const streaming = STREAMING_ROUTES.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const blog = getAllArticles().map((a) => ({
    url: `${SITE_URL}/blog/${a.slug}`,
    lastModified: new Date(a.updated || a.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Include popular + trending movie pages so Google discovers deep content.
  let movies = [];
  try {
    const [popular, trending] = await Promise.all([
      getPopular("movie"),
      getTrending("movie", "week"),
    ]);
    const seen = new Set();
    [...(popular?.results || []), ...(trending?.results || [])].forEach((m) => {
      if (seen.has(m.id)) return;
      seen.add(m.id);
      movies.push({
        url: `${SITE_URL}/movie/${toSlug(m.id, m.title || m.name)}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.6,
      });
    });
  } catch {
    // If TMDB is unavailable at build time, ship the static routes only.
  }

  return [...base, ...streaming, ...blog, ...movies];
}
