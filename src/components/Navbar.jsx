import { useState } from "react";
import { NavLink } from "react-router-dom";
import tratamientos from "../assets/tratamientos.json";
import MenuItem from "./MenuItem";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const { salud, estetica } = tratamientos[0];

  return (
    <section className="navigation">
      <nav className="navbar navbar-expand-lg">
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
                    isActive ? "navbar-link navbar-link_active" : "navbar-link"
                  }
                  aria-current="page"
                  to={"/"}
                >
                  Home
                </NavLink>
              </li>
              <li className="navbar-item">
                <a
                  onClick={() => {
                    setShow(!show);
                  }}
                  className="navbar-link dropmenu"
                >
                  Tratamientos
                </a>
              </li>
              <li className="navbar-item">
                <NavLink
                  onClick={() => {
                    setShow(true);
                  }}
                  className={({ isActive }) =>
                    isActive ? "navbar-link navbar-link_active" : "navbar-link"
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
                    isActive ? "navbar-link navbar-link_active" : "navbar-link"
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
      <article className="menu-tratamientos" hidden={show}>
        <section className="row tratamientos-container">
          <article className="col-8">
            <p className="tipo-tratamiento">Salud Dental</p>
            <hr />
            <div className="row">
              {salud.map((item) => (
                <MenuItem
                  item={item}
                  columns="col-4"
                  show={{ show, setShow }}
                />
              ))}
            </div>
          </article>
          <article className="col-4">
            <p className="tipo-tratamiento">Estética Dental</p>
            <hr />
            <div className="row">
              {estetica.map((item) => (
                <MenuItem
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
  );
};

export default Navbar;
