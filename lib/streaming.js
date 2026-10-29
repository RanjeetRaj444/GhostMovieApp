import { discover } from "./tmdb";

/**
 * Fetch the "best titles on <provider>" list, optionally filtered by genre.
 * Uses TMDB discover with watch-provider + region constraints.
 */
export function fetchStreamingList({
  provider,
  genreId,
  page = 1,
  sort = "popularity.desc",
}) {
  const params = {
    watch_region: provider.region,
    with_watch_providers: provider.id,
    with_watch_monetization_types: "flatrate",
    sort_by: sort,
    "vote_count.gte": sort.startsWith("vote_average") ? 150 : 50,
    include_adult: false,
    page,
  };
  if (genreId) params.with_genres = genreId;
  return discover("movie", params);
}

/**
 * Human-written-feeling intro prose for a listing page.
 * Varies by provider/genre so pages aren't boilerplate-identical.
 */
export function listingIntro({ provider, genre, total }) {
  const count = total ? `${Math.min(total, 10000).toLocaleString()} ` : "";
  if (genre) {
    return [
      `Looking for the best ${genre.name.toLowerCase()} movies on ${provider.name}? We track ${provider.name}'s catalogue in ${provider.region} and surface the ${genre.name.toLowerCase()} titles actually worth your evening — ranked by audience rating and popularity, not by what the platform wants to push.`,
      `Every film below is currently included with a ${provider.name} subscription (no extra rental fee). Availability shifts as licensing deals change, so this list is refreshed regularly. Tap any title to confirm it's still streaming and see the trailer, cast, and similar picks.`,
    ];
  }
  return [
    `These are the ${count}best movies streaming on ${provider.name} right now in ${provider.region}. Instead of scrolling the app's endless rows, start here: we rank by rating and popularity so the strongest titles rise to the top.`,
    `Want something more specific? Narrow by genre below — from edge-of-your-seat thrillers to feel-good comedies — or open any title to double-check it's still available before you hit play.`,
  ];
}
