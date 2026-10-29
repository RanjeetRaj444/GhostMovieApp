import Link from "next/link";
import { getTrending, getPopular } from "@/lib/tmdb";
import MovieRow from "@/components/MovieRow";
import styles from "./home.module.scss";

export const revalidate = 10800; // 3h

export default async function HomePage() {
  // Resilient: a TMDB outage degrades the page gracefully instead of
  // failing the whole build/deploy. Rows simply hide when empty.
  const [trending, popularMovies, popularTv] = await Promise.all([
    getTrending("all", "week").catch(() => null),
    getPopular("movie").catch(() => null),
    getPopular("tv").catch(() => null),
  ]);

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.heroTitle}>
            Find out <span className="gradient-text">where to watch</span>{" "}
            anything
          </h1>
          <p className={styles.heroSub}>
            Stop guessing which app has the movie you want. G-movies tells you
            exactly where to stream, rent, or buy any film or TV show — and
            points you to the best titles on every platform.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/explore/movie" className={styles.primaryCta}>
              Browse Movies
            </Link>
            <Link href="/streaming" className={styles.secondaryCta}>
              Where to Watch
            </Link>
          </div>
        </div>
      </section>

      <MovieRow
        title="Trending This Week"
        items={trending?.results?.slice(0, 18)}
        viewAllHref="/explore/movie"
      />
      <MovieRow
        title="Popular Movies"
        items={popularMovies?.results?.slice(0, 18)}
        mediaType="movie"
        viewAllHref="/explore/movie"
      />
      <MovieRow
        title="Popular TV Shows"
        items={popularTv?.results?.slice(0, 18)}
        mediaType="tv"
        viewAllHref="/explore/tv"
      />

      <section className={`container ${styles.about}`}>
        <h2>Your streaming guide, not another movie catalog</h2>
        <p>
          There are plenty of places to read a movie’s plot. What’s genuinely
          hard is answering the only question that matters when you sit down to
          watch something: <em>where is it actually streaming tonight?</em>{" "}
          G-movies exists to answer that fast. For every title we pull live
          availability across subscription services, free ad-supported
          platforms, and rental and purchase stores, so you can go straight to
          the app that has it instead of opening five of them in turn.
        </p>
        <p>
          Beyond individual titles, our editors build and maintain curated lists
          — the best thrillers on Netflix, hidden-gem comedies on Prime Video,
          the strongest new releases worth renting this month — updated as
          catalogs change. Availability data is powered by JustWatch through the
          TMDB API, and our recommendations are written by people who actually
          watch the films, not generated from a template.
        </p>
      </section>
    </>
  );
}
