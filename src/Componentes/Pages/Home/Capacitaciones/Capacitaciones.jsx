import React from 'react'
import Datos from './CapaReutilizable/Datos';
import Card from './CapaReutilizable/Card';
function Capacitaciones() {
    return (
        <div className="p-4 sm:p-5">
            <div className="text-black font-bold text-[32px] items-center text-center">NUESTRAS CAPACITACIONES</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-5 p-4 sm:p-5">
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

export default Capacitaciones