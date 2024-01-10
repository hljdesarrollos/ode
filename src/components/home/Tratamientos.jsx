import CardTratamientos from "./CardTratamientos";

const Tratamientos = ({ show, setShow }) => {
  return (
    <section className="tratamientos">
      <h2 className="section-title">Nuestros tratamientos</h2>
      <article className="t-cards gap-5">
        <CardTratamientos img="./images/card-1.webp" text="Implante" url="#/tratamientos/implantes_dentales" />
        <CardTratamientos img="./images/card-2.webp" text="Prótesis" url="#/tratamientos/protesis_dental"  />
        <CardTratamientos img="./images/card-3.webp" text="Ortodoncia" url="#/tratamientos/ortodoncia"  />
        <CardTratamientos
          img="./images/card-4.webp"
          text="Blanqueamiento"
          url="#/tratamientos/blanqueamientos"
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
