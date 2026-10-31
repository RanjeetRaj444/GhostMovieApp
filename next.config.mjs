import dns from "node:dns";

// Prefer IPv4 when resolving hostnames. On some networks (notably many
// Indian ISPs on Windows), Node's fetch/undici tries IPv6 first and stalls
// for ~10s before failing, which makes TMDB calls time out. This fixes it.
dns.setDefaultResultOrder("ipv4first");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Tree-shake react-icons so only the icons actually used ship to the client
  // (cuts a chunk of "unused JavaScript").
  experimental: {
    optimizePackageImports: ["react-icons"],
  },
  images: {
    // TMDB image CDN — allow remote posters/backdrops + provider logos
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        pathname: "/t/p/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|jpeg|png|webp|gif|ico|woff2|woff)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
