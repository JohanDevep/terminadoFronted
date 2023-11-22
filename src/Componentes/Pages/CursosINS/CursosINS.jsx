// @flow
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Necesario para el funcionamiento de react-modal

export const CursosINS = () => {
  // Estado para almacenar la lista de cursos
  const [cursos, setCursos] = useState([]);

  // Obtener el parámetro de nombre de la URL
  const nombre = useParams();

  // Estado para gestionar la visibilidad del modal
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Estado para almacenar el ID del curso a eliminar
  const [cursoIdToDelete, setCursoIdToDelete] = useState(null);

  // Función para obtener la lista de cursos desde el servidor
  const getCursos = async () => {
    try {
      // Realizar una solicitud GET al servidor para obtener la lista de cursos
      const response = await axios.get("http://localhost:8080/api/auth/cursos");

      // Establecer el estado de cursos con los datos obtenidos de la respuesta
      setCursos(response.data);
    } catch (error) {
      // Manejar errores en caso de que la solicitud no sea exitosa
      console.error("Error al obtener la lista de cursos", error);
      // Puedes agregar lógica adicional para manejar el error según tus necesidades
    }
  };

  // useEffect para obtener cursos cuando el componente se monta
  useEffect(() => {
    getCursos();
  }, []);

  // Función para confirmar la eliminación de un curso
  function confirmarEliminarCurso(id) {
    // Establecer el ID del curso a eliminar en el estado
    setCursoIdToDelete(id);

    // Abrir el modal de confirmación
    setModalIsOpen(true);
  }

  // Función para eliminar el curso seleccionado
  function eliminarCurso() {
    axios
      .delete(`http://localhost:8080/api/auth/cursos/${cursoIdToDelete}`)
      .then((response) => {
        // Actualizar la lista de cursos después de la eliminacion exitosa
        getCursos();
        // Cerrar el modal después de la eliminacion
        setModalIsOpen(false);
      })
      .catch((error) => {
        console.error("Error al eliminar el curso", error);
      });
  }

  // Filtrar cursos por el nombre obtenido de los parametros de la URL
  const filtro = cursos.filter((curso) => curso.correo === nombre.nombre);

  return (
    <div>
      <div className="max-w-sm w-full lg:max-w-full grid lg:grid-cols-4 gap-2 grid-cols-1 ">
        {filtro.map((curso) => (
          <div class=" border border-gray-400  lg:border-gray-400 bg-white rounded-xl p-4 flex-col justify-between leading-normal m-2">
            <div class="mb-2">
              <p class="text-sm text-gray-600 flex items-center">
                <svg
                  class="fill-current text-gray-500 w-3 h-3 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                </svg>
                {curso.idCursos}
              </p>
              <div class="text-gray-900 font-bold text-xl mb-2">
                <Link to={`/curso/${curso.titulo}/${"video"}`}>
                  {curso.titulo}
                </Link>
              </div>
              <iframe
                class="w-full h-64 aspect-video"
                src={curso.video}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
              />
            </div>

            <div class="text-sm mb-1">
              <p class="text-gray-900">{curso.instructor}</p>
              <p class="text-gray-600">{curso.categoria}</p>
            </div>

            <div className="flex flex-col gap-1">
              <Link
                to={`/editarCurso/${curso.idCursos}`}
                className="px-3 py-2 text-[9px] bg-[#1b9a3f] hover:bg-[#266538] text-center text-white font-bold rounded-full focus:outline-none focus:shadow-outline"
              >
                Editar Curso
              </Link>
              <button
                onClick={() => confirmarEliminarCurso(curso.idCursos)}
                className="px-3 py-2 text-[9px] bg-[#9a1b23] hover:bg-[#6e282c] text-white font-bold rounded-full focus:outline-none focus:shadow-outline"
              >
                Eliminar Curso
              </button>
            </div>
          </div>
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Confirmación de Eliminación"
        className="modal-content bg-white p-4 rounded shadow-md mx-auto mt-20" // mt-20 para centrar verticalmente
        overlayClassName="modal-overlay fixed inset-0 bg-gray-700 opacity-75 flex items-center justify-center" // Cambios en la superposición
      >
        <h2 className="text-xl font-bold mb-4">
          ¿Estás seguro de que deseas eliminar este curso?
        </h2>
        <div className="flex justify-end">
          <button
            onClick={eliminarCurso}
            className="px-4 py-2 mr-2 bg-[#9a1b23] hover:bg-[#6e282c] text-white font-bold rounded-full focus:outline-none focus:shadow-outline"
          >
            Sí, eliminar
          </button>
          <button
            onClick={() => setModalIsOpen(false)}
            className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold rounded-full focus:outline-none focus:shadow-outline"
          >
            Cancelar
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default CursosINS;
