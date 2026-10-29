import { notFound } from "next/navigation";
import { PROVIDERS, getProvider } from "@/lib/catalog";
import { fetchStreamingList, listingIntro } from "@/lib/streaming";
import StreamingListing from "@/components/StreamingListing";

export const revalidate = 43200; // 12h

export function generateStaticParams() {
  return PROVIDERS.map((p) => ({ provider: p.slug }));
}

export async function generateMetadata({ params }) {
  const provider = getProvider(params.provider);
  if (!provider) return { title: "Provider not found" };
  const title = `Best Movies on ${provider.name} (${new Date().getFullYear()})`;
  return {
    title,
    description: `The best movies streaming on ${provider.name} in ${provider.region} right now, ranked by rating and popularity. Updated regularly.`,
    alternates: { canonical: `/streaming/${provider.slug}` },
  };
}

export default async function ProviderPage({ params, searchParams }) {
  const provider = getProvider(params.provider);
  if (!provider) notFound();

  const page = Math.max(1, parseInt(searchParams?.page || "1", 10) || 1);
  const data = await fetchStreamingList({ provider, page }).catch(() => null);

  const heading = `Best Movies on ${provider.name} (${new Date().getFullYear()})`;
  const intro = listingIntro({ provider, total: data?.total_results });

  return (
    <StreamingListing
      provider={provider}
      heading={heading}
      intro={intro}
      data={data}
      page={page}
      basePath={`/streaming/${provider.slug}`}
    />
  );
}
