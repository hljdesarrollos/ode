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
    <section className="testimonios">
      <h3 className="section-title">Opiniones de nuestros pacientes</h3>
      <div
        id="carouselExampleIndicators"
        className="carousel slide d-none d-sm-block carrousel-format"
        data-bs-ride="true"
        data-bs-interval="3000"
      >
        <div className="carousel-inner container">
          <div className="carousel-item active">
            <div className="row gy-5 row-cols-1 row-cols-sm-2 row-cols-lg-3 mx-5">
              {filtrado.slice(0, 3).map((dato) => (
                <CardTestimonio dato={dato} />
              ))}
            </div>
          </div>
          <div className="carousel-item">
            <div className="row gy-5 row-cols-1 row-cols-sm-2 row-cols-lg-3 mx-5">
              {filtrado.slice(3, 6).map((dato) => (
                <CardTestimonio dato={dato} />
              ))}
            </div>
          </div>
          <div className="carousel-item">
            <div className="row gy-5 row-cols-1 row-cols-sm-2 row-cols-lg-3 mx-5">
              {filtrado.slice(6, 9).map((dato) => (
                <CardTestimonio dato={dato} />
              ))}
            </div>
          </div>
        </div>
        <div className="carousel-indicators ">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="custom-carousel-control-prev-icon"
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
            className="custom-carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div
        id="carouselExampleIndicatorsSM"
        className="carousel slide d-block d-sm-none carrousel-format"
        data-bs-ride="true"
        data-bs-interval="3000"
      >
        <div className="carousel-inner container">
          <div className="carousel-item active">
            <div className="row gy-4 row-cols-1 row-cols-sm-2 row-cols-lg-3">
              {filtrado.slice(0, 1).map((dato) => (
                <CardTestimonio dato={dato} />
              ))}
            </div>
          </div>
          <div className="carousel-item">
            <div className="row gy-4 row-cols-1 row-cols-sm-2 row-cols-lg-3">
              {filtrado.slice(1, 2).map((dato) => (
                <CardTestimonio dato={dato} />
              ))}
            </div>
          </div>
          <div className="carousel-item">
            <div className="row gy-4 row-cols-1 row-cols-sm-2 row-cols-lg-3">
              {filtrado.slice(2, 3).map((dato) => (
                <CardTestimonio dato={dato} />
              ))}
            </div>
          </div>
          <div className="carousel-item">
            <div className="row gy-4 row-cols-1 row-cols-sm-2 row-cols-lg-3">
              {filtrado.slice(3, 4).map((dato) => (
                <CardTestimonio dato={dato} />
              ))}
            </div>
          </div>
          <div className="carousel-item">
            <div className="row gy-4 row-cols-1 row-cols-sm-2 row-cols-lg-3">
              {filtrado.slice(4, 5).map((dato) => (
                <CardTestimonio dato={dato} />
              ))}
            </div>
          </div>
          <div className="carousel-item">
            <div className="row gy-4 row-cols-1 row-cols-sm-2 row-cols-lg-3">
              {filtrado.slice(5, 6).map((dato) => (
                <CardTestimonio dato={dato} />
              ))}
            </div>
          </div>
          <div className="carousel-item">
            <div className="row gy-4 row-cols-1 row-cols-sm-2 row-cols-lg-3">
              {filtrado.slice(6, 7).map((dato) => (
                <CardTestimonio dato={dato} />
              ))}
            </div>
          </div>
          <div className="carousel-item">
            <div className="row gy-4 row-cols-1 row-cols-sm-2 row-cols-lg-3">
              {filtrado.slice(7, 8).map((dato) => (
                <CardTestimonio dato={dato} />
              ))}
            </div>
          </div>
          <div className="carousel-item">
            <div className="row gy-4 row-cols-1 row-cols-sm-2 row-cols-lg-3">
              {filtrado.slice(8, 9).map((dato) => (
                <CardTestimonio dato={dato} />
              ))}
            </div>
          </div>
        </div>
        <div className="carousel-indicators ">
          {filtrado.map((data,index)=>(
            <button
              type="button"
              data-bs-target="#carouselExampleIndicatorsSM"
              data-bs-slide-to={index}
              className={index == 0 && "active"}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicatorsSM"
          data-bs-slide="prev"
        >
          <span
            className="custom-carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicatorsSM"
          data-bs-slide="next"
        >
          <span
            className="custom-carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}

export default Testimonios;
