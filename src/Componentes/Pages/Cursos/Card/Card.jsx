import React from "react";
import imagencapa2 from "../../Home/Capacitaciones/Imagenes/image2capa.png";
import imagencapa3 from "../../Home/Capacitaciones/Imagenes/image3capa.png";
import imagencapa4 from "../../Home/Aprendizaje/Images/imagen3.png";
import imagencapa5 from "../../Home/Capacitaciones/Imagenes/image5capa.png";
function Card() {
  return (
  
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 py-10">
        <div className="bg-rose-300 bg-opacity-70 rounded-lg shadow-lg p-4 flex flex-col justify-center items-center text-center text-white">
          <img
            className="h-40 w-25 object-center"
            alt="Image"
            src={imagencapa2}
          />
          <div className="font-bold mt-2">
            Desarrollo de paginas web.
          </div>
        </div>
        <div className="bg-blue-400 bg-opacity-80 rounded-lg shadow-lg p-4 flex flex-col justify-center items-center text-center text-white">
          <img
            className="h-40 w-25 object-center"
            alt="Image"
            src={imagencapa3}
          />
          <div className="font-bold mt-2">
            Desarrollo de software empresarial.
          </div>
        </div>
        <div className="bg-red-500 bg-opacity-70 rounded-lg shadow-lg p-4 flex flex-col justify-center items-center text-center text-white">
          <img
            className="h-40 w-25 object-center"
            alt="Image"
            src={imagencapa5}
          />
          <div className="font-bold mt-2">
            Desarrollo de aplicaciones moviles.
          </div>
        </div>
        <div className="bg-purple-600 bg-opacity-80 rounded-lg shadow-lg p-4 flex flex-col justify-center items-center text-center text-white">
          <img
            className="h-40 w-25 object-center"
            alt="Image"
            src={imagencapa4}
          />
          <div className="font-bold mt-2">
            Instalacion de camaras de seguridad.
          </div>
        </div>
      </div>
   
  );
}

export default Card;
