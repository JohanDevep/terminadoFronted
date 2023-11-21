import React from 'react'
// Imagenes
import Mision from '../../../images/MisionVision/mision.png'
import Vision from '../../../images/MisionVision/frame-34715_cleanup.png'

function MisionVision() {
    return (
        <div className="MisionVision">
            <div className="lg:flex">
                <div className="bg-[#ff007d] p-4 lg:p-20 lg:flex-1">
                    <img
                        className="float-right object-contain h-[150px] w-[226px] mb-2 lg:mb-6"
                        alt="Misión"
                        src={Mision}
                    />
                    <div className="text-[#2b1a3b] text-center text-[24px] lg:text-[32px] font-['Open_Sans'] font-bold">MISIÓN</div>
                    <p className="text-left text-white font-normal text-lg lg:text-lg">
                        Nuestra misión es capacitar a toda aquella población vulnerable por
                        distintos factores de vida, para que puedan lograr sus propósito a
                        través de la tecnología y el desarrollo de software.
                    </p>
                </div>
                <div className="p-4 lg:p-20 lg:flex-1">
                    <img
                        className="float-left object-contain h-[150px] w-[226px] mb-2 lg:mb-6"
                        alt="Visión"
                        src={Vision}
                    />
                    <div className="text-[#ff007d] text-center text-[24px] lg:text-[32px] font-['Open_Sans'] font-bold">VISIÓN</div>
                    <p className="text-black font-normal text-lg lg:text-lg">
                        Ser al 2027 una organización reconocida a nivel nacional por generar
                        oportunidades a las mujeres madres cabeza de hogar, vulnerables,
                        afrocolombianas, indígenas, de bajos recursos o discapacitadas
                        radicadas en Colombia.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MisionVision