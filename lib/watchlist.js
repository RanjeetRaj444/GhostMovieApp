"use client";

// Per-viewer watchlist, stored in the browser only (no server, no account).
// Every read/write is guarded so private mode or blocked storage can't crash.

const KEY = "gm_watchlist";
const EVENT = "gm-watchlist-change";

export function getWatchlist() {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function isInWatchlist(id) {
  return getWatchlist().some((i) => i.id === id);
}

function save(list) {
  try {
    localStorage.setItem(KEY, JSON.stringify(list));
  } catch {
    /* storage unavailable — ignore */
  }
  // Notify the current tab (header count, watchlist page) to re-read.
  try {
    window.dispatchEvent(new CustomEvent(EVENT));
  } catch {
    /* no window */
  }
}

export function toggleWatchlist(item) {
  const list = getWatchlist();
  const idx = list.findIndex((i) => i.id === item.id);
  if (idx >= 0) {
    list.splice(idx, 1);
  } else {
    list.unshift(item);
  }
  save(list);
  return idx < 0; // true if it was just added
}

export function removeFromWatchlist(id) {
  save(getWatchlist().filter((i) => i.id !== id));
}

export const WATCHLIST_EVENT = EVENT;
