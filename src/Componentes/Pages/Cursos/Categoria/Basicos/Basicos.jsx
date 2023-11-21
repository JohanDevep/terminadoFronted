import React from "react";
import Card from "./Card/Card";

function Basicos() {
  return (
    <div>
      <div>
        <p className="text-3xl text-black font-normal p-5 text-center">
          Basicos
        </p>
        <p className="md:mx-28 mx-14">
          Descubre los fundamentos esenciales de la programación en nuestro
          curso básico diseñado para principiantes. Aprenderás los conceptos
          clave, como variables, bucles y condicionales, y obtendrás una
          comprensión sólida de la lógica de programación. Este curso te
          proporcionará las habilidades necesarias para abordar proyectos
          simples y sentar las bases para tu viaje en el fascinante mundo de la
          programación.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between mx-8 my-4 ">
        <Card />
      </div>

      <hr className="border-4 border-[#000] my-4 mx-6"></hr>
    </div>
  );
}

export default Basicos;
