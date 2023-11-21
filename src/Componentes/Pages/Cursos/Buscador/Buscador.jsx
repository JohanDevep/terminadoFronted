import React from "react";

function Buscador() {
  const grayBackgroundStyle = {
    background: "#f6f6f6", // Color gris claro
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center", // Centra verticalmente
    fontSize: "34px",
  };

  const searchContainerStyle = {
    position: "relative",
    width: "100%",
    maxWidth: "400px", // Ajusta el ancho máximo según tus necesidades
    margin: "0 auto", // Centra horizontalmente
  };

  const h2Style = {
    marginBottom: "16px", // Agrega un espacio entre el h2 y el form
  };

  return (
    <div style={grayBackgroundStyle}>
      <h2 style={h2Style}>
        Nuestros cursos están diseñados para todos los niveles, desde
        <br />
        principiantes hasta profesionales en busca de perfeccionamiento
      </h2>

      <form>
        <div style={searchContainerStyle}>
          <input
            type="search"
            id="search-dropdown"
            className="block p-2.5 w-full md:w-96 text-sm text-gray-900 bg-rose-100 rounded-l-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
            placeholder="Buscar Curso...."
            required
          />
          <button
            type="submit"
            className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-[#412a56] rounded-r-lg border border-[#412a56] hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-[#412a56] dark:hover:bg-purple-700 dark:focus:ring-purple-800"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Buscador;
