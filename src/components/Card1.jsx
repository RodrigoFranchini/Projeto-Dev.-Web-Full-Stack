import React from "react";
import "./componentsStyle.css";

export default function Card1(props) {
  return (
    <div className="Card">
      <div className="Title">
        <h3>{props.titulo}</h3>
      </div>
      <div className="Children-card1">{props.children}</div>
    </div>
  );
}
