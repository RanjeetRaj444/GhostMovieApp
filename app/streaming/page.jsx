import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PROVIDERS, GENRES } from "@/lib/catalog";
import styles from "./streaming.module.scss";

export const metadata = {
  title: "Where to Watch — Streaming Guides for Every Platform",
  description:
    "Browse the best movies on Netflix, Prime Video, Disney+ Hotstar, JioCinema and more. Curated, rating-ranked streaming guides updated as catalogs change.",
  alternates: { canonical: "/streaming" },
};

export default function StreamingHub() {
  return (
    <div className={`container ${styles.wrap}`}>
      <Breadcrumbs
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Where to Watch", href: "/streaming" },
        ]}
      />

      <header className={styles.header}>
        <h1>Where to Watch — Streaming Guides</h1>
        <p>
          Pick a platform to see the best movies streaming on it right now,
          ranked by rating and popularity. Every guide is filtered to titles
          actually included with a subscription — and you can drill into any
          genre.
        </p>
      </header>

      <div className={styles.providerGrid}>
        {PROVIDERS.map((p) => (
          <Link
            key={p.slug}
            href={`/streaming/${p.slug}`}
            className={styles.providerCard}
            style={{ "--accent": p.color }}
          >
            <span className={styles.pName}>{p.name}</span>
            <span className={styles.pMeta}>Best movies · {p.region}</span>
          </Link>
        ))}
      </div>

      <section className={styles.popularGuides}>
        <h2>Popular genre guides</h2>
        <div className={styles.guideLinks}>
          {PROVIDERS.slice(0, 4).flatMap((p) =>
            ["thriller", "comedy", "horror", "action"].map((g) => {
              const genre = GENRES.find((x) => x.slug === g);
              return (
                <Link key={`${p.slug}-${g}`} href={`/streaming/${p.slug}/${g}`}>
                  Best {genre.name} on {p.name}
                </Link>
              );
            }),
          )}
        </div>
      </section>
    </div>
  );
}
