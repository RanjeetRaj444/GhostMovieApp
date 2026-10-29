export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://ghost-movie-app.vercel.app";

export const SITE_NAME = "G-movies";

export const ADSENSE_CLIENT = "ca-pub-6506203240622280";

// TMDB image base + sizes (public CDN, no auth needed).
export const IMG = {
  poster: (path, size = "w500") =>
    path ? `https://image.tmdb.org/t/p/${size}${path}` : null,
  backdrop: (path, size = "w1280") =>
    path ? `https://image.tmdb.org/t/p/${size}${path}` : null,
  profile: (path, size = "w185") =>
    path ? `https://image.tmdb.org/t/p/${size}${path}` : null,
  logo: (path, size = "w92") =>
    path ? `https://image.tmdb.org/t/p/${size}${path}` : null,
};

// Default region for "where to watch" availability.
// IST account -> India first; this is easy to make user-selectable later.
export const DEFAULT_REGION = "IN";
export const FALLBACK_REGIONS = ["IN", "US", "GB"];
