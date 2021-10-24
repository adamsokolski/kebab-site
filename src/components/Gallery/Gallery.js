import React from "react";
// import GalleryPhoto from "./GalleryPhoto";
import ImgWithFallback from "./ImgWithFallback";
import photo1 from "../../img/1.jpg";
import photo2 from "../../img/2.jpg";
import photo3 from "../../img/3.jpg";
import photo4 from "../../img/4.jpg";
import photo5 from "../../img/5.jpg";
import photo6 from "../../img/6.jpg";
import photo7 from "../../img/7.jpg";
import photo10 from "../../img/10.jpg";
import photo11 from "../../img/11.jpg";
import photo12 from "../../img/12.jpg";
import photo13 from "../../img/13.jpg";
import photo14 from "../../img/14.png";
import photo15 from "../../img/15.png";
import photo1webp from "../../img/1.webp";
import photo2webp from "../../img/2.webp";
import photo3webp from "../../img/3.webp";
import photo4webp from "../../img/4.webp";
import photo5webp from "../../img/5.webp";
import photo6webp from "../../img/6.webp";
import photo7webp from "../../img/7.webp";
import photo10webp from "../../img/10.webp";
import photo11webp from "../../img/11.webp";
import photo12webp from "../../img/12.webp";
import photo13webp from "../../img/13.webp";
import photo14webp from "../../img/14.webp";
import photo15webp from "../../img/15.webp";
import "../../css/Gallery/Gallery.css";

export default function Gallery() {
  const photosArr = [
    [photo1, photo1webp, "zapiekanka"],
    [photo2, photo2webp, "zapiekanka"],
    [photo3, photo3webp, "zapiekanka"],
    [photo4, photo4webp, "zapiekanka"],
    [photo5, photo5webp, "zapiekanka"],
    [photo6, photo6webp, "zapiekanka"],
    [photo7, photo7webp, "zapiekanka"],
    [photo10, photo10webp, "zapiekanka"],
    [photo11, photo11webp, "zapiekanka"],
    [photo12, photo12webp, "zapiekanka"],
    [photo13, photo13webp, "zapiekanka"],
    [photo14, photo14webp, "zapiekanka"],
    [photo15, photo15webp, "zapiekanka"],
  ];
  const photosList = photosArr.map((number) => (
    <ImgWithFallback
      key={number[0].toString()}
      src={number[1]}
      fallback={number[0]}
      alt={number[2]}
    />
    // <GalleryPhoto key={number[0].toString()} src={number[0]} alt={number[1]} />
  ));

  return (
    <div className="gallery">
      <ul>{photosList}</ul>
    </div>
  );
}
