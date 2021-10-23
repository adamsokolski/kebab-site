import React from "react";
import GalleryPhoto from "./GalleryPhoto";
import photo1 from "./img/1.jpg";
import photo2 from "./img/2.jpg";
import photo3 from "./img/3.jpg";
import photo4 from "./img/4.jpg";
import photo5 from "./img/5.jpg";
import photo6 from "./img/6.jpg";
import photo7 from "./img/7.jpg";
import photo10 from "./img/10.jpg";
import photo11 from "./img/11.jpg";
import photo12 from "./img/12.jpg";
import photo13 from "./img/13.jpg";
import photo14 from "./img/14.png";
import photo15 from "./img/15.png";
import "./Gallery.css";

export default function Gallery() {
  const photosArr = [
    [photo1, "zapiekanka z sosem czosnkowym, ketchupem oraz cebulką prażoną"],
    [photo2, "zapiekanka z sosem czosnkowym, ketchupem oraz cebulką prażoną"],
    [photo3, "zapiekanka z sosem czosnkowym, ketchupem oraz cebulką prażoną"],
    [photo4, "zapiekanka z sosem czosnkowym, ketchupem oraz cebulką prażoną"],
    [photo5, "zapiekanka z sosem czosnkowym, ketchupem oraz cebulką prażoną"],
    [photo6, "zapiekanka z sosem czosnkowym, ketchupem oraz cebulką prażoną"],
    [photo7, "zapiekanka z sosem czosnkowym, ketchupem oraz cebulką prażoną"],
    [photo10, "zapiekanka z sosem czosnkowym, ketchupem oraz cebulką prażoną"],
    [photo11, "zapiekanka z sosem czosnkowym, ketchupem oraz cebulką prażoną"],
    [photo12, "zapiekanka z sosem czosnkowym, ketchupem oraz cebulką prażoną"],
    [photo13, "zapiekanka z sosem czosnkowym, ketchupem oraz cebulką prażoną"],
    [photo14, "zapiekanka z sosem czosnkowym, ketchupem oraz cebulką prażoną"],
    [photo15, "zapiekanka z sosem czosnkowym, ketchupem oraz cebulką prażoną"],
  ];
  const photosList = photosArr.map((number) => (
    <GalleryPhoto key={number[0].toString()} src={number[0]} alt={number[1]} />
  ));

  return (
    <div className="gallery">
      <ul>{photosList}</ul>
    </div>
  );
}
