import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "./Card/Card";

export function Curso() {
  const [curso, setCurso] = useState([]);
  const { titulo, video } = useParams();

  const getCurso = async () => {
    const response = await axios.get("http://localhost:8080/api/auth/cursos");
    setCurso(response.data);
  };

  useEffect(() => {
    getCurso();
  }, []);

  const filtro = curso.filter((cursos) => cursos.titulo === titulo);

  let contenido, section;
  switch (true) {
    case video === "video":
      contenido = filtro.map((filtro) => (
        <iframe
          className="aspect-video w-[900px]"
          src={filtro.video}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
        />
      ));
      section = (
        <section className="w-2/5 md:w-[33%] h-auto p-4 sm:p-6 lg:p-8 bg-white shadow-md border border-zinc-300 rounded-3xl mt-[-820px] ml-[980px] mb-24 ">
          <Card />
        </section>
      );

      break;
    case video === "video 1":
      contenido = filtro.map((filtro) => (
        <iframe
          className="aspect-video w-[900px]"
          src={filtro.video1}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
        />
      ));
      section = (
        <section className="w-2/5 md:w-[33%] h-auto p-4 sm:p-6 lg:p-8 bg-white shadow-md border border-zinc-300 rounded-3xl mt-[-820px] ml-[980px] mb-24 ">
          <Card />
        </section>
      );

      break;

    case video === "video 2":
      contenido = filtro.map((filtro) => (
        <iframe
          className="aspect-video w-[900px]"
          src={filtro.video2}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
        />
      ));
      section = (
        <section className="w-2/5 md:w-[33%] h-auto p-4 sm:p-6 lg:p-8 bg-white shadow-md border border-zinc-300 rounded-3xl mt-[-820px] ml-[980px] mb-24 ">
          <Card />
        </section>
      );
      break;
    case video === "video 3":
      contenido = filtro.map((filtro) => (
        <iframe
          className="aspect-video w-[900px]"
          src={filtro.video3}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
        />
      ));
      section = (
        <section className="w-2/5 md:w-[33%] h-auto p-4 sm:p-6 lg:p-8 bg-white shadow-md border border-zinc-300 rounded-3xl mt-[-820px] ml-[980px] mb-24 ">
          <Card />
        </section>
      );
      break;
    case video === "video 4":
      contenido = filtro.map((filtro) => (
        <iframe
          className="aspect-video w-[900px]"
          src={filtro.video4}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
        />
      ));
      section = (
        <section className="w-2/5 md:w-[33%] h-auto p-4 sm:p-6 lg:p-8 bg-white shadow-md border border-zinc-300 rounded-3xl mt-[-820px] ml-[980px] mb-24 ">
          <Card />
        </section>
      );
      break;
    case video === "video 5":
      contenido = filtro.map((filtro) => (
        <iframe
          className="aspect-video w-[900px]"
          src={filtro.video5}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
        />
      ));
      section = (
        <section className="w-2/5 md:w-[33%] h-auto p-4 sm:p-6 lg:p-8 bg-white shadow-md border border-zinc-300 rounded-3xl mt-[-820px] ml-[980px] mb-24 ">
          <Card />
        </section>
      );
      break;
    case video === "video 6":
      contenido = filtro.map((filtro) => (
        <iframe
          className="aspect-video w-[900px]"
          src={filtro.video6}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
        />
      ));
      section = (
        <section className="w-2/5 md:w-[33%] h-auto p-4 sm:p-6 lg:p-8 bg-white shadow-md border border-zinc-300 rounded-3xl mt-[-820px] ml-[980px] mb-24 ">
          <Card />
        </section>
      );
      break;
    case video === "video 7":
      contenido = filtro.map((filtro) => (
        <iframe
          className="aspect-video w-[900px]"
          src={filtro.video7}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
        />
      ));
      section = (
        <section className="w-2/5 md:w-[33%] h-auto p-4 sm:p-6 lg:p-8 bg-white shadow-md border border-zinc-300 rounded-3xl mt-[-820px] ml-[980px] mb-24 ">
          <Card />
        </section>
      );
      break;
    case video === "video 8":
      contenido = filtro.map((filtro) => (
        <iframe
          className="aspect-video w-[900px]"
          src={filtro.video8}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
        />
      ));
      section = (
        <section className="w-2/5 md:w-[33%] h-auto p-4 sm:p-6 lg:p-8 bg-white shadow-md border border-zinc-300 rounded-3xl mt-[-820px] ml-[980px] mb-24 ">
          <Card />
        </section>
      );
      break;
    case video === "video 9":
      contenido = filtro.map((filtro) => (
        <iframe
          className="aspect-video w-[900px]"
          src={filtro.video9}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
        />
      ));
      section = (
        <section className="w-2/5 md:w-[33%] h-auto p-4 sm:p-6 lg:p-8 bg-white shadow-md border border-zinc-300 rounded-3xl mt-[-820px] ml-[980px] mb-24 ">
          <Card />
        </section>
      );
      break;
  }

  return (
    <>
      <div className="">
        {filtro.map((filtro) => (
          <div>
            <div>
              <section className="w-2/5 md:w-[65%] p-4 sm:p-6 lg:p-8 bg-white shadow-md border border-zinc-300 rounded-3xl mt-2 ml-2">
                <p className="text-xl text-zinc-500">{filtro.titulo}</p>

                <div>{contenido}</div>
              </section>
            </div>
            <div>
              <section className="w-2/5 md:w-[65%] p-4 sm:p-6 lg:p-8 bg-white shadow-md border border-zinc-300 rounded-3xl mt-2 ml-1 mb-2">
                <h3 className="text-xl">Descripcion</h3>
                <p>{filtro.description}</p>
                <hr className="border-dashed border-gray-400 my-4" />
                <h3 className="text-xl">Autor</h3>
                <p>{filtro.instructor}</p>
              </section>
            </div>
            <div>
              <div className="min-h-[1000px] h-full">{section}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Curso;
