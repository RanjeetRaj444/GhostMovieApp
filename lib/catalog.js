// Streaming providers we build landing pages for.
// `id` = TMDB watch-provider id; `region` = watch_region used in discover.
export const PROVIDERS = [
  { slug: "netflix", id: 8, name: "Netflix", region: "IN", color: "#e50914" },
  {
    slug: "prime-video",
    id: 119,
    name: "Amazon Prime Video",
    region: "IN",
    color: "#00a8e1",
  },
  {
    slug: "disney-plus-hotstar",
    id: 122,
    name: "Disney+ Hotstar",
    region: "IN",
    color: "#1f80e0",
  },
  {
    slug: "jiocinema",
    id: 970,
    name: "JioCinema",
    region: "IN",
    color: "#c4167e",
  },
  { slug: "zee5", id: 232, name: "ZEE5", region: "IN", color: "#6f1cb3" },
  { slug: "sonyliv", id: 237, name: "SonyLIV", region: "IN", color: "#1a1a2e" },
  {
    slug: "apple-tv-plus",
    id: 350,
    name: "Apple TV+",
    region: "IN",
    color: "#000000",
  },
  {
    slug: "disney-plus",
    id: 337,
    name: "Disney+",
    region: "US",
    color: "#113ccf",
  },
];

export function getProvider(slug) {
  return PROVIDERS.find((p) => p.slug === slug) || null;
}

// TMDB movie genres (stable ids).
export const GENRES = [
  { slug: "action", id: 28, name: "Action" },
  { slug: "adventure", id: 12, name: "Adventure" },
  { slug: "animation", id: 16, name: "Animation" },
  { slug: "comedy", id: 35, name: "Comedy" },
  { slug: "crime", id: 80, name: "Crime" },
  { slug: "documentary", id: 99, name: "Documentary" },
  { slug: "drama", id: 18, name: "Drama" },
  { slug: "family", id: 10751, name: "Family" },
  { slug: "fantasy", id: 14, name: "Fantasy" },
  { slug: "history", id: 36, name: "History" },
  { slug: "horror", id: 27, name: "Horror" },
  { slug: "music", id: 10402, name: "Music" },
  { slug: "mystery", id: 9648, name: "Mystery" },
  { slug: "romance", id: 10749, name: "Romance" },
  { slug: "sci-fi", id: 878, name: "Science Fiction" },
  { slug: "thriller", id: 53, name: "Thriller" },
  { slug: "war", id: 10752, name: "War" },
  { slug: "western", id: 37, name: "Western" },
];

export function getGenre(slug) {
  return GENRES.find((g) => g.slug === slug) || null;
}

export const SORT_OPTIONS = [
  { value: "popularity.desc", label: "Popularity" },
  { value: "vote_average.desc", label: "Rating" },
  { value: "primary_release_date.desc", label: "Newest" },
  { value: "revenue.desc", label: "Box office" },
];
