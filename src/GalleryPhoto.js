import React from "react";
import Skeleton from "react-loading-skeleton";

export default function GalleryPhoto(props) {
  return (
    <li>
      {/* <img src={props.src} alt={props.alt} loading="lazy" /> */}
      {<img src={props.src} alt={props.alt} loading="lazy" /> || (
        <Skeleton height={400} width={350} />
      )}
    </li>
  );
}
