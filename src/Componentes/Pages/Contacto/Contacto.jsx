import React from "react";
import contactenoimagen from "../../images/Contacto-imagen/contacteno.png";
import imagencontacto from "../../images/Contacto-imagen/contactocell.png";

function Contacto() {
  const openModal = () => {
    window.location = "mailto:gerencia@fundasoftmiss.com";
  };

  return (
    <>
      <div
        className="lg:pt-14 lg:pb-10 lg:justify-center items-center text-center bg-cover bg-center p-4 sm:p-5 lg:p-5"
        style={{ backgroundImage: `url(${contactenoimagen})` }}
      >
        <div className="text-white font-bold text-3xl sm:text-4xl lg:text-5xl text-center sm:py-10 lg:py-8 relative z-10">
          Contactenos
        </div>
      </div>
      <div className="bg-[#412a56] p-4 sm:p-10 lg:p-20">
        <div className="bg-[#faf9fb] p-4 sm:p-5 lg:p-5 flex flex-col sm:flex-row items-center justify-between">
          <div className="text-center sm:text-left flex items-center sm:w-full lg:w-2/5 p-10">
            <div>
              <div className="text-3xl text-black font-bold mb-8">
                Escribanos ahora un mensaje
              </div>
              <p className="text-black font-normal text-base lg:text-lg w-[250px] mb-5 text-left">
                Ponte en contacto con nosotros. Envíanos un mensaje ahora. Es
                fundamental para nosotros conocerte y resolver cualquier duda
                que puedas tener. ¡Escríbenos!
              </p>
              <div className="div">
                <button
                  onClick={openModal}
                  className="bg-[#9A1B76] hover:bg-[#7C145B] text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out mt-4"
                >
                  Enviar Mensaje
                </button>
              </div>
            </div>
          </div>
          <img
            className="mx-auto w-[200px] sm:w-[250px] lg:w-[300px]"
            alt="Happy bunch chat"
            src={imagencontacto}
          />
          <div className="flex flex-col mt-4 sm:mt-0 p-4 sm:p-10 lg:p-10 sm:w-full lg:w-3/5">
            <div className="rounded-lg border-2 border-gray-400 p-4 sm:p-5 mb-8">
              <a href="tel:+573186929471" className="flex items-center">
                <img
                  className="mr-2"
                  alt="Teenyicons phone"
                  src="https://generation-sessions.s3.amazonaws.com/2363c9a68c90c2e3a61d5db2a6c61a2d/img/teenyicons-phone-solid-1.svg"
                />
                <div className="text-3xl text-black font-bold">
                  Llámanos ahora
                </div>
              </a>
              <div className="text-center text-xl mt-2">+57 3186929471</div>
            </div>
            <div className="rounded-lg border-2 border-gray-400 p-4 sm:p-5 mb-8">
              <a href="#mapa" className="flex items-center">
                <img
                  className="mr-2"
                  alt="Teenyicons phone"
                  src="https://generation-sessions.s3.amazonaws.com/2363c9a68c90c2e3a61d5db2a6c61a2d/img/teenyicons-phone-solid.svg"
                />
                <div className="text-3xl text-black font-bold">Visítanos</div>
              </a>
              <p className="text-center text-xl mt-2">
                AV 26 # 26 A - 05 B/Las Granjas
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="mapa" className="w-screen h-screen">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d249.03477277653073!2d-75.29097036930523!3d2.942946825116622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sco!4v1693348170790!5m2!1ses-419!2sco"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
}

export default Contacto;
