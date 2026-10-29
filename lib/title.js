import { getDetails, getWatchProviders } from "./tmdb";
import { idFromSlug } from "./slug";
import { IMG } from "./config";
import { pickRegion } from "@/components/WatchProviders";

export async function loadTitle(mediaType, slug) {
  const id = idFromSlug(slug);
  if (!id) return null;
  // Resilient: a TMDB hiccup returns null (-> graceful 404) instead of a 500.
  // Providers are optional — if that call fails we still render the page.
  const [details, providers] = await Promise.all([
    getDetails(mediaType, id).catch(() => null),
    getWatchProviders(mediaType, id).catch(() => null),
  ]);
  if (!details) return null;
  return { id, details, providers: providers?.results };
}

export function titleName(details) {
  return details.title || details.name || "Untitled";
}

export function titleDate(details) {
  return details.release_date || details.first_air_date || null;
}

export function titleRuntime(details) {
  if (details.runtime) return details.runtime;
  if (Array.isArray(details.episode_run_time) && details.episode_run_time[0]) {
    return details.episode_run_time[0];
  }
  return null;
}

export function buildTitleJsonLd(mediaType, details, providers) {
  const picked = pickRegion(providers);
  const offers = [];
  if (picked) {
    ["flatrate", "rent", "buy", "free", "ads"].forEach((k) => {
      (picked.data[k] || []).forEach((p) => {
        offers.push({
          "@type": "Offer",
          category: k === "flatrate" ? "subscription" : k,
          seller: { "@type": "Organization", name: p.provider_name },
          availableDeliveryMethod: "http://schema.org/OnlineFull",
        });
      });
    });
  }

  const runtime = titleRuntime(details);

  return {
    "@context": "https://schema.org",
    "@type": mediaType === "tv" ? "TVSeries" : "Movie",
    name: titleName(details),
    description: details.overview || undefined,
    image: IMG.poster(details.poster_path) || undefined,
    datePublished: titleDate(details) || undefined,
    genre: details.genres?.map((g) => g.name),
    duration: runtime ? `PT${runtime}M` : undefined,
    aggregateRating: details.vote_count
      ? {
          "@type": "AggregateRating",
          ratingValue: details.vote_average?.toFixed(1),
          bestRating: "10",
          ratingCount: details.vote_count,
        }
      : undefined,
    director: details.credits?.crew
      ?.filter((c) => c.job === "Director")
      .slice(0, 2)
      .map((d) => ({ "@type": "Person", name: d.name })),
    actor: details.credits?.cast
      ?.slice(0, 5)
      .map((a) => ({ "@type": "Person", name: a.name })),
    ...(offers.length ? { offers } : {}),
  };
}
