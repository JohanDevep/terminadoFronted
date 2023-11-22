import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="di">
      {/* Sección principal del pie de página */}
      <footer className="bottom-0 left-0 z-20 w-full gap-11 bg-[#412a56] px-4 py-4 md:px-24">
        {/* Contenedor máximo para centrar el contenido */}
        <div className="mx-auto w-full max-w-screen-xl">
          {/* Sección dividida en columnas para el diseño */}
          <div className="flex flex-col md:flex-row md:justify-between">
            {/* Columna izquierda con el logo y texto */}
            <div className="items-start flex flex-col justify-center mb-6 md:mb-0">
              {/* Logo */}
              <img
                className="h-[120px] w-[226px]"
                alt="Logo blanco"
                src="https://generation-sessions.s3.amazonaws.com/e8ea0a83929f6409af7b718bce2f46a6/img/logo-blanco-1-1@2x.png"
              />
              {/* Texto descriptivo */}
              <p className="text-white text-base md:text-lg p-5 w-full md:w-96 text-left">
                Impacto de nuestras actuaciones en el bienestar y el desarrollo
                de las mujeres con las que trabajamos.
              </p>
            </div>
            {/* Columna derecha con enlaces y detalles de contacto */}
            <div className="grid grid-cols-1 gap-4 md:gap-16 sm:grid-cols-2">
              {/* Sección de Cursos Populares */}
              <div>
                <h2 className="mb-4 md:mb-6 text-[24px] md:text-[32px] font-semibold text-white uppercase">
                  Cursos Populares
                </h2>
                {/* Lista de cursos */}
                <div className="mb-2 md:mb-2.5 text-white text-base md:text-lg">
                  Marketing Digital
                </div>
                <p className="mb-1 md:mb-1.5 text-white text-base md:text-lg">
                  Instalación y configuración de redes de internet.
                </p>
                <div className="mb-1.5 md:mb-2 text-white text-base md:text-lg">
                  Desarrollo de páginas web
                </div>
                <div className="mb-1.5 md:mb-2 text-white text-base md:text-lg">
                  Desarrollo de aplicaciones móviles.
                </div>
                <p className="text-white text-base md:text-lg">
                  Instalación de cámaras de seguridad.
                </p>
              </div>
              {/* Sección de Contáctanos */}
              <div>
                <h2 className="mb-4 md:mb-6 text-[24px] md:text-[32px] font-semibold text-white uppercase">
                  Contáctanos
                </h2>
                {/* Detalles de contacto */}
                <p className=" mb-1.5 md:mb-2 direcci-n-AV-a">
                  <span className="mb-1.5 md:mb-2 text-white text-base md:text-lg font-bold">
                    Dirección:{" "}
                  </span>
                  <span className="text-white text-base md:text-lg">
                    AV 26 # 26 A - 05 B/Las Granjas
                  </span>
                </p>
                <p className=" mb-1 md:mb-1.5 email-fundasoftmiss">
                  <span className=" text-white text-base md:text-lg font-bold">
                    Email:{" "}
                  </span>
                  <span className="text-white text-base md:text-lg">
                    gerencia@fundasoftmiss.com
                  </span>
                </p>
                <p className=" mb-1.5 md:mb-2 div-2">
                  <span className=" text-white text-base md:text-lg font-bold">
                    Teléfono:{" "}
                  </span>
                  <span className=" text-white text-base md:text-lg">
                    3186929471
                  </span>
                </p>
                {/* Enlaces a redes sociales */}
                <div className="p-4">
                  <a
                    href="https://www.facebook.com/fundasoftmiss"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faFacebook}
                      style={{ color: "#f4ec10" }}
                      className="h-8 px-2"
                    />
                  </a>
                  <a
                    href="https://twitter.com/fundasoftmiss"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faTwitter}
                      style={{ color: "#f4ec10" }}
                      className="h-8 px-2"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/fundasoftmiss"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      style={{ color: "#f4ec10" }}
                      className="h-8 px-2"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Sección inferior del pie de página con derechos de autor y enlaces adicionales */}
      <div className="w-full items-center flex flex-col-reverse md:flex-row bg-[#c23099] px-4 py-4 md:px-24 text-center justify-between">
        {/* Derechos de autor y texto adicional */}
        <div className="md:flex items-center text-lg">
          <span>&copy;2023 FundaSoff Miss.</span>
          <span className="hidden md:inline-block">
            Todos los derechos reservados
          </span>
        </div>
        {/* Enlaces adicionales en la sección inferior */}
        <div className="md:flex leading-normal gap-4 md:gap-10 underline text-lg mt-2 md:mt-0 ">
          <a href="#">Políticas de Cookies</a>
          <span>Términos y condiciones</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
