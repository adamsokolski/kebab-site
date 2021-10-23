import React from "react";
import MenuItem from "./MenuItem";
import Marker from "./Marker";
import "../../css/Menu/Menu.css";

import kebabArr from "../../data/kebab";
import zapiekankiArr from "../../data/zapiekanki";
import dodatkiArr from "../../data/dodatki";
import inneArr from "../../data/inne";

export default function Menu() {
  const kebabList = kebabArr.map((number) => (
    <MenuItem key={number[3].toString()} value={number} />
  ));
  const zapiekankiList = zapiekankiArr.map((number) => (
    <MenuItem key={number[3].toString()} value={number} />
  ));
  const inneList = inneArr.map((number) => (
    <MenuItem key={number[3].toString()} value={number} className="inne-item" />
  ));
  const dodatkiList = dodatkiArr.map((number) => (
    <MenuItem key={number[3].toString()} value={number} className="inne-item" />
  ));
  return (
    <section id="menu" className="menu-block">
      <h2>Nasze Menu!</h2>
      <div className="category">
        {" "}
        <div className="category-heading kebab-category">
          <h3>KEBAB:</h3>
          <div className="sauces">
            <span className="sauces-name">Sosy:</span>
            <Marker value="łagodny" color="marker-green" />
            <Marker value="ostry" color="marker-red" />
            <Marker value="mix" color="marker-mix" />
          </div>
          <div className="sauces">
            <span className="sauces-name">Mięso:</span>
            <Marker value="kurczak" color="marker-green" />
            <Marker value="wołowina" color="marker-green" />
            <Marker value="mix" color="marker-green" />
          </div>
        </div>
        {kebabList}
      </div>
      <div className="category">
        {" "}
        <div className="category-heading zapiekanki-category">
          <h3>ZAPIEKANKI:</h3>
          <p className="ingredients">
            (sos czosnkowy, ketchup, cebulka prażona)
          </p>
        </div>
        {zapiekankiList}
        <div className="category-heading">
          <h3>INNE:</h3>
        </div>
        {inneList}{" "}
        <div className="category-heading">
          <h3>DODATKI:</h3>
        </div>
        {dodatkiList}
      </div>
    </section>
  );
}
