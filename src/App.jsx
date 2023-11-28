import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Tratamientos from "./pages/Tratamientos";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(true);

  return (
    <>
      <HashRouter>
        <Header show={show} setShow={setShow} />
        <Routes>
          <Route path="/" element={<Home show={show} setShow={setShow} />} />
          <Route path="/tratamientos" element={<Tratamientos />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/tratamientos/:nombre" element={<Tratamientos />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
