import MovieCard from "./MovieCard";
import styles from "./MovieGrid.module.scss";

export default function MovieGrid({ items = [], mediaType = "movie" }) {
  if (!items?.length) {
    return (
      <p className={styles.empty}>
        No titles found. Try a different filter or check back later.
      </p>
    );
  }

  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <MovieCard key={item.id} item={item} mediaType={mediaType} />
      ))}
    </div>
  );
}
