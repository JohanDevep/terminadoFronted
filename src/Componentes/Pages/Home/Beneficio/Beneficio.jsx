import React from 'react'
import Beneficioimg from '../../../images/Beneficio-imagen/circulo.png'

function Beneficio() {
  return (
    <div className="bg-[#412a56] flex flex-col">
      <div className="text-white font-bold text-[36px] text-center p-4 md:p-5">Beneficios de contratación</div>
      <div className="flex flex-col md:flex-row items-center">
        <div className="circulo-tres md:w-1/2">
          <div className="flex gap-4 p-3">
            <img
              className="h-10"
              alt="Ellipse outline"
              src={Beneficioimg}
            />
            <div className="text-white font-normal text-left text-lg ">
              Sin costos de liquidación.
            </div>
          </div>
          <div className="flex gap-4 p-3">
            <img
              className="h-10"
              alt="Ellipse outline"
              src={Beneficioimg}
            />
            <p className="text-white font-normal text-left text-lg">
              Rendimiento en el proyecto en procesos de empalme de
              desarrolladores.
            </p>
          </div>
          <div className="flex gap-4 p-3">
            <img
              className="h-10"
              alt="Ellipse outline"
              src={Beneficioimg}
            />
            <div className="text-white font-normal text-left text-lg">
              Sin costo de incapacidades
            </div>
          </div>
          <div className="flex gap-4 p-3">
            <img
              className="h-10"
              alt="Ellipse outline"
              src={Beneficioimg}
            />
            <p className="text-white font-normal text-left text-lg">
              En caso de retrasos en el proyecto de desarrollo mayores a
              15 días, la fundación asume el 50% del salario del
              desarrollador.
            </p>
          </div>
        </div>
        <div className="cinco-circulos md:w-1/2">
          <div className="flex gap-4 p-3">
            <img
              className="h-10"
              alt="Ellipse outline"
              src={Beneficioimg}
            />
            <p className="text-white font-normal text-left text-lg">
              Bonos colaborativos al personal en caso de recibir solo el
              50% del salario pactado inicialmente.
            </p>
          </div>
          <div className="flex gap-4 p-3">
            <img
              className="h-10"
              alt="Ellipse outline"
              src={Beneficioimg}
            />
            <div className="text-white font-normal text-left text-lg">
              Sin costos de contratación.
            </div>
          </div>
          <div className="flex gap-4 p-3">
            <img
              className="h-10 "
              alt="Ellipse outline"
              src={Beneficioimg}
            />
            <p className="text-white font-normal text-left text-lg">
              Sin costo de exámenes médicos.
            </p>
          </div>
          <div className="flex  gap-4 p-3">
            <img
              className="h-10"
              alt="Ellipse outline"
              src={Beneficioimg}
            />
            <p className="text-white font-normal text-left text-lg">
              Reemplazo de personal de forma inmediata en caso de
              accidente o reportarse enfermo.
            </p>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Beneficio