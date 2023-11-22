import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export function Cursos() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isImageVisible, setImageVisible] = useState(true);
  const [currentCard, setCurrentCard] = useState(null);

  // Función para manejar el clic en una tarjeta (card)
  const handleClick = (card) => {
    // Establecer la tarjeta actual
    setCurrentCard(card);

    // Obtener el elemento de la etiqueta <iframe> del documento
    const iframe = document.querySelector("iframe");

    // Configurar un evento para ejecutar cuando el contenido del iframe haya cargado completamente
    iframe.onload = function () {
      // Iniciar la reproducción del vídeo dentro del iframe
      iframe.play();
    };

    // Establecer el estado para indicar que el vídeo está reproduciéndose y ocultar la imagen
    setIsVideoPlaying(true);
    setImageVisible(false);
  };

  const [cursos, setCursos] = useState([]);

  const getCursos = async () => {
    const response = await axios.get("http://localhost:8080/api/auth/cursos");
    setCursos(response.data);
  };

  useEffect(() => {
    getCursos();
  }, []);

  const filtro = cursos.filter((curso) => curso.categoria === "Avanzados");

  return (
    <div>
      <div className="justify-between gap-4 xl:gap-14 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 :w-[1400px] md:ml-11">
        {filtro.map((filtro) => (
          <Link to={`/curso/${filtro.titulo}/${"video"}`}>
            <div
              class="md:w-96 h-[352px] rounded-2xl overflow-hidden bg-[#fff] shadow-lg inline-block hover:scale-105 transition duration-700"
              onMouseEnter={() => handleClick(filtro)}
              onMouseLeave={() => {
                setIsVideoPlaying(false);
                setImageVisible(true);
              }}
            >
              <iframe
                class="w-full h-64 aspect-video"
                width="560"
                height="315"
                src={filtro.video}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
              />

              <div class="px-6 py-4 h-24">
                <div class="font-bold text-lg mb-2 text-center">
                  {filtro.titulo}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Cursos;
