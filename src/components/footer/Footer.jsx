import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer container-fluid">
      <article className="row">
        <div className="col-12 col-lg-6 order-1 order-md-0">
          <p className="footer-title">Tratamientos</p>
          <hr />
          <div className="row">
            <div className="col-6 col-sm-4">
              <p className="footer-item">Implante dental</p>
            </div>
            <div className="col-6 col-sm-4">
              <p className="footer-item">Implante dental</p>
            </div>
            <div className="col-6 col-sm-4">
              <p className="footer-item">Implante dental</p>
            </div>
            <div className="col-6 col-sm-4">
              <p className="footer-item">Protesis</p>
            </div>
            <div className="col-6 col-sm-4">
              <p className="footer-item">Protesis</p>
            </div>
            <div className="col-6 col-sm-4">
              <p className="footer-item">Protesis</p>
            </div>
            <div className="col-6 col-sm-4">
              <p className="footer-item">Blanqueamiento</p>
            </div>
            <div className="col-6 col-sm-4">
              <p className="footer-item">Blanqueamiento</p>
            </div>
            <div className="col-6 col-sm-4">
              <p className="footer-item">Blanqueamiento</p>
            </div>
          </div>
        </div>
        <div className="col-sm-4 col-lg-2 mb-4">
          <p className="footer-title">Seguinos</p>
          <hr />
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-instagram footer-social"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-facebook footer-social"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </div>
        </div>
        <div className="col-sm-4 col-lg-2 mb-4">
          <p className="footer-title">Dirección</p>
          <hr />
          <p className="d-flex gap-1 align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
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
            <span>Dirección Tte. Gral. Juan Domingo Perón 1618</span>
          </p>
        </div>
        <div className="col-sm-4 col-lg-2 mb-4">
          <p className="footer-title">Solicitá turno</p>
          <hr />
          <p className="d-flex  gap-1 align-items-center">
            <i
              className="fa-brands fa-whatsapp fa-xl"
            ></i>
            <span>Solicitá tu turno</span>
          </p>
        </div>
      </article>
    </section>
  );
};

export default Footer;
