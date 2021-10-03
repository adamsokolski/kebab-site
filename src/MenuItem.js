import React from "react";
import "./MenuItem.css";

export default function MenuItem(props) {
  return (
    <div
      className={`menu-item ${props.value[1].length === 0 ? "inne-item" : ""}`}
    >
      <div className="item-content">
        <h4>
          <span className="index-number">{props.value[3]}.</span>{" "}
          {props.value[0]}
        </h4>
        <p className="ingredients">{props.value[1].join(", ")}</p>
      </div>
      <div className="price">
        <div className="zloty">{props.value[2][0]}</div>
        <div className="grosze">{props.value[2][1]}</div>
      </div>
    </div>
  );
}
