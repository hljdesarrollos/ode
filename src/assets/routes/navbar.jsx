import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "../pages/home";
import Tratamientos from "../pages/tratamientos";
import Nosotros from "../pages/nosotros";
import Contacto from "../pages/contacto";
import "./nav.css";

function Navbar() {

  return (
    <>
      <div>
        <h2>Menu</h2>
        <nav id="nav">
          <ul>
            <li>
              <NavLink to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/tratamientos">Tratamientos</NavLink>
            </li>
            <li>
              <NavLink to="/nosotros">Nosotros</NavLink>
            </li>
            <li>
              <NavLink to="/contacto">Contacto</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tratamientos" element={<Tratamientos />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/tratamientos/:nombre" element={<Tratamientos />} />
      </Routes>
    </>
  );
}

export default Navbar;
