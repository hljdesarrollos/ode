import React from "react";

const Portada = () => {
  return (
    <article className="presentacion container-fluid">
      <div className="row presentacion-portada">
        <div className="col-lg-7 col-md-7 d-lg-flex justify-content-center">
          <img
            src="./public/images/portada.png"
            alt="portada"
            className="presentacion-imagen"
          />
        </div>
        <div className="col-lg-4 col-md-6 col-12 info d-flex">
          <div className="info_text">
            <h1 className="presentacion-title">Sonriamos juntos</h1>
            <p className="presentacion-subtitle">
              ODE, Consultorios odontológicos
            </p>
            <div className="btn-actions">
              <a className="btn btn-action">Solicitá tu turno por Whatsapp</a>
              <a className="btn btn-action">Contactános por telefono</a>
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex align-content-center presentacion-info">
        <div className="col-12 col-sm-12 col-md-4 text-center">
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-map-pin"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            Dirección. Av. Pte Perón 2007, San Miguel.
          </p>
        </div>
        <div className="col-12 col-sm-12 col-md-4 text-center">
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-mail"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            Mail: deodontologia@ode.com.ar
          </p>
        </div>
        <div className="col-12 col-sm-12 col-md-4 text-center">
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-clock"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            Horarios: De lu. a sa. de 9:00 a 20 hs.
          </p>
        </div>
      </div>
    </article>
  );
};

export default Portada;
