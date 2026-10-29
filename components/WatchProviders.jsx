import Image from "next/image";
import { IMG, DEFAULT_REGION, FALLBACK_REGIONS } from "@/lib/config";
import styles from "./WatchProviders.module.scss";

const GROUPS = [
  { key: "flatrate", label: "Stream", note: "Included with subscription" },
  { key: "free", label: "Free", note: "Watch free (with ads)" },
  { key: "ads", label: "Free with ads", note: "Ad-supported" },
  { key: "rent", label: "Rent", note: "Pay per rental" },
  { key: "buy", label: "Buy", note: "Purchase to own" },
];

/**
 * Picks the best available region block for the viewer.
 * (Region is fixed for now; made user-selectable in a later phase.)
 */
export function pickRegion(results) {
  if (!results) return null;
  for (const region of [DEFAULT_REGION, ...FALLBACK_REGIONS]) {
    if (results[region]) return { region, data: results[region] };
  }
  const first = Object.keys(results)[0];
  return first ? { region: first, data: results[first] } : null;
}

export default function WatchProviders({ title, results }) {
  const picked = pickRegion(results);

  if (!picked) {
    return (
      <div className={styles.empty}>
        <p>
          We couldn’t find any legal streaming, rental, or purchase options for{" "}
          <strong>{title}</strong> right now. Availability changes often — check
          back soon.
        </p>
      </div>
    );
  }

  const { region, data } = picked;
  const available = GROUPS.filter((g) => data[g.key]?.length);

  if (!available.length) {
    return (
      <div className={styles.empty}>
        <p>
          No streaming options are currently listed for <strong>{title}</strong>{" "}
          in your region.
        </p>
      </div>
    );
  }

  return (
    <div className={styles.wrap}>
      <p className={styles.region}>
        Showing availability for <strong>{region}</strong>
      </p>
      {available.map((group) => (
        <div key={group.key} className={styles.group}>
          <div className={styles.groupHead}>
            <span className={styles.groupLabel}>{group.label}</span>
            <span className={styles.groupNote}>{group.note}</span>
          </div>
          <ul className={styles.providers}>
            {data[group.key].map((p) => (
              <li key={p.provider_id} className={styles.provider}>
                {IMG.logo(p.logo_path) ? (
                  <Image
                    src={IMG.logo(p.logo_path)}
                    alt={p.provider_name}
                    width={46}
                    height={46}
                    className={styles.logo}
                  />
                ) : (
                  <span className={styles.logoFallback}>
                    {p.provider_name.slice(0, 2)}
                  </span>
                )}
                <span className={styles.name}>{p.provider_name}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <p className={styles.attribution}>
        Streaming data powered by JustWatch via TMDB.
      </p>
    </div>
  );
}
