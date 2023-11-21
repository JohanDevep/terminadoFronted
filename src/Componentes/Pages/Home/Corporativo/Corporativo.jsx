import React from 'react'
import Card from './CardReutilizable/Card';
import Datos from './CardReutilizable/Datos';

function Corporativo() {
  return (

    <div className="di">
      <div className="text-black font-bold text-[32px] items-center text-center p-5">VALORES CORPORATIVOS</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-3 md:space-x-4 items-center text-center text-black font-semibold">
        {Datos.map((dato) => (
          <Card
            key={dato.id}
            imagen={dato.imagen}
            descripcion={dato.descripcion}
          />
        ))}
      </div>
    </div>

  )
}

export default Corporativo