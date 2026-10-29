import Link from "next/link";
import Breadcrumbs from "./Breadcrumbs";
import MovieGrid from "./MovieGrid";
import AdSlot from "./AdSlot";
import { GENRES } from "@/lib/catalog";
import { SITE_URL } from "@/lib/config";
import { toSlug } from "@/lib/slug";
import styles from "./StreamingListing.module.scss";

export default function StreamingListing({
  provider,
  genre,
  heading,
  intro,
  data,
  page = 1,
  basePath,
}) {
  const results = data?.results || [];
  const totalPages = Math.min(data?.total_pages || 1, 500);

  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Where to Watch", href: "/streaming" },
    { name: provider.name, href: `/streaming/${provider.slug}` },
  ];
  if (genre) crumbs.push({ name: genre.name, href: `${basePath}` });

  // ItemList JSON-LD — helps these list pages earn rich treatment.
  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: heading,
    itemListElement: results.slice(0, 20).map((m, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/movie/${toSlug(m.id, m.title || m.name)}`,
      name: m.title || m.name,
    })),
  };

  return (
    <div className={`container ${styles.wrap}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }}
      />
      <Breadcrumbs crumbs={crumbs} />

      <header className={styles.header}>
        <h1>{heading}</h1>
        {intro?.map((p, i) => (
          <p key={i} className={styles.intro}>
            {p}
          </p>
        ))}
      </header>

      <div className={styles.genreChips}>
        <Link
          href={`/streaming/${provider.slug}`}
          className={!genre ? styles.active : ""}
        >
          All
        </Link>
        {GENRES.map((g) => (
          <Link
            key={g.slug}
            href={`/streaming/${provider.slug}/${g.slug}`}
            className={genre?.slug === g.slug ? styles.active : ""}
          >
            {g.name}
          </Link>
        ))}
      </div>

      <MovieGrid items={results} mediaType="movie" />

      <AdSlot slot={process.env.NEXT_PUBLIC_AD_SLOT_LISTING} />

      {totalPages > 1 && (
        <div className={styles.pagination}>
          {page > 1 && (
            <Link href={`${basePath}?page=${page - 1}`} className={styles.pageBtn}>
              ← Previous
            </Link>
          )}
          <span className={styles.pageInfo}>
            Page {page} of {totalPages}
          </span>
          {page < totalPages && (
            <Link href={`${basePath}?page=${page + 1}`} className={styles.pageBtn}>
              Next →
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
