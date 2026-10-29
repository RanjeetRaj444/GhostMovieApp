/**
 * SEO-friendly slugs: "693134" + "Dune: Part Two" -> "693134-dune-part-two"
 * We keep the TMDB id as the first segment so lookups stay O(1) and stable
 * even if a title changes.
 */
export function slugify(text = "") {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

export function toSlug(id, title) {
  const s = slugify(title);
  return s ? `${id}-${s}` : String(id);
}

export function idFromSlug(slug = "") {
  const match = String(slug).match(/^(\d+)/);
  return match ? match[1] : null;
}

export function movieHref(item) {
  const title = item.title || item.name || "";
  return `/movie/${toSlug(item.id, title)}`;
}

export function tvHref(item) {
  const title = item.name || item.title || "";
  return `/tv/${toSlug(item.id, title)}`;
}

export function mediaHref(item, fallbackType = "movie") {
  const type = item.media_type || fallbackType;
  return type === "tv" ? tvHref(item) : movieHref(item);
}
