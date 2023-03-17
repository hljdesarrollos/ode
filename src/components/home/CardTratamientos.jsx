import React from "react";

const CardTratamientos = ({img, text}) => {
  return (
    <div className="col-md-3 offset-sm-0 col-sm-6 offset-1 col-10 mb-4">
      <div className="t-card w-100">
        <img src={img} alt="" className="t-card-image" />
        <p className="t-card-text">{text}</p>
      </div>
    </div>
  );
};

export default CardTratamientos;
