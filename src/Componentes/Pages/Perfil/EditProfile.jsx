import React, { useState } from 'react';

function EditProfileModal({ perfil, isOpen, onClose, onSave }) {
  const [editedPerfil, setEditedPerfil] = useState({ ...perfil });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    if (name === 'imagen') {
      // Handle file change and encode image
      handleFileChange(e);
    } else {
      setEditedPerfil({
        ...editedPerfil,
        [name]: value,
      });
    }
  };

  const [encodedImage, setEncodedImage] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
  
    const reader = new FileReader();
    reader.onload = (event) => {
      const encodedData = event.target.result;
      setEncodedImage(encodedData);
  
      setEditedPerfil({
        ...editedPerfil,
        imagen: encodedData,
      });
    };
    reader.readAsDataURL(file);
  };

  const handleSaveClick = () => {
    const editedPerfilWithImage = {
      ...editedPerfil,
      imagen: encodedImage  
    };
    onSave(editedPerfil,editedPerfilWithImage); 
    onClose(); 
    window.location.reload();
  };

 

  return (
    <div className={`modal ${isOpen ? 'modal-open' : ''}`}>
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-content bg-white p-8 rounded-lg shadow-md max-w-3xl w-full">
        <h2 className="text-2xl font-semibold mb-4">Edit Profile</h2>
        <form>
          <div className="pb-4">
            <label htmlFor="imagen" className="font-semibold text-gray-700 block pb-1">
              Imagen de perfil
            </label>
            <input
              className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
              type="file"
              id="imagen"
              name="imagen"
              accept="image/*"
              onChange={handleInputChange}

            />
          </div>
          
          <div className="pb-4">
            <label htmlFor="nombre" className="font-semibold text-gray-700 block pb-1">
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
            <label htmlFor="nombre" className="font-semibold text-gray-700 block pb-1">
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
            <label htmlFor="nombre" className="font-semibold text-gray-700 block pb-1">
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
            <label htmlFor="nombre" className="font-semibold text-gray-700 block pb-1">
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
          <button onClick={onClose} className="ml-2 text-gray-600 hover:text-gray-800">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default EditProfileModal;
