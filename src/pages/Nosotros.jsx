import { CardValores } from "../components/partials/CardValores";
import picture1 from "../public/image/c1.png";
import picture2 from "../public/image/c1.png";
import picture3 from "../public/image/c1.png";
import check from "../public/image/check.png";
import heart from "../public/image/heart.png";
import "./Nosotros.css";

const Nosotros = () => {
  return (
    <section className="container mb-5">
      <section className="container">
        <article className="offset-lg-0 col-lg-12 offset-md-1 col-md-10 offset-sm-0 col-sm-12 offset-1 col-10">
          <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={0}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={1}
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={2}
                aria-label="Slide 3"
              />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={picture1} className="d-block w-100" alt="image" />
              </div>
              <div className="carousel-item">
                <img src={picture2} className="d-block w-100" alt="image" />
              </div>
              <div className="carousel-item">
                <img src={picture3} className="d-block w-100" alt="image" />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </article>
      </section>
      <section className="row mt-5 px-2">
        <article className="offset-lg-0 col-lg-12 offset-md-1 col-md-10 offset-sm-2 col-sm-8 offset-1 col-10 nosotros-description">
          <h2 className="title">Somos ODE:</h2>
          <p className="text">
            Ode Odontología es una institución con más de 6 años de antigüedad y
            tenemos como misión brindar la mejor calidad de atención, Somos un
            grupo humano de profesionales en constante formación dentro de un
            ambiente cálido y cordial. Tenemos aranceles accesibles en
            odontología general, estética, restauradora, cirugías, ortodoncia,
            endodoncia, prótesis e implantes dentales.
          </p>
          <p className="text">
            En ODE adaptamos nuestros servicios a tus necesidades y te brindamos
            uno hecho a tu medida ocupándonos de tu salud bucal de forma humana
            y personalizada desde el primer momento en que te contactas con
            nosotros hasta primer momento en que te contactas con nosotros hasta
            después de haber terminado el tratamiento.
          </p>
          <p className="text">
            En ODE adaptamos nuestros servicios a tus necesidades y te brindamos
            uno hecho a tu medida ocupándonos de tu salud bucal de forma humana
            y personalizada desde el primer momento en que te contactas con
            nosotros hasta primer momento en que te contactas con nosotros hasta
            después de haber terminado el tratamiento.
          </p>
        </article>
      </section>
      <section className="row somos-definicion mb-5">
        <article className="offset-lg-1 col-lg-5 offset-md-1 col-md-5 offset-sm-2 col-sm-8 mb-3 offset-1 col-10 mb-5 mb-md-0">
          <CardValores
            title="Misión"
            description="Estamos comprometidos con la búsqueda constante de la excelencia
              en los servicios y asistencia de calidad"
            img={check}
          />
        </article>
        <article className="offset-lg-0 col-lg-5 offset-md-0 col-md-5 offset-sm-2 col-sm-8 mb-3 offset-1 col-10 mb-md-0">
          <CardValores
            title="Valores"
            description="Estamos comprometidos con la búsqueda constante de la excelencia en los servicios y asistencia de calidad a los pacientes"
            img={heart}
          />
        </article>
      </section>
    </section>
  );
};

export default Nosotros;
