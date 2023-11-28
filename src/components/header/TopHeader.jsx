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

            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="menu_close_button"
              onClick={() => { setShow(true) }}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.02 14.2842L21.2384 23.5025C21.5457 23.7994 21.9573 23.9636 22.3846 23.9599C22.8119 23.9562 23.2206 23.7848 23.5227 23.4827C23.8249 23.1805 23.9962 22.7718 23.9999 22.3446C24.0037 21.9173 23.8394 21.5057 23.5426 21.1983L14.3242 11.98L23.5426 2.76162C23.8394 2.45428 24.0037 2.04265 23.9999 1.61539C23.9962 1.18813 23.8249 0.779416 23.5227 0.477284C23.2206 0.175153 22.8119 0.0037744 22.3846 6.16013e-05C21.9573 -0.00365119 21.5457 0.160598 21.2384 0.457434L12.02 9.67579L2.80166 0.457434C2.49295 0.167936 2.08371 0.00990326 1.66054 0.0167747C1.23737 0.0236462 0.833482 0.194883 0.534325 0.494252C0.235168 0.79362 0.064217 1.19763 0.0576449 1.6208C0.0510728 2.04397 0.209395 2.4531 0.499111 2.76162L9.71584 11.98L0.497482 21.1983C0.341843 21.3487 0.217701 21.5285 0.132298 21.7273C0.0468949 21.9261 0.00194173 22.1399 6.1527e-05 22.3563C-0.00181867 22.5727 0.0394114 22.7872 0.121347 22.9875C0.203282 23.1878 0.324281 23.3697 0.477284 23.5227C0.630286 23.6757 0.812229 23.7967 1.01249 23.8787C1.21276 23.9606 1.42734 24.0018 1.64371 23.9999C1.86008 23.9981 2.07391 23.9531 2.27272 23.8677C2.47153 23.7823 2.65134 23.6582 2.80166 23.5025L12.02 14.2842Z"
                fill="black"
              />
            </svg>
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
                      columns="col-md-4 col-12"
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
