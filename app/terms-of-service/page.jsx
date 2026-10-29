import { SITE_NAME } from "@/lib/config";
import styles from "@/styles/legal.module.scss";

export const metadata = {
  title: "Terms of Service",
  description: `The terms and conditions for using ${SITE_NAME}.`,
  alternates: { canonical: "/terms-of-service" },
};

export default function TermsPage() {
  return (
    <div className={`container ${styles.page}`}>
      <article className={styles.content}>
        <h1>Terms of Service</h1>
        <p className={styles.updated}>Last updated: October 29, 2026</p>

        <p>
          By accessing or using {SITE_NAME}, you agree to these Terms of
          Service. If you do not agree, please do not use the site.
        </p>

        <h2>Use of the Service</h2>
        <p>
          {SITE_NAME} provides information about movies and TV shows, including
          where they can be streamed, rented, or purchased. The service is
          provided for personal, non-commercial use. You agree not to misuse the
          site, interfere with its operation, or attempt to access it in any
          unauthorized way.
        </p>

        <h2>No Hosting of Content</h2>
        <p>
          We do not host, upload, or stream any films or TV episodes. All
          availability information points to legitimate third-party services.
          Metadata and images are provided by The Movie Database (TMDB).
        </p>

        <h2>Accuracy of Information</h2>
        <p>
          Streaming availability changes frequently. While we refresh our data
          regularly, we cannot guarantee that every listing is current. Always
          confirm availability on the provider’s own platform before
          subscribing or purchasing.
        </p>

        <h2>Intellectual Property</h2>
        <p>
          Trademarks, logos, and content belong to their respective owners.
          {" "}
          {SITE_NAME}’s original editorial writing and site design are our
          property and may not be reproduced without permission.
        </p>

        <h2>Third-Party Links and Ads</h2>
        <p>
          The site contains links to third-party websites and displays
          advertising. We are not responsible for the content or practices of
          those third parties.
        </p>

        <h2>Disclaimer of Warranties</h2>
        <p>
          The service is provided “as is” without warranties of any kind. We do
          not warrant that it will be uninterrupted, error-free, or free of
          harmful components.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, {SITE_NAME} will not be liable
          for any indirect, incidental, or consequential damages arising from
          your use of the site.
        </p>

        <h2>Changes to These Terms</h2>
        <p>
          We may update these terms at any time. Continued use of the site after
          changes take effect constitutes acceptance of the revised terms.
        </p>

        <h2>Contact</h2>
        <p>
          Questions? Email{" "}
          <a href="mailto:hello@ghost-movie-app.vercel.app">
            hello@ghost-movie-app.vercel.app
          </a>
          .
        </p>
      </article>
    </div>
  );
}
