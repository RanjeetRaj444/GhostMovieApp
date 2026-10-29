import { notFound } from "next/navigation";
import Link from "next/link";
import dayjs from "dayjs";

import { getAllArticles, getArticle } from "@/content/articles";
import { SITE_URL, SITE_NAME } from "@/lib/config";
import Breadcrumbs from "@/components/Breadcrumbs";
import ArticleBody from "@/components/ArticleBody";
import styles from "./article.module.scss";

export function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const article = getArticle(params.slug);
  if (!article) return { title: "Article not found" };
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `${SITE_URL}/blog/${article.slug}`,
      type: "article",
      publishedTime: article.date,
      modifiedTime: article.updated || article.date,
    },
  };
}

export default function ArticlePage({ params }) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  const related = getAllArticles()
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.updated || article.date,
    author: { "@type": "Organization", name: article.author || SITE_NAME },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    mainEntityOfPage: `${SITE_URL}/blog/${article.slug}`,
  };

  return (
    <div className={`container ${styles.wrap}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className={styles.article}>
        <Breadcrumbs
          crumbs={[
            { name: "Home", href: "/" },
            { name: "Guides", href: "/blog" },
            { name: article.title, href: `/blog/${article.slug}` },
          ]}
        />

        <header className={styles.head}>
          <h1>{article.title}</h1>
          <div className={styles.byline}>
            <span>{article.author || SITE_NAME}</span>
            <span>·</span>
            <time dateTime={article.date}>
              {dayjs(article.date).format("MMMM D, YYYY")}
            </time>
            <span>·</span>
            <span>{article.readingTime} min read</span>
          </div>
          {article.updated && article.updated !== article.date && (
            <p className={styles.updated}>
              Updated {dayjs(article.updated).format("MMMM D, YYYY")}
            </p>
          )}
        </header>

        <ArticleBody blocks={article.blocks} />
      </article>

      <section className={styles.related}>
        <h2>Keep reading</h2>
        <div className={styles.relatedList}>
          {related.map((a) => (
            <Link key={a.slug} href={`/blog/${a.slug}`}>
              {a.title}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
