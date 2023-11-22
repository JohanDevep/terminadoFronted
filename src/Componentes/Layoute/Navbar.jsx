import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import logonav from "../images/logo-nav/logo.png";
import axios from "axios";

function Navbar() {
  // Estados para almacenar y gestionar el estado
  const [user, setuser] = useState([]); // Para usuarios
  const [userINS, setuserINS] = useState([]); // Para instructores
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar si el menú de navegación está abierto o cerrado
  const [isDropdownVisible, setIsDropdownVisible] = useState(false); // Estado para controlar si el menú desplegable del usuario está visible o no

  // Función para mostrar u ocultar el menú desplegable del usuario
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  // Recuperar la cadena JSON del localStorage
  const token = window.localStorage.getItem("token");
  // Recuperar la cadena JSON del localStorage
  const usuarioJSON = window.localStorage.getItem("nombre");
  // Analizar la cadena JSON de nuevo a un objeto JavaScript
  const usuario = JSON.parse(usuarioJSON);

  // useNavigate() para obtener la función de navegación y se almacena en la variable navigate para cambiar la ruta de la aplicación programáticamente.
  const navigate = useNavigate();

  // Función para limpiar el token y redirigir al usuario a la página de inicio.
  const LimpiarToken = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("nombre");
    navigate("/");
  };

  // Función asincrónica para obtener datos de usuarios desde el servidor.
  const getUser = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/auth/usuariosver"
    );
    // Actualiza el estado 'user' con los datos obtenidos del servidor.
    setuser(response.data);
  };

  // Función asincrónica para obtener datos de instructores desde el servidor.
  const getUserINS = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/auth/Instructores"
    );
    setuserINS(response.data);
  };

  // Efecto que se ejecuta después del montaje del componente para obtener datos de usuario.
  useEffect(() => {
    getUser();
    getUserINS();
  }, []);

  // Filtra el usuario actual basado en su correo.
  const usuarioOnline = user.filter((useR) => useR.correo === usuario);

  // Obtiene el nombre del rol del usuario filtrado.
  const rol = usuarioOnline.map((useR) => useR.roles[0].nombre);

  // Filtra el usuario actual basado en su correo para instructores.
  const usuarioOnlineINS = user.filter((useR) => useR.correo === usuario);

  return (
    <nav className="bg-white  w-full z-20 top-0 left-0 border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
        <a className="flex items-center">
          <img src={logonav} className="h-16 sm:h-16 md:h-16 lg:h-20 xl:h-24" />
        </a>
        <div className="block lg:hidden ">
          {/* Botón para abrir/cerrar el menú en dispositivos móviles */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400 bg-gray-200 hover:bg-gray-300"
          >
            <svg
              className={`fill-current h-8 w-8 ${isOpen ? "hidden" : "block"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current h-8 w-8 ${isOpen ? "block" : "hidden"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
        <div
          className={`bg-white items-center block justify-between w-full md:flex md:w-auto md:order-1 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white  p-5 justify-center items-center">
            {/* Enlaces de navegación */}
            <li className="py-2 lg:py-0 text-lg text-center items-center gap-x-5 pt-4 md:gap-x-4 lg:text-lg lg:flex  lg:pt-0">
              <a
                href="/"
                className="md:bg-transparent md:text-[#9A1B76] text-[#9A1B76] hover:text-[#db43b0] md:p-0 md:hover:text-[#db43b0]"
              >
                Inicio
              </a>
            </li>
            <li className="py-2 lg:py-0 text-lg text-center items-center gap-x-5 pt-4 md:gap-x-4 lg:text-lg lg:flex lg:pt-0">
              <a
                href="/cursos"
                className="md:bg-transparent md:text-[#9A1B76] text-[#9A1B76] hover:text-[#db43b0] md:p-0 md:hover:text-[#db43b0]"
              >
                Cursos
              </a>
            </li>
            <li className="py-2 lg:py-0 text-lg text-center items-center gap-x-5 pt-4 md:gap-x-4 lg:text-lg lg:flex  lg:pt-0">
              <a
                href="/instructores"
                className="md:bg-transparent md:text-[#9A1B76] text-[#9A1B76] hover:text-[#db43b0] md:p-0 md:hover:text-[#db43b0]"
              >
                Instructores
              </a>
            </li>
            <li className="py-2 lg:py-0 text-lg text-center items-center gap-x-5 pt-4 md:gap-x-4 lg:text-lg lg:flex  lg:pt-0">
              <a
                href="/contactos"
                className="md:bg-transparent md:text-[#9A1B76] text-[#9A1B76] hover:text-[#db43b0] md:p-0 md:hover:text-[#db43b0]"
              >
                Contáctenos
              </a>
            </li>
            {/* Botones de inicio de sesión y registro */}
            <li className="py-2 lg:py-0 text-center">
              <button
                style={{ display: `${token ? "none" : "block"} ` }}
                onClick={() => navigate("/login")}
                type="button"
                className="text-white bg-[#9A1B76] hover:bg-[#db43b0] py-1.5 px-5 text-lg font-semibold rounded-full"
              >
                Iniciar Sesión
              </button>
            </li>
            <li className="py-2 lg:py-0 text-center">
              <button
                style={{ display: `${token ? "none" : "block"} ` }}
                onClick={() => navigate("/registrarme")}
                type="button"
                className="text-white bg-[#9A1B76] hover:bg-[#db43b0] py-1.5 px-5 text-lg font-semibold rounded-full"
              >
                Registrarme
              </button>
            </li>
            {/* Menú desplegable del usuario */}
            <div
              className="relative group "
              style={{ display: `${token ? "block" : "none"} ` }}
            >
              {/* Botón que muestra el nombre del usuario y la imagen de perfil */}
              <div
                className="flex items-center cursor-pointer text-xl md:text-2xl lg:text-2xl text-blue border border-white border-b-0 group-hover:border-grey-light rounded-t-lg py-1 px-4"
                onClick={toggleDropdown}
              >
                {rol[0] !== "INS"
                  ? usuarioOnline.map((Rol) => (
                      <img
                        src={Rol.imagen}
                        alt="User"
                        className="rounded-full mr-2"
                        style={{ width: "30px", height: "30px" }}
                      />
                    ))
                  : usuarioOnlineINS.map((Rol) => (
                      <img
                        src={Rol.imagen}
                        alt="User"
                        className="rounded-full mr-2"
                        style={{ width: "30px", height: "30px" }}
                      />
                    ))}
                <p style={{ fontSize: "20px" }}>{usuario}</p>
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
              {/* Contenido del menú desplegable del usuario */}
              <div
                className={`items-center absolute border border-t-0 rounded-b-lg p-1 bg-white ${
                  isDropdownVisible ? "visible" : "invisible"
                }`}
                style={{
                  zIndex: 1000, // Asegúrate de que este valor sea suficientemente alto
                }}
              >
                {/* Información del usuario */}
                <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                  <div>
                    {usuarioOnline.map((correo) => (
                      <div className="px-4 py-3 text-sm text-gray-900">
                        {correo.correo}
                      </div>
                    ))}
                  </div>
                </div>
                {/* Enlaces del menú desplegable */}
                <hr className="border-t mx-2 border-grey-light" />
                <a
                  href="/perfil"
                  className="px-4 py-2 block text-black hover:bg-grey-lighter"
                >
                  View Profile
                </a>
                <hr className="border-t mx-2 border-grey-light" />
                <a
                  href="/CrearCursos"
                  className="px-4 py-2 block text-black hover:bg-grey-lighter"
                  style={{
                    display:
                      rol[0] === "ADMIN" || rol[0] === "INS" ? "block" : "none",
                  }}
                >
                  Crear Cursos
                </a>
                <hr className="border-t mx-2 border-grey-light" />
                <a
                  href="/CursosAdmin"
                  className="px-4 py-2 block text-black hover:bg-grey-lighter"
                  style={{ display: rol[0] === "ADMIN" ? "block" : "none" }}
                >
                  Ver Cursos
                </a>
                <hr className="border-t mx-2 border-grey-light" />

                <Link
                  to={`/CursosINS/${usuario}`}
                  className="px-4 py-2 block text-black hover:bg-grey-lighter"
                  style={{ display: rol[0] === "INS" ? "block" : "none" }}
                >
                  Ver Cursos
                </Link>

                <hr className="border-t mx-2 border-grey-light" />
                <a
                  href="/ResgistroInstructores"
                  className="px-4 py-2 block text-black hover:bg-grey-lighter"
                  style={{ display: rol[0] === "ADMIN" ? "block" : "none" }}
                >
                  Nuevo Instructor
                </a>

                <hr className="border-t mx-2 border-grey-light py-1" />

                <a
                  href="/viewInstructores"
                  className="px-4 py-2 block text-black hover:bg-grey-lighter"
                  style={{ display: rol[0] === "ADMIN" ? "block" : "none" }}
                >
                  Ver Instrcutores
                </a>
                <hr className="border-t mx-2 border-grey-light py-1" />
                <button
                  //Esta es una prop onClick del botón que especifica la función que se debe llamar
                  // cuando el botón se hace clic. En este caso, cuando se hace clic en el botón, se llama a la función LimpiarToken
                  onClick={LimpiarToken}
                  //Esta prop style se utiliza para establecer el estilo CSS en línea del botón. La propiedad display se configura
                  //</div> dinámicamente en función del valor de la variable token. Si token es verdadero (existente), el botón se mostrará
                  //("block"), y si token es falso (no existente), el botón se ocultará ("none")
                  //Esto se hace para mostrar el botón solo cuando el usuario ha iniciado sesión (cuando token existe).
                  style={{ display: `${token ? "block" : "none"} ` }}
                  type="button"
                  className="text-white bg-[#9A1B76] hover:bg-[#db43b0] py-2.5 px-3 text-base font-semibold rounded-full"
                >
                  Cerrar Sesion
                </button>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
