import React, { useEffect } from "react";

import "./style.scss";

import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "./trending/Trending";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";

import SEO from "../../components/seo/SEO";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";

const Home = () => {
  return (
    <div className="homePage">
      <SEO
        title="Home - Stream Latest Movies & TV Shows"
        description="G-movies is your ultimate destination for exploring the latest movies and trending TV shows. Search, watch trailers, and discover your next favorite film."
        keywords="movie streaming, film database, trailers, top rated movies, trending tv shows"
      />
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />

      <ContentWrapper>
        <section className="seoContentSection">
          <h2>Discover the Best Movies and TV Shows on G-movies</h2>
          <p>
            Welcome to G-movies, the premier destination for film enthusiasts
            and casual viewers alike. Our platform offers a comprehensive
            database of the latest blockbuster movies, critically acclaimed TV
            shows, and hidden gems. Whether you're looking for trending genres,
            top-rated classics, or the newest releases, G-movies provides
            detailed information, high-quality trailers, and personalized
            recommendations.
          </p>
          <p>
            Explore a vast library of content ranging from action, drama, and
            comedy to horror, sci-fi, and animation. Our easy-to-use search and
            discovery features help you find exactly what you're looking for.
            Stay up to date with the latest industry news and movie ratings on
            G-movies.
          </p>
        </section>
      </ContentWrapper>
    </div>
  );
};

export default Home;
