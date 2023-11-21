import { useState } from "react";
import "./Card.css"; 

export default function Card({ imagen, contenido, descripcion, titulo }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const cardClass = `xl:w-72 md:max-w-sm w-full rounded-lg overflow-hidden shadow-lg p-4 md:p-5 border-2 border-gray-200 text-center cursor-pointer`;

  return (
    <div className="di">
      <div
        className={cardClass}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={`card-front ${isHovered ? "hidden" : ""}`}>
          <h3 className="text-[#ffbd69] font-mono text-[28px] md:text-[32px]">
            {titulo}
          </h3>
          <h3 className="text-base md:text-lg">{descripcion}</h3>
          <img
            className="h-40 w-full md:w-25 p-2 md:p-3 object-contain"
            src={imagen}
            alt={descripcion}
          />
        </div>
        <div className={`card-back ${isHovered ? "" : "hidden"}`}>
          <p className="rotate-on-hover">{contenido}</p>
        </div>
      </div>
    </div>
  );
}
