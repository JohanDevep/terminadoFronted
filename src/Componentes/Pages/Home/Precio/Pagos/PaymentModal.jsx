import React from 'react';

const PaymentModal = ({ show, handleClose }) => {
  return (
    <div
    className={`fixed inset-0 overflow-y-auto ${show ? 'block' : 'hidden'}`}
  >
    <div className="flex items-center justify-center min-h-screen">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="relative bg-white p-4 rounded-md shadow-lg">
        <div className="bg-purple-600 text-white p-4 rounded-t-md">
          <h1 className="text-lg font-semibold">Selecciona un método de pago</h1>
        </div>
        <div className="p-4">
          <button className="bg-green-500 text-white mb-2 w-full py-2 rounded-md">
            Pagar con PSE
          </button>
          <button className="bg-blue-500 text-white mb-2 w-full py-2 rounded-md">
            Pagar con PayPal
          </button>
          <button className="bg-indigo-500 text-white mb-2 w-full py-2 rounded-md">
            Pagar con Tarjeta de Crédito
          </button>
        </div>
        <div className="text-right p-4">
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded-md"
            onClick={handleClose}
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  </div>
);
};


export default PaymentModal;
