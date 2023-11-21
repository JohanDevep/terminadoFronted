import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCursoMutation } from "../../services/Services";
import { ToastContainer, toast } from "react-toastify";

function index() {
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
    toast.success("Exitoso");
    // Redirige a la página deseada después del tiempo de espera
    setTimeout(() => {
      navigate("/");
    }, 1250); // Redirige a /login después de 3 segundos
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!titulo || !description || !categoria || !video || !video1) {
      setError(true);
      return;
    }
    curso.images = encodedImage;

    await mutate(curso, {
      onSuccess: () => {
        resetCurso();
        setError(false);
        displayRegistrationNotification();
      },
      onError: (error) => {
        if (error.response) {
          toast.error(`${error.response.data}`);
        }
      },
    });
  };

  const options = [
    { value: "Basico" },
    { value: "Intermedio" },
    { value: "Avanzados" },
  ];

  const [encodedImage, setEncodedImage] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.onload = (event) => {
      const encodedData = event.target.result;
      setEncodedImage(encodedData);
    };

    reader.readAsDataURL(file);
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

export default index;
