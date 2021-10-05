import React from "react";

export default function Map() {
  const styles = {
    border: 0,
    width: "100%",
  };
  return (
    <iframe
      title="googleMaps"
      height="450"
      style={styles}
      loading="lazy"
      allowfullscreen
      src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJbYwceR2fGEcRTJHIIkIiwWo&key=AIzaSyAhGRSntIu_1EatJc0ytiSBBTyrVZ7Q6R4"
    ></iframe>
  );
}
