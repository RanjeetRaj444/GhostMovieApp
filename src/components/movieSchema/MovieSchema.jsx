import React from "react";
import { Helmet } from "react-helmet-async";

const MovieSchema = ({ movie, mediaType }) => {
  if (!movie) return null;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": mediaType === "movie" ? "Movie" : "TVSeries",
    name: movie.title || movie.name,
    description: movie.overview,
    image: movie.poster_path
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : undefined,
    datePublished: movie.release_date || movie.first_air_date,
    aggregateRating: movie.vote_average
      ? {
          "@type": "AggregateRating",
          ratingValue: movie.vote_average.toFixed(1),
          bestRating: "10",
          worstRating: "0",
          ratingCount: movie.vote_count,
        }
      : undefined,
    genre: movie.genres?.map((g) => g.name),
    duration: movie.runtime ? `PT${movie.runtime}M` : undefined,
    actor: movie.credits?.cast?.slice(0, 5).map((actor) => ({
      "@type": "Person",
      name: actor.name,
    })),
    director: movie.credits?.crew
      ?.filter((person) => person.job === "Director")
      .slice(0, 2)
      .map((director) => ({
        "@type": "Person",
        name: director.name,
      })),
  };

  // Remove undefined values
  const cleanSchema = JSON.parse(
    JSON.stringify(schemaData, (key, value) =>
      value === undefined ? undefined : value,
    ),
  );

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(cleanSchema)}</script>
    </Helmet>
  );
};

export default MovieSchema;
