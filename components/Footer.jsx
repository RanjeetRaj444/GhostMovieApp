import Link from "next/link";
import { SITE_NAME } from "@/lib/config";
import styles from "./Footer.module.scss";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <span className={`${styles.logo} gradient-text`}>G-movies</span>
            <p>
              Find out where to stream, rent, or buy any movie or TV show —
              plus hand-curated lists of the best titles on every platform.
            </p>
          </div>

          <nav aria-label="Explore">
            <h3>Explore</h3>
            <Link href="/explore/movie">Movies</Link>
            <Link href="/explore/tv">TV Shows</Link>
            <Link href="/streaming">Where to Watch</Link>
            <Link href="/lists">Curated Lists</Link>
          </nav>

          <nav aria-label="Company">
            <h3>Company</h3>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
            <Link href="/dmca">DMCA</Link>
          </nav>
        </div>

        <div className={styles.bottom}>
          <p>
            © {year} {SITE_NAME}. Streaming availability and metadata provided
            by{" "}
            <a
              href="https://www.themoviedb.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              TMDB
            </a>
            . This product uses the TMDB API but is not endorsed or certified by
            TMDB.
          </p>
        </div>
      </div>
    </footer>
  );
}
