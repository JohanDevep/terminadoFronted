import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import imagenhome from "../images/imagen-page-inicio/image1.png";
import personamorada from "../images/imagen-page-inicio/personamorada.png";
import personamorada1 from "../images/imagen2caru.jpg";
import personamorada2 from "../images/imagen2caru2.png";
import personamorada3 from "../images/personamorada4.avif";
import personamorada4 from "../images/personamorada3.avif";

function Carrusel() {
  // Definición de un array de imágenes con URL y titulos asociados
  const images = [
    { url: personamorada, caption: "Imagen 1" },
    { url: personamorada1, caption: "Imagen 2" },
    { url: personamorada2, caption: "Imagen 3" },
    { url: personamorada3, caption: "Imagen 4" },
    { url: personamorada4, caption: "imagen 5" },
  ];

  return (
    <div className="carrusel">
      <div className="di">
        {/* Componente Carousel con sus configuraciones */}
        <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay>
          {/* Iteración .map sobre el array de imágenes */}
          {images.map((image, index) => (
            <div key={index} className="relative">
              {/* Contenedor con altura fija para cada imagen */}
              <div
                style={{ height: "500px" /* Establece la altura deseada */ }}
              >
                {/* Imagen con estilos para ajustarse al contenedor */}
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Contenedor absoluto para superponer contenido */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                {/* Otra imagen superpuesta */}
                <div className="w-full md:w-auto">
                  <img src={imagenhome} alt="Image" className="w-full" />
                </div>
                {/* Párrafo de texto superpuesto */}
                <p className="text-white text-base sm:text-2xl lg:text-3xl mt-2">
                  Promovemos la empleabilidad y emprendimiento,
                  <br /> generando nuevas oportunidades.
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

// Exportación del componente para su uso en otros archivos de React
export default Carrusel;
