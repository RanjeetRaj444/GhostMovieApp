import Link from "next/link";
import styles from "./ArticleBody.module.scss";

/**
 * Renders structured article content.
 *
 * Inline token: a string, or { t: "text", href: "/internal-or-external" }.
 * Block types:
 *   { type: "p",       c: inline[] }
 *   { type: "h2"|"h3", c: "heading text" }
 *   { type: "ul"|"ol", items: inline[][] }
 *   { type: "callout", c: inline[] }
 */
function Inline({ tokens }) {
  const arr = Array.isArray(tokens) ? tokens : [tokens];
  return arr.map((tok, i) => {
    if (typeof tok === "string") return <span key={i}>{tok}</span>;
    const external = /^https?:\/\//.test(tok.href);
    return external ? (
      <a key={i} href={tok.href} target="_blank" rel="noopener noreferrer">
        {tok.t}
      </a>
    ) : (
      <Link key={i} href={tok.href}>
        {tok.t}
      </Link>
    );
  });
}

export default function ArticleBody({ blocks = [] }) {
  return (
    <div className={styles.body}>
      {blocks.map((b, i) => {
        switch (b.type) {
          case "h2":
            return <h2 key={i}>{b.c}</h2>;
          case "h3":
            return <h3 key={i}>{b.c}</h3>;
          case "callout":
            return (
              <aside key={i} className={styles.callout}>
                <Inline tokens={b.c} />
              </aside>
            );
          case "ul":
            return (
              <ul key={i}>
                {b.items.map((item, j) => (
                  <li key={j}>
                    <Inline tokens={item} />
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i}>
                {b.items.map((item, j) => (
                  <li key={j}>
                    <Inline tokens={item} />
                  </li>
                ))}
              </ol>
            );
          case "p":
          default:
            return (
              <p key={i}>
                <Inline tokens={b.c} />
              </p>
            );
        }
      })}
    </div>
  );
}
