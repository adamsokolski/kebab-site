import React from "react";

export default function Map() {
  const styles = {
    border: 0,
  };
  return (
    <iframe
      title="googleMaps"
      width="600"
      height="450"
      style={styles}
      loading="lazy"
      allowfullscreen
      src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJbYwceR2fGEcRTJHIIkIiwWo&key=AIzaSyB1NniQraq8PyiLh6Ml-4XolCBkJ8xysVM"
    ></iframe>
  );
}
