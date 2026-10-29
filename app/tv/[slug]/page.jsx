import { notFound } from "next/navigation";
import dayjs from "dayjs";

import { loadTitle, titleName, titleDate } from "@/lib/title";
import { toSlug } from "@/lib/slug";
import { IMG, SITE_URL } from "@/lib/config";
import TitleDetail from "@/components/TitleDetail";

export const revalidate = 86400; // 24h

export async function generateMetadata({ params }) {
  const data = await loadTitle("tv", params.slug);
  if (!data) return { title: "TV show not found" };

  const { details } = data;
  const name = titleName(details);
  const date = titleDate(details);
  const year = date ? ` (${dayjs(date).format("YYYY")})` : "";
  const title = `Where to Watch ${name}${year}`;
  const description =
    `Where to stream ${name}${year}. ` +
    (details.overview
      ? details.overview.slice(0, 120).trim() + "…"
      : "See full streaming availability, cast, and details.");
  const canonical = `/tv/${toSlug(details.id, name)}`;
  const image =
    IMG.backdrop(details.backdrop_path, "w780") ||
    IMG.poster(details.poster_path);

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}${canonical}`,
      type: "video.tv_show",
      images: image ? [{ url: image }] : [],
    },
  };
}

export default async function TvPage({ params }) {
  const data = await loadTitle("tv", params.slug);
  if (!data) notFound();

  return (
    <TitleDetail
      mediaType="tv"
      details={data.details}
      providers={data.providers}
    />
  );
}
