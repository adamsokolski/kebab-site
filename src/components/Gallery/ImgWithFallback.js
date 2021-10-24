import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const ImgWithFallback = ({
  src,
  alt,
  fallback,
  type = "image/webp",
  ...delegated
}) => {
  return (
    <Zoom
      wrapElement="li"
      overlayBgColorEnd="rgba(0, 0, 0, 0.9)"
      transitionDuration="222"
    >
      <picture>
        <source srcSet={src} type={type} />
        <img src={fallback} {...delegated} alt={alt} />
      </picture>
    </Zoom>
  );
};

export default ImgWithFallback;
