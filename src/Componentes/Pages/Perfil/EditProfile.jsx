import React, { useState } from "react";

function EditProfileModal({ perfil, isOpen, onClose, onSave }) {
  // Estado para almacenar el perfil editado
  const [editedPerfil, setEditedPerfil] = useState({ ...perfil });

  // Función para manejar cambios en los inputs del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Si el cambio es en el campo de imagen, manejar el cambio de archivo y codificar la imagen
    if (name === "imagen") {
      handleFileChange(e);
    } else {
      // Actualizar el estado del perfil editado
      setEditedPerfil({
        ...editedPerfil,
        [name]: value,
      });
    }
  };

  // Estado para almacenar la imagen codificada
  const [encodedImage, setEncodedImage] = useState("");

  // Función para manejar el cambio de archivo
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.onload = (event) => {
      // Obtener la representación codificada de la imagen
      const encodedData = event.target.result;

      // Actualizar el estado de la imagen codificada y del perfil editado con la imagen
      setEncodedImage(encodedData);
      setEditedPerfil({
        ...editedPerfil,
        imagen: encodedData,
      });
    };
    // Leer el contenido del archivo como una URL de datos
    reader.readAsDataURL(file);
  };

  // Función para manejar el clic en el botón de guardar
  const handleSaveClick = () => {
    // Crear una versión del perfil editado que incluye la imagen codificada
    const editedPerfilWithImage = {
      ...editedPerfil,
      imagen: encodedImage,
    };

    // Llamar a la función onSave con el perfil editado y la versión con la imagen
    onSave(editedPerfil, editedPerfilWithImage);

    // Cerrar el modal
    onClose();

    // Recargar la página (window.location.reload()) - considera si realmente es necesario
    window.location.reload();
  };

  return (
    <div className={`modal ${isOpen ? "modal-open" : ""}`}>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="modal-content bg-white p-8 rounded-lg shadow-md max-w-3xl w-full">
          <h2 className="text-2xl font-semibold mb-4">Edit Profile</h2>
          <form>
            <div className="pb-4">
              <label
                htmlFor="imagen"
                className="font-semibold text-gray-700 block pb-1"
              >
                Imagen de perfil
              </label>
              <input
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                type="file"
                id="imagen"
                name="imagen"
                accept="image/*"
                onChange={handleInputChange}
              />
            </div>

            <div className="pb-4">
              <label
                htmlFor="nombre"
                className="font-semibold text-gray-700 block pb-1"
              >
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                className="border-2 border-gray-300 rounded-r px-4 py-2 w-full"
                value={editedPerfil.nombre}
                onChange={handleInputChange}
              />
            </div>
            <div className="pb-4">
              <label
                htmlFor="nombre"
                className="font-semibold text-gray-700 block pb-1"
              >
                Apellido
              </label>
              <input
                type="text"
                id="apellido"
                name="apellido"
                className="border-2 border-gray-300 rounded-r px-4 py-2 w-full"
                value={editedPerfil.apellido}
                onChange={handleInputChange}
              />
            </div>
            <div className="pb-4">
              <label
                htmlFor="nombre"
                className="font-semibold text-gray-700 block pb-1"
              >
                Teléfono
              </label>
              <input
                type="text"
                id="telefono"
                name="telefono"
                className="border-2 border-gray-300 rounded-r px-4 py-2 w-full"
                value={editedPerfil.telefono}
                onChange={handleInputChange}
              />
            </div>
            <div className="pb-4">
              <label
                htmlFor="nombre"
                className="font-semibold text-gray-700 block pb-1"
              >
                Correo
              </label>
              <input
                type="text"
                id="correo"
                name="correo"
                className="border-2 border-gray-300 rounded-r px-4 py-2 w-full"
                value={editedPerfil.correo}
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
export default EditProfileModal;
