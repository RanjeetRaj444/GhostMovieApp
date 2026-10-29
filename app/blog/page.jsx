import Link from "next/link";
import dayjs from "dayjs";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getAllArticles } from "@/content/articles";
import styles from "./blog.module.scss";

export const metadata = {
  title: "Guides & Articles — Smarter Streaming",
  description:
    "Practical guides on where to watch, what to watch, and how to get the most out of your streaming subscriptions.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  const articles = getAllArticles();

  return (
    <div className={`container ${styles.wrap}`}>
      <Breadcrumbs
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/blog" },
        ]}
      />
      <header className={styles.header}>
        <h1>Guides &amp; Articles</h1>
        <p>
          No fluff — practical writing on where to watch, what to watch, and how
          to stop overpaying for streaming.
        </p>
      </header>

      <div className={styles.list}>
        {articles.map((a) => (
          <Link key={a.slug} href={`/blog/${a.slug}`} className={styles.card}>
            <div className={styles.meta}>
              <time dateTime={a.date}>{dayjs(a.date).format("MMM D, YYYY")}</time>
              <span>·</span>
              <span>{a.readingTime} min read</span>
            </div>
            <h2>{a.title}</h2>
            <p>{a.excerpt}</p>
            <span className={styles.readMore}>Read article →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
