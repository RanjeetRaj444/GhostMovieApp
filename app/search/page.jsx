import Link from "next/link";
import MovieGrid from "@/components/MovieGrid";
import { searchMulti } from "@/lib/tmdb";
import styles from "./search.module.scss";

export const metadata = {
  title: "Search",
  robots: { index: false }, // search result pages shouldn't be indexed
};

export default async function SearchPage({ searchParams }) {
  const query = (searchParams?.q || "").trim();

  let results = [];
  let total = 0;
  if (query) {
    const data = await searchMulti(query).catch(() => null);
    results = (data?.results || []).filter(
      (r) => r.media_type === "movie" || r.media_type === "tv",
    );
    total = results.length;
  }

  return (
    <div className={`container ${styles.wrap}`}>
      {!query ? (
        <div className={styles.prompt}>
          <h1>Search</h1>
          <p>Use the search icon in the header to find a movie or TV show.</p>
          <Link href="/explore/movie" className={styles.cta}>
            Or browse movies →
          </Link>
        </div>
      ) : (
        <>
          <h1 className={styles.title}>
            {total > 0 ? "Results for" : "No results for"}{" "}
            <span className="gradient-text">“{query}”</span>
          </h1>
          {total === 0 && (
            <p className={styles.noResults}>
              We couldn’t find anything matching that. Try a different title or
              spelling.
            </p>
          )}
          <MovieGrid items={results} />
        </>
      )}
    </div>
  );
}
