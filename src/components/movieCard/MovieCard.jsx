import React from "react";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "./style.scss";
import Img from "../lazyLoadImage/Img";
import CircleRating from "../circleRating/CircleRating";
import Genres from "../genres/Genres";
import PosterFallback from "../../assets/no-poster.png";

const MovieCard = ({ data, fromSearch, mediaType }) => {
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();
  const posterUrl = data?.poster_path
    ? url.poster + data.poster_path
    : PosterFallback;

  // Safely get rating and genre_ids
  const rating = data?.vote_average ? data.vote_average.toFixed(1) : null;
  const genreIds = data?.genre_ids?.slice(0, 2) || [];

  return (
    <div
      className="movieCard"
      onClick={() => navigate(`/${data?.media_type || mediaType}/${data?.id}`)}
    >
      <div className="posterBlock">
        <Img
          className="posterImg"
          src={posterUrl}
          alt={data?.title || data?.name || "Movie Poster"}
        />
        {!fromSearch && (
          <React.Fragment>
            {rating && <CircleRating rating={rating} />}
            {genreIds.length > 0 && <Genres data={genreIds} />}
          </React.Fragment>
        )}
      </div>
      <div className="textBlock">
        <span className="title">{data?.title || data?.name}</span>
        <span className="date">
          {data?.release_date || data?.first_air_date
            ? dayjs(data?.release_date || data?.first_air_date).format(
                "MMM D, YYYY",
              )
            : "Release date unknown"}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
