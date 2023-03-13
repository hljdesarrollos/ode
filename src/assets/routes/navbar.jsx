import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../pages/home";
import Tratamientos from "../pages/tratamientos";
import Nosotros from "../pages/nosotros";
import Contacto from "../pages/contacto";


function Navbar() {
  return (
    <>
        <div>
          <h2>Menu</h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/tratamientos">Tratamientos</Link>
            </li>
            <li>
              <Link to="/nosotros">Nosotros</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
          </ul>
        </div>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tratamientos" element={<Tratamientos />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/tratamientos/:nombre" element={<Tratamientos/>} />
      </Routes>
    </>
  );
}

export default Navbar;
