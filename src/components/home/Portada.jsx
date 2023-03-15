import React from "react";

const Portada = () => {
  return (
    <article className="presentacion container-fluid">
      <div className="row presentacion-portada">
        <div className="col-3"></div>
        <div className="col-8 info">
          <svg
            width="264"
            height="265"
            viewBox="0 0 264 265"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M132.002 10.9387C199.387 10.9387 254.014 65.5662 254.014 132.951C254.014 200.336 199.387 254.963 132.002 254.963C64.6172 254.963 9.98975 200.336 9.98975 132.951C9.98975 65.5662 64.6172 10.9387 132.002 10.9387ZM132.002 0.944092C96.7479 0.944092 63.5967 14.6779 38.6628 39.603C13.729 64.5368 0.00390625 97.6793 0.00390625 132.942C0.00390625 168.205 13.7378 201.347 38.6628 226.281C63.5967 251.215 96.7391 264.94 132.002 264.94C167.265 264.94 200.407 251.206 225.341 226.281C250.275 201.347 264 168.205 264 132.942C264 97.6793 250.266 64.5368 225.341 39.603C200.407 14.6779 167.256 0.944092 132.002 0.944092Z"
              fill="white"
            />
            <path
              d="M140.58 108.941H118.567H103.531H99.4931C99.018 108.941 98.6837 109.407 98.8245 109.856C102.159 120.616 103.364 130.962 103.531 139.901V144.432C103.303 156.204 101.394 164.844 100.725 167.518C100.61 167.967 100.954 168.39 101.411 168.39H103.531H105.942H142.006C160.658 168.39 169.816 156.565 169.816 138.661C169.816 120.757 160.983 108.941 140.58 108.941ZM137.668 157.066H120.389C120.002 157.066 119.685 156.75 119.685 156.362V120.976C119.685 120.589 120.002 120.273 120.389 120.273H136.164C148.49 120.273 153.153 127.1 153.153 138.089C153.153 150.661 148.323 157.066 137.668 157.066Z"
              fill="#FAFFFB"
            />
            <path
              d="M234.209 157.067H195.911C195.524 157.067 195.207 156.75 195.207 156.363V143.289C195.207 142.902 195.524 142.585 195.911 142.585H227.716C228.103 142.585 228.42 142.268 228.42 141.881V132.476C228.42 132.089 228.103 131.772 227.716 131.772H195.911C195.524 131.772 195.207 131.455 195.207 131.068V120.994C195.207 120.607 195.524 120.29 195.911 120.29H233.884C234.271 120.29 234.588 119.974 234.588 119.587V109.68C234.588 109.293 234.271 108.976 233.884 108.976H194.09H175.016C174.54 108.976 174.206 109.442 174.347 109.891C177.637 120.528 178.86 130.76 179.045 139.629V144.661C178.799 156.328 176.907 164.888 176.239 167.554C176.124 168.003 176.467 168.425 176.925 168.425H179.045H234.209C234.596 168.425 234.913 168.108 234.913 167.721V157.814C234.913 157.383 234.596 157.067 234.209 157.067Z"
              fill="#FAFFFB"
            />
            <path
              d="M58.5646 106.794C90.7041 106.794 95.7278 125.878 95.7278 138.353C95.7278 150.829 90.7041 169.912 58.5646 169.912C26.4251 169.912 21.4014 150.829 21.4014 138.353C21.4014 125.878 26.4251 106.794 58.5646 106.794ZM58.5646 158.527C73.2926 158.527 78.4835 147.644 78.4835 138.353C78.4835 129.062 73.2926 118.179 58.5646 118.179C43.8278 118.179 38.6457 129.062 38.6457 138.353C38.6457 147.644 43.8366 158.527 58.5646 158.527Z"
              fill="#FAFFFB"
            />
          </svg>
          <div className="info_text">
            <h1 className="presentacion-title">“Sonriamos juntos”</h1>
            <div>
              <a className="btn btn-action">Solicitá tu turno por Whatsapp</a>
              <a className="btn btn-action">Contactános por telefono</a>
            </div>
          </div>
        </div>

        <div className="col-2"></div>
      </div>
      <div className="row d-flex align-content-center presentacion-info">
        <div className="col-4 text-center">
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
            Dirección Tte. Gral. Juan Domingo Perón 1618
          </p>
        </div>
        <div className="col-4 text-center">
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
        <div className="col-4 text-center">
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
