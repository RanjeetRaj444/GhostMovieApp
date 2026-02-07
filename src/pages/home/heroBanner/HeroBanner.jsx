import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./style.scss";

import useFetch from "../../../hooks/useFetch";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);
  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    if (data?.results?.length > 0 && url.backdrop) {
      // Pick a random movie from top 5 for hero image
      const randomIndex = Math.floor(
        Math.random() * Math.min(5, data.results.length),
      );
      const bg = url.backdrop + data.results[randomIndex]?.backdrop_path;
      setBackground(bg);
    }
  }, [data, url.backdrop]);

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  const handleSearchClick = () => {
    if (query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className="heroBanner">
      {!loading && background ? (
        <div className="backdrop-img">
          {/* Use native img with eager loading for LCP optimization */}
          <img
            src={background}
            alt="Featured movie backdrop"
            className="hero-background"
            loading="eager"
            fetchpriority="high"
            decoding="async"
          />
        </div>
      ) : (
        <div className="backdrop-img skeleton"></div>
      )}

      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="heroBannerContent">
          <h1 className="title">Welcome.</h1>
          <p className="subTitle">
            Millions of movies, TV shows and people to discover. Explore now.
          </p>
          <div className="searchInput">
            <label htmlFor="movie-search" className="visually-hidden">
              Search for movies or TV shows
            </label>
            <input
              id="movie-search"
              type="text"
              placeholder="Search for a movie or tv show...."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
              aria-label="Search for movies or TV shows"
            />
            <button onClick={handleSearchClick} aria-label="Search">
              Search
            </button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
