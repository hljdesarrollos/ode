import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Tratamientos from "./pages/tratamientos";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/contacto";
import Navbar from "./components/navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tratamientos" element={<Tratamientos />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/tratamientos/:nombre" element={<Tratamientos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
