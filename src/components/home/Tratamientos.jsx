import kitten from "../../public/image/400.jpg";
import CardTratamientos from "./CardTratamientos";

const Tratamientos = () => {
  return (
    <section className="tratamientos">
      <h2 className="section-title">Nuestros tratamientos dentales</h2>
      <article className="t-cards d-flex justify-content-center gap-5">
        <CardTratamientos img="./public/images/card-1.png" text="Implantes" />
        <CardTratamientos img="./public/images/card-2.png" text="Prótesis" />
        <CardTratamientos img="./public/images/card-3.png" text="Ortodoncia" />
        <CardTratamientos img="./public/images/card-4.png" text="Blanqueamiento" />
      </article>
    </section>
  );
};

export default Tratamientos;
