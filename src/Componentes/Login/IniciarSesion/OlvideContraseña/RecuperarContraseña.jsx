import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import imagenforgot from "../../../images/imagen-correo/password.png";
import axios from "axios";

function RecuperarContraseña() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Obtiene la función de navegación

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const customToastStyle = {
    background: "#9A1B76", // Cambia el fondo del toast a azul
    color: "white", // Cambia el color del texto a blanco
  };

  const LoginRedirigir = () => {
    toast.info("Correo de recuperación enviado", {
      style: customToastStyle,
    });
    // Redirige a la página deseada después del tiempo de espera
    setTimeout(() => {
      navigate("/login");
    }, 3500); // Redirige a /login después de 3 segundos
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      // Realiza una solicitud HTTP POST a la API
      const response = await axios.post(
        `http://localhost:8080/api/auth/recuperacion/enviar?correo=${email}`
      );

      // Verifica la respuesta para determinar si fue exitosa o si hubo un mensaje de error
      if (response.data === "Correo de recuperación enviado") {
        LoginRedirigir();
      } else {
        setMessage("Usuario no encontrado");
      }
    } catch (error) {
      setMessage("Error al enviar el correo de recuperación");
    } finally {
      // Deshabilita el estado de carga después de la solicitud
      setIsLoading(false);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div>
        <div className="flex flex-col md:flex-row justify-center p-10 gap-4 sm:gap-6 md:gap-8">
          <img
            className="rounded-lg w-full sm:w-1/2 lg:w-1/3 md:w-[300px] md:h-[300px] "
            alt="login it's time"
            src={imagenforgot}
          />
          <div className="w-full max-w-md py-12">
            <form
              className="bg-white shadow-md rounded border-2 px-8 pt-6 pb-8 mb-4"
              onSubmit={handleSubmit}
            >
              <label className="block text-[#050505] text-lg text-center font-bold mb-2">
                Enviar código de recuperación
              </label>
              <div className="mb-4">
                <label className="block text-[#9A1B76] text-sm font-bold mb-2">
                  Email:
                </label>
                <input
                  className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </div>
              <button
                disabled={isLoading}
                type="submit"
                className="px-4 py-2 text-sm bg-[#9A1B76] hover:bg-[#db43b0] text-white font-bold rounded-full focus:outline-none focus:shadow-outline"
              >
                {isLoading
                  ? "Enviando Correo, Un Momento..."
                  : "Enviar correo de recuperación"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecuperarContraseña;
