import React from "react";
import Estrellas from "./estrellas";
import "./cardTestimonio.css";

function CardTestimonio(dato) {
  return (
    <>
      <div className="col" key={dato.dato.plusId}>
        <div className="card text-center" style={{ height: 250 }}>
          <a href={dato.dato.reviewUrl}>
            <div className="card-body">
              <Estrellas valor={dato.dato.reviewRating} />
              <p className="card-text my-3">{dato.dato.reviewText}</p>
              <div className="d-flex justify-content-center align-items-center">
                <div>
                  <p className="card-text fw-bold mb-0">
                    {dato.dato.reviewAuthor}
                  </p>
                  <p className="text-muted mb-0">{dato.dato.rawDate}</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default CardTestimonio;
