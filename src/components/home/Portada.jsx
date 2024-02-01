import React from "react";

const Portada = () => {
  return (
    <article className="presentacion container-fluid">
      <div className="row presentacion-portada">
        <div className="col-lg-7 col-md-7 d-lg-flex justify-content-center">
          <img
            src="./images/portada.webp"
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
              <a href="https://api.whatsapp.com/send?phone=5491170147148" className="btn btn-action" aria-label="Solicitá tu turno por Whatsapp" >Solicitá tu turno por Whatsapp</a>
              <a href="tel:+54-1146647931" className="btn btn-action" aria-label="Contactános por telefono">Contactános por telefono</a>
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex align-content-center presentacion-info">
        <div className="col-12 col-sm-12 col-md-4 text-center">
          <p>
            <i>
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"

              >
                <path
                  d="M8.4 5.4C9.19565 5.4 9.95871 5.71607 10.5213 6.27868C11.0839 6.84129 11.4 7.60435 11.4 8.4C11.4 8.79397 11.3224 9.18407 11.1716 9.54805C11.0209 9.91203 10.7999 10.2427 10.5213 10.5213C10.2427 10.7999 9.91203 11.0209 9.54805 11.1716C9.18407 11.3224 8.79397 11.4 8.4 11.4C7.60435 11.4 6.84129 11.0839 6.27868 10.5213C5.71607 9.95871 5.4 9.19565 5.4 8.4C5.4 7.60435 5.71607 6.84129 6.27868 6.27868C6.84129 5.71607 7.60435 5.4 8.4 5.4ZM8.4 0C10.6278 0 12.7644 0.884997 14.3397 2.4603C15.915 4.03561 16.8 6.17218 16.8 8.4C16.8 14.7 8.4 24 8.4 24C8.4 24 0 14.7 0 8.4C0 6.17218 0.884997 4.03561 2.4603 2.4603C4.03561 0.884997 6.17218 0 8.4 0ZM8.4 2.4C6.8087 2.4 5.28258 3.03214 4.15736 4.15736C3.03214 5.28258 2.4 6.8087 2.4 8.4C2.4 9.6 2.4 12 8.4 20.052C14.4 12 14.4 9.6 14.4 8.4C14.4 6.8087 13.7679 5.28258 12.6426 4.15736C11.5174 3.03214 9.9913 2.4 8.4 2.4Z"
                  fill="#FFFFFF"
                />
              </svg>
            </i>
            Dirección: Pte. J. D. Perón 2007, San Miguel.
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
            Mail: odeodontologia@ode.com.ar
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
            Horarios: Lu. a vi. de 10 a 19 hs. y sa. de 10 a 18 hs.
          </p>
        </div>
      </div>
    </article>
  );
};

export default Portada;
