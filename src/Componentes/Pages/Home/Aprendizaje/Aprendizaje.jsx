import React from 'react'
import Card from './CardReutilizable/Card';
import Datos from './CardReutilizable/Datos';

function Aprendizaje() {
  return (
    <div className="bg-[#fefefe]">
      <div className="text-black font-bold text-[32px] text-center p-6 md:p-10">NUESTRO APRENDIZAJE</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-3 md:space-x-4 items-center text-center text-white font-semibold text-lg">
        {Datos.map((datos) => (
          <Card
            key={datos.id}
            descripcion={datos.descripcion}
            imagen={datos.imagen}
          />
        ))}
      </div>
    </div>
  )
}

export default Aprendizaje