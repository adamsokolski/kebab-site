import React from "react";
import "./Header.css";
import Button from "./Button";

export default function Header() {
  return (
    <header>
      <h1>
        <span className="header-first-line">KEBAB POD</span>
        <span className="header-second-line">KAUFLANDEM</span>
      </h1>
      <nav>
        <ul>
          <li>MENU</li>
        </ul>
      </nav>
      <section className="intro">
        <h2>
          <p className="first-p">MASZ OCHOTĘ NA</p>
          <p>NAJLEPSZEGO KEBABA</p>
          <p>W DĘBLINIE?</p>
        </h2>
        <Button content="ZAMÓW" />
      </section>
    </header>
  );
}
