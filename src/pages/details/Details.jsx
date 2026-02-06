import React from "react";
import { useParams } from "react-router-dom";
import "./style.scss";

import useFetch from "../../hooks/useFetch";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import Cast from "./cast/Cast";
import VideosSection from "./videosSection/VideosSection";
import Similar from "./carousels/Similar";
import Recommendation from "./carousels/Recommendation";

import SEO from "../../components/seo/SEO";

const Details = () => {
  const { mediaType, id } = useParams();
  const { data: videoData, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`,
  );
  const { data: mainData } = useFetch(`/${mediaType}/${id}`);

  const itemTitle = mainData?.name || mainData?.title;
  const itemDescription = mainData?.overview
    ? mainData.overview.slice(0, 160) + "..."
    : `Watch ${itemTitle} on G-movies. Explore cast, trailers, and similar recommendations.`;

  return (
    <div>
      <SEO
        title={itemTitle}
        description={itemDescription}
        image={`https://image.tmdb.org/t/p/w500${mainData?.poster_path}`}
        url={`/${mediaType}/${id}`}
        type="video.movie"
      />
      <DetailsBanner video={videoData?.results?.[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsLoading} />
      <VideosSection data={videoData} loading={loading} />
      <Similar mediaType={mediaType} id={id} />
      <Recommendation mediaType={mediaType} id={id} />
    </div>
  );
};

export default Details;
