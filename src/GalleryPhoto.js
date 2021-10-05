import React from "react";

export default function GalleryPhoto(props) {
  return (
    <li>
      <img src={props.src} alt={props.alt} loading="lazy" />
    </li>
  );
}
