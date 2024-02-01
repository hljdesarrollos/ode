import "./contacto.css";

const Contacto = () => {
  return (
    <section id="contacto" className="row gap-0 mx-0">
      <article className="offset-1 col-lg-6 contacto-article">
      <div id="mapa">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.591724498811!2d-58.7171598!3d-34.5385705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbd6b7e240ea5%3A0x2466cb6e36f9d135!2sConsultorios%20Ode!5e0!3m2!1ses!2sar!4v1704847059718!5m2!1ses!2sar"
            width="600"
            height="400"
            // style={{ border: 0 }}
            allowfullscreen=""
            style={{ borderRadius: '10px' }}
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </article>
      <article className="col-lg-4">
        <ul className="contacto-text">
          <li>
            <a href="https://goo.gl/maps/7nwbiuBSXgXGiDJDA" aria-label="mapa">
              <i><svg width="17" height="24" viewBox="0 0 17 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.4 5.4C9.19565 5.4 9.95871 5.71607 10.5213 6.27868C11.0839 6.84129 11.4 7.60435 11.4 8.4C11.4 8.79397 11.3224 9.18407 11.1716 9.54805C11.0209 9.91203 10.7999 10.2427 10.5213 10.5213C10.2427 10.7999 9.91203 11.0209 9.54805 11.1716C9.18407 11.3224 8.79397 11.4 8.4 11.4C7.60435 11.4 6.84129 11.0839 6.27868 10.5213C5.71607 9.95871 5.4 9.19565 5.4 8.4C5.4 7.60435 5.71607 6.84129 6.27868 6.27868C6.84129 5.71607 7.60435 5.4 8.4 5.4ZM8.4 0C10.6278 0 12.7644 0.884997 14.3397 2.4603C15.915 4.03561 16.8 6.17218 16.8 8.4C16.8 14.7 8.4 24 8.4 24C8.4 24 0 14.7 0 8.4C0 6.17218 0.884997 4.03561 2.4603 2.4603C4.03561 0.884997 6.17218 0 8.4 0ZM8.4 2.4C6.8087 2.4 5.28258 3.03214 4.15736 4.15736C3.03214 5.28258 2.4 6.8087 2.4 8.4C2.4 9.6 2.4 12 8.4 20.052C14.4 12 14.4 9.6 14.4 8.4C14.4 6.8087 13.7679 5.28258 12.6426 4.15736C11.5174 3.03214 9.9913 2.4 8.4 2.4Z" fill="#078901" />
              </svg></i>
              <strong>Pte. J. D. Perón 2007, San Miguel.</strong>
            </a>
          </li>
          <li>
            <hr />
          </li>
          <li>
            <a href="mailto: odeodontologia@ode.com.ar" aria-label="Mail: odeodontologia@ode.com.ar">
              <i className="fa-regular fa-envelope fa-xl"></i>
              <strong>Mail: odeodontologia@ode.com.ar</strong>
            </a>
          </li>
          <li>
            <hr />
          </li>
          <li>
            <i className="fa-regular fa-clock fa-xl"></i>
            <strong>Horarios: De Lu. a Sa. de 9 a 20 hs.</strong>
          </li>
          <li>
            <hr />
          </li>
          <li>
            <a href="tel:46647931" aria-label="Teléfono: 4664-7931" >
              <i><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.8889 13.8889C17.5556 13.8889 16.1111 13.6667 14.8889 13.2222H14.5556C14.2222 13.2222 14 13.3333 13.7778 13.5556L11.3333 16C8.22222 14.3333 5.55556 11.7778 4 8.66667L6.44445 6.22222C6.77778 5.88889 6.88889 5.44444 6.66667 5.11111C6.33333 3.88889 6.11111 2.44444 6.11111 1.11111C6.11111 0.555556 5.55556 0 5 0H1.11111C0.555556 0 0 0.555556 0 1.11111C0 11.5556 8.44445 20 18.8889 20C19.4444 20 20 19.4444 20 18.8889V15C20 14.4444 19.4444 13.8889 18.8889 13.8889ZM2.22222 2.22222H3.88889C4 3.22222 4.22222 4.22222 4.44444 5.11111L3.11111 6.44445C2.66667 5.11111 2.33333 3.66667 2.22222 2.22222ZM17.7778 17.7778C16.3333 17.6667 14.8889 17.3333 13.5556 16.8889L14.8889 15.5556C15.7778 15.7778 16.7778 16 17.7778 16V17.7778ZM13.3333 10H15.5556C15.5556 8.52658 14.9702 7.1135 13.9284 6.07163C12.8865 5.02976 11.4734 4.44444 10 4.44444V6.66667C10.8841 6.66667 11.7319 7.01786 12.357 7.64298C12.9821 8.2681 13.3333 9.11595 13.3333 10ZM17.7778 10H20C20 4.44444 15.5222 0 10 0V2.22222C14.2889 2.22222 17.7778 5.7 17.7778 10Z" fill="#078901" />
              </svg></i>
              <strong>Teléfono: 4664-7931</strong>
            </a>
          </li>
          <li>
            <hr />
          </li>
          <li>
            <a href="https://api.whatsapp.com/send?phone=5491170147148" aria-label="Whatsapp: +54 9 11 7014 7148">
              <i className="fa-brands fa-whatsapp fa-xl"></i>
              <strong>Whatsapp: +54 9 11 7014 7148</strong>
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
