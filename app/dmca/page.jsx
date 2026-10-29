import { SITE_NAME } from "@/lib/config";
import styles from "@/styles/legal.module.scss";

export const metadata = {
  title: "DMCA Policy",
  description: `How ${SITE_NAME} handles copyright claims and takedown requests.`,
  alternates: { canonical: "/dmca" },
};

export default function DmcaPage() {
  return (
    <div className={`container ${styles.page}`}>
      <article className={styles.content}>
        <h1>DMCA Policy</h1>
        <p className={styles.updated}>Digital Millennium Copyright Act Notice</p>

        <h2>Our Position</h2>
        <p>
          {SITE_NAME} respects intellectual property rights. Importantly, we do
          not host, store, upload, or stream any movies, TV episodes, or other
          copyrighted video content. We are an information and discovery service.
        </p>

        <h2>What We Display</h2>
        <ul>
          <li>Movie and TV metadata (titles, descriptions, ratings, cast)</li>
          <li>Poster and backdrop images provided by the TMDB API</li>
          <li>
            Streaming availability data indicating which licensed third-party
            services offer a title
          </li>
        </ul>
        <p>
          All such data is supplied by The Movie Database (TMDB) and its
          partners under their API terms. Any actual streaming happens on the
          third-party platforms we link to, not on {SITE_NAME}.
        </p>

        <h2>Filing a Notice</h2>
        <p>
          If you believe content displayed here infringes your copyright, send a
          written notice including:
        </p>
        <ul>
          <li>A description of the copyrighted work you claim is infringed</li>
          <li>The exact URL on our site where the material appears</li>
          <li>Your name, address, telephone number, and email</li>
          <li>
            A statement that you have a good-faith belief the use is not
            authorized by the owner, its agent, or the law
          </li>
          <li>
            A statement, under penalty of perjury, that the information is
            accurate and that you are the owner or authorized to act on their
            behalf
          </li>
          <li>Your physical or electronic signature</li>
        </ul>

        <h2>Where to Send It</h2>
        <p>
          Email your notice to{" "}
          <a href="mailto:dmca@ghost-movie-app.vercel.app">
            dmca@ghost-movie-app.vercel.app
          </a>
          . Because we rely on TMDB for metadata, we may also direct you to
          TMDB’s own copyright process where appropriate.
        </p>

        <h2>Counter-Notice</h2>
        <p>
          If material you posted was removed and you believe it was a mistake,
          you may submit a counter-notice with the same contact details and a
          statement under penalty of perjury that the removal was in error.
        </p>
      </article>
    </div>
  );
}
