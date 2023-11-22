import React, { useState, useRef, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RegistroImg from "../../Login/Registro/Image/Registro.png";
import { useRegisterINSMutation } from "../../services/Services";
import { Link, useNavigate } from "react-router-dom";

function RegistroINS() {
  // Estado para manejar errores
  const [error, setError] = useState(false);

  // Estado para almacenar mensajes de error
  const [errorMessage, setErrorMessage] = useState("");

  // Estado para almacenar información del usuario
  const [user, setUser] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    correo: "",
    password: "",
    confirmarPassword: "",
  });

  // Función para resetear los valores del usuario
  const resetUser = () => {
    setUser({
      nombre: "",
      apellido: "",
      telefono: "",
      correo: "",
      password: "",
      confirmarPassword: "",
    });
  };

  // Hook de React Router para navegar entre páginas
  const navigate = useNavigate();

  // Destructurar propiedades del objeto user
  const { nombre, apellido, telefono, correo, password, confirmarPassword } =
    user;

  // Función para manejar errores durante el registro
  const handleRegistrationError = (error) => {
    if (error.response && error.response.data) {
      const errorMessage = error.response.data;

      // Manejar errores específicos del servidor
      if (errorMessage.includes("usuario")) {
        setErrorMessage(
          "Ya existe un usuario con el nombre proporcionado. Intenta con otro nombre de usuario."
        );
      } else if (errorMessage.includes("correo")) {
        setErrorMessage(
          "Ya existe un usuario con el correo proporcionado. Intenta con otro correo."
        );
      } else {
        setErrorMessage(errorMessage);
      }

      setError(true);
    } else {
      // Manejar errores genéricos
      setErrorMessage("Error inesperado. Inténtalo de nuevo.");
      setError(true);
    }
  };

  // Mutation hook para realizar el registro
  const { mutate, isLoading } = useRegisterINSMutation({
    onError: handleRegistrationError,
  });

  // Función para manejar cambios en los inputs
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Función para mostrar notificación de registro exitoso
  const displayRegistrationNotification = () => {
    toast.success("Guardado.. siguiente");
    setTimeout(() => {
      navigate(`/EditInstructores/${nombre}`);
    }, 3500);
  };

  // Función para manejar el envío del formulario de registro
  const handleSubmit = async (e) => {
    // Prevenir el comportamiento por defecto del formulario
    e.preventDefault();

    // Validar que todos los campos estén llenos
    if (
      !nombre ||
      !apellido ||
      !telefono ||
      !correo ||
      !password ||
      !confirmarPassword
    ) {
      setError(true);
      setErrorMessage("Todos los campos son obligatorios");
      return;
    }

    // Validar que las contraseñas coincidan
    if (password !== confirmarPassword) {
      setError(true);
      setErrorMessage("Las contraseñas no coinciden");
      return;
    }

    try {
      // Enviar la solicitud de registro
      await mutate(user, {
        onSuccess: () => {
          // Resetear los valores del usuario después del registro exitoso
          resetUser();
          setError(false);
          setErrorMessage("");

          // Mostrar notificación de registro exitoso y navegar a la siguiente página
          displayRegistrationNotification();
        },
        onError: (error) => {
          let errorMessage = "Error inesperado. Inténtalo de nuevo.";

          // Manejar errores específicos del servidor
          if (error.response && error.response.data) {
            const serverErrorMessage = error.response.data;

            if (serverErrorMessage.includes("usuario")) {
              errorMessage =
                "Ya existe un usuario con el nombre proporcionado. Intenta con otro nombre de usuario.";
            } else if (serverErrorMessage.includes("correo")) {
              errorMessage =
                "Ya existe un usuario con el correo proporcionado. Intenta con otro correo.";
            } else {
              errorMessage = serverErrorMessage;
            }
          }

          // Mostrar mensaje de error
          setErrorMessage(errorMessage);
          setError(true);
        },
      });
    } catch (error) {
      // Manejar errores de manera general
      console.error("Error en la solicitud:", error);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="bg-gradient-to-r">
        <div className="flex justify-center p-10">
          <img
            src={RegistroImg}
            className="h-[603px] w-full rounded-l-lg hidden lg:inline-block"
          />
          <div className="w-full max-w-md max-h-15">
            <form
              onSubmit={handleSubmit}
              className="bg-white shadow-md border-2 rounded-r-lg px-8 pt-6 pb-8 mb-4"
            >
              <div className="flex flex-row items-center justify-center lg:justify-center">
                <p className="block text-[#9A1B76] text-lg font-bold mb-2">
                  Registrate
                </p>
              </div>
              <div className="mb-4">
                <label className="block text-[#9A1B76] text-sm font-bold mb-2">
                  Nombre
                </label>
                <input
                  value={nombre}
                  onChange={(e) => onInputChange(e)}
                  placeholder="Nombre"
                  type={"text"}
                  name="nombre"
                  className="focus:border-[#9A1B76] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-[#9A1B76] text-sm font-bold mb-2">
                  Apellido
                </label>
                <input
                  placeholder="Apellido"
                  type={"text"}
                  name="apellido"
                  value={apellido}
                  onChange={(e) => onInputChange(e)}
                  className="focus:border-[#9A1B76] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-[#9A1B76] text-sm font-bold mb-2">
                  Telefono
                </label>
                <input
                  placeholder="Telefono"
                  type={"text"}
                  name="telefono"
                  value={telefono}
                  onChange={(e) => onInputChange(e)}
                  className="focus:border-[#9A1B76] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-[#9A1B76] text-sm font-bold mb-2">
                  Correo
                </label>
                <input
                  placeholder="Correo"
                  type={"text"}
                  name="correo"
                  value={correo}
                  onChange={(e) => onInputChange(e)}
                  className="focus:border-[#9A1B76] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-[#9A1B76] text-sm font-bold mb-2">
                  Contraseña
                </label>
                <input
                  placeholder="Passdword"
                  type={"password"}
                  name="password"
                  value={password}
                  onChange={(e) => onInputChange(e)}
                  className="focus:border-[#9A1B76] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-[#9A1B76] text-sm font-bold mb-2">
                  Confirmar Contraseña
                </label>
                <input
                  placeholder="Passdword"
                  type={"password"}
                  name="confirmarPassword"
                  value={confirmarPassword}
                  onChange={(e) => onInputChange(e)}
                  className="focus:border-[#9A1B76] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex items-center justify-center">
                <button
                  disabled={isLoading}
                  type="submit"
                  className="px-3 py-2 text-sm bg-[#9A1B76] hover:bg-[#db43b0] text-white font-bold rounded-full focus:outline-none focus:shadow-outline"
                >
                  {isLoading ? "Creando..." : "Siguiente"}
                </button>
              </div>
              <div className="py-2 text-lg text-center">
                {error && <p>{errorMessage}</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegistroINS;
