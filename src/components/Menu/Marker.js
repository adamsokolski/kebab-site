import React from "react";
import "../../css/Menu/Marker.css";

export default function Marker(props) {
  return <span className={`marker ${props.color}`}>{props.value}</span>;
}
