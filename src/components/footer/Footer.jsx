import { useState } from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import tratamientos from "../../../public/tratamientos.json";


const Footer = () => {

  const { salud, estetica } = tratamientos[0];
  const [show, setShow] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section className="footer container-fluid">
      <article className="row">
        <div className="col-12 col-lg-6">
          <p className="footer-title footer-tratamientos">
            Tratamientos{" "}
            <i
              onClick={() => {
                setShow(!show);
              }}
              className="fa-solid fa-chevron-down d-inline d-sm-none"
              style={show ? { transform: "rotate(180deg)" } : {}}
            ></i>
          </p>
          <hr />
          <div className="d-none d-sm-block">
            <div className="row">
              {salud.map((item, index) => (
                <div   key={index} className="col-6 col-sm-4">
                  <NavLink
                    className="footer-item"
                    to={`/tratamientos/${item.ref}`}
                    onClick={scrollToTop}
                  >
                    {item.name}
                  </NavLink>
                </div>
              ))}
              {estetica.map((item, index) => (
                <div   key={index} className="col-6 col-sm-4">
                  <NavLink
                    className="footer-item"
                    to={`/tratamientos/${item.ref}`}
                    onClick={scrollToTop}
                  >
                    {item.name}
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
          {show && (
            <div className="d-block d-sm-none">
              <div className="row">
                {salud.map((item, index) => (
                  <div  key={index}className="col-12">
                    <NavLink
                      className="footer-item"
                      to={`/tratamientos/${item.ref}`}
                      onClick={scrollToTop}
                    >
                      {item.name}
                    </NavLink>
                  </div>
                ))}
                {estetica.map((item, index) => (
                  <div   key={index} className="col-12">
                    <NavLink
                      className="footer-item"
                      to={`/tratamientos/${item.ref}`}
                      onClick={scrollToTop}
                    >
                      {item.name}
                    </NavLink>
                  </div>
                ))}
              </div>
              <hr className="mb-5 mt-0" />
            </div>
          )}
        </div>
        <div className="col-sm-4 col-lg-2 mb-4 d-none d-sm-block">
          <p className="footer-title">Seguinos</p>
          <hr />
          <div className="">
            <a
              href="https://www.instagram.com/ode.odontologia.sm"
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
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
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100064051928429"
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
              aria-label="link facebok"
            >
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
            </a>
          </div>
        </div>
        <div className="col-sm-4 col-lg-2 d-block d-sm-none">
          <div className="d-flex justify-content-between">
            <p className="footer-title">Seguinos</p>

            <div className="">
              <a
                href="https://www.instagram.com/ode.odontologia.sm"
                target="_blank"
                style={{ textDecoration: "none", color: "white" }}
                aria-label="link instagram"
              >
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
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100064051928429"
                target="_blank"
                style={{ textDecoration: "none", color: "white" }}
              >
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
              </a>
            </div>
          </div>
          <hr className="mt-0" />
        </div>
        <div className="col-sm-4 col-lg-2 mb-4 d-none d-sm-block">
          <p className="footer-title">Dirección</p>
          <hr />
          <p className="d-flex gap-1 align-items-start">
            <i>
              <svg
                width="20"
                height="20"
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
            <span>Pte. J. D. Perón 2007, San Miguel.</span>
          </p>
        </div>
        <div className="col-sm-4 col-lg-2 d-block d-sm-none">
          <div className="d-flex justify-content-between">
            <p className="footer-title">Dirección</p>
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
              <span>Av. Pte Perón 2007, San Miguel.</span>
            </p>
          </div>
          <hr className="mt-0" />
        </div>
        <div className="col-sm-4 col-lg-2 mb-4 d-none d-sm-block">
          <p className="footer-title">Solicitá turno</p>
          <hr />
          <p className="d-flex  gap-1 align-items-center">
            <i className="fa-brands fa-whatsapp fa-xl"></i>
            <a
              className="text-num"
              href="https://api.whatsapp.com/send?phone=5491170147148"
            >
              11 7014 7148
            </a>
          </p>
        </div>
        <div className="col-sm-4 col-lg-2 d-block d-sm-none">
          <div className="d-flex justify-content-between">
            <p className="footer-title">Whatsapp</p>
            <p className="d-flex  gap-1 align-items-center">
              <i className="fa-brands fa-whatsapp fa-xl"></i>
              <a
                className="text-num"
                href="https://api.whatsapp.com/send?phone=5491170147148"
              >
                11 7014 7148
              </a>
            </p>
          </div>
          <hr className="mt-0" />
        </div>
      </article>
    </section>
  );
};

export default Footer;
