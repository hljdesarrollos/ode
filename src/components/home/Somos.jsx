import { Link } from "react-router-dom";
import { CardValores } from "../partials/CardValores";

const Somos = () => {
  return (
    <article className="somos container container-md-fluid">
      <h2 className="section-title">Hola, somos ODE</h2>
      <section className="row">
        <article className="offset-lg-2 col-lg-8 offset-md-2 col-md-8 offset-sm-2 col-sm-8 offset-1 col-10">
          <p className="somos-description">
            Contamos con consultorios odontológicos en San Miguel en los que
            hemos atendido a <strong>más de treinta mil pacientes</strong>. Adaptamos nuestros
            servicios a tus necesidades y te brindamos uno hecho a tu medida
            ocupándonos de tu salud bucal de forma <strong>humana y personalizada</strong> desde
            el primer momento en que te contactás con nosotros hasta después
            de haber terminado el tratamiento.
          </p>
        </article>
      </section>
      <section className="row somos-definicion mb-4 container-md container-fluid">
        <article className="col-lg-4 col-md-4 col-sm-12 col-12 mb-4 mb-md-0">
          <CardValores
            title="Misión"
            description="Estamos comprometidos con la búsqueda constante de la excelencia en los servicios y calidad de asistencia odontológica."
            img="./images/Frame 205.webp"
          />
        </article>
        <article className="col-lg-4 col-md-4 col-sm-12 col-12 mb-4 mb-md-0">
          <CardValores
            title="Valores"
            description="Contamos con profesionales en formación
            permanente, brindamos un trato cordial y aranceles accesibles."
            img="./images/Frame 443.webp"
          />
        </article>
        <article className="col-lg-4 col-md-4 col-sm-12 col-12 mb-4 mb-md-0">
          <CardValores
            title="Visión"
            description="Nuestro objetivo es acercar nuestros servicios a más personas sin renunciar a la atencion que nos caracteriza."
            img="./images/Frame 446.webp"
          />
        </article>
      </section>
      <section className="text-center">
        <Link to={"/nosotros"} className="btn btn-nosotros mt-3 mb-3">
          Ver mas sobre nosotros
        </Link>
      </section>
    </article>
  );
};

export default Somos;
