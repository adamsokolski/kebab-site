import React from "react";
import "./Contact.css";
import Map from "./Map";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-number-box"></div>
      <h2>Zamów teraz!</h2>
      <p className="contact-number">502 432 560</p>
      <a href="tel:502 432 560">
        <button>ZADZWOŃ</button>
      </a>
      <div className="opening-hours">
        <p>pn - pt</p>
        <p>10:00 - 20:00</p>
        <p>sb</p>
        <p>10:00 - 18:00</p>
        <p>nd</p>
        <p>zamknięte</p>
      </div>
      <div>
        <Map />
      </div>
    </section>
  );
}
