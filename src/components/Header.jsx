import "./Header.css";
import Navbar from "./Navbar";

function Header() {
  return (
    <header>
      <div className="top-header">
        <img src="" alt="ODE Logo" className="top-header_brand" />
        <div className="top-header_turno">
          <i className="fa-brands fa-whatsapp fa-xl"></i>
          <p>Solicitá tu turno</p>
        </div>
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
