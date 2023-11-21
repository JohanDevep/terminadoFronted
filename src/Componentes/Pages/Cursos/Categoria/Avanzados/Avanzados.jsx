import React from "react";
import Card from "./Card/Card";

function Avanzados() {
  return (
    <div>
      <div>
        <p className="text-3xl text-black font-normal p-5 text-center">
          Avanzados
        </p>
        <p className="md:mx-28 mx-14">
          Conviértete en un experto en programación con nuestro curso avanzado,
          diseñado para aquellos que buscan dominar conceptos avanzados y
          tecnologías de vanguardia. Explorarás temas como desarrollo web
          completo, arquitecturas de software escalables y programación
          concurrente. A través de proyectos prácticos y desafíos intensivos,
          perfeccionarás tus habilidades y estarás preparado para enfrentar
          proyectos de desarrollo de software a gran escala. Este curso es el
          camino definitivo para aquellos que buscan destacar en el mundo de la
          programación y la ingeniería de software.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between mx-8 my-4 ">
        <Card />
      </div>

      <hr className="border-4 border-[#000] my-4 mx-6"></hr>
    </div>
  );
}

export default Avanzados;
