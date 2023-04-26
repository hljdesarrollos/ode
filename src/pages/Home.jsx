import Portada from "../components/home/Portada";
import Somos from "../components/home/Somos";
import Tratamientos from "../components/home/Tratamientos";
import Testimonios from "../components/opiniones/testimonios";
import "./Home.css";

const Home = () => {
  return (
    <section className="home">
      <Portada />
      <Somos />
      <Tratamientos />
      <Testimonios />
    </section>
  );
};

export default Home;
