import React from "react";
import Capacitaciones from "./Capacitaciones/Capacitaciones";
import QuienesSomos from "./QuienesSomos/QuienesSomos";
import Proposito from "./Proposito/Proposito";
import MisionVision from "./Mision-Vision/Mision-Vision";
import Aprendizaje from "./Aprendizaje/Aprendizaje";
import Corporativo from "./Corporativo/Corporativo";
import Beneficio from "./Beneficio/Beneficio";
import Facturacion from "./Facturacion/Facturacion";
import Carousel from "../../Carousel/Carousel";
import Precio from "./Precio/Precio";

function Home() {
  return (
    <div className="di">
      <Carousel />
      <Capacitaciones />
      <QuienesSomos />
      <Corporativo />
      <Proposito />
      <MisionVision />
      <Aprendizaje />
      <Beneficio />
      <Precio />
      <Facturacion />
    </div>
  );
}

export default Home;
