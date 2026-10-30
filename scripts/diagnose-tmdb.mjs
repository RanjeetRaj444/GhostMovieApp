// TMDB connectivity test. Run from the project root:
//   node scripts/diagnose-tmdb.mjs
// Reads TMDB_TOKEN from .env.local and tries both DNS orders so we can see
// whether the IPv4-first fix resolves the timeout.

import { readFileSync } from "node:fs";
import dns from "node:dns";

function loadToken() {
  try {
    const env = readFileSync(new URL("../.env.local", import.meta.url), "utf8");
    const line = env.split(/\r?\n/).find((l) => l.startsWith("TMDB_TOKEN="));
    return line ? line.slice("TMDB_TOKEN=".length).trim() : null;
  } catch {
    return null;
  }
}

const token = loadToken();
if (!token) {
  console.error("❌ No TMDB_TOKEN found in .env.local");
  process.exit(1);
}
console.log("Token loaded (length " + token.length + ").\n");

const url = "https://api.themoviedb.org/3/trending/all/week";

async function attempt(label) {
  const started = Date.now();
  try {
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
    });
    const ms = Date.now() - started;
    if (res.ok) {
      const data = await res.json();
      console.log(
        `✅ [${label}] HTTP ${res.status} in ${ms}ms — ${data.results?.length ?? 0} results. ` +
          `First: ${data.results?.[0]?.title || data.results?.[0]?.name}`,
      );
    } else {
      console.log(`❌ [${label}] HTTP ${res.status} in ${ms}ms`);
      if (res.status === 401) console.log("   → Token rejected.");
    }
  } catch (err) {
    const ms = Date.now() - started;
    console.log(`❌ [${label}] fetch threw after ${ms}ms: ${err.message}`);
    if (err.cause) console.log("   cause:", err.cause.code || err.cause.message);
  }
}

// 1) Node's default behaviour (often IPv6-first -> the timeout you hit)
await attempt("default DNS order");

// 2) The fix applied in next.config.mjs
dns.setDefaultResultOrder("ipv4first");
await attempt("ipv4first (the fix)");
