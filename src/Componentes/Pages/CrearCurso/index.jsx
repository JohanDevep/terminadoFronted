import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCursoMutation } from "../../services/Services";
import { ToastContainer, toast } from "react-toastify";

function Index() {
  const [error, setError] = useState(false);
  const [curso, setCurso] = useState({
    categoria: "",
    titulo: "",
    description: "",
    images: "",
    instructor: "",
    video: "",
    video1: "",
    video2: "",
    video3: "",
    video4: "",
    video5: "",
    video6: "",
    video7: "",
    video8: "",
    video9: "",
  });

  const resetCurso = () => {
    setCurso({
      categoria: "",
      titulo: "",
      description: "",
      images: "",
      instructor: "",
      video: "",
      video1: "",
      video2: "",
      video3: "",
      video4: "",
      video5: "",
      video6: "",
      video7: "",
      video8: "",
      video9: "",
    });
  };
  const navigate = useNavigate();

  const {
    categoria,
    titulo,
    description,
    instructor,
    video,
    video1,
    video2,
    video3,
    video4,
    video5,
    video6,
    video7,
    video8,
    video9,
  } = curso;

  const { mutate, isLoading, isError } = useCursoMutation();

  const onInputChange = (e) => {
    setCurso({ ...curso, [e.target.name]: e.target.value });
  };

  const displayRegistrationNotification = () => {
    toast.success("Registro exitoso");
    // Redirige a la página deseada después del tiempo de espera
    setTimeout(() => {
      navigate("/");
    }, 1250); // Redirige a / después de 1.25 segundos
  };

  // Función para manejar el cambio de un archivo de imagen
  const handleFileChange = (event) => {
    // Obtener el archivo seleccionado
    const file = event.target.files[0];

    // Crear un lector de archivos
    const reader = new FileReader();

    // Configurar un evento para ejecutar cuando la lectura del archivo esté completa
    reader.onload = (event) => {
      // Obtener la representación en base64 de la imagen
      const encodedData = event.target.result;

      // Actualizar el estado del componente con la nueva imagen
      setCurso({ ...curso, images: encodedData });
    };

    // Leer el contenido del archivo como una URL de datos (data URL)
    reader.readAsDataURL(file);
  };

  // Función para manejar el envío del formulario al registrar un curso
  const handleSubmit = async (e) => {
    // Prevenir el comportamiento por defecto del formulario
    e.preventDefault();

    // Validación de campos obligatorios
    if (!titulo || !description || !categoria || !video || !video1) {
      // Establecer un estado de error si algún campo obligatorio está ausente
      setError(true);
      return;
    }

    try {
      // Realizar la mutación para registrar el curso
      await mutate(curso, {
        onSuccess: () => {
          // Resetear el estado del curso y eliminar el error en caso de éxito
          resetCurso();
          setError(false);

          // Mostrar notificación de registro exitoso
          displayRegistrationNotification();
        },
        onError: (error) => {
          // Manejar errores en la solicitud, mostrando mensajes de error al usuario
          if (error.response) {
            toast.error(`${error.response.data}`);
          }
        },
      });
    } catch (error) {
      // Manejar errores generales que no están relacionados con la solicitud
      console.error("Error en la solicitud:", error);
      // Puedes agregar un mensaje de error adicional o realizar acciones específicas en caso de error general
    }
  };

  // Opciones para la categoría del curso
  const options = [
    { value: "Basico" },
    { value: "Intermedio" },
    { value: "Avanzados" },
  ];

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
        theme="colored"
      />
      <form className="h-full" onSubmit={handleSubmit}>
        <div className="h-full p-5">
          <div className="block md:flex justify-center">
            <div className="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md border border-zinc-300 rounded-3xl ml-2">
              <input
                value={titulo}
                onChange={(e) => onInputChange(e)}
                type={"text"}
                name="titulo"
                placeholder="Titulo"
                className="mb-4  block w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none"
              />

              <input
                value={video}
                onChange={(e) => onInputChange(e)}
                type={"text"}
                name="video"
                placeholder="Video 1"
                className="mb-4  block w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none"
              />
              <input
                value={video1}
                onChange={(e) => onInputChange(e)}
                type={"text"}
                name="video1"
                placeholder="Video 2"
                className="mb-4  block w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none"
              />
              <input
                value={video2}
                onChange={(e) => onInputChange(e)}
                type={"text"}
                name="video2"
                placeholder="Video 3"
                className="mb-4  block w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none"
              />
              <input
                value={video3}
                onChange={(e) => onInputChange(e)}
                type={"text"}
                name="video3"
                placeholder="Video 4"
                className="mb-4  block w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none"
              />
              <input
                value={video4}
                onChange={(e) => onInputChange(e)}
                type={"text"}
                name="video4"
                placeholder="Video 5"
                className="mb-4  block w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none"
              />
              <input
                value={video5}
                onChange={(e) => onInputChange(e)}
                type={"text"}
                name="video5"
                placeholder="Video 6"
                className="mb-4  block w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none"
              />

              <input
                value={video6}
                onChange={(e) => onInputChange(e)}
                type={"text"}
                name="video6"
                placeholder="Video 7"
                className="mb-4  block w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none"
              />
              <input
                value={video7}
                onChange={(e) => onInputChange(e)}
                type={"text"}
                name="video7"
                placeholder="Video 8"
                className="mb-4  block w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none"
              />
              <input
                value={video8}
                onChange={(e) => onInputChange(e)}
                type={"text"}
                name="video8"
                placeholder="Video 9"
                className="mb-4  block w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none"
              />
              <input
                value={video9}
                onChange={(e) => onInputChange(e)}
                type={"text"}
                name="video9"
                placeholder="Video 10"
                className="mb-4  block w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none"
              />

              <input
                onChange={(e) => onInputChange(e)}
                value={instructor}
                type={"text"}
                name="instructor"
                placeholder="Instructor"
                className="mb-1 block w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none"
              />
              <input
                value={description}
                onChange={(e) => onInputChange(e)}
                type={"text"}
                name="description"
                placeholder="Descripcion"
                className="mb-4 w-full h-24 rounded-lg border mt-4 border-gray-300 px-4 py-3 focus:outline-none"
              />
              <select
                className="mb-4 block w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none"
                value={categoria}
                onChange={(e) =>
                  setCurso({ ...curso, categoria: e.target.value })
                }
              >
                <option>Selecciona una categoria</option>
                {options.map((option) => (
                  <option value={option.value}>{option.value}</option>
                ))}
              </select>
              <button
                disabled={isLoading}
                type="submit"
                className="bg-[#9A1B76] hover:bg-[#db43b0] text-white font-bold rounded-lg px-4 py-3 focus:outline-none"
              >
                {isLoading ? "Creando..." : "Crear"}
              </button>
            </div>
            <div className="py-2 text-lg text-center">
              {error && <p>Todos los campos son obligatorios</p>}
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Index;
