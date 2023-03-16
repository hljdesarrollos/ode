import "./contacto.css";

const Contacto = () => {
  return (
    <section id="contacto" className="row">
      <article className="offset-1 col-6 contacto-article">
        <div id="mapa">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.8969204955524!2d-58.39184305031532!3d-34.60676798036276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb608cc87791%3A0x35973ad825de397b!2sODE!5e0!3m2!1ses!2sar!4v1678988445141!5m2!1ses!2sar"
            width="600"
            height="400"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </article>
      <article className="col-4">
        <ul className="contacto-text">
          <li>
            <a href="https://goo.gl/maps/7nwbiuBSXgXGiDJDA">
              <i className="fa-solid fa-location-dot fa-xl"></i>
              {/* <i className="fa-regular fa-location-dot"></i> */}
              <strong>Dirección: Gral. Juan Domingo Perón 1618</strong>
            </a>
          </li>
          <li>
            <hr />
          </li>
          <li>
            <a href="mailto: deodontologia@ode.com.ar">
              <i className="fa-regular fa-envelope fa-xl"></i>
              <strong>Mail: deodontologia@ode.com.ar</strong>
            </a>
          </li>
          <li>
            <hr />
          </li>
          <li>
            <i className="fa-regular fa-clock fa-xl"></i>
            <strong>Horarios: De Lu. a Sa. de 9:00 a 20:00 hs.</strong>
          </li>
          <li>
            <hr />
          </li>
          <li>
            <a href="tel:46647931">
              <i className="fa-solid fa-phone-volume fa-xl"></i>
              {/* <i class="fa-regular fa-phone-volume fa-xl"></i> */}
              <strong>Teléfono: 4664-7931</strong>
            </a>
          </li>
          <li>
            <hr />
          </li>
          <li>
            <a href="https://api.whatsapp.com/send?phone=0123456789">
              <i className="fa-brands fa-whatsapp fa-xl"></i>
              <strong>Whatsapp: 15 5661 4679</strong>
            </a>
          </li>
          <li>
            <hr />
          </li>
        </ul>
      </article>
    </section>
  );
};

export default Contacto;
