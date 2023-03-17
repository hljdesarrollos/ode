import check from "../../public/image/check.png";
import heart from "../../public/image/heart.png";
import { CardValores } from "./CardValores";

const Somos = () => {
  return (
    <article className="somos container container-md-fluid">
      <h2 className="somos-title">Hola, somos ODE</h2>
      <section className="row">
        <article className="offset-lg-1 col-lg-10 offset-md-1 col-md-10 offset-sm-2 col-sm-8 offset-1 col-10">
          <p className="somos-description">
            Contamos con consultorios odontológicos en San Miguel en los que
            hemos atendido a más de treinta mil pacientes. Adaptamos nuestros
            servicios a tus necesidades y te brindamos uno hecho a tu medida
            ocupándonos de tu salud bucal de forma humana y personalizada desde
            el primer momento en que te contactás con nosotros hasta el primer
            momento en que te contactás con nosotros hasta después de haber
            terminado el tratamiento.
          </p>
        </article>
      </section>
      <section className="row somos-definicion">
        <article className="offset-lg-1 col-lg-5 offset-md-2 col-md-4 offset-sm-2 col-sm-8 mb-5 offset-1 col-10">
          <CardValores
            title="Misión"
            description="Estamos comprometidos con la búsqueda constante de la excelencia
              en los servicios y asistencia de calidad"
            img={check}
          />
        </article>
        <article className="offset-lg-0 col-lg-5 offset-md-0 col-md-4 offset-sm-2 col-sm-8 mb-3 offset-1 col-10">
          <CardValores
            title="Valores"
            description="Estamos comprometidos con la búsqueda constante de la excelencia en los servicios y asistencia de calidad a los pacientes"
            img={heart}
          />
        </article>
      </section>
    </article>
  );
};

export default Somos;
