import "./Header.css";
// import Navbar from "./Navbar";
import TopHeader from "./TopHeader";

function Header({setShow, show}) {
  return (
    <header className="sticky-top">
      <TopHeader show={show} setShow={setShow}/>
    </header>
  );
}

export default Header;
