import CardTratamientos from "./CardTratamientos";

const Tratamientos = ({ show, setShow }) => {
  return (
    <section className="tratamientos">
      <h2 className="section-title">Nuestros tratamientos</h2>
      <article className="t-cards gap-5">
        <CardTratamientos img="./images/card-1.png" text="Implante" />
        <CardTratamientos img="./images/card-2.png" text="Prótesis" />
        <CardTratamientos img="./images/card-3.png" text="Ortodoncia" />
        <CardTratamientos
          img="./images/card-4.png"
          text="Blanqueamiento"
        />
      </article>
      <section className="text-center mt-5">
        <button className="btn btn-nosotros" onClick={() => setShow(!show)}>
          Ver mas tratamientos
        </button>
      </section>
    </section>
  );
};

export default Tratamientos;
