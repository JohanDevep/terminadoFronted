import React from "react";
import Basico from "./ModulosPrecio/Basico";
import Optimo from "./ModulosPrecio/Optimo";
import Ultimo from "./ModulosPrecio/Ultimo";

function Precio() {
  return (
    <>
      <div className="text-center py-4">
        <h2 className="text-7xl font-bold mb-4 text-[#3e2158]">Precios</h2>
        <div className="flex flex-wrap justify-center">
          <Basico />
          <Optimo />
          <Ultimo />
        </div>
      </div>
    </>
  );
}

export default Precio;
