import check from '../../public/image/check.png'
import heart from '../../public/image/heart.png'

const Somos = () => {
  return (
    <article className="somos">
      <h2 className="somos-title">Hola, somos ODE</h2>
      <section className="row">
        <article className="offset-3 col-6">
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
        <article className="offset-2 col-4">
          <div className="somos-card">
            <h3 className="somos-card_title">Misión</h3>
            <p className="somos-card_text">
              Estamos comprometidos con la búsqueda constante de la excelencia
              en los servicios y asistencia de calidad
            </p>
            <img src={check} alt="" className="somos-card_img"/>
          </div>
        </article>
        <article className="col-4">
          <div className="somos-card">
            <h3 className="somos-card_title">Valores</h3>
            <p className="somos-card_text">Estamos comprometidos con la búsqueda constante de la excelencia en los servicios y asistencia de calidad a los pacientes</p>
            <img src={heart} alt="" className="somos-card_img"/>
          </div>
        </article>
      </section>
    </article>
  );
};

export default Somos;
