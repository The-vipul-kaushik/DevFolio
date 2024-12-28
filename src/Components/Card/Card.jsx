import React from "react";
import "./Card.css";

const Card = ({ pic, heading, details, link }) => {
  return (
    <div className="card">
      <img src={pic} />
      <span>{heading}</span>
      <span>{details}</span>
      <a href={link}>
        <button className="c-button">LEARN MORE</button>
      </a>
    </div>
  );
};

export default Card;
