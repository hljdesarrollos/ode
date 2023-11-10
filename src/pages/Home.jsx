import Portada from "../components/home/Portada";
import Somos from "../components/home/Somos";
import Tratamientos from "../components/home/Tratamientos";
import Testimonios from "../components/opiniones/testimonios";
import "./Home.css";

const Home = ({show, setShow}) => {
  return (
    <section className="home">
      <Portada />
      <Somos />
      <Tratamientos show={show} setShow={setShow} />
      <Testimonios />
    </section>
  );
};

export default Home;
