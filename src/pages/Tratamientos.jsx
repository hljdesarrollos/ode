import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Tratamientos.css";

function Tratamientos() {
  const [tratamientosUnicos, setTratamientosUnicos] = useState([]);
  const [tratamiento, setTratamiento] = useState({});
  let { nombre } = useParams();

  useEffect(() => {
    uniqueTratamientos();
  }, []);

  useEffect(() => {
    handleChangeTratamiento();
  });

  const uniqueTratamientos = async () => {
    let res = await fetch('../tratamientos.json');
    let temp = await res.json();
    let tratamientosTemp = [];
    await temp.forEach((t) => {
      for (const key in t) {
        tratamientosTemp = [...tratamientosTemp, ...t[key]];
      }
    });
    setTratamientosUnicos(tratamientosTemp);
    setTratamiento(tratamientosTemp.find((t) => t.ref === nombre));
  };

  const handleChangeTratamiento = () => {
    setTratamiento(tratamientosUnicos.find((t) => t.ref === nombre));
  };

  return (
    <section className="tratamientos-fondo-bicolor">
      <section className="container">
        <section className="tratamientos-container row">
          <div className="d-flex align-items-center  mobil">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none" className="msvg">
              <circle cx="12.0004" cy="12.5004" r="4.36364" fill="#078901" />
              <path d="M12 0.5C5.4 0.5 0 5.9 0 12.5C0 19.1 5.4 24.5 12 24.5C18.6 24.5 24 19.1 24 12.5C24 5.9 18.6 0.5 12 0.5ZM12 22.1C6.708 22.1 2.4 17.792 2.4 12.5C2.4 7.208 6.708 2.9 12 2.9C17.292 2.9 21.6 7.208 21.6 12.5C21.6 17.792 17.292 22.1 12 22.1Z" fill="#078901" />
            </svg>
            <p className="title-row">{tratamiento?.name}</p>
          </div>
          <section className="column-container">
            <article className="text-column">
              <div className="card-tratamiento_body">
                <div className="card-tratamiento_info">
                  <div className="d-flex align-items-center">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 0C4.95 0 0 4.95 0 11C0 17.05 4.95 22 11 22C17.05 22 22 17.05 22 11C22 4.95 17.05 0 11 0ZM11 19.8C6.149 19.8 2.2 15.851 2.2 11C2.2 6.149 6.149 2.2 11 2.2C15.851 2.2 19.8 6.149 19.8 11C19.8 15.851 15.851 19.8 11 19.8ZM16.049 6.138L8.8 13.387L5.951 10.549L4.4 12.1L8.8 16.5L17.6 7.7L16.049 6.138Z"
                        fill="#078901" />
                    </svg>
                    <h2 className="card-tratamiento_subtitle">¿Qué es?</h2>
                  </div>
                  <p className="card-tratamiento_text">{tratamiento?.information}</p>
                </div>
                <div className="card-tratamiento_info">
                  <div className="d-flex align-items-center">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 0C4.95 0 0 4.95 0 11C0 17.05 4.95 22 11 22C17.05 22 22 17.05 22 11C22 4.95 17.05 0 11 0ZM11 19.8C6.149 19.8 2.2 15.851 2.2 11C2.2 6.149 6.149 2.2 11 2.2C15.851 2.2 19.8 6.149 19.8 11C19.8 15.851 15.851 19.8 11 19.8ZM16.049 6.138L8.8 13.387L5.951 10.549L4.4 12.1L8.8 16.5L17.6 7.7L16.049 6.138Z"
                        fill="#00AF62" />
                    </svg>
                    <h2 className="card-tratamiento_subtitle">Ventajas</h2>
                  </div>
                  <ul className="card-tratamiento_adventages">
                    {tratamiento?.adventages?.map(adventage => (
                      <li key={adventage}>{adventage}</li>
                    ))}
                  </ul>
                </div>
                <div className="card-tratamiento_info">
                  <div className="d-flex align-items-center">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 0C4.95 0 0 4.95 0 11C0 17.05 4.95 22 11 22C17.05 22 22 17.05 22 11C22 4.95 17.05 0 11 0ZM11 19.8C6.149 19.8 2.2 15.851 2.2 11C2.2 6.149 6.149 2.2 11 2.2C15.851 2.2 19.8 6.149 19.8 11C19.8 15.851 15.851 19.8 11 19.8ZM16.049 6.138L8.8 13.387L5.951 10.549L4.4 12.1L8.8 16.5L17.6 7.7L16.049 6.138Z"
                        fill="#00AF62" />
                    </svg>
                    <h2 className="card-tratamiento_subtitle">Proceso</h2>
                  </div>
                  <p className="card-tratamiento_text">{tratamiento?.process}</p>
                </div>
                { tratamiento && tratamiento.titulo_acordeon ? (
                <div className="card-tratamiento_acordeon">
                <div className="accordion">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="accordion-heading-1">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#accordion-collapse-1"
                        aria-expanded="true"
                        aria-controls="accordion-collapse-1"
                      >
                        {tratamiento.titulo_acordeon}
                      </button>
                    </h2>
                    <div
                      id="accordion-collapse-1"
                      className="accordion-collapse collapse"
                      aria-labelledby="accordion-heading-1"
                    >
                      <div className="accordion-body">
                        <p>{tratamiento.texto_acordeon}</p>
                        <img
                          src={tratamiento?.imagen_acordeon}
                          alt={tratamiento?.ref}
                          className="w-60"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              ) : null}
              </div>
            </article>
            <article className="image-column">
              <img
                src={tratamiento?.image}
                alt={tratamiento?.ref}
                className="w-100" />
            </article>
          </section>
        </section>
      </section>
    </section >
  );
}

export default Tratamientos;
