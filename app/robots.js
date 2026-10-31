import { SITE_URL } from "@/lib/config";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Per-viewer / no-content pages shouldn't be indexed.
      disallow: ["/watchlist", "/search"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    // Note: no `host` directive — Googlebot ignores it (non-standard), and
    // Search Console flags it as "Rule ignored".
  };
}
