import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";

import { IMG } from "@/lib/config";
import { mediaHref } from "@/lib/slug";
import styles from "./MovieCard.module.scss";

export default function MovieCard({ item, mediaType = "movie" }) {
  const title = item.title || item.name;
  const poster = IMG.poster(item.poster_path, "w342");
  const date = item.release_date || item.first_air_date;
  const rating = item.vote_average ? item.vote_average.toFixed(1) : null;

  return (
    <Link href={mediaHref(item, mediaType)} className={styles.card}>
      <div className={styles.poster}>
        {poster ? (
          <Image
            src={poster}
            alt={title}
            width={342}
            height={513}
            sizes="(max-width: 768px) 45vw, 200px"
            className={styles.img}
          />
        ) : (
          <div className={styles.noPoster}>{title}</div>
        )}
        {rating && (
          <span
            className={styles.rating}
            data-high={Number(rating) >= 7}
            data-low={Number(rating) < 5 && Number(rating) > 0}
          >
            {rating}
          </span>
        )}
      </div>
      <div className={styles.meta}>
        <h3 className={styles.title}>{title}</h3>
        {date && <span className={styles.date}>{dayjs(date).format("YYYY")}</span>}
      </div>
    </Link>
  );
}
