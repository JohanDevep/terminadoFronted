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
      {/* Sección principal del footer */}
      <footer className="bottom-0 left-0 z-20 w-full gap-11 bg-[#412a56] px-4 py-4 md:px-24">
        {/* Contenedor para limitar el ancho y centrar el contenido */}
        <div className="mx-auto w-full max-w-screen-xl">
          {/* Diseño de columnas para contenido del footer */}
          <div className="flex flex-col md:flex-row md:justify-between">
            {/* Sección izquierda con logo y descripción */}
            <div className="items-start flex flex-col justify-center mb-6 md:mb-0">
              {/* Logo */}
              <img
                className="h-[120px] w-[226px]"
                alt="Logo blanco"
                src="https://generation-sessions.s3.amazonaws.com/e8ea0a83929f6409af7b718bce2f46a6/img/logo-blanco-1-1@2x.png"
              />
              {/* Descripción */}
              <p className="text-white text-base md:text-lg p-5 w-full md:w-96 text-left">
                Impacto de nuestras actuaciones en el bienestar y el desarrollo
                de las mujeres con las que trabajamos.
              </p>
            </div>
            {/* Sección derecha con enlaces y contacto */}
            <div className="grid grid-cols-1 gap-4 md:gap-16 sm:grid-cols-2">
              {/* Cursos Populares */}
              <div>
                <h2 className="mb-4 md:mb-6 text-[24px] md:text-[32px] font-semibold text-white uppercase">
                  Cursos Populares
                </h2>
                {/* Lista de cursos */}
                <div className="mb-2 md:mb-2.5 text-white text-base md:text-lg">
                  Marketing Digital
                </div>
                {/* ... Otros cursos */}
              </div>
              {/* Información de contacto */}
              <div>
                <h2 className="mb-4 md:mb-6 text-[24px] md:text-[32px] font-semibold text-white uppercase">
                  Contáctanos
                </h2>
                {/* Dirección */}
                <p className="mb-1.5 md:mb-2 direcci-n-AV-a">
                  <span className="mb-1.5 md:mb-2 text-white text-base md:text-lg font-bold">
                    Dirección:{" "}
                  </span>
                  <span className="text-white text-base md:text-lg">
                    AV 26 # 26 A - 05 B/Las Granjas
                  </span>
                </p>
                {/* Email */}
                <p className=" mb-1 md:mb-1.5 email-fundasoftmiss">
                  {/* ... */}
                </p>
                {/* Teléfono */}
                <p className=" mb-1.5 md:mb-2 div-2">{/* ... */}</p>
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
                  {/* ... Otros enlaces a redes sociales */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Sección inferior con derechos de autor y enlaces adicionales */}
      <div className="w-full items-center flex flex-col-reverse md:flex-row bg-[#c23099] px-4 py-4 md:px-24 text-center justify-between">
        {/* Derechos de autor */}
        <div className="md:flex items-center text-lg">
          <span>&copy;2023 FundaSoff Miss.</span>
          <span className="hidden md:inline-block">
            Todos los derechos reservados
          </span>
        </div>
        {/* Enlaces adicionales */}
        <div className="md:flex leading-normal gap-4 md:gap-10 underline text-lg mt-2 md:mt-0 ">
          <a href="#">Políticas de Cookies</a>
          <span>Términos y condiciones</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
