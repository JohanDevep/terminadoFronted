import React from "react";

function Destacado() {
  return (
    <div>
      <p className="text-3xl text-black font-normal p-5">Cursos Destacados</p>
      <div className="bg-[#412a56] flex flex-col sm:flex-row items-center justify-between mx-8">
        <div className="flex items-center sm:w-full lg:w-2/5 p-5">
          <img
            src="https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen-1200x675.jpg"
            alt="Descripción de la imagen"
            className="w-full border-x-8 border-y-8 rounded-lg"
          />
        </div>
        <div className="ml-4 mr-56 mt-0">
          <h2 className="text-white text-2xl font-semibold">
            Liderazgo Efectivo: Desarrolla un Equipo de Alto Desempeño
          </h2>
          <p className="text-white mt-2">
            Genera alto nivel de compromiso, inspira y motiva a tu equipo
            generando resultados.
          </p>
          <p className="text-white mt-2">Creado por Roberto Cerquera</p>
        </div>
      </div>
      <hr className="border-4 border-[#000] my-4 mx-6"></hr>
    </div>
  );
}

export default Destacado;
