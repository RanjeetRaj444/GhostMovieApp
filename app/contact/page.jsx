import { FaEnvelope, FaGlobe, FaClock } from "react-icons/fa";
import { SITE_NAME } from "@/lib/config";
import ContactForm from "@/components/ContactForm";
import styles from "@/styles/legal.module.scss";

export const metadata = {
  title: "Contact",
  description: `Get in touch with the ${SITE_NAME} team with feedback, corrections, or suggestions.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className={`container ${styles.page}`}>
      <article className={styles.content}>
        <h1>Contact Us</h1>
        <p className={styles.updated}>We read every message.</p>

        <p>
          Have a question, spotted an error in our streaming data, or want us to
          add a platform? Fill out the form and your email client will open with
          the message ready to send — or email us directly.
        </p>

        <div className={styles.contactGrid}>
          <div>
            <div className={styles.infoItem}>
              <div className={styles.icon}>
                <FaEnvelope />
              </div>
              <div>
                <h4>Email</h4>
                <p>
                  <a href="mailto:hello@ghost-movie-app.vercel.app">
                    hello@ghost-movie-app.vercel.app
                  </a>
                </p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.icon}>
                <FaClock />
              </div>
              <div>
                <h4>Response time</h4>
                <p>Usually within 2–3 business days</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.icon}>
                <FaGlobe />
              </div>
              <div>
                <h4>Coverage</h4>
                <p>Streaming availability focused on India, with global data</p>
              </div>
            </div>
          </div>

          <div>
            <h3>Send us a message</h3>
            <ContactForm />
          </div>
        </div>
      </article>
    </div>
  );
}
