import React from "react";
import data from "../../assets/reviews_ode.json";
import CardTestimonio from "./cardTestimonio";

function Testimonios() {
  const reviews = data.reviews;

  function mayorIgualCuatro(num) {
    return num.reviewRating >= 4;
  }

  let filtradoValor = reviews.filter(mayorIgualCuatro);
  let filtrado = filtradoValor.slice(0, 9);

  return (
    <section id="testimonios">
      <h3 className="text-center">Opiniones</h3>
      <div
        id="carouselExampleIndicators"
        className="carousel slide carousel-dark"
        data-bs-ride="true"
        data-bs-interval="3000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row gy-4 row-cols-1 row-cols-sm-2 row-cols-lg-3">
              {filtrado.slice(0, 3).map((dato) => (
                <CardTestimonio dato={dato} />
              ))}
            </div>
          </div>
          <div className="carousel-item">
            <div className="row gy-4 row-cols-1 row-cols-sm-2 row-cols-lg-3">
              {filtrado.slice(3, 6).map((dato) => (
                <CardTestimonio dato={dato} />
              ))}
            </div>
          </div>
          <div className="carousel-item">
            <div className="row gy-4 row-cols-1 row-cols-sm-2 row-cols-lg-3">
              {filtrado.slice(6, 9).map((dato) => (
                <CardTestimonio dato={dato} />
              ))}
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </section>
  );
}

export default Testimonios;
