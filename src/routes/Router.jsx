import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Root } from "../Componentes/Root/Root";
import Home from "../Componentes/Pages/Home/Home";
import Cursos from "../Componentes/Pages/Cursos/Cursos";
import Intructores from "../Componentes/Pages/Instructores/Instructores";
import Contacto from "../Componentes/Pages/Contacto/Contacto";
import IniciarSesion from "../Componentes/Login/IniciarSesion/IniciarSesion";
import Registrarme from "../Componentes/Login/Registro/Registro";
import PrivateRouter from "./PrivateRouter/PrivateRouter";
import Perfil from "../Componentes/Pages/Perfil/index";
import RecuperarContraseña from "../Componentes/Login/IniciarSesion/OlvideContraseña/RecuperarContraseña";
import NuevaContraseña from "../Componentes/Login/IniciarSesion/OlvideContraseña/NuevaContraseña";
import CursosAdmin from "../Componentes/Pages/CursosAdmin/CursosAdmin";
import CrearCursos from "../Componentes/Pages/CrearCurso/index";
import EditInstructores from "../Componentes/Pages/EditInstructores/Index";
import ViewInstructores from "../Componentes/Pages/viewInstructores/Index";
import CursosINS from "../Componentes/Pages/CursosINS/CursosINS";
import Curso from "../Componentes/Pages/Curso/Curso";
import EditarCurso from "../Componentes/Pages/editarCurso/editar";
import RegistroINS from "../Componentes/Pages/EditInstructores/RegistroINS";
export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Ruta principal con el componente Root */}
      <Route element={<Root />} path="/">
        {/* Ruta para la página de inicio */}
        <Route element={<Home />} index />

        {/* Rutas protegidas */}
        <Route element={<PrivateRouter />}>
          {/* Rutas dentro de la sección protegida */}
          <Route element={<Cursos />} path="/cursos" />
          <Route element={<CursosAdmin />} path="/CursosAdmin" />
          <Route element={<Intructores />} path="/instructores" />
          <Route element={<Curso />} path="/Curso/:titulo/:video" />
          <Route element={<EditarCurso />} path="/editarCurso/:idCursos" />
        </Route>

        {/* Otras rutas fuera de la sección protegida */}
        <Route element={<Contacto />} path="/contactos" />
        <Route element={<CrearCursos />} path="/CrearCursos" />
        <Route element={<CursosINS />} path="/CursosINS/:correo" />
        <Route element={<Perfil />} path="/perfil" />
        <Route element={<RecuperarContraseña />} path="/RecuperarContraseña" />
        <Route element={<NuevaContraseña />} path="/reset-password" />
        <Route element={<IniciarSesion />} path="/login" />
        <Route element={<Registrarme />} path="/registrarme" />
        <Route
          element={<EditInstructores />}
          path="/EditInstructores/:nombre"
        />
        <Route element={<RegistroINS />} path="/ResgistroInstructores" />
        <Route element={<ViewInstructores />} path="/viewInstructores" />
      </Route>
    </>
  )
);
