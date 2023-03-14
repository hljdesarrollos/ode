import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(true);

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
              <div className="col-4">
                <p className="tratamiento">
                  <NavLink
                    to={"/tratamientos/implantes dentales"}
                    className="tratamiento-link"
                  >
                    Implantes Dentales
                  </NavLink>
                </p>
                <p className="tratamiento">
                  <NavLink
                    to={"/tratamientos/protesis dental"}
                    className="tratamiento-link"
                  >
                    Prótesis Dental
                  </NavLink>
                </p>
                <p className="tratamiento">
                  <NavLink
                    to={"/tratamientos/ortodoncia"}
                    className="tratamiento-link"
                  >
                    Ortodóncia
                  </NavLink>
                </p>
              </div>
              <div className="col-4">
                <p className="tratamiento">
                  <NavLink
                    to={"/tratamientos/implantes dentales"}
                    className="tratamiento-link"
                  >
                    Implantes Dentales
                  </NavLink>
                </p>
                <p className="tratamiento">
                  <NavLink
                    to={"/tratamientos/protesis dental"}
                    className="tratamiento-link"
                  >
                    Prótesis Dental
                  </NavLink>
                </p>
                <p className="tratamiento">
                  <NavLink
                    to={"/tratamientos/ortodoncia"}
                    className="tratamiento-link"
                  >
                    Ortodóncia
                  </NavLink>
                </p>
              </div>
              <div className="col-4">
                <p className="tratamiento">
                  <NavLink
                    to={"/tratamientos/implantes dentales"}
                    className="tratamiento-link"
                  >
                    Implantes Dentales
                  </NavLink>
                </p>
                <p className="tratamiento">
                  <NavLink
                    to={"/tratamientos/protesis dental"}
                    className="tratamiento-link"
                  >
                    Prótesis Dental
                  </NavLink>
                </p>
                <p className="tratamiento">
                  <NavLink
                    to={"/tratamientos/ortodoncia"}
                    className="tratamiento-link"
                  >
                    Ortodóncia
                  </NavLink>
                </p>
              </div>
            </div>
          </article>
          <article className="col-4">
            <p className="tipo-tratamiento">Estética Dental</p>
            <hr />
            <div className="row">
              <div className="col-12">
                <p className="tratamiento">
                  <NavLink
                    to={"/tratamientos/implantes dentales"}
                    className="tratamiento-link"
                  >
                    Implantes Dentales
                  </NavLink>
                </p>
                <p className="tratamiento">
                  <NavLink
                    to={"/tratamientos/protesis dental"}
                    className="tratamiento-link"
                  >
                    Prótesis Dental
                  </NavLink>
                </p>
                <p className="tratamiento">
                  <NavLink
                    to={"/tratamientos/ortodoncia"}
                    className="tratamiento-link"
                  >
                    Ortodóncia
                  </NavLink>
                </p>
              </div>
            </div>
          </article>
        </section>
      </article>
    </section>
  );
};

export default Navbar;
