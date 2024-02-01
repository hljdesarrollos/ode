import { NavLink } from "react-router-dom";
import tratamientos from "../../../public/tratamientos.json";
import MenuItem from "./MenuItem";
import { useRef, useState } from "react";

const TopHeader = ({ show, setShow }) => {
  const { salud, estetica } = tratamientos[0];
  const [showMenu, setShowMenu] = useState(true);
  const toggler = useRef(null);
  return (
    <>
      <div className="top-header d-none d-sm-flex">
        <NavLink to={"/"}>
          <svg
            width={60}
            height={60}
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30 2.27279C35.4851 2.272 40.8471 3.89784 45.4081 6.94468C49.9691 9.99152 53.5241 14.3225 55.6235 19.3899C57.7229 24.4572 58.2724 30.0334 57.2025 35.4131C56.1326 40.7928 53.4914 45.7344 49.6129 49.6129C45.7344 53.4914 40.7928 56.1326 35.4131 57.2025C30.0334 58.2724 24.4573 57.7229 19.3899 55.6235C14.3225 53.5241 9.99153 49.9691 6.94469 45.4081C3.89785 40.8471 2.27201 35.485 2.2728 30C2.2728 22.6463 5.19405 15.5938 10.3939 10.3939C15.5938 5.19404 22.6463 2.27279 30 2.27279ZM30 0C24.0666 0 18.2664 1.75947 13.3329 5.05591C8.39943 8.35235 4.55426 13.0377 2.28363 18.5195C0.0129985 24.0013 -0.581101 30.0333 0.576455 35.8527C1.73401 41.6721 4.59123 47.0176 8.78681 51.2132C12.9824 55.4088 18.3279 58.266 24.1473 59.4236C29.9667 60.5811 35.9987 59.987 41.4805 57.7164C46.9623 55.4458 51.6476 51.6006 54.9441 46.6671C58.2405 41.7336 60 35.9334 60 30C59.9916 22.0461 56.8282 14.4204 51.2039 8.79611C45.5796 3.17184 37.9539 0.0084291 30 0Z"
              fill="#1A4DBC"
            />
            <path
              d="M31.9512 23.2462H22.6133C22.588 23.2454 22.563 23.2507 22.5403 23.2618C22.5176 23.2729 22.4979 23.2893 22.483 23.3097C22.4681 23.3301 22.4584 23.3539 22.4548 23.3788C22.4511 23.4038 22.4536 23.4293 22.462 23.4532C23.2183 25.9011 22.9874 28.2535 23.0233 30.2835V31.3104C22.9715 33.9852 23.0233 35.9515 22.8919 36.5605C22.8866 36.584 22.8866 36.6085 22.8919 36.632C22.8971 36.6556 22.9076 36.6777 22.9224 36.6967C22.9373 36.7158 22.9562 36.7313 22.9777 36.7421C22.9993 36.753 23.023 36.7589 23.0471 36.7595H32.2736C36.5127 36.7595 38.5944 34.0688 38.5944 29.9929C38.5944 25.917 36.5883 23.2462 31.9512 23.2462ZM31.2905 34.1962H27.3619C27.3196 34.1962 27.2791 34.1794 27.2493 34.1495C27.2194 34.1197 27.2026 34.0792 27.2026 34.0369V25.9807C27.2026 25.9598 27.2068 25.9391 27.2148 25.9198C27.2228 25.9004 27.2345 25.8829 27.2493 25.8681C27.2641 25.8533 27.2816 25.8416 27.3009 25.8336C27.3202 25.8256 27.341 25.8215 27.3619 25.8215H30.9442C33.7304 25.8215 34.8051 27.3698 34.8051 29.8695C34.8091 32.7274 33.7105 34.1962 31.2905 34.1962Z"
              fill="#078901"
            />
            <path
              d="M53.2294 34.1961H44.5244C44.4821 34.1961 44.4416 34.1793 44.4118 34.1494C44.3819 34.1196 44.3651 34.0791 44.3651 34.0369V31.0516C44.3651 31.0094 44.3819 30.9689 44.4118 30.939C44.4416 30.9091 44.4821 30.8924 44.5244 30.8924H51.7527C51.796 30.8924 51.8375 30.8752 51.8681 30.8446C51.8987 30.814 51.9159 30.7725 51.9159 30.7292V28.5917C51.9159 28.5705 51.9116 28.5494 51.9034 28.5299C51.8951 28.5103 51.8831 28.4925 51.8679 28.4777C51.8526 28.4629 51.8346 28.4512 51.8148 28.4435C51.7951 28.4357 51.7739 28.432 51.7527 28.4325H44.5244C44.5031 28.4325 44.4821 28.4283 44.4625 28.42C44.4429 28.4118 44.4252 28.3997 44.4103 28.3845C44.3955 28.3693 44.3839 28.3512 44.3761 28.3315C44.3683 28.3117 44.3646 28.2906 44.3651 28.2693V25.9806C44.3651 25.9597 44.3693 25.939 44.3773 25.9197C44.3853 25.9004 44.397 25.8828 44.4118 25.868C44.4265 25.8532 44.4441 25.8415 44.4634 25.8335C44.4827 25.8255 44.5034 25.8214 44.5244 25.8214H53.1538C53.1967 25.8204 53.2377 25.8029 53.2681 25.7725C53.2984 25.7421 53.316 25.7012 53.317 25.6582V23.4053C53.3159 23.3627 53.2983 23.3222 53.2678 23.2925C53.2373 23.2627 53.1964 23.2461 53.1538 23.2461H39.7758C39.7508 23.2462 39.7263 23.2522 39.704 23.2635C39.6818 23.2748 39.6626 23.2912 39.6479 23.3114C39.6331 23.3315 39.6234 23.3548 39.6193 23.3794C39.6152 23.4041 39.617 23.4293 39.6245 23.4531C40.3728 25.8692 40.1459 28.1977 40.1858 30.2197V31.366C40.13 34.017 40.2057 35.9634 40.0544 36.5684C40.0491 36.5919 40.0491 36.6164 40.0544 36.6399C40.0596 36.6635 40.0701 36.6856 40.0849 36.7046C40.0998 36.7236 40.1187 36.7392 40.1402 36.75C40.1618 36.7609 40.1855 36.7668 40.2096 36.7674H53.2294C53.272 36.7663 53.3125 36.7487 53.3422 36.7182C53.372 36.6877 53.3886 36.6468 53.3886 36.6042V34.3513C53.3876 34.3098 53.3703 34.2703 53.3406 34.2413C53.3109 34.2123 53.2709 34.1961 53.2294 34.1961Z"
              fill="#078901"
            />
            <path
              d="M13.3098 22.8281C20.6177 22.8281 21.7561 27.1667 21.7561 29.9928C21.7561 32.8188 20.6177 37.1574 13.3098 37.1574C6.00181 37.1574 4.85547 32.8348 4.85547 30.0007C4.85547 27.1667 6.00579 22.8281 13.3098 22.8281ZM13.3098 34.5861C16.6572 34.5861 17.8394 32.1143 17.8394 30.0007C17.8394 27.8872 16.6453 25.4154 13.3098 25.4154C9.97421 25.4154 8.78409 27.8911 8.78409 30.0007C8.78409 32.1103 9.96227 34.5941 13.3098 34.5941V34.5861Z"
              fill="#078901"
            />
          </svg>
        </NavLink>
        <section className="navigation">
          <nav className="navbar navbar-expand-lg h-100">
            <div className="container-fluid">
              <button
                className="navbar-toggler ms-auto"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse ms-auto"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav text-end ms-auto mb-2 mb-lg-0">
                  <li className="navbar-item">
                    <NavLink
                      onClick={() => {
                        setShow(true);
                      }}
                      className={({ isActive }) =>
                        isActive
                          ? "navbar-link navbar-link_active"
                          : "navbar-link"
                      }
                      aria-current="page"
                      to={"/"}
                    >
                      Inicio
                    </NavLink>
                  </li>
                  <li className="navbar-item">
                    <a
                      onClick={() => {
                        setShow(!show);
                      }}
                      className="navbar-link dropmenu d-none d-sm-inline"
                    >
                      Tratamientos <i className="fa-solid fa-chevron-down"></i>
                    </a>
                    <NavLink
                      to={"/tratamientos"}
                      className={({ isActive }) =>
                        isActive
                          ? "navbar-link navbar-link_active d-inline d-sm-none"
                          : "navbar-link d-inline d-sm-none"
                      }
                    >
                      Tratamientos
                    </NavLink>
                  </li>
                  <li className="navbar-item">
                    <NavLink
                      onClick={() => {
                        setShow(true);
                      }}
                      className={({ isActive }) =>
                        isActive
                          ? "navbar-link navbar-link_active"
                          : "navbar-link"
                      }
                      aria-current="page"
                      to={"/nosotros"}
                    >
                      Nosotros
                    </NavLink>
                  </li>
                  <li className="navbar-item">
                    <NavLink
                      onClick={() => {
                        setShow(true);
                      }}
                      className={({ isActive }) =>
                        isActive
                          ? "navbar-link navbar-link_active"
                          : "navbar-link"
                      }
                      aria-current="page"
                      to={"/contacto"}
                    >
                      Contacto
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <article className="menu-tratamientos z-1" hidden={show}>
            <section className="tratamientos-container">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="menu_close_button"
                onClick={() => {
                  setShow(true);
                }}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.02 14.2842L21.2384 23.5025C21.5457 23.7994 21.9573 23.9636 22.3846 23.9599C22.8119 23.9562 23.2206 23.7848 23.5227 23.4827C23.8249 23.1805 23.9962 22.7718 23.9999 22.3446C24.0037 21.9173 23.8394 21.5057 23.5426 21.1983L14.3242 11.98L23.5426 2.76162C23.8394 2.45428 24.0037 2.04265 23.9999 1.61539C23.9962 1.18813 23.8249 0.779416 23.5227 0.477284C23.2206 0.175153 22.8119 0.0037744 22.3846 6.16013e-05C21.9573 -0.00365119 21.5457 0.160598 21.2384 0.457434L12.02 9.67579L2.80166 0.457434C2.49295 0.167936 2.08371 0.00990326 1.66054 0.0167747C1.23737 0.0236462 0.833482 0.194883 0.534325 0.494252C0.235168 0.79362 0.064217 1.19763 0.0576449 1.6208C0.0510728 2.04397 0.209395 2.4531 0.499111 2.76162L9.71584 11.98L0.497482 21.1983C0.341843 21.3487 0.217701 21.5285 0.132298 21.7273C0.0468949 21.9261 0.00194173 22.1399 6.1527e-05 22.3563C-0.00181867 22.5727 0.0394114 22.7872 0.121347 22.9875C0.203282 23.1878 0.324281 23.3697 0.477284 23.5227C0.630286 23.6757 0.812229 23.7967 1.01249 23.8787C1.21276 23.9606 1.42734 24.0018 1.64371 23.9999C1.86008 23.9981 2.07391 23.9531 2.27272 23.8677C2.47153 23.7823 2.65134 23.6582 2.80166 23.5025L12.02 14.2842Z"
                  fill="black"
                />
              </svg>
              <article className="col-8 mb-5">
                <p className="tipo-tratamiento">Salud Dental</p>
                <hr />
                <div className="row">
                  {salud.map((item) => (
                    <MenuItem
                      key={item.ref}
                      item={item}
                      columns="col-4"
                      show={{ show, setShow }}
                    />
                  ))}
                </div>
              </article>
              <article className="col-8">
                <p className="tipo-tratamiento">Estética Dental</p>
                <hr />
                <div className="row">
                  {estetica.map((item) => (
                    <MenuItem
                      key={item.ref}
                      item={item}
                      columns="col-md-4 col-12"
                      show={{ show, setShow }}
                    />
                  ))}
                </div>
              </article>
            </section>
          </article>
        </section>
        <div className="top-header_turno">
          <i className="fa-brands fa-whatsapp fa-xl"></i>
          <a className="text-num" href="https://api.whatsapp.com/send?phone=+5491170147148"
            aria-label="Solicitá tu turno">Solicitá tu turno</a>
        </div>
      </div>
      <div className="top-header top-header-sm d-flex d-sm-none">
        <NavLink to={"/"} >
          <svg
            width={60}
            height={60}
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => {
              setShow(true);
              setShowMenu(true);
            }}
          >
            <path
              d="M30 2.27279C35.4851 2.272 40.8471 3.89784 45.4081 6.94468C49.9691 9.99152 53.5241 14.3225 55.6235 19.3899C57.7229 24.4572 58.2724 30.0334 57.2025 35.4131C56.1326 40.7928 53.4914 45.7344 49.6129 49.6129C45.7344 53.4914 40.7928 56.1326 35.4131 57.2025C30.0334 58.2724 24.4573 57.7229 19.3899 55.6235C14.3225 53.5241 9.99153 49.9691 6.94469 45.4081C3.89785 40.8471 2.27201 35.485 2.2728 30C2.2728 22.6463 5.19405 15.5938 10.3939 10.3939C15.5938 5.19404 22.6463 2.27279 30 2.27279ZM30 0C24.0666 0 18.2664 1.75947 13.3329 5.05591C8.39943 8.35235 4.55426 13.0377 2.28363 18.5195C0.0129985 24.0013 -0.581101 30.0333 0.576455 35.8527C1.73401 41.6721 4.59123 47.0176 8.78681 51.2132C12.9824 55.4088 18.3279 58.266 24.1473 59.4236C29.9667 60.5811 35.9987 59.987 41.4805 57.7164C46.9623 55.4458 51.6476 51.6006 54.9441 46.6671C58.2405 41.7336 60 35.9334 60 30C59.9916 22.0461 56.8282 14.4204 51.2039 8.79611C45.5796 3.17184 37.9539 0.0084291 30 0Z"
              fill="#1A4DBC"
            />
            <path
              d="M31.9512 23.2462H22.6133C22.588 23.2454 22.563 23.2507 22.5403 23.2618C22.5176 23.2729 22.4979 23.2893 22.483 23.3097C22.4681 23.3301 22.4584 23.3539 22.4548 23.3788C22.4511 23.4038 22.4536 23.4293 22.462 23.4532C23.2183 25.9011 22.9874 28.2535 23.0233 30.2835V31.3104C22.9715 33.9852 23.0233 35.9515 22.8919 36.5605C22.8866 36.584 22.8866 36.6085 22.8919 36.632C22.8971 36.6556 22.9076 36.6777 22.9224 36.6967C22.9373 36.7158 22.9562 36.7313 22.9777 36.7421C22.9993 36.753 23.023 36.7589 23.0471 36.7595H32.2736C36.5127 36.7595 38.5944 34.0688 38.5944 29.9929C38.5944 25.917 36.5883 23.2462 31.9512 23.2462ZM31.2905 34.1962H27.3619C27.3196 34.1962 27.2791 34.1794 27.2493 34.1495C27.2194 34.1197 27.2026 34.0792 27.2026 34.0369V25.9807C27.2026 25.9598 27.2068 25.9391 27.2148 25.9198C27.2228 25.9004 27.2345 25.8829 27.2493 25.8681C27.2641 25.8533 27.2816 25.8416 27.3009 25.8336C27.3202 25.8256 27.341 25.8215 27.3619 25.8215H30.9442C33.7304 25.8215 34.8051 27.3698 34.8051 29.8695C34.8091 32.7274 33.7105 34.1962 31.2905 34.1962Z"
              fill="#078901"
            />
            <path
              d="M53.2294 34.1961H44.5244C44.4821 34.1961 44.4416 34.1793 44.4118 34.1494C44.3819 34.1196 44.3651 34.0791 44.3651 34.0369V31.0516C44.3651 31.0094 44.3819 30.9689 44.4118 30.939C44.4416 30.9091 44.4821 30.8924 44.5244 30.8924H51.7527C51.796 30.8924 51.8375 30.8752 51.8681 30.8446C51.8987 30.814 51.9159 30.7725 51.9159 30.7292V28.5917C51.9159 28.5705 51.9116 28.5494 51.9034 28.5299C51.8951 28.5103 51.8831 28.4925 51.8679 28.4777C51.8526 28.4629 51.8346 28.4512 51.8148 28.4435C51.7951 28.4357 51.7739 28.432 51.7527 28.4325H44.5244C44.5031 28.4325 44.4821 28.4283 44.4625 28.42C44.4429 28.4118 44.4252 28.3997 44.4103 28.3845C44.3955 28.3693 44.3839 28.3512 44.3761 28.3315C44.3683 28.3117 44.3646 28.2906 44.3651 28.2693V25.9806C44.3651 25.9597 44.3693 25.939 44.3773 25.9197C44.3853 25.9004 44.397 25.8828 44.4118 25.868C44.4265 25.8532 44.4441 25.8415 44.4634 25.8335C44.4827 25.8255 44.5034 25.8214 44.5244 25.8214H53.1538C53.1967 25.8204 53.2377 25.8029 53.2681 25.7725C53.2984 25.7421 53.316 25.7012 53.317 25.6582V23.4053C53.3159 23.3627 53.2983 23.3222 53.2678 23.2925C53.2373 23.2627 53.1964 23.2461 53.1538 23.2461H39.7758C39.7508 23.2462 39.7263 23.2522 39.704 23.2635C39.6818 23.2748 39.6626 23.2912 39.6479 23.3114C39.6331 23.3315 39.6234 23.3548 39.6193 23.3794C39.6152 23.4041 39.617 23.4293 39.6245 23.4531C40.3728 25.8692 40.1459 28.1977 40.1858 30.2197V31.366C40.13 34.017 40.2057 35.9634 40.0544 36.5684C40.0491 36.5919 40.0491 36.6164 40.0544 36.6399C40.0596 36.6635 40.0701 36.6856 40.0849 36.7046C40.0998 36.7236 40.1187 36.7392 40.1402 36.75C40.1618 36.7609 40.1855 36.7668 40.2096 36.7674H53.2294C53.272 36.7663 53.3125 36.7487 53.3422 36.7182C53.372 36.6877 53.3886 36.6468 53.3886 36.6042V34.3513C53.3876 34.3098 53.3703 34.2703 53.3406 34.2413C53.3109 34.2123 53.2709 34.1961 53.2294 34.1961Z"
              fill="#078901"
            />
            <path
              d="M13.3098 22.8281C20.6177 22.8281 21.7561 27.1667 21.7561 29.9928C21.7561 32.8188 20.6177 37.1574 13.3098 37.1574C6.00181 37.1574 4.85547 32.8348 4.85547 30.0007C4.85547 27.1667 6.00579 22.8281 13.3098 22.8281ZM13.3098 34.5861C16.6572 34.5861 17.8394 32.1143 17.8394 30.0007C17.8394 27.8872 16.6453 25.4154 13.3098 25.4154C9.97421 25.4154 8.78409 27.8911 8.78409 30.0007C8.78409 32.1103 9.96227 34.5941 13.3098 34.5941V34.5861Z"
              fill="#078901"
            />
          </svg>
        </NavLink>
        <section className="navigation-sm">
          <nav className="navbar navbar-expand-lg h-100">
            <div className="container-fluid">
              <button
                className="navbar-toggler ms-auto"
                type="button"
                // data-bs-toggle="collapse"
                // data-bs-target="#navbarSupportedContent"
                // aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={() => {
                  setShow(true);
                  setShowMenu(!showMenu);
                }}
              >
                <span className="navbar-toggler-icon" />
              </button>
            </div>
          </nav>
          <article className="menu-tratamientos-sm" hidden={show}>
            <section className="tratamientos-container">
              <article className="col-12">
                <ul className="navbar-nav text-start mb-3">
                  <li className="navbar-item mb-1">
                    <a
                      onClick={() => {
                        setShow(true);
                        setShowMenu(false);
                      }}
                      className="navbar-link dropmenu d-flex gap-3 align-items-center"
                    >
                      <i className="fa-solid fa-chevron-left"></i> Tratamientos
                    </a>
                  </li>
                  <hr className="divider mt-2" />
                </ul>
                <div className="row">
                  {salud.map((item) => (
                    <MenuItem
                      key={item.ref}
                      item={item}
                      columns="col-12"
                      show={{ show, setShow }}
                    />
                  ))}
                  {estetica.map((item) => (
                    <MenuItem
                      key={item.ref}
                      item={item}
                      columns="col-12"
                      show={{ show, setShow }}
                    />
                  ))}
                </div>
              </article>
            </section>
          </article>
        </section>
        <div className="top-header_turno">
          <i className="fa-brands fa-whatsapp fa-xl"></i>
          <p>Solicitá tu turno</p>
        </div>
      </div>
      <div
        className="navbar-collapse-sm ms-auto w-100"
        id="navbarSupportedContent"
        hidden={showMenu}
      >
        <ul className="navbar-nav text-start me-auto mb-2 mb-lg-0">
          <li className="navbar-item mb-0">
            <NavLink
              onClick={() => {
                setShow(true);
                setShowMenu(true);
              }}
              className="navbar-link d-inline d-sm-none"
              aria-current="page"
              to={"/"}
            >
              Inicio
            </NavLink>
          </li>
          <hr className="divider mt-2" />
          <li className="navbar-item mb-0">
            <a
              onClick={() => {
                setShow(false);
                setShowMenu(true);
              }}
              className="navbar-link dropmenu d-flex justify-content-between align-items-center"
            >
              Tratamientos <i className="fa-solid fa-chevron-right"></i>
            </a>
          </li>
          <hr className="divider mt-2" />
          <li className="navbar-item mb-0">
            <NavLink
              onClick={() => {
                setShow(true);
                setShowMenu(true);
              }}
              className="navbar-link d-inline d-sm-none"
              aria-current="page"
              to={"/nosotros"}
            >
              Nosotros
            </NavLink>
          </li>
          <hr className="divider mt-2" />
          <li className="navbar-item mb-0">
            <NavLink
              onClick={() => {
                setShow(true);
                setShowMenu(true);
              }}
              className="navbar-link d-inline d-sm-none"
              aria-current="page"
              to={"/contacto"}
            >
              Contacto
            </NavLink>
          </li>
          <hr className="divider mt-2" />
        </ul>
      </div>
    </>
  );
};

export default TopHeader;
