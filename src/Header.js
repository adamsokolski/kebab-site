import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <h1>
        <span className="header-first-line">KEBAB POD</span>
        <span className="header-second-line">KAUFLANDEM</span>
      </h1>
      <nav>
        <ul>
          <li>
            <a href="#menu">
              <i class="fas fa-clipboard-list"></i> MENU
            </a>
          </li>
          <li>
            <a href="#lokalizacja">
              <i class="fas fa-map-marker-alt"></i> LOKALIZACJA
            </a>
          </li>
        </ul>
      </nav>
      <section className="intro">
        <h2>
          <p className="first-p">MASZ OCHOTĘ NA</p>
          <p className="next-p">NAJLEPSZEGO KEBABA</p>
          <p className="next-p">W DĘBLINIE?</p>
        </h2>
        <div className="contact-number-box">
          <p className="contact-number">502 432 560</p>
          <a href="tel:502 432 560">
            <button>
              <i class="fas fa-phone-alt"></i> ZADZWOŃ
            </button>
          </a>
        </div>
      </section>
    </header>
  );
}
