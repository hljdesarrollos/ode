import Portada from "../components/home/Portada";
import Somos from "../components/home/Somos";
import "./Home.css";

const Home = () => {
  return (
    <section className="home">
      <Portada />
      <Somos />
    </section>
  );
};

export default Home;
