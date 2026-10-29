"use client";

import { useEffect, useState } from "react";
import { BsBookmarkPlus, BsBookmarkCheckFill } from "react-icons/bs";
import { isInWatchlist, toggleWatchlist, WATCHLIST_EVENT } from "@/lib/watchlist";
import styles from "./WatchlistButton.module.scss";

export default function WatchlistButton({ item }) {
  const [added, setAdded] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setAdded(isInWatchlist(item.id));
    setReady(true);
    const sync = () => setAdded(isInWatchlist(item.id));
    window.addEventListener(WATCHLIST_EVENT, sync);
    return () => window.removeEventListener(WATCHLIST_EVENT, sync);
  }, [item.id]);

  const onClick = () => setAdded(toggleWatchlist(item));

  return (
    <button
      type="button"
      className={`${styles.btn} ${added ? styles.added : ""}`}
      onClick={onClick}
      aria-pressed={added}
      // Avoid a hydration flash: only reflect state once mounted.
      suppressHydrationWarning
    >
      {added ? <BsBookmarkCheckFill /> : <BsBookmarkPlus />}
      <span>{ready && added ? "In Watchlist" : "Add to Watchlist"}</span>
    </button>
  );
}
