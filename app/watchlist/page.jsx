"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import MovieCard from "@/components/MovieCard";
import { getWatchlist, WATCHLIST_EVENT } from "@/lib/watchlist";
import gridStyles from "@/components/MovieGrid.module.scss";
import styles from "./watchlist.module.scss";

export default function WatchlistPage() {
  const [items, setItems] = useState(null); // null = not yet loaded

  useEffect(() => {
    const load = () => setItems(getWatchlist());
    load();
    window.addEventListener(WATCHLIST_EVENT, load);
    return () => window.removeEventListener(WATCHLIST_EVENT, load);
  }, []);

  return (
    <div className={`container ${styles.wrap}`}>
      <h1 className={styles.title}>My Watchlist</h1>

      {items === null ? null : items.length === 0 ? (
        <div className={styles.empty}>
          <p>Your watchlist is empty.</p>
          <Link href="/explore/movie" className={styles.cta}>
            Browse movies to add some →
          </Link>
        </div>
      ) : (
        <div className={gridStyles.grid}>
          {items.map((item) => (
            <MovieCard key={item.id} item={item} mediaType={item.media_type} />
          ))}
        </div>
      )}
    </div>
  );
}
