import { NavLink } from "react-router-dom";
import tratamientos from "../../../public/tratamientos.json";
import MenuItem from "./MenuItem";
import { useRef, useState } from "react";

const TopHeader = ({ show, setShow }) => {
  const { salud, estetica } = tratamientos[0];
  const [showMenu, setShowMenu] = useState(true);
  const toggler = useRef(null);
  return (
    <>
      <div className="top-header d-none d-sm-flex">
        <NavLink to={"/"}>
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30 2.27155C45.3149 2.27155 57.7305 14.6871 57.7305 30.002C57.7305 45.3169 45.3149 57.7325 30 57.7325C14.6851 57.7325 2.26954 45.3169 2.26954 30.002C2.26954 14.6871 14.6851 2.27155 30 2.27155ZM30 0C21.9876 0 14.4531 3.12138 8.78624 8.78624C3.11938 14.4531 0 21.9856 0 30C0 38.0144 3.12138 45.5469 8.78624 51.2138C14.4531 56.8806 21.9856 60 30 60C38.0144 60 45.5469 56.8786 51.2138 51.2138C56.8806 45.5469 60 38.0144 60 30C60 21.9856 56.8786 14.4531 51.2138 8.78624C45.5469 3.12138 38.0124 0 30 0Z"
              fill="#078901"
            />
            <path
              d="M31.9506 24.5449H26.9476H23.5303H22.6125C22.5045 24.5449 22.4285 24.6509 22.4605 24.7529C23.2184 27.1984 23.4923 29.5499 23.5303 31.5815V32.6113C23.4783 35.2868 23.0444 37.2504 22.8924 37.8583C22.8664 37.9602 22.9444 38.0562 23.0484 38.0562H23.5303H24.0782H32.2745C36.5137 38.0562 38.5953 35.3688 38.5953 31.2996C38.5953 27.2304 36.5877 24.5449 31.9506 24.5449ZM31.2887 35.4827H27.3615C27.2735 35.4827 27.2016 35.4107 27.2016 35.3228V27.2804C27.2016 27.1924 27.2735 27.1204 27.3615 27.1204H30.9468C33.7482 27.1204 34.808 28.6721 34.808 31.1696C34.808 34.027 33.7103 35.4827 31.2887 35.4827Z"
              fill="#078901"
            />
            <path
              d="M53.2298 35.4825H44.5256C44.4376 35.4825 44.3656 35.4106 44.3656 35.3226V32.3512C44.3656 32.2632 44.4376 32.1912 44.5256 32.1912H51.7541C51.8421 32.1912 51.9141 32.1192 51.9141 32.0312V29.8937C51.9141 29.8057 51.8421 29.7337 51.7541 29.7337H44.5256C44.4376 29.7337 44.3656 29.6617 44.3656 29.5737V27.2842C44.3656 27.1962 44.4376 27.1242 44.5256 27.1242H53.1559C53.2438 27.1242 53.3158 27.0522 53.3158 26.9643V24.7127C53.3158 24.6247 53.2438 24.5527 53.1559 24.5527H44.1117H39.7765C39.6686 24.5527 39.5926 24.6587 39.6246 24.7607C40.3724 27.1782 40.6504 29.5037 40.6924 31.5193V32.6631C40.6364 35.3146 40.2065 37.2602 40.0545 37.8661C40.0285 37.9681 40.1065 38.064 40.2105 38.064H40.6924H53.2298C53.3178 38.064 53.3898 37.992 53.3898 37.9041V35.6525C53.3898 35.5545 53.3178 35.4825 53.2298 35.4825Z"
              fill="#078901"
            />
            <path
              d="M13.3096 24.0566C20.6141 24.0566 21.7559 28.3938 21.7559 31.2292C21.7559 34.0646 20.6141 38.4018 13.3096 38.4018C6.00506 38.4018 4.86328 34.0646 4.86328 31.2292C4.86328 28.3938 6.00506 24.0566 13.3096 24.0566ZM13.3096 35.8143C16.6569 35.8143 17.8367 33.3408 17.8367 31.2292C17.8367 29.1176 16.6569 26.6441 13.3096 26.6441C9.96027 26.6441 8.7825 29.1176 8.7825 31.2292C8.7825 33.3408 9.96227 35.8143 13.3096 35.8143Z"
              fill="#078901"
            />
          </svg>
        </NavLink>
        <section className="navigation">
          <nav className="navbar navbar-expand-lg h-100">
            <div className="container-fluid">
              <button
                className="navbar-toggler ms-auto"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse ms-auto"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav text-end ms-auto mb-2 mb-lg-0">
                  <li className="navbar-item">
                    <NavLink
                      onClick={() => {
                        setShow(true);
                      }}
                      className={({ isActive }) =>
                        isActive
                          ? "navbar-link navbar-link_active"
                          : "navbar-link"
                      }
                      aria-current="page"
                      to={"/"}
                    >
                      Inicio
                    </NavLink>
                  </li>
                  <li className="navbar-item">
                    <a
                      onClick={() => {
                        setShow(!show);
                      }}
                      className="navbar-link dropmenu d-none d-sm-inline"
                    >
                      Tratamientos <i className="fa-solid fa-chevron-down"></i>
                    </a>
                    <NavLink
                      to={"/tratamientos"}
                      className={({ isActive }) =>
                        isActive
                          ? "navbar-link navbar-link_active d-inline d-sm-none"
                          : "navbar-link d-inline d-sm-none"
                      }
                    >
                      Tratamientos
                    </NavLink>
                  </li>
                  <li className="navbar-item">
                    <NavLink
                      onClick={() => {
                        setShow(true);
                      }}
                      className={({ isActive }) =>
                        isActive
                          ? "navbar-link navbar-link_active"
                          : "navbar-link"
                      }
                      aria-current="page"
                      to={"/nosotros"}
                    >
                      Nosotros
                    </NavLink>
                  </li>
                  <li className="navbar-item">
                    <NavLink
                      onClick={() => {
                        setShow(true);
                      }}
                      className={({ isActive }) =>
                        isActive
                          ? "navbar-link navbar-link_active"
                          : "navbar-link"
                      }
                      aria-current="page"
                      to={"/contacto"}
                    >
                      Contacto
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <article className="menu-tratamientos z-1" hidden={show}>
            <section className="tratamientos-container">
              <article className="col-8">
                <p className="tipo-tratamiento">Salud Dental</p>
                <hr />
                <div className="row">
                  {salud.map((item) => (
                    <MenuItem
                      key={item.ref}
                      item={item}
                      columns="col-4"
                      show={{ show, setShow }}
                    />
                  ))}
                </div>
              </article>
              <article className="col-8">
                <p className="tipo-tratamiento">Estética Dental</p>
                <hr />
                <div className="row">
                  {estetica.map((item) => (
                    <MenuItem
                      key={item.ref}
                      item={item}
                      columns="col-12"
                      show={{ show, setShow }}
                    />
                  ))}
                </div>
              </article>
            </section>
          </article>
        </section>
        <div className="top-header_turno">
          <i className="fa-brands fa-whatsapp fa-xl"></i>
          <p>Solicitá tu turno</p>
        </div>
      </div>
      <div className="top-header top-header-sm d-flex d-sm-none">
        <NavLink to={"/"}>
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30 2.27155C45.3149 2.27155 57.7305 14.6871 57.7305 30.002C57.7305 45.3169 45.3149 57.7325 30 57.7325C14.6851 57.7325 2.26954 45.3169 2.26954 30.002C2.26954 14.6871 14.6851 2.27155 30 2.27155ZM30 0C21.9876 0 14.4531 3.12138 8.78624 8.78624C3.11938 14.4531 0 21.9856 0 30C0 38.0144 3.12138 45.5469 8.78624 51.2138C14.4531 56.8806 21.9856 60 30 60C38.0144 60 45.5469 56.8786 51.2138 51.2138C56.8806 45.5469 60 38.0144 60 30C60 21.9856 56.8786 14.4531 51.2138 8.78624C45.5469 3.12138 38.0124 0 30 0Z"
              fill="#078901"
            />
            <path
              d="M31.9506 24.5449H26.9476H23.5303H22.6125C22.5045 24.5449 22.4285 24.6509 22.4605 24.7529C23.2184 27.1984 23.4923 29.5499 23.5303 31.5815V32.6113C23.4783 35.2868 23.0444 37.2504 22.8924 37.8583C22.8664 37.9602 22.9444 38.0562 23.0484 38.0562H23.5303H24.0782H32.2745C36.5137 38.0562 38.5953 35.3688 38.5953 31.2996C38.5953 27.2304 36.5877 24.5449 31.9506 24.5449ZM31.2887 35.4827H27.3615C27.2735 35.4827 27.2016 35.4107 27.2016 35.3228V27.2804C27.2016 27.1924 27.2735 27.1204 27.3615 27.1204H30.9468C33.7482 27.1204 34.808 28.6721 34.808 31.1696C34.808 34.027 33.7103 35.4827 31.2887 35.4827Z"
              fill="#078901"
            />
            <path
              d="M53.2298 35.4825H44.5256C44.4376 35.4825 44.3656 35.4106 44.3656 35.3226V32.3512C44.3656 32.2632 44.4376 32.1912 44.5256 32.1912H51.7541C51.8421 32.1912 51.9141 32.1192 51.9141 32.0312V29.8937C51.9141 29.8057 51.8421 29.7337 51.7541 29.7337H44.5256C44.4376 29.7337 44.3656 29.6617 44.3656 29.5737V27.2842C44.3656 27.1962 44.4376 27.1242 44.5256 27.1242H53.1559C53.2438 27.1242 53.3158 27.0522 53.3158 26.9643V24.7127C53.3158 24.6247 53.2438 24.5527 53.1559 24.5527H44.1117H39.7765C39.6686 24.5527 39.5926 24.6587 39.6246 24.7607C40.3724 27.1782 40.6504 29.5037 40.6924 31.5193V32.6631C40.6364 35.3146 40.2065 37.2602 40.0545 37.8661C40.0285 37.9681 40.1065 38.064 40.2105 38.064H40.6924H53.2298C53.3178 38.064 53.3898 37.992 53.3898 37.9041V35.6525C53.3898 35.5545 53.3178 35.4825 53.2298 35.4825Z"
              fill="#078901"
            />
            <path
              d="M13.3096 24.0566C20.6141 24.0566 21.7559 28.3938 21.7559 31.2292C21.7559 34.0646 20.6141 38.4018 13.3096 38.4018C6.00506 38.4018 4.86328 34.0646 4.86328 31.2292C4.86328 28.3938 6.00506 24.0566 13.3096 24.0566ZM13.3096 35.8143C16.6569 35.8143 17.8367 33.3408 17.8367 31.2292C17.8367 29.1176 16.6569 26.6441 13.3096 26.6441C9.96027 26.6441 8.7825 29.1176 8.7825 31.2292C8.7825 33.3408 9.96227 35.8143 13.3096 35.8143Z"
              fill="#078901"
            />
          </svg>
        </NavLink>
        <section className="navigation-sm">
          <nav className="navbar navbar-expand-lg h-100">
            <div className="container-fluid">
              <button
                className="navbar-toggler ms-auto"
                type="button"
                // data-bs-toggle="collapse"
                // data-bs-target="#navbarSupportedContent"
                // aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={() => {
                  setShow(true);
                  setShowMenu(!showMenu);
                }}
              >
                <span className="navbar-toggler-icon" />
              </button>
            </div>
          </nav>
          <article className="menu-tratamientos-sm" hidden={show}>
            <section className="tratamientos-container">
              <article className="col-12">
                  <ul className="navbar-nav text-start mb-3">
                    <li className="navbar-item mb-1">
                      <a
                        onClick={() => {
                          setShow(true);
                          setShowMenu(false);
                        }}
                        className="navbar-link dropmenu d-flex gap-3 align-items-center"
                      >
                        <i className="fa-solid fa-chevron-left"></i> Tratamientos 
                      </a>
                    </li>
                    <hr className="divider mt-2" />
                  </ul>
                <div className="row">
                  {salud.map((item) => (
                    <MenuItem
                      key={item.ref}
                      item={item}
                      columns="col-12"
                      show={{ show, setShow }}
                    />
                  ))}
                  {estetica.map((item) => (
                    <MenuItem
                      key={item.ref}
                      item={item}
                      columns="col-12"
                      show={{ show, setShow }}
                    />
                  ))}
                </div>

              </article>
            </section>
          </article>
        </section>
        <div className="top-header_turno">
          <i className="fa-brands fa-whatsapp fa-xl"></i>
          <p>Solicitá tu turno</p>
        </div>
      </div>
      <div
        className="navbar-collapse-sm ms-auto w-100"
        id="navbarSupportedContent"
        hidden={showMenu}
      >
        <ul className="navbar-nav text-start me-auto mb-2 mb-lg-0">
          <li className="navbar-item mb-0">
            <NavLink
              onClick={() => {
                setShow(true);
                setShowMenu(true);
              }}
              className="navbar-link d-inline d-sm-none"
              aria-current="page"
              to={"/"}
            >
              Inicio
            </NavLink>
          </li>
          <hr className="divider mt-2" />
          <li className="navbar-item mb-4">
            <a
              onClick={() => {
                setShow(false);
                setShowMenu(true);
              }}
              className="navbar-link dropmenu d-flex justify-content-between align-items-center"
            >
              Tratamientos <i className="fa-solid fa-chevron-right"></i>
            </a>
          </li>
          <li className="navbar-item mb-0">
            <NavLink
              onClick={() => {
                setShow(true);
                setShowMenu(true);
              }}
              className="navbar-link d-inline d-sm-none"
              aria-current="page"
              to={"/nosotros"}
            >
              Nosotros
            </NavLink>
          </li>
          <hr className="divider mt-2" />
          <li className="navbar-item mb-0">
            <NavLink
              onClick={() => {
                setShow(true);
                setShowMenu(true);
              }}
              className="navbar-link d-inline d-sm-none"
              aria-current="page"
              to={"/contacto"}
            >
              Contacto
            </NavLink>
          </li>
          <hr className="divider mt-2" />
        </ul>
      </div>
    </>
  );
};

export default TopHeader;
