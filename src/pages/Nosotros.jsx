import { CardValores } from "../components/partials/CardValores";
import picture1 from "../public/image/c1.png";
import picture2 from "../public/image/c2.png";
import picture3 from "../public/image/c3.png";
import "./Nosotros.css";

const Nosotros = () => {
  return (
    <>
      <section className="container-fluid carrousel-container">
          <article className="offset-lg-0 col-lg-12 offset-md-1 col-md-10 offset-sm-0 col-sm-12 col-12">
            <div
              id="carouselExampleIndicators"
              className="carousel slide carrousel-format"
            >
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
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="custom-carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  className="custom-carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </article>
      </section>
      <section className="container my-sm-5 my-3">
        <section className="row">
          <article className="offset-lg-1 col-lg-10 offset-md-1 col-md-10 offset-sm-2 col-sm-8 col-12 nosotros-description">
            <h2 className="title">Somos ODE</h2>
            <p className="text">
              Ode Odontología es una institución con más de 6 años de
              antigüedad y tenemos como misión brindar la mejor calidad de
              atención, Somos un grupo humano de profesionales en constante
              formación dentro de un ambiente cálido y cordial.<span className="text-important"> Tenemos
              aranceles accesibles en odontología general, estética,
              restauradora, cirugías, ortodoncia, endodoncia, prótesis e
              implantes dentales.</span>
            </p>
            <p className="text">
              En ODE adaptamos nuestros servicios a tus necesidades y te
              brindamos uno hecho a tu medida ocupándonos de tu salud bucal de
              forma humana y personalizada desde el primer momento en que te
              contactas con nosotros hasta primer momento en que te contactas
              con nosotros hasta después de haber terminado el tratamiento.
            </p>
            {/* <p className="text">
              En ODE adaptamos nuestros servicios a tus necesidades y te
              brindamos uno hecho a tu medida ocupándonos de tu salud bucal de
              forma humana y personalizada desde el primer momento en que te
              contactas con nosotros hasta primer momento en que te contactás
              con nosotros hasta después de haber terminado el tratamiento.
            </p> */}
          </article>
        </section>
        <section className="row somos-definicion mx-5">
          <article className="col-lg-4 col-md-4 col-sm-12 col-12 mb-4 mb-md-0">
            <CardValores
              title="Misión"
              description="Estamos comprometidos con la búsqueda constante de la excelencia en los servicios y calidad de asistencia odontológica."
              img="./images/Frame 205.png"
            />
          </article>
          <article className="col-lg-4 col-md-4 col-sm-12 col-12 mb-4 mb-md-0">
            <CardValores
              title="Valores"
              description="Contamos con profesionales en formación
              permanente, brindamos un trato cordial y aranceles accesibles."
              img="./images/Frame 443.png"
            />
          </article>
          <article className="col-lg-4 col-md-4 col-sm-12 col-12 mb-4 mb-md-0">
            <CardValores
              title="Visión"
              description="Nuestro objetivo es acercar nuestros servicios a más personas sin renunciar a aquello que caracteriza nuestro servicio."
              img="./images/Frame 446.png"
            />
          </article>
        </section>
      </section>
    </>
  );
};

export default Nosotros;
