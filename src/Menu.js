import React from "react";
import MenuItem from "./MenuItem";
import Marker from "./Marker";
import "./Menu.css";

export default function Menu() {
  const kebabArr = [
    [
      "Danie",
      ["mięso", "surówki", "frytki", "sosy", "cebulka prażona"],
      ["17", "00"],
      1,
    ],
    [
      "Duży Box",
      ["mięso", "surówka", "frytki", "sos", "cebulka"],
      ["17", "00"],
      2,
    ],
    [
      "Mini Box",
      ["mięso", "surówka", "frytki", "sos", "cebulka"],
      ["11", "00"],
      3,
    ],
    ["Bułka Duża", ["mięso", "surówka", "sos", "cebulka"], ["15", "00"], 4],
    ["Bułka Mała", ["mięso", "surówka", "sos", "cebulka"], ["11", "00"], 5],
    ["Tortilla Mała", ["mięso", "surówka", "sos"], ["11", "00"], 6],
    ["Tortilla Duża", ["mięso", "surówka", "sos"], ["14", "00"], 7],
    ["Tortilla Mega", ["mięso", "surówka", "sos"], ["20", "00"], 8],
    ["Cheesetilla Mały", ["mięso", "surówka", "sos", "ser"], ["12", "00"], 9],
    ["Cheesetilla Duży", ["mięso", "surówka", "sos", "ser"], ["15", "00"], 10],
    ["Cheesetilla Mega", ["mięso", "surówka", "sos", "ser"], ["22", "00"], 11],
    [
      "Frytotortilla Mały",
      ["mięso", "surówka", "frytki", "sos"],
      ["13", "00"],
      12,
    ],
    [
      "Frytotortilla Duży",
      ["mięso", "surówka", "frytki", "sos"],
      ["16", "00"],
      13,
    ],
    ["Vegetortilla Mały", ["surówka", "sos"], ["7", "00"], 14],
    ["Vegetortilla Duży", ["surówka", "sos"], ["10", "00"], 15],
  ];
  const zapiekankiArr = [
    ["Tradycyjna", ["ser", "pieczarki"], ["6", "00"], 1],
    ["Vege", ["ser", "pieczarki", "surówki"], ["6", "50"], 2],
    ["z Szynką", ["ser", "pieczarki", "szynka"], ["7", "00"], 3],
    [
      "z Szynką i Ogórkiem",
      ["ser", "pieczarki", "szynka", "świeży ogórek"],
      ["7", "50"],
      4,
    ],
    ["Kebab", ["ser", "pieczarki", "mięso kebab"], ["8", "00"], 5],
    [
      "Szefa",
      [
        "ser",
        "sos pomidorowy",
        "rukola",
        "szynka parmeńska",
        "pomidorki koktajlowe",
      ],
      ["8", "00"],
      6,
    ],
  ];
  const inneArr = [
    ["Hot-Dog", [], ["6", "00"], 1],
    ["Hamburger", [], ["7", "50"], 2],
    ["Cheesburger", [], ["8", "00"], 3],
    ["Hamburger XXL", [], ["13", "00"], 4],
    ["Cheesburger XXL", [], ["14", "00"], 5],
    ["Kanapka Kebab", [], ["12", "00"], 6],
    ["Frytki", [], ["7", "00"], 7],
    ["Sałatka Vege/Kurczak", [], ["10", "00"], 8],
  ];
  const dodatkiArr = [
    ["Dodatkowy sos", [], ["1", "00"], 1],
    ["Dodatkowy ser", [], ["1", "00"], 2],
    ["Dodatkowe warzywa", [], ["2", "00"], 3],
    ["Dodatkowe mięso", [], ["7", "00"], 4],
  ];
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
    <section className="menu-block">
      <h2>Nasze Menu!</h2>
      <div className="category-heading">
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
      <div className="category-heading">
        <h3>ZAPIEKANKI:</h3>
        <p className="ingredients">
          (sos czosnkowy, ketuch, cebulka prażona)
        </p>{" "}
      </div>

      {zapiekankiList}
      <div className="category-heading">
        <h3>INNE:</h3>
      </div>

      {inneList}
      <div className="category-heading">
        <h3>DODATKI:</h3>
      </div>

      {dodatkiList}
    </section>
  );
}
