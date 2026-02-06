import React from "react";
import { useSelector } from "react-redux";

import "./style.scss";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import MovieCard from "../../components/movieCard/MovieCard";

const Watchlist = () => {
  const { watchlist } = useSelector((state) => state.watchlist);

  return (
    <div className="watchlistPage">
      <ContentWrapper>
        <div className="pageTitle">My Watchlist</div>
        {watchlist?.length > 0 ? (
          <div className="content">
            {watchlist.map((item) => (
              <MovieCard
                key={item.id}
                data={item}
                mediaType={
                  item.media_type || (item.first_air_date ? "tv" : "movie")
                }
              />
            ))}
          </div>
        ) : (
          <div className="noResults">Your watchlist is empty.</div>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Watchlist;
