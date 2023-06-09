import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Tratamientos from "./pages/Tratamientos";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tratamientos" element={<Tratamientos />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/tratamientos/:nombre" element={<Tratamientos />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
