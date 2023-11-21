import React, { useState, useEffect } from "react";
import EditCursoModal from "./EditModal";
import axios from "axios";
import { useParams } from "react-router-dom";

function editar() {
  const [curso, setCurso] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [token, setToken] = useState(null); // Agrega el estado para el token
  const { idCursos } = useParams();

  const handleEditCurso = async (editedCurso) => {
    try {
      const response = await axios.put(
        `http://localhost:8080/api/auth/cursoEdit/${idCursos}`,
        editedCurso,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Asegúrate de que token esté definido
            "Content-Type": "application/json",
          },
        }
      );
      // Si la solicitud es exitosa, actualiza el estado con los datos del perfil actualizado
      setCurso(response.data);
      setIsEditing(false); // Cierra el modal después de guardar
    } catch (error) {
      // Maneja cualquier error que pueda ocurrir durante la solicitud
      console.error("Error al editar el curso:", error);
    }
  };

  useEffect(() => {
    // Obtener el token de autenticación almacenado (puedes usar localStorage o cookies)
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      // Si hay un token, actualiza el estado del token
      setToken(storedToken);

      // Agrega el encabezado de autorización a la solicitud Axios
      const headers = {
        Authorization: `Bearer ${storedToken}`,
      };

      // Realizar la solicitud GET al endpoint de perfil en tu backend con los encabezados
      axios
        .get(`http://localhost:8080/api/auth/cursos/${idCursos}`)
        .then((response) => {
          // Si la solicitud es exitosa, actualiza el estado con los datos del perfil
          setCurso(response.data);
        })
        .catch((error) => {
          // Maneja cualquier error que pueda ocurrir durante la solicitud
          console.error("Error al cargar el curso:", error);
          setCurso(null); // Esto reinicia el estado para que no se quede en "Cargando perfil..."
        });
    }
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCloseEditModal = () => {
    setIsEditing(false);
  };
  return (
    <div className="py-6">
      {curso ? (
        <div>
          <div className="max-w-md mx-auto bg-white border border-zinc-300 shadow-md rounded-3xl">
            <h2 className="text-4xl text-center mb-4">{curso.titulo}</h2>
          </div>
          <div className="h-full p-5">
            <div className="border-b-2 block justify-center md:flex">
              <div className="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md border border-zinc-300 rounded-3xl">
                <div className="flex justify-between">
                  <button
                    className="px-3 py-2 -mt-2 text-md bg-[#9A1B76] hover:bg-[#db43b0] text-white font-bold rounded-full focus:outline-none focus:shadow-outline"
                    onClick={handleEditClick}
                  >
                    Editar Curso
                  </button>
                </div>
                <div className="rounded  shadow p-6">
                  <div className="pb-6">
                    <label
                      htmlFor="video"
                      className="block text-[#9A1B76] text-sm font-bold mb-2"
                    >
                      Video 1
                    </label>
                    <div className="flex">
                      <input
                        disabled
                        id="video"
                        className="border-2 border-gray-300 rounded-r px-4 py-2 w-full"
                        type="text"
                        value={curso.video}
                      />
                    </div>
                  </div>
                  <div className="pb-6">
                    <label
                      htmlFor="video1"
                      className="block text-[#9A1B76] text-sm font-bold mb-2"
                    >
                      Video 2
                    </label>
                    <div className="flex">
                      <input
                        disabled
                        id="video1"
                        className="border-2 border-gray-300 rounded-r px-4 py-2 w-full"
                        type="text"
                        value={curso.video1}
                      />
                    </div>
                  </div>
                  <div className="pb-6">
                    <label
                      htmlFor="video2"
                      className="block text-[#9A1B76] text-sm font-bold mb-2"
                    >
                      Video 3
                    </label>
                    <div className="flex">
                      <input
                        disabled
                        id="video2"
                        className="border-2 border-gray-300 rounded-r px-4 py-2 w-full"
                        type="text"
                        value={curso.video2}
                      />
                    </div>
                  </div>
                  <div className="pb-6">
                    <label
                      htmlFor="video3"
                      className="block text-[#9A1B76] text-sm font-bold mb-2"
                    >
                      Video 4
                    </label>
                    <div className="flex">
                      <input
                        disabled
                        id="video3"
                        className="border-2 border-gray-300 rounded-r px-4 py-2 w-full"
                        type="text"
                        value={curso.video3}
                      />
                    </div>
                  </div>
                  <div className="pb-4">
                    <label
                      htmlFor="video4"
                      className="block text-[#9A1B76] text-sm font-bold mb-2"
                    >
                      Video 5
                    </label>
                    <input
                      disabled
                      id="video4"
                      className="border-2 border-gray-300 rounded-r px-4 py-2 w-full"
                      type="text"
                      value={curso.video4}
                    />
                  </div>
                  <div className="pb-6">
                    <label
                      htmlFor="video5"
                      className="block text-[#9A1B76] text-sm font-bold mb-2"
                    >
                      Video 6
                    </label>
                    <div className="flex">
                      <input
                        disabled
                        id="video5"
                        className="border-2 border-gray-300 rounded-r px-4 py-2 w-full"
                        type="text"
                        value={curso.video5}
                      />
                    </div>
                  </div>
                  <div className="pb-6">
                    <label
                      htmlFor="video6"
                      className="block text-[#9A1B76] text-sm font-bold mb-2"
                    >
                      Video 7
                    </label>
                    <div className="flex">
                      <input
                        disabled
                        id="video6"
                        className="border-2 border-gray-300 rounded-r px-4 py-2 w-full"
                        type="text"
                        value={curso.video6}
                      />
                    </div>
                  </div>
                  <div className="pb-6">
                    <label
                      htmlFor="video7"
                      className="block text-[#9A1B76] text-sm font-bold mb-2"
                    >
                      Video 8
                    </label>
                    <div className="flex">
                      <input
                        disabled
                        id="video7"
                        className="border-2 border-gray-300 rounded-r px-4 py-2 w-full"
                        type="text"
                        value={curso.video7}
                      />
                    </div>
                  </div>
                  <div className="pb-6">
                    <label
                      htmlFor="video8"
                      className="block text-[#9A1B76] text-sm font-bold mb-2"
                    >
                      Video 9
                    </label>
                    <div className="flex">
                      <input
                        disabled
                        id="video8"
                        className="border-2 border-gray-300 rounded-r px-4 py-2 w-full"
                        type="text"
                        value={curso.video8}
                      />
                    </div>
                  </div>
                  <div className="pb-6">
                    <label
                      htmlFor="video9"
                      className="block text-[#9A1B76] text-sm font-bold mb-2"
                    >
                      Video 10
                    </label>
                    <div className="flex">
                      <input
                        disabled
                        id="video9"
                        className="border-2 border-gray-300 rounded-r px-4 py-2 w-full"
                        type="text"
                        value={curso.video9}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Cargando curso...</p>
      )}
      {isEditing && (
        <EditCursoModal
          isOpen={isEditing}
          onClose={handleCloseEditModal}
          onSave={handleEditCurso}
          curso={curso}
        />
      )}
    </div>
  );
}

export default editar;
