// Quick TMDB connectivity test. Run from the project root:
//   node scripts/diagnose-tmdb.mjs
// It reads TMDB_TOKEN from .env.local and reports exactly what happens.

import { readFileSync } from "node:fs";

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
console.log("Token loaded (length " + token.length + "). Calling TMDB…\n");

const url = "https://api.themoviedb.org/3/trending/all/week";
const started = Date.now();

try {
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
  });
  const ms = Date.now() - started;
  console.log(`HTTP ${res.status} in ${ms}ms`);
  if (res.ok) {
    const data = await res.json();
    console.log(`✅ SUCCESS — got ${data.results?.length ?? 0} results.`);
    console.log("First title:", data.results?.[0]?.title || data.results?.[0]?.name);
  } else {
    const body = await res.text();
    console.log("❌ Non-OK response. Body:", body.slice(0, 300));
    if (res.status === 401) console.log("→ Token is being rejected (401).");
  }
} catch (err) {
  console.log("❌ fetch threw:", err.message);
  if (err.cause) console.log("   cause:", err.cause.code || err.cause.message);
  console.log(
    "\n→ This is a network-level failure (not your token). Often IPv6/undici on Windows.",
  );
}
