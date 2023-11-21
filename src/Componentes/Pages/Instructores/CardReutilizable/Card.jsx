import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Card() {
  const [Instructores, setInstructores] = useState([]);

  const getInstructores = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/auth/Instructores"
      );
      setInstructores(response.data);
    } catch (error) {
      console.error("Error al obtener los datos de instructores:", error);
    }
  };

  useEffect(() => {
    getInstructores();
  }, []);

  const filtro = Instructores.filter(
    (instructor) => instructor.estado === "Habilitado"
  );

  return (
    <>
      <div className="flex flex-wrap p-4">
        {filtro.map((instructor) => (
          <div
            key={instructor.id}
            className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4"
          >
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg p-5 border-2 border-gray-200 h-[400px]">
              <img
                className="object-contain mx-auto h-2/3"
                src={instructor.images}
                alt={instructor.nombre}
              />
              <h4 className="text-black font-extrabold text-xl mt-4 text-center">
                {instructor.nombre}
              </h4>
              <h2 className="text-black font-bold text-lg mt-2 text-center">
                {instructor.titulos}
              </h2>
              <div className="text-base md:text-lg">
                <p className="line-clamp-3">{instructor.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
