import "@/styles/globals.scss";
import Script from "next/script";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import { SITE_URL, SITE_NAME, ADSENSE_CLIENT } from "@/lib/config";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Where to Watch Movies & TV Shows`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Find out where to stream, rent, or buy any movie or TV show. Curated 'best of' lists for Netflix, Prime Video, Disney+ and more.",
  keywords: [
    "where to watch",
    "streaming availability",
    "what to watch",
    "movies on netflix",
    "best movies",
    "tv shows",
  ],
  authors: [{ name: SITE_NAME }],
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: SITE_URL,
  },
  twitter: { card: "summary_large_image" },
};

export const viewport = {
  themeColor: "#04152d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://image.tmdb.org" crossOrigin="" />
        {/* Warm up the connection to the ad network so it doesn't delay paint */}
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />

        {/* Google AdSense — loads after the page is interactive */}
        <Script
          id="adsbygoogle-init"
          async
          strategy="afterInteractive"
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
          crossOrigin="anonymous"
        />

        <Analytics />
      </body>
    </html>
  );
}
