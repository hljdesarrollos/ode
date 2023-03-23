import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import tratamientos from "../assets/tratamientos.json";
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
    let url = "../src/assets/tratamientos.json"
    let res = await fetch(url);
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
    <section className="container">
      <section className="tratamientos-container row">
        <article className="col-lg-4 g-0">
          <ul className="list">
            {tratamientosUnicos.map((trata) => (
              <li
                key={trata.ref}
                className={
                  nombre === trata.ref ? "tratamiento-active" : `tratamiento`
                }
              >
                <Link to={`/tratamientos/${trata.ref}`} className="link-item">
                  {trata.name}
                </Link>
              </li>
            ))}
          </ul>
        </article>
        <article className="col-lg-8 g-0">
          <div className="card-tratamiento">
            <div className="card-tratamiento_header">
              <div className="d-flex align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="#00AF62"
                  stroke="#00AF62"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-circle"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
                <h1 className="card-tratamiento_title">{tratamiento?.name}</h1>
              </div>
              <img
                src={tratamiento?.image}
                alt={tratamiento?.ref}
                className="w-100"
              />
            </div>
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
                      fill="#00AF62"
                    />
                  </svg>
                  <h2 className="card-tratamiento_subtitle">¿Qué es un implante dental?</h2>
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
                      fill="#00AF62"
                    />
                  </svg>
                  <h2 className="card-tratamiento_subtitle">Ventajas</h2>
                </div>
                <ul className="card-tratamiento_adventages">
                  {tratamiento?.adventages?.map(adventage=>(
                    <li>{adventage}</li>
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
                      fill="#00AF62"
                    />
                  </svg>
                  <h2 className="card-tratamiento_subtitle">Proceso</h2>
                </div>
                <p className="card-tratamiento_text">{tratamiento?.process}</p>
              </div>
            </div>
          </div>
        </article>
      </section>
    </section>
  );
}

export default Tratamientos;
