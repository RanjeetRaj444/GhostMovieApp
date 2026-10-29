import "server-only";

const BASE_URL = "https://api.themoviedb.org/3";
const TOKEN = process.env.TMDB_TOKEN;

/**
 * Server-side TMDB fetcher. The token never leaves the server.
 * Uses Next.js fetch caching with ISR-style revalidation.
 */
async function tmdb(path, { params = {}, revalidate = 60 * 60 * 6 } = {}) {
  if (!TOKEN) {
    throw new Error(
      "TMDB_TOKEN is not set. Add it to .env.local (see .env.local.example).",
    );
  }

  const url = new URL(BASE_URL + path);
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      url.searchParams.set(key, value);
    }
  });

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      Accept: "application/json",
    },
    next: { revalidate },
  });

  if (!res.ok) {
    // Return null so pages can render a graceful "not found" instead of crashing.
    if (res.status === 404) return null;
    throw new Error(`TMDB ${path} failed: ${res.status}`);
  }

  return res.json();
}

// ---- Catalog ----

export function getTrending(mediaType = "all", window = "week") {
  return tmdb(`/trending/${mediaType}/${window}`, { revalidate: 60 * 60 * 3 });
}

export function getPopular(mediaType = "movie", page = 1) {
  return tmdb(`/${mediaType}/popular`, { params: { page } });
}

export function discover(mediaType = "movie", params = {}) {
  return tmdb(`/discover/${mediaType}`, { params });
}

export function getDetails(mediaType, id) {
  return tmdb(`/${mediaType}/${id}`, {
    params: { append_to_response: "credits,videos,similar,recommendations" },
    revalidate: 60 * 60 * 24,
  });
}

/**
 * The wedge: where can you actually watch this title?
 * TMDB aggregates JustWatch streaming/rent/buy availability per region.
 */
export function getWatchProviders(mediaType, id) {
  return tmdb(`/${mediaType}/${id}/watch/providers`, {
    revalidate: 60 * 60 * 12,
  });
}

export function searchMulti(query, page = 1) {
  return tmdb(`/search/multi`, {
    params: { query, page, include_adult: false },
    revalidate: 60 * 30,
  });
}

export function getGenres(mediaType = "movie") {
  return tmdb(`/genre/${mediaType}/list`, { revalidate: 60 * 60 * 24 * 7 });
}
