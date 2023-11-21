import React, { useState } from "react";
import PaymentModal from "../Pagos/PaymentModal";

function Optimo() {
  const [showModal, serShowModal] = useState(false);
  const handleShow = () => serShowModal(true);
  const handleClose = () => serShowModal(false);

  return (
    <>
      <div className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
        <div className="border border-gray-300 p-4 h-full bg-[#3e2158] text-white text-center font-sans">
          <h3 className="text-3xl font-medium py-3">ÓPTIMO</h3>
          <h2 className="text-4xl font-bold py-1">$800.000</h2>
          <h2 className="text-3xl font-normal ">A partir de</h2>
          <div className="relative">
            <p className="text-xl font-bold my-4 relative z-10"></p>
            <hr className="absolute border-t border-gray-500 w-full " />
          </div>
          <p className="flex items-center py-2 font-medium">
            <span className="text-pink-500 text-xl font-bold mr-2">
              &#10003;
            </span>
            Desarrollo de conceptos
          </p>
          <p className="flex items-center py-2 font-medium">
            <span className="text-pink-500 text-xl font-bold mr-2">
              &#10003;
            </span>
            Diseño de interfaz de usuario
          </p>
          <p className="flex items-center py-2 font-medium">
            <span className="text-pink-500 text-xl font-bold mr-2">
              &#10003;
            </span>
            Gestión de la configuración
          </p>
          <p className="flex items-center py-2 font-medium">
            <span className="text-pink-500 text-xl font-bold mr-2">
              &#10003;
            </span>
            calidad del software
          </p>
          <p className="flex items-center py-2 text-gray-500 font-medium">
            <span className="text-gray-500 text-xl font-bold mr-2">
              &#10003;
            </span>
            Integración de aplicaciones
          </p>
          <button
            className="bg-pink-600  text-white rounded-md py-2 w-full mt-4 hover:bg-pink-700"
            onClick={handleShow}
          >
            EMPEZAR
          </button>
          <PaymentModal show={showModal} handleClose={handleClose} />
        </div>
      </div>
    </>
  );
}

export default Optimo;
