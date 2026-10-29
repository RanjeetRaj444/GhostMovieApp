"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";

import styles from "./Header.module.scss";

export default function Header() {
  const router = useRouter();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");

  const submitSearch = (e) => {
    if ((e.key === "Enter" || e.type === "click") && query.trim().length > 0) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      setShowSearch(false);
      setMobileMenu(false);
    }
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.contentWrapper}`}>
        <Link href="/" className={styles.logo} aria-label="G-movies home">
          <span className={`${styles.logoText} gradient-text`}>G-movies</span>
        </Link>

        <nav
          className={`${styles.nav} ${mobileMenu ? styles.open : ""}`}
          aria-label="Main navigation"
        >
          <Link href="/explore/movie" onClick={() => setMobileMenu(false)}>
            Movies
          </Link>
          <Link href="/explore/tv" onClick={() => setMobileMenu(false)}>
            TV Shows
          </Link>
          <Link href="/streaming" onClick={() => setMobileMenu(false)}>
            Where to Watch
          </Link>
          <Link href="/lists" onClick={() => setMobileMenu(false)}>
            Lists
          </Link>
        </nav>

        <div className={styles.actions}>
          <button
            className={styles.iconBtn}
            onClick={() => setShowSearch((s) => !s)}
            aria-label="Toggle search"
          >
            <HiOutlineSearch />
          </button>
          <button
            className={`${styles.iconBtn} ${styles.menuToggle}`}
            onClick={() => setMobileMenu((m) => !m)}
            aria-label="Toggle menu"
          >
            {mobileMenu ? <VscChromeClose /> : <SlMenu />}
          </button>
        </div>
      </div>

      {showSearch && (
        <div className={styles.searchBar}>
          <div className="container">
            <input
              autoFocus
              type="text"
              placeholder="Search for a movie or TV show…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={submitSearch}
              aria-label="Search"
            />
            <button onClick={submitSearch} aria-label="Search">
              <HiOutlineSearch />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
