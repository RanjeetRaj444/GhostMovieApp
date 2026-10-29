import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PROVIDERS, GENRES } from "@/lib/catalog";
import styles from "../streaming/streaming.module.scss";

export const metadata = {
  title: "Curated Lists — The Best of Every Platform",
  description:
    "Hand-curated, rating-ranked lists of the best movies by genre and streaming service. Find your next watch fast.",
  alternates: { canonical: "/lists" },
};

const FEATURED_GENRES = [
  "thriller",
  "comedy",
  "horror",
  "action",
  "sci-fi",
  "drama",
  "romance",
  "animation",
];

export default function ListsPage() {
  return (
    <div className={`container ${styles.wrap}`}>
      <Breadcrumbs
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Curated Lists", href: "/lists" },
        ]}
      />
      <header className={styles.header}>
        <h1>Curated Lists</h1>
        <p>
          Our editors rank the best titles by genre and platform so you don’t
          have to scroll endlessly. Every list is filtered to what’s actually
          streaming and sorted by quality — pick a combination below.
        </p>
      </header>

      {GENRES.filter((g) => FEATURED_GENRES.includes(g.slug)).map((genre) => (
        <section key={genre.slug} className={styles.popularGuides}>
          <h2>Best {genre.name} Movies</h2>
          <div className={styles.guideLinks}>
            {PROVIDERS.map((p) => (
              <Link
                key={`${genre.slug}-${p.slug}`}
                href={`/streaming/${p.slug}/${genre.slug}`}
              >
                Best {genre.name} on {p.name}
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
