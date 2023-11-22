import React, { useState, useEffect } from "react";
import EditProfileModal from "./EditProfile";
import axios from "axios";

function index() {
  // Estado para almacenar el perfil
  const [perfil, setPerfil] = useState(null);

  // Estado para indicar si se está editando el perfil
  const [isEditing, setIsEditing] = useState(false);

  // Estado para almacenar el token
  const [token, setToken] = useState(null);

  // Función para manejar la edición del perfil
  const handleEditProfile = async (editedPerfil) => {
    try {
      // Realizar una solicitud PUT para editar el perfil
      const response = await axios.put(
        "http://localhost:8080/api/auth/perfil/editar",
        editedPerfil,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Asegúrate de que token esté definido
            "Content-Type": "application/json",
          },
        }
      );

      // Verificar si la respuesta tiene datos y no contiene un error
      if (response.data && response.data.error) {
        return;
      }

      // Actualizar el estado del perfil con los datos de la respuesta
      setPerfil(response.data);
      // Desactivar la edición del perfil
      setIsEditing(false);
    } catch (error) {
      setError(
        "Hubo un error al intentar editar el perfil. Por favor, inténtalo de nuevo."
      );
    }
  };

  // Efecto para cargar el perfil al cargar el componente
  useEffect(() => {
    // Obtener el token almacenado en el local storage
    const storedToken = localStorage.getItem("token");

    // Si hay un token almacenado, configurar el estado del token y obtener el perfil
    if (storedToken) {
      setToken(storedToken);

      // Configurar las cabeceras con el token
      const headers = {
        Authorization: `Bearer ${storedToken}`,
      };

      // Realizar una solicitud GET para obtener el perfil
      axios
        .get("http://localhost:8080/api/auth/perfil", { headers })
        .then((response) => {
          // Actualizar el estado del perfil con los datos de la respuesta
          setPerfil(response.data);
        })
        .catch((error) => {
          // En caso de error, establecer el perfil como nulo
          setPerfil(null);
        });
    }
  }, []);

  // Función para manejar el clic en el botón de editar
  const handleEditClick = () => {
    setIsEditing(true);
  };

  // Función para manejar el cierre del modal de edición
  const handleCloseEditModal = () => {
    setIsEditing(false);
  };

  return (
    <div className="py-6">
      <div className="max-w-md mx-auto bg-white border border-zinc-300 shadow-md rounded-3xl">
        <h2 className="text-4xl text-center mb-4">Perfil de Usuario</h2>
      </div>
      {perfil ? (
        <div className="h-full p-5">
          <div className="border-b-2 block md:flex">
            <div className="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md border border-zinc-300 rounded-3xl">
              <div className="flex justify-between">
                <button
                  className="px-3 py-2 -mt-2 text-md bg-[#9A1B76] hover:bg-[#db43b0] text-white font-bold rounded-full focus:outline-none focus:shadow-outline"
                  onClick={handleEditClick}
                >
                  Editar Imagen
                </button>
              </div>
              <span className="text-xl font-semibold block text-center">
                <div className="flex items-center justify-center">
                  {perfil.nombre} {perfil.apellido}
                </div>
              </span>
              <div className="w-full p-8 mx-2 flex justify-center">
                <img
                  id="showImage"
                  className="max-w-3xl w-96 h-96 items-center border border-white rounded"
                  src={perfil.imagen}
                  alt="Imagen de perfil"
                />
              </div>
            </div>
            <div className="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md border border-zinc-300 rounded-3xl">
              <div className="flex justify-between">
                <button
                  className="px-3 py-2 -mt-2 text-md bg-[#9A1B76] hover:bg-[#db43b0] text-white font-bold rounded-full focus:outline-none focus:shadow-outline"
                  onClick={handleEditClick}
                >
                  Editar Profile
                </button>
              </div>
              <div className="rounded  shadow p-6">
                <div className="pb-6">
                  <label
                    htmlFor="name"
                    className="block text-[#9A1B76] text-sm font-bold mb-2"
                  >
                    Nombre
                  </label>
                  <div className="flex">
                    <input
                      disabled
                      id="nombre"
                      className="border-2 border-gray-300 rounded-r px-4 py-2 w-full"
                      type="text"
                      value={perfil.nombre}
                    />
                  </div>
                </div>
                <div className="pb-6">
                  <label
                    htmlFor="name"
                    className="block text-[#9A1B76] text-sm font-bold mb-2"
                  >
                    Apellido
                  </label>
                  <div className="flex">
                    <input
                      disabled
                      id="apellido"
                      className="border-2 border-gray-300 rounded-r px-4 py-2 w-full"
                      type="text"
                      value={perfil.apellido}
                    />
                  </div>
                </div>
                <div className="pb-6">
                  <label
                    htmlFor="name"
                    className="block text-[#9A1B76] text-sm font-bold mb-2"
                  >
                    Teléfono
                  </label>
                  <div className="flex">
                    <input
                      disabled
                      id="telefono"
                      className="border-2 border-gray-300 rounded-r px-4 py-2 w-full"
                      type="text"
                      value={perfil.telefono}
                    />
                  </div>
                </div>
                <div className="pb-4">
                  <label
                    htmlFor="about"
                    className="block text-[#9A1B76] text-sm font-bold mb-2"
                  >
                    Correo
                  </label>
                  <input
                    disabled
                    id="correo"
                    className="border-2 border-gray-300 rounded-r px-4 py-2 w-full"
                    type="email"
                    value={perfil.correo}
                  />
                  <span className="inline-block align-baseline font-bold text-sm text-[#9A1B76] hover:text-[#db43b0] p-2">
                    Personal login information of your account
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Cargando perfil...</p>
      )}
      {isEditing && (
        <EditProfileModal
          isOpen={isEditing}
          onClose={handleCloseEditModal}
          onSave={handleEditProfile}
          perfil={perfil}
        />
      )}
    </div>
  );
}

export default index;
