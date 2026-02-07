import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Img = ({ src, className, alt, width, height }) => {
  return (
    <LazyLoadImage
      className={className || ""}
      alt={alt || "movie poster"}
      effect="blur"
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      wrapperProps={{
        style: { display: "block" },
      }}
    />
  );
};

export default Img;
