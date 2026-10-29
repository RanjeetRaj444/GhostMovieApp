import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import MovieGrid from "@/components/MovieGrid";
import { discover, getGenres } from "@/lib/tmdb";
import { SORT_OPTIONS } from "@/lib/catalog";
import styles from "./explore.module.scss";

export const revalidate = 21600; // 6h

const LABELS = { movie: "Movies", tv: "TV Shows" };

export function generateStaticParams() {
  return [{ mediaType: "movie" }, { mediaType: "tv" }];
}

export async function generateMetadata({ params }) {
  const label = LABELS[params.mediaType];
  if (!label) return { title: "Not found" };
  return {
    title: `Explore ${label} — Browse & Filter`,
    description: `Browse and filter ${label.toLowerCase()} by genre and rating. Discover what to watch next on G-movies.`,
    alternates: { canonical: `/explore/${params.mediaType}` },
  };
}

export default async function ExplorePage({ params, searchParams }) {
  const { mediaType } = params;
  if (!LABELS[mediaType]) notFound();

  const page = Math.max(1, parseInt(searchParams?.page || "1", 10) || 1);
  const sort = searchParams?.sort || "popularity.desc";
  const genreId = searchParams?.genre || "";

  const [genresData, data] = await Promise.all([
    getGenres(mediaType).catch(() => null),
    discover(mediaType, {
      sort_by: sort,
      page,
      include_adult: false,
      with_genres: genreId || undefined,
      "vote_count.gte": sort.startsWith("vote_average") ? 100 : undefined,
    }).catch(() => null),
  ]);

  const genres = genresData?.genres || [];
  const totalPages = Math.min(data?.total_pages || 1, 500);
  const base = `/explore/${mediaType}`;
  const qp = (over) => {
    const sp = new URLSearchParams();
    const merged = { sort, genre: genreId, page, ...over };
    if (merged.genre) sp.set("genre", merged.genre);
    if (merged.sort && merged.sort !== "popularity.desc") sp.set("sort", merged.sort);
    if (merged.page && merged.page > 1) sp.set("page", merged.page);
    const s = sp.toString();
    return s ? `${base}?${s}` : base;
  };

  return (
    <div className={`container ${styles.wrap}`}>
      <Breadcrumbs
        crumbs={[
          { name: "Home", href: "/" },
          { name: `Explore ${LABELS[mediaType]}`, href: base },
        ]}
      />
      <h1 className={styles.title}>Explore {LABELS[mediaType]}</h1>

      <div className={styles.controls}>
        <div className={styles.sortRow}>
          {SORT_OPTIONS.map((o) => (
            <Link
              key={o.value}
              href={qp({ sort: o.value, page: 1 })}
              className={sort === o.value ? styles.active : ""}
            >
              {o.label}
            </Link>
          ))}
        </div>
        <div className={styles.genreRow}>
          <Link href={qp({ genre: "", page: 1 })} className={!genreId ? styles.active : ""}>
            All genres
          </Link>
          {genres.map((g) => (
            <Link
              key={g.id}
              href={qp({ genre: String(g.id), page: 1 })}
              className={genreId === String(g.id) ? styles.active : ""}
            >
              {g.name}
            </Link>
          ))}
        </div>
      </div>

      <MovieGrid items={data?.results} mediaType={mediaType} />

      {totalPages > 1 && (
        <div className={styles.pagination}>
          {page > 1 && <Link href={qp({ page: page - 1 })} className={styles.pageBtn}>← Previous</Link>}
          <span className={styles.pageInfo}>Page {page} of {totalPages}</span>
          {page < totalPages && <Link href={qp({ page: page + 1 })} className={styles.pageBtn}>Next →</Link>}
        </div>
      )}
    </div>
  );
}
