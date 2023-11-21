import React, { useEffect, useState } from "react";
import axios from "axios";

function InstructorCard({ instructor, onUpdateStatus, onDeleteInstructor }) {
  const [isButtonActive, setButtonActive] = useState(
    instructor.estado === "Habilitado"
  );
  const [originalStatus, setOriginalStatus] = useState(instructor.estado);
  const [isEditing, setEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(
    instructor.description
  );
  const [editedImage, setEditedImage] = useState(instructor.images);
  const [editedName, setEditedName] = useState(instructor.nombre);
  const [editedTitle, setEditedTitle] = useState(instructor.titulos);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      convertImageToBase64(file);
    }
  };

  const convertImageToBase64 = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setEditedImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleButtonClick = () => {
    if (isEditing) {
      const newStatus = isButtonActive ? "Deshabilitado" : "Habilitado";
      setButtonActive(!isButtonActive);
      onUpdateStatus(instructor.idInstructores, newStatus);
    }
  };

  async function handleSaveClick() {
    try {
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
      if (response.status === 200) {
        setOriginalStatus(isButtonActive ? "Habilitado" : "Deshabilitado");
        setEditing(false);
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      // Manejar errores si es necesario
    }
  }

  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const handleDeleteClick = () => {
    setShowConfirmationModal(true);
  };

  const handleConfirmDelete = async () => {
    setShowConfirmationModal(false);
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/auth/instructores/eliminar/${instructor.idInstructores}`
      );
      if (response.status === 200) {
        onDeleteInstructor(instructor.idInstructores);
      }
    } catch (error) {
      console.error("Error al intentar eliminar el instructor:", error);
      // Manejar errores si es necesario
    }
  };

  const handleCancelDelete = () => {
    setShowConfirmationModal(false);
  };

  const handleEditClick = () => {
    setEditing(true);
  };

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
