import React from "react";

export const CardValores = ({ title, description, img }) => {
  return (
    <div className="somos-card">
      <h3 className="somos-card_title">{title}</h3>
      <p className="somos-card_text">{description}</p>
      <img src={img} alt="" className="somos-card_img" />
    </div>
  );
};
