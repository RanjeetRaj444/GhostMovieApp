import Link from "next/link";
import MovieCard from "./MovieCard";
import styles from "./MovieRow.module.scss";

/**
 * A titled horizontal row of movie cards. Scrollable on mobile,
 * wraps to a grid section on wide screens via CSS.
 */
export default function MovieRow({ title, items = [], mediaType, viewAllHref }) {
  if (!items?.length) return null;

  return (
    <section className={styles.section}>
      <div className={`container ${styles.head}`}>
        <h2>{title}</h2>
        {viewAllHref && (
          <Link href={viewAllHref} className={styles.viewAll}>
            View all →
          </Link>
        )}
      </div>
      <div className={`container ${styles.scroller}`}>
        {items.map((item) => (
          <div key={item.id} className={styles.item}>
            <MovieCard item={item} mediaType={mediaType} />
          </div>
        ))}
      </div>
    </section>
  );
}
