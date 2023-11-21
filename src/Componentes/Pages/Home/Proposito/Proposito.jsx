import React from "react";
import Card from "./CardReutilizable/Card";
import Datos from "./CardReutilizable/Datos";

function Proposito() {
  return (
    <div className="p-4 sm:p-16">
      <div className="p-4 text-center font-semibold">
        <div className="text-black text-[24px] sm:text-[32px]">
          CON EL PROPOSITO DE APOYAR
        </div>
        <div className="text-[#f804b3] text-[20px] sm:text-[25px]">
          Aquellas personas y microempresas en las siguientes
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-5 p-4 sm:p-5">
        {Datos.map((datos) => (
          <Card
            key={datos.id}
            titulo={datos.titulo}
            contenido={datos.contenido}
            descripcion={datos.descripcion}
            imagen={datos.imagen}
          />
        ))}
      </div>
    </div>
  );
}

export default Proposito;
