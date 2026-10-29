import { SITE_NAME } from "@/lib/config";
import styles from "@/styles/legal.module.scss";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How G-movies collects, uses, and protects your information, including the use of cookies and Google AdSense advertising.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPage() {
  return (
    <div className={`container ${styles.page}`}>
      <article className={styles.content}>
        <h1>Privacy Policy</h1>
        <p className={styles.updated}>Last updated: October 29, 2026</p>

        <p>
          {SITE_NAME} (“we”, “our”, or “us”) respects your privacy. This policy
          explains what information we collect when you use{" "}
          ghost-movie-app.vercel.app, how we use it, and the choices you have.
        </p>

        <h2>Information We Collect</h2>
        <h3>Information you provide</h3>
        <p>
          We do not require you to create an account. If you contact us by
          email, we receive the information you choose to send (such as your
          name, email address, and message).
        </p>
        <h3>Information collected automatically</h3>
        <ul>
          <li>Device and browser type, and general location (from your IP address)</li>
          <li>Pages you visit and how you interact with them</li>
          <li>Referring website or search terms that led you here</li>
        </ul>
        <p>
          Your watchlist and preferences are stored locally in your browser and
          are not transmitted to our servers.
        </p>

        <h2>Cookies and Advertising</h2>
        <p>
          We use cookies and similar technologies to operate the site and to
          serve advertising.
        </p>
        <ul>
          <li>
            <strong>Essential cookies</strong> keep the site working correctly.
          </li>
          <li>
            <strong>Analytics cookies</strong> help us understand how the site
            is used so we can improve it.
          </li>
          <li>
            <strong>Advertising cookies</strong> are used by our advertising
            partners to show relevant ads.
          </li>
        </ul>

        <h2>Google AdSense</h2>
        <p>
          We use Google AdSense to display advertisements. Third-party vendors,
          including Google, use cookies to serve ads based on your prior visits
          to this and other websites. Google’s use of advertising cookies
          enables it and its partners to serve ads based on your visits.
        </p>
        <p>
          You may opt out of personalized advertising by visiting{" "}
          <a
            href="https://www.google.com/settings/ads"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Ads Settings
          </a>
          . For more information about how Google uses data, see{" "}
          <a
            href="https://policies.google.com/technologies/partner-sites"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google’s Privacy &amp; Terms
          </a>
          .
        </p>

        <h2>Third-Party Data</h2>
        <p>
          Movie and TV metadata, images, and streaming availability are provided
          by The Movie Database (TMDB) and its partners. We do not host video
          content.
        </p>

        <h2>Your Rights</h2>
        <p>
          Depending on your location, you may have the right to access, correct,
          or delete personal data we hold about you, and to object to certain
          processing. To make a request, contact us at the address below.
        </p>

        <h2>Children’s Privacy</h2>
        <p>
          This site is not directed to children under 13, and we do not
          knowingly collect personal information from them.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this policy from time to time. Material changes will be
          reflected by the “Last updated” date above.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about this policy? Email us at{" "}
          <a href="mailto:hello@ghost-movie-app.vercel.app">
            hello@ghost-movie-app.vercel.app
          </a>
          .
        </p>
      </article>
    </div>
  );
}
