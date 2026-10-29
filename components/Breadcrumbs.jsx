import Link from "next/link";
import { SITE_URL } from "@/lib/config";
import styles from "./Breadcrumbs.module.scss";

/**
 * crumbs: [{ name, href }] — last item is the current page (no link needed).
 * Renders visible breadcrumbs + BreadcrumbList JSON-LD for rich results.
 */
export default function Breadcrumbs({ crumbs = [] }) {
  if (!crumbs.length) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      ...(c.href ? { item: `${SITE_URL}${c.href}` } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className={styles.crumbs}>
        {crumbs.map((c, i) => (
          <span key={i} className={styles.crumb}>
            {c.href && i < crumbs.length - 1 ? (
              <Link href={c.href}>{c.name}</Link>
            ) : (
              <span aria-current="page">{c.name}</span>
            )}
            {i < crumbs.length - 1 && <span className={styles.sep}>/</span>}
          </span>
        ))}
      </nav>
    </>
  );
}
