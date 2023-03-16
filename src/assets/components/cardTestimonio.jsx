import React from "react";
import Estrellas from "./estrellas";

function CardTestimonio(dato) {
  return (
    <>
      <div className="col" key={dato.dato.plusId}>
        <a href={dato.dato.reviewUrl}>
          <div className="card text-center" style={{ width: 350, height: 250 }}>
            <div className="card-body">
              <Estrellas valor={dato.dato.reviewRating} />
              <p className="card-text">{dato.dato.reviewText}</p>
              <div className="d-flex justify-content-center align-items-center">
                {/* <img
                    className="rounded-circle flex-shrink-0 me-3 fit-cover"
                    width="50"
                    height="50"
                    src={dato.dato.reviewAuthorImage}
                  /> */}
                <div>
                  <p className="fw-bold text-primary mb-0">
                    {dato.dato.reviewAuthor}
                  </p>
                  <p className="text-muted mb-0">{dato.dato.rawDate}</p>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}

export default CardTestimonio;
