import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({
  title,
  description,
  keywords,
  image,
  url,
  type = "website",
}) => {
  const siteTitle = "G-movies";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const metaDescription =
    description ||
    "Explore the latest movies and TV shows on G-movies. Your ghost movie destination.";
  const metaKeywords =
    keywords || "movies, tv shows, streaming, cinema, film reviews";
  const siteUrl = "https://ghost-movie-app.vercel.app";
  const currentUrl = url ? `${siteUrl}${url}` : siteUrl;
  const metaImage = image || `${siteUrl}/movix-logo.png`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:url" content={currentUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />

      {/* Canonical Link */}
      <link rel="canonical" href={currentUrl} />
    </Helmet>
  );
};

export default SEO;
