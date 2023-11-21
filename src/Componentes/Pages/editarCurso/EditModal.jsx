import React, { useState } from "react";

function EditCursoModal({ curso, isOpen, onClose, onSave }) {
  const [editedCurso, setEditedCurso] = useState({ ...curso });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setEditedCurso({
      ...editedCurso,
      [name]: value,
    });
  };

  
  const handleSaveClick = () => {
    onSave(editedCurso); // Llama a la función onSave con el curso editado
    onClose(); // Cierra el modal
    window.location.reload();
  };

  return (
    <div className={`modal ${isOpen ? "modal-open" : ""}`}>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className=" h-[720px] bg-white p-8 rounded-lg shadow-md max-w-3xl w-full overflow-y-auto">
          <h2 className="text-2xl font-semibold mb-4">Edit Curso</h2>
          <form>
            <div className="pb-4">
              <label
                htmlFor="video"
                className="font-semibold text-gray-700 block pb-1"
              >
                Video 1
              </label>
              <input
                type="text"
                id="video"
                name="video"
                className="border-2 border-gray-300 rounded-r px-4 py-2 w-full"
                value={editedCurso.video}
                onChange={handleInputChange}
              />
            </div>

            <div className="pb-4">
              <label
                htmlFor="video1"
                className="font-semibold text-gray-700 block pb-1"
              >
                Video 2
              </label>
              <input
                type="text"
                id="video1"
                name="video1"
                className="border-2 border-gray-300 rounded-r px-4 py-2 w-full"
                value={editedCurso.video1}
                onChange={handleInputChange}
              />
            </div>

            <div className="pb-4">
              <label
                htmlFor="video2"
                className="font-semibold text-gray-700 block pb-1"
              >
                Video 3
              </label>
              <input
                type="text"
                id="video2"
                name="video2"
                className="border-2 border-gray-300 rounded-r px-4 py-2 w-full"
                value={editedCurso.video2}
                onChange={handleInputChange}
              />
            </div>

            <div className="pb-4">
              <label
                htmlFor="video3"
                className="font-semibold text-gray-700 block pb-1"
              >
                Video 4
              </label>
              <input
                type="text"
                id="video3"
                name="video3"
                className="border-2 border-gray-300 rounded-r px-4 py-2 w-full"
                value={editedCurso.video3}
                onChange={handleInputChange}
              />
            </div>

            <div className="pb-4">
              <label
                htmlFor="video4"
                className="font-semibold text-gray-700 block pb-1"
              >
                Video 5
              </label>
              <input
                type="text"
                id="video4"
                name="video4"
                className="border-2 border-gray-300 rounded-r px-4 py-2 w-full"
                value={editedCurso.video4}
                onChange={handleInputChange}
              />
            </div>
            <div className="pb-4">
              <label
                htmlFor="video5"
                className="font-semibold text-gray-700 block pb-1"
              >
                Video 6
              </label>
              <input
                type="text"
                id="video5"
                name="video5"
                className="border-2 border-gray-300 rounded-r px-4 py-2 w-full"
                value={editedCurso.video5}
                onChange={handleInputChange}
              />
            </div>
            <div className="pb-4">
              <label
                htmlFor="video6"
                className="font-semibold text-gray-700 block pb-1"
              >
                Video 7
              </label>
              <input
                type="text"
                id="video6"
                name="video6"
                className="border-2 border-gray-300 rounded-r px-4 py-2 w-full"
                value={editedCurso.video6}
                onChange={handleInputChange}
              />
            </div>
            <div className="pb-4">
              <label
                htmlFor="video7"
                className="font-semibold text-gray-700 block pb-1"
              >
                Video 8
              </label>
              <input
                type="text"
                id="video7"
                name="video7"
                className="border-2 border-gray-300 rounded-r px-4 py-2 w-full"
                value={editedCurso.video7}
                onChange={handleInputChange}
              />
            </div>
            <div className="pb-4">
              <label
                htmlFor="video8"
                className="font-semibold text-gray-700 block pb-1"
              >
                Video 9
              </label>
              <input
                type="text"
                id="video8"
                name="video8"
                className="border-2 border-gray-300 rounded-r px-4 py-2 w-full"
                value={editedCurso.video8}
                onChange={handleInputChange}
              />
            </div>
            <div className="pb-4">
              <label
                htmlFor="video9"
                className="font-semibold text-gray-700 block pb-1"
              >
                Video 10
              </label>
              <input
                type="text"
                id="video9"
                name="video9"
                className="border-2 border-gray-300 rounded-r px-4 py-2 w-full"
                value={editedCurso.video9}
                onChange={handleInputChange}
              />
            </div>
          </form>
          <div className="flex justify-end mt-4">
            <button
              onClick={handleSaveClick}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Guardar
            </button>
            <button
              onClick={onClose}
              className="ml-2 text-gray-600 hover:text-gray-800"
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditCursoModal;
