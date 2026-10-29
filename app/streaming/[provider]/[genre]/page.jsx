import { notFound } from "next/navigation";
import { PROVIDERS, GENRES, getProvider, getGenre } from "@/lib/catalog";
import { fetchStreamingList, listingIntro } from "@/lib/streaming";
import StreamingListing from "@/components/StreamingListing";

export const revalidate = 43200; // 12h

// Pre-render the highest-value provider × genre combinations.
// The rest render on-demand (ISR) the first time they're requested.
export function generateStaticParams() {
  const topGenres = ["action", "comedy", "thriller", "horror", "drama", "sci-fi"];
  const params = [];
  for (const p of PROVIDERS) {
    for (const g of topGenres) {
      params.push({ provider: p.slug, genre: g });
    }
  }
  return params;
}

export async function generateMetadata({ params }) {
  const provider = getProvider(params.provider);
  const genre = getGenre(params.genre);
  if (!provider || !genre) return { title: "Not found" };
  const title = `Best ${genre.name} Movies on ${provider.name} (${new Date().getFullYear()})`;
  return {
    title,
    description: `The best ${genre.name.toLowerCase()} movies streaming on ${provider.name} in ${provider.region}, ranked by rating. Find your next watch.`,
    alternates: { canonical: `/streaming/${provider.slug}/${genre.slug}` },
  };
}

export default async function ProviderGenrePage({ params, searchParams }) {
  const provider = getProvider(params.provider);
  const genre = getGenre(params.genre);
  if (!provider || !genre) notFound();

  const page = Math.max(1, parseInt(searchParams?.page || "1", 10) || 1);
  const data = await fetchStreamingList({
    provider,
    genreId: genre.id,
    sort: "vote_average.desc",
    page,
  }).catch(() => null);

  const heading = `Best ${genre.name} Movies on ${provider.name} (${new Date().getFullYear()})`;
  const intro = listingIntro({ provider, genre, total: data?.total_results });

  return (
    <StreamingListing
      provider={provider}
      genre={genre}
      heading={heading}
      intro={intro}
      data={data}
      page={page}
      basePath={`/streaming/${provider.slug}/${genre.slug}`}
    />
  );
}
