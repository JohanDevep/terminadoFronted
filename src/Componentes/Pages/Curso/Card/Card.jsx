// @flow
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export function set() {
  const [curso, setCurso] = useState([]);
  const { titulo } = useParams();
  const getCurso = async () => {
    const response = await axios.get("http://localhost:8080/api/auth/cursos");
    setCurso(response.data);
  };

  useEffect(() => {
    getCurso();
  }, []);

  const filtro = curso.filter((cursos) => cursos.titulo === titulo);

  const video = filtro.map((filtro) =>
    filtro.video !== "" ? (
      <div className="border border-gray-400 lg:border-gray-400 bg-white rounded-xl p-4 flex-col justify-between leading-normal m-2">
        <div className="flex justify-end flex-row">
          <div className="text-sm">
            <p className="text-gray-600">{filtro.categoria} -</p>
          </div>
          <div className="text-sm ml-1">
            <p className="text-gray-600">{filtro.instructor}</p>
          </div>
        </div>
        <div className="mt-[-23px]">
          <div className="text-sm">
            <p className="text-gray-600">{filtro.titulo}</p>
          </div>
          <div className="text-gray-900  font-bold text-xl mb-2">
            <Link to={`/curso/${filtro.titulo}/${"video"}`}>Video 1</Link>
          </div>
        </div>
      </div>
    ) : null
  );

  const video1 = filtro.map((filtro) =>
    filtro.video1 !== "" ? (
      <div className="border border-gray-400 lg:border-gray-400 bg-white rounded-xl p-4 flex-col justify-between leading-normal m-2">
        <div className="flex justify-end flex-row">
          <div className="text-sm">
            <p className="text-gray-600">{filtro.categoria} -</p>
          </div>
          <div className="text-sm ml-1">
            <p className="text-gray-600">{filtro.instructor}</p>
          </div>
        </div>
        <div className="mt-[-23px]">
          <div className="text-sm">
            <p className="text-gray-600">{filtro.titulo}</p>
          </div>
          <div className="text-gray-900  font-bold text-xl mb-2">
            <Link to={`/curso/${filtro.titulo}/${"video 1"}`}>Video 2</Link>
          </div>
        </div>
      </div>
    ) : null
  );

  const video2 = filtro.map((filtro) =>
    filtro.video2 !== "" ? (
      <div className="border border-gray-400 lg:border-gray-400 bg-white rounded-xl p-4 flex-col justify-between leading-normal m-2">
        <div className="flex justify-end flex-row">
          <div className="text-sm">
            <p className="text-gray-600">{filtro.categoria} -</p>
          </div>
          <div className="text-sm ml-1">
            <p className="text-gray-600">{filtro.instructor}</p>
          </div>
        </div>
        <div className="mt-[-23px]">
          <div className="text-sm">
            <p className="text-gray-600">{filtro.titulo}</p>
          </div>
          <div className="text-gray-900  font-bold text-xl mb-2">
            <Link to={`/curso/${filtro.titulo}/${"video 2"}`}>Video 3</Link>
          </div>
        </div>
      </div>
    ) : null
  );

  const video3 = filtro.map((filtro) =>
    filtro.video3 !== "" ? (
      <div className="border border-gray-400 lg:border-gray-400 bg-white rounded-xl p-4 flex-col justify-between leading-normal m-2">
        <div className="flex justify-end flex-row">
          <div className="text-sm">
            <p className="text-gray-600">{filtro.categoria} -</p>
          </div>
          <div className="text-sm ml-1">
            <p className="text-gray-600">{filtro.instructor}</p>
          </div>
        </div>
        <div className="mt-[-23px]">
          <div className="text-sm">
            <p className="text-gray-600">{filtro.titulo}</p>
          </div>
          <div className="text-gray-900  font-bold text-xl mb-2">
            <Link to={`/curso/${filtro.titulo}/${"video 3"}`}>Video 4</Link>
          </div>
        </div>
      </div>
    ) : null
  );
  const video4 = filtro.map((filtro) =>
    filtro.video4 !== "" ? (
      <div className="border border-gray-400 lg:border-gray-400 bg-white rounded-xl p-4 flex-col justify-between leading-normal m-2">
        <div className="flex justify-end flex-row">
          <div className="text-sm">
            <p className="text-gray-600">{filtro.categoria} -</p>
          </div>
          <div className="text-sm ml-1">
            <p className="text-gray-600">{filtro.instructor}</p>
          </div>
        </div>
        <div className="mt-[-23px]">
          <div className="text-sm">
            <p className="text-gray-600">{filtro.titulo}</p>
          </div>
          <div className="text-gray-900  font-bold text-xl mb-2">
            <Link to={`/curso/${filtro.titulo}/${"video 4"}`}>Video 5</Link>
          </div>
        </div>
      </div>
    ) : null
  );
  const video5 = filtro.map((filtro) =>
    filtro.video5 !== "" ? (
      <div className="border border-gray-400 lg:border-gray-400 bg-white rounded-xl p-4 flex-col justify-between leading-normal m-2">
        <div className="flex justify-end flex-row">
          <div className="text-sm">
            <p className="text-gray-600">{filtro.categoria} -</p>
          </div>
          <div className="text-sm ml-1">
            <p className="text-gray-600">{filtro.instructor}</p>
          </div>
        </div>
        <div className="mt-[-23px]">
          <div className="text-sm">
            <p className="text-gray-600">{filtro.titulo}</p>
          </div>
          <div className="text-gray-900  font-bold text-xl mb-2">
            <Link to={`/curso/${filtro.titulo}/${"video 5"}`}>Video 6</Link>
          </div>
        </div>
      </div>
    ) : null
  );
  const video6 = filtro.map((filtro) =>
    filtro.video6 !== "" ? (
      <div className="border border-gray-400 lg:border-gray-400 bg-white rounded-xl p-4 flex-col justify-between leading-normal m-2">
        <div className="flex justify-end flex-row">
          <div className="text-sm">
            <p className="text-gray-600">{filtro.categoria} -</p>
          </div>
          <div className="text-sm ml-1">
            <p className="text-gray-600">{filtro.instructor}</p>
          </div>
        </div>
        <div className="mt-[-23px]">
          <div className="text-sm">
            <p className="text-gray-600">{filtro.titulo}</p>
          </div>
          <div className="text-gray-900  font-bold text-xl mb-2">
            <Link to={`/curso/${filtro.titulo}/${"video 6"}`}>Video 7</Link>
          </div>
        </div>
      </div>
    ) : null
  );
  const video7 = filtro.map((filtro) =>
    filtro.video7 !== "" ? (
      <div className="border border-gray-400 lg:border-gray-400 bg-white rounded-xl p-4 flex-col justify-between leading-normal m-2">
        <div className="flex justify-end flex-row">
          <div className="text-sm">
            <p className="text-gray-600">{filtro.categoria} -</p>
          </div>
          <div className="text-sm ml-1">
            <p className="text-gray-600">{filtro.instructor}</p>
          </div>
        </div>
        <div className="mt-[-23px]">
          <div className="text-sm">
            <p className="text-gray-600">{filtro.titulo}</p>
          </div>
          <div className="text-gray-900  font-bold text-xl mb-2">
            <Link to={`/curso/${filtro.titulo}/${"video 7"}`}>Video 8</Link>
          </div>
        </div>
      </div>
    ) : null
  );
  const video8 = filtro.map((filtro) =>
    filtro.video8 !== "" ? (
      <div className="border border-gray-400 lg:border-gray-400 bg-white rounded-xl p-4 flex-col justify-between leading-normal m-2">
        <div className="flex justify-end flex-row">
          <div className="text-sm">
            <p className="text-gray-600">{filtro.categoria} -</p>
          </div>
          <div className="text-sm ml-1">
            <p className="text-gray-600">{filtro.instructor}</p>
          </div>
        </div>
        <div className="mt-[-23px]">
          <div className="text-sm">
            <p className="text-gray-600">{filtro.titulo}</p>
          </div>
          <div className="text-gray-900  font-bold text-xl mb-2">
            <Link to={`/curso/${filtro.titulo}/${"video 8"}`}>Video 9</Link>
          </div>
        </div>
      </div>
    ) : null
  );
  const video9 = filtro.map((filtro) =>
    filtro.video9 !== "" ? (
      <div className="border border-gray-400 lg:border-gray-400 bg-white rounded-xl p-4 flex-col justify-between leading-normal m-2">
        <div className="flex justify-end flex-row">
          <div className="text-sm">
            <p className="text-gray-600">{filtro.categoria} -</p>
          </div>
          <div className="text-sm ml-1">
            <p className="text-gray-600">{filtro.instructor}</p>
          </div>
        </div>
        <div className="mt-[-23px]">
          <div className="text-sm">
            <p className="text-gray-600">{filtro.titulo}</p>
          </div>
          <div className="text-gray-900  font-bold text-xl mb-2">
            <Link to={`/curso/${filtro.titulo}/${"video 9"}`}>Video 10</Link>
          </div>
        </div>
      </div>
    ) : null
  );
  return (
    <>
      <div>
        {video}
        {video1}
        {video2}
        {video3}
        {video4}
        {video5}
        {video6}
        {video7}
        {video8}
        {video9}
      </div>
    </>
  );
}

export default set;
