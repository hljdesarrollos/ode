import Portada from "../components/home/Portada";
import Somos from "../components/home/Somos";
import Testimonios from "../components/opiniones/testimonios";
import "./Home.css";

const Home = () => {
  return (
    <section className="home">
      <Portada />
      <Somos />
      {/* <Testimonios /> */}
    </section>
  );
};

export default Home;
