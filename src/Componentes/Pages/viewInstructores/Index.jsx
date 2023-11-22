import React, { useEffect, useState } from "react";
import axios from "axios";

function InstructorCard({ instructor, onUpdateStatus, onDeleteInstructor }) {
  // Estado para el botón de estado (Habilitado/Deshabilitado)
  const [isButtonActive, setButtonActive] = useState(
    instructor.estado === "Habilitado"
  );

  // Estado para el estado original antes de la edición
  const [originalStatus, setOriginalStatus] = useState(instructor.estado);

  // Estado para indicar si se está editando la tarjeta del instructor
  const [isEditing, setEditing] = useState(false);

  // Estados para los campos editados
  const [editedDescription, setEditedDescription] = useState(
    instructor.description
  );
  const [editedImage, setEditedImage] = useState(instructor.images);
  const [editedName, setEditedName] = useState(instructor.nombre);
  const [editedTitle, setEditedTitle] = useState(instructor.titulos);

  // Función para manejar el cambio de imagen
  const handleImageChange = (e) => {
    // Obtener el archivo de la entrada de archivos
    const file = e.target.files[0];

    // Verificar si se seleccionó un archivo
    if (file) {
      // Llamar a la función para convertir la imagen a formato base64
      convertImageToBase64(file);
    }
  };

  // Función para convertir la imagen a Base64
  const convertImageToBase64 = (file) => {
    // Crear una instancia de FileReader
    const reader = new FileReader();

    // Configurar el evento que se ejecutará al cargar completamente el archivo
    reader.onloadend = () => {
      // Cuando la lectura está completa, establecer el resultado (formato base64) en el estado
      setEditedImage(reader.result);
    };

    // Iniciar la lectura del archivo como una URL de datos (formato base64)
    reader.readAsDataURL(file);
  };

  // Función para manejar el clic en el botón de estado (Habilitado/Deshabilitado)
  const handleButtonClick = () => {
    // Verificar si el componente está en modo de edición
    if (isEditing) {
      // Determinar el nuevo estado opuesto al estado actual
      const newStatus = isButtonActive ? "Deshabilitado" : "Habilitado";

      // Actualizar el estado del botón (activado/desactivado)
      setButtonActive(!isButtonActive);

      // Llamar a la función onUpdateStatus con el ID del instructor y el nuevo estado
      onUpdateStatus(instructor.idInstructores, newStatus);
    }
  };

  // Función para manejar el clic en el botón de guardar
  async function handleSaveClick() {
    try {
      // Realizar una solicitud PUT para actualizar la información del instructor
      const response = await axios.put(
        `http://localhost:8080/api/auth/instructores/editar/${instructor.idInstructores}`,
        {
          estado: isButtonActive ? "Habilitado" : "Deshabilitado",
          description: editedDescription,
          images: editedImage,
          nombre: editedName,
          titulos: editedTitle,
        }
      );

      // Verificar si la solicitud fue exitosa (código de estado 200)
      if (response.status === 200) {
        // Actualizar el estado original con el estado actual del botón
        setOriginalStatus(isButtonActive ? "Habilitado" : "Deshabilitado");

        // Salir del modo de edición
        setEditing(false);
      }
    } catch (error) {
      // Capturar errores y registrar en la consola
      console.error("Error en la solicitud:", error);

      // Puedes agregar lógica adicional para manejar errores, mostrar mensajes, etc.
    }
  }

  // Estado para mostrar/ocultar el modal de confirmación al eliminar
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  // Función para manejar el clic en el botón de eliminar
  const handleDeleteClick = () => {
    setShowConfirmationModal(true);
  };

  // Función para confirmar la eliminación
const handleConfirmDelete = async () => {
  // Ocultar el modal de confirmación
  setShowConfirmationModal(false);

  try {
    // Realizar una solicitud DELETE para eliminar al instructor
    const response = await axios.delete(
      `http://localhost:8080/api/auth/instructores/eliminar/${instructor.idInstructores}`
    );

    // Verificar si la solicitud fue exitosa (código de estado 200)
    if (response.status === 200) {
      // Llamar a la función onDeleteInstructor con el ID del instructor eliminado
      onDeleteInstructor(instructor.idInstructores);
    }
  } catch (error) {
    // Capturar errores y registrar en la consola
    console.error("Error al intentar eliminar el instructor:", error);

    // Puedes agregar lógica adicional para manejar errores, mostrar mensajes, etc.
  }
};


  // Función para cancelar la eliminación
  const handleCancelDelete = () => {
    setShowConfirmationModal(false);
  };

  // Función para manejar el clic en el botón de editar
  const handleEditClick = () => {
    setEditing(true);
  };

  // Función para cancelar la edición
  const handleCancelClick = () => {
    // Restaurar los valores originales y salir del modo de edición
    setButtonActive(originalStatus === "Habilitado");
    setEditedDescription(instructor.description);
    setEditedImage(instructor.images);
    setEditedName(instructor.nombre);
    setEditedTitle(instructor.titulos);
    setEditing(false);
  };

  return (
    <div className="max-w-[calc(100%/4)] mb-8">
      <div className="xl:w-96 md:max-w-sm w-full rounded-lg overflow-hidden shadow-lg p-4 md:p-5 border-2 border-gray-200">
        <img
          className="object-contain mx-auto"
          src={editedImage}
          alt={editedName}
        />

        {isEditing ? (
          <>
            <label
              htmlFor="file-upload"
              className="mt-3 text-gray-600 flex flex-col items-center justify-center border border-dashed border-gray-900/25 rounded-lg px-6 py-4 cursor-pointer"
            >
              <svg
                className="mx-auto h-12 w-12 text-gray-300"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="mt-2 text-[#9A1B76] font-semibold hover:text-[#db43b0] focus:text-[#db43b0] focus:outline-none focus:ring-2 focus:ring-[#9A1B76] focus:ring-offset-2">
                Sube
              </span>
              <input
                id="file-upload"
                type="file"
                name="images"
                onChange={handleImageChange}
                className="sr-only"
              />
            </label>
            <input
              type="text"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded my-2"
            />
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded my-2"
            />
            <textarea
              className="w-full p-2 border border-gray-300 rounded"
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
            />
            <span
              className={`text-sm ${
                isButtonActive ? "text-[#9A1B76]" : "text-gray-500"
              }`}
            >
              {isButtonActive ? "Habilitado" : "Deshabilitado"}
            </span>
            <button
              className={`rounded-full m-1 p-1 w-16 h-8 flex items-center justify-between border-2 focus:outline-none focus:ring-2 focus:ring-[#9A1B76] transition-colors duration-200 ${
                isButtonActive ? "border-[#9A1B76]" : "border-gray-300"
              } ${
                isButtonActive
                  ? "bg-[#9A1B76] text-white"
                  : "bg-white text-[#9A1B76]"
              }`}
              onClick={handleButtonClick}
            >
              <span className="sr-only">
                {isButtonActive ? "Habilitado" : "Deshabilitado"}
              </span>
              <span
                className={`w-7 h-7 rounded-full shadow-md ${
                  isButtonActive ? "transform translate-x-7" : ""
                } bg-white border-2 border-gray-300`}
              />
            </button>
          </>
        ) : (
          <>
            <h4 className="text-black font-extrabold text-xl mt-2 text-center">
              {editedName}
            </h4>
            <h2 className="text-black font-bold text-lg mt-1 text-center">
              {editedTitle}
            </h2>
            <h3 className="text-base font-normal md:text-lg text-left">
              {instructor.description}
            </h3>
            <div className="mt-4">
              <button
                className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-lg px-4 py-2 focus:outline-none"
                onClick={handleEditClick}
              >
                Editar
              </button>
              <button
                className="mt-2 ml-1 bg-red-500 hover:bg-red-700 text-white font-bold rounded-lg px-4 py-2 focus:outline-none"
                onClick={handleDeleteClick}
              >
                Eliminar
              </button>
            </div>
          </>
        )}
        {isEditing && (
          <div className="mt-4">
            <button
              className="mr-2 bg-[#9A1B76] hover:bg-[#db43b0] text-white font-bold rounded-lg px-4 py-2 focus:outline-none"
              onClick={handleSaveClick}
            >
              Guardar
            </button>
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold rounded-lg px-4 py-2 focus:outline-none"
              onClick={handleCancelClick}
            >
              Cancelar
            </button>
          </div>
        )}
      </div>
      {showConfirmationModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-4 shadow-md rounded-md">
            <p className="text-lg font-semibold mb-4 text-black-500">
              ¿Estás seguro de que deseas eliminar a {editedName}?
            </p>
            <div className="flex justify-end">
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold rounded-lg px-4 py-2 mr-2"
                onClick={handleConfirmDelete}
              >
                Sí, eliminar
              </button>
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold rounded-lg px-4 py-2"
                onClick={handleCancelDelete}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Card() {
  const [Instructores, setInstructores] = useState([]);

  const getInstructores = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/auth/Instructores"
    );
    setInstructores(response.data);
  };

  useEffect(() => {
    getInstructores();
  }, []);

  const handleStatusUpdate = (instructorId, newStatus) => {
    const updatedInstructores = Instructores.map((instructor) =>
      instructor.idInstructores === instructorId
        ? { ...instructor, estado: newStatus }
        : instructor
    );
    setInstructores(updatedInstructores);
  };

  const handleDeleteInstructor = (instructorId) => {
    const updatedInstructores = Instructores.filter(
      (instructor) => instructor.idInstructores !== instructorId
    );
    setInstructores(updatedInstructores);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 p-4">
      {Instructores.map((instructor) => (
        <div key={instructor.idInstructores} className="min-w-0 mb-6">
          <InstructorCard
            instructor={instructor}
            onUpdateStatus={handleStatusUpdate}
            onDeleteInstructor={handleDeleteInstructor}
          />
        </div>
      ))}
    </div>
  );
}
