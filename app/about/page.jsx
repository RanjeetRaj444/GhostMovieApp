import { FaFilm, FaSearch, FaListUl, FaBolt, FaGlobe, FaTags } from "react-icons/fa";
import { SITE_NAME } from "@/lib/config";
import styles from "@/styles/legal.module.scss";

export const metadata = {
  title: "About",
  description: `${SITE_NAME} helps you find where to stream, rent, or buy any movie or TV show, plus curated lists of the best titles on every platform.`,
  alternates: { canonical: "/about" },
};

const features = [
  {
    icon: <FaSearch />,
    title: "Where to Watch",
    text: "Live streaming, rental, and purchase availability for any title, by region.",
  },
  {
    icon: <FaListUl />,
    title: "Curated Guides",
    text: "Editor-ranked lists of the best movies on each streaming service and genre.",
  },
  {
    icon: <FaFilm />,
    title: "Deep Details",
    text: "Trailers, cast, ratings, runtime, and similar recommendations for every title.",
  },
  {
    icon: <FaBolt />,
    title: "Fast & Free",
    text: "No sign-up, no paywall. Server-rendered for speed on any device.",
  },
  {
    icon: <FaGlobe />,
    title: "Region Aware",
    text: "Availability tuned to where you are, so links actually work for you.",
  },
  {
    icon: <FaTags />,
    title: "Always Fresh",
    text: "Catalogs change constantly — our data refreshes so lists stay accurate.",
  },
];

export default function AboutPage() {
  return (
    <div className={`container ${styles.page}`}>
      <article className={styles.content}>
        <div className={styles.hero}>
          <h1>About {SITE_NAME}</h1>
          <p className={styles.tagline}>
            The fastest way to answer one question: where can I actually watch
            this tonight?
          </p>
        </div>

        <section>
          <h2>Why we built this</h2>
          <p>
            Deciding what to watch is easy. Finding where it’s streaming is the
            annoying part — opening app after app, hitting paywalls, giving up.
            {" "}
            {SITE_NAME} fixes that. For any movie or TV show we show exactly
            which services carry it right now, whether it’s included with a
            subscription or available to rent or buy, so you go straight to the
            right app.
          </p>
          <p>
            Beyond individual titles, our editors build and maintain curated
            lists — the best thrillers on one platform, hidden-gem comedies on
            another — ranked by quality rather than by whatever a platform is
            pushing this week.
          </p>
        </section>

        <div className={styles.featureGrid}>
          {features.map((f) => (
            <div className={styles.featureCard} key={f.title}>
              <div className={styles.icon}>{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>

        <section>
          <h2>Our data</h2>
          <p>
            {SITE_NAME} is powered by The Movie Database (TMDB) API, with
            streaming availability aggregated from JustWatch. This product uses
            the TMDB API but is not endorsed or certified by TMDB. We do not host
            or stream any video content ourselves.
          </p>
        </section>

        <section>
          <h2>Get in touch</h2>
          <p>
            Feedback, corrections, or a platform you’d like us to add? Visit our{" "}
            <a href="/contact">contact page</a> — we read everything.
          </p>
        </section>
      </article>
    </div>
  );
}
