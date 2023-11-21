import React from "react";
import Card from "./CardReutilizable/Card";
import personatres from "../../images/Instructores-imagen/Instructores.png";

function Instructores() {
  return (
    <div className="di">
      <div
        className="lg:pt-14 lg:pb-10 lg:justify-center items-center text-center bg-cover bg-center sm:p-16 lg:p-96 relative"
        style={{ backgroundImage: `url(${personatres})` }}
      >
        <div className="text-white font-bold text-3xl sm:text-4xl lg:text-5xl text-center sm:py-12 lg:py-24 relative z-10">
          Nuestros Instructores
        </div>
        <p className="text-white font-Open_Sans text-left mx-auto text-lg sm:text-lg md:text-lg sm:p-4 lg:p-8 relative z-10 px-8 py-8">
          Descubre el poder de la enseñanza transformadora con nuestros
          talentosos instructores. Con su experiencia y pasión, te guiarán hacia
          el éxito, desbloqueando tu máximo potencial y llevándote más allá de
          tus límites. ¡Prepárate para un viaje de aprendizaje inspirador y
          resultados sorprendentes!
        </p>
      </div>
      <div className="grid grid-cols-1 ">
        <Card />
      </div>
    </div>
  );
}

export default Instructores;
