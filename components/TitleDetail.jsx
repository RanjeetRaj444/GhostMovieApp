import Image from "next/image";
import dayjs from "dayjs";

import { IMG } from "@/lib/config";
import {
  titleName,
  titleDate,
  titleRuntime,
  buildTitleJsonLd,
} from "@/lib/title";
import WatchProviders from "./WatchProviders";
import MovieRow from "./MovieRow";
import styles from "./TitleDetail.module.scss";

export default function TitleDetail({ mediaType, details, providers }) {
  const name = titleName(details);
  const date = titleDate(details);
  const year = date ? dayjs(date).format("YYYY") : null;
  const runtime = titleRuntime(details);
  const director = details.credits?.crew?.find((c) => c.job === "Director");
  const creators = details.created_by?.map((c) => c.name).filter(Boolean) || [];
  const cast = details.credits?.cast?.slice(0, 6) || [];
  const backdrop = IMG.backdrop(details.backdrop_path, "w1280");
  const poster = IMG.poster(details.poster_path, "w500");
  const jsonLd = buildTitleJsonLd(mediaType, details, providers);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className={styles.banner}>
        {backdrop && (
          <Image
            src={backdrop}
            alt=""
            fill
            priority
            sizes="100vw"
            className={styles.backdrop}
          />
        )}
        <div className={styles.bannerOverlay} />
        <div className={`container ${styles.bannerContent}`}>
          {poster && (
            <Image
              src={poster}
              alt={name}
              width={220}
              height={330}
              priority
              className={styles.poster}
            />
          )}
          <div className={styles.headline}>
            <h1>
              {name} {year && <span>({year})</span>}
            </h1>
            {details.tagline && (
              <p className={styles.tagline}>{details.tagline}</p>
            )}
            <div className={styles.facts}>
              {details.vote_average > 0 && (
                <span className={styles.score}>
                  ★ {details.vote_average.toFixed(1)}
                </span>
              )}
              {runtime > 0 && <span>{runtime} min</span>}
              {mediaType === "tv" && details.number_of_seasons > 0 && (
                <span>
                  {details.number_of_seasons} season
                  {details.number_of_seasons > 1 ? "s" : ""}
                </span>
              )}
              {details.genres?.slice(0, 3).map((g) => (
                <span key={g.id} className={styles.genre}>
                  {g.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={`container ${styles.body}`}>
        <div className={styles.main}>
          <section>
            <h2 className={styles.sectionTitle}>Where to watch {name}</h2>
            <WatchProviders title={name} results={providers} />
          </section>

          {details.overview && (
            <section>
              <h2 className={styles.sectionTitle}>Overview</h2>
              <p className={styles.overview}>{details.overview}</p>
            </section>
          )}

          {cast.length > 0 && (
            <section>
              <h2 className={styles.sectionTitle}>Cast</h2>
              <ul className={styles.cast}>
                {cast.map((person) => (
                  <li key={person.id}>
                    {IMG.profile(person.profile_path) ? (
                      <Image
                        src={IMG.profile(person.profile_path)}
                        alt={person.name}
                        width={80}
                        height={80}
                        className={styles.castImg}
                      />
                    ) : (
                      <div className={styles.castImgFallback}>
                        {person.name.slice(0, 1)}
                      </div>
                    )}
                    <span className={styles.castName}>{person.name}</span>
                    <span className={styles.castChar}>{person.character}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        <aside className={styles.sidebar}>
          <dl>
            {director && (
              <>
                <dt>Director</dt>
                <dd>{director.name}</dd>
              </>
            )}
            {creators.length > 0 && (
              <>
                <dt>Created by</dt>
                <dd>{creators.join(", ")}</dd>
              </>
            )}
            {date && (
              <>
                <dt>{mediaType === "tv" ? "First aired" : "Release date"}</dt>
                <dd>{dayjs(date).format("MMM D, YYYY")}</dd>
              </>
            )}
            {details.status && (
              <>
                <dt>Status</dt>
                <dd>{details.status}</dd>
              </>
            )}
            {details.original_language && (
              <>
                <dt>Language</dt>
                <dd>{details.original_language.toUpperCase()}</dd>
              </>
            )}
          </dl>
        </aside>
      </div>

      <MovieRow
        title="Similar titles"
        items={details.similar?.results?.slice(0, 12)}
        mediaType={mediaType}
      />
      <MovieRow
        title="You might also like"
        items={details.recommendations?.results?.slice(0, 12)}
        mediaType={mediaType}
      />
    </>
  );
}
