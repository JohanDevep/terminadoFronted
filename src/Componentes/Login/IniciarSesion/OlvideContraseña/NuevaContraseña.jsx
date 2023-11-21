import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import imagenforgot from "../../../images/imagen-correo/login-punch.png";
import axios from "axios"; // Import Axios

function NuevaContraseña() {
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setMessage(""); // Limpia el mensaje de error o éxito al principio de la función.
    // Validar que ambos campos no estén vacíos
    if (!token || !password) {
      setMessage("Token y nueva contraseña son obligatorios");
      return;
    }
    try {
      const response = await axios.post(
        `http://localhost:8080/api/auth/recuperacion/reset-password?token=${token}&password=${password}`
      );
      if (response.status === 200) {
        setMessage("Contraseña restablecida con éxito");
        llevarlogin();
      } else if (response.status === 400) {
        const data = await response.text();
        setMessage(data);
      } else {
        displayLoginError("Error al restablecer la contraseña");
      }
    } catch (error) {
      displayLoginError(error.response.data);
    }
  };
  const displayLoginError = (error) => {
    toast.error(error);
  };
  const customToastStyle = {
    background: "#9A1B76", // Cambia el fondo del toast a azul
    color: "white", // Cambia el color del texto a blanco
  };

  const llevarlogin = () => {
    toast.info("Contraseña restablecida con éxito!", {
      style: customToastStyle,
    });
    // Redirige a la página deseada después del tiempo de espera
    setTimeout(() => {
      navigate("/login");
    }, 3500); // Redirige a /login después de 3 segundos
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
      className="rounded-lg w-full sm:w-1/2 lg:w-1/3 md:w-[400px] md:h-[350px] "
      alt="login it's time"
      src={imagenforgot}
    />
    <div className="w-full max-w-md">
      <div className="flex flex-col md:flex-row justify-center gap-4 sm:gap-6 md:gap-8">
        <form
          onSubmit={handleResetPassword}
          className="bg-white shadow-md rounded border-2 p-6 md:px-10 pt-8 pb-10 w-full"
        >
          <label className="block text-[#050505] text-lg text-center font-bold mb-4">
            Restablece tu contraseña
          </label>
          <div className="mb-6">
            <label className="block text-[#9A1B76] text-sm font-bold mb-2">
              Token:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="token"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-[#9A1B76] text-sm font-bold mb-2">
              New Password:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            className="px-4 py-2 text-sm bg-[#9A1B76] hover:bg-[#db43b0] text-white font-bold rounded-full focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Reset Password
          </button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  </div>
</div>

    </>
  );
}

export default NuevaContraseña;
