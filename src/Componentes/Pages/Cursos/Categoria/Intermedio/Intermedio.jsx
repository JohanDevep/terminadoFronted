import React from "react";
import Card from "./Card/Card";

function Intermedio() {
  return (
    <div>
      <div>
        <p className="text-3xl text-black font-normal p-5 text-center">
          Intermedio
        </p>
        <p className="md:mx-28 mx-14">
          Avanza en tu conocimiento de la programación con nuestro curso
          intermedio, donde explorarás temas más avanzados y complejos.
          Profundizarás en estructuras de datos, algoritmos eficientes y
          programación orientada a objetos. Además, te sumergirás en proyectos
          prácticos que te desafiarán a aplicar tus habilidades recién
          adquiridas. Este curso es ideal para aquellos que desean llevar sus
          habilidades de programación al siguiente nivel y desarrollar
          soluciones más sofisticadas.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between mx-8 my-4 ">
        <Card />
      </div>

      <hr className="border-4 border-[#000] my-4 mx-6"></hr>
    </div>
  );
}

export default Intermedio;
