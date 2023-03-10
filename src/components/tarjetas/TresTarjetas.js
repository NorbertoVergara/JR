import React from "react";
import Tarjeta from "./Tarjeta";
import Imagen1 from "./img1.jpg";
import Imagen2 from "./img2.jpg";
import Imagen3 from "./img3.jpg";

const TresTarjetas = () => {
  return (
    <div className="tres-tarjetas">
      <Tarjeta
        imagen= {Imagen1} 
        titulo="DIRIGIDO A:"
        descripcion="Programadores, ingenieros y cualquier profesional o entusiasta, que le interese conocer los conceptos de las tecnologías 4.0"
      />
      <Tarjeta
        imagen={Imagen2}
        titulo="PRE-REQUISITOS"
        descripcion="Conocimientos del S.O. Windows e Internet. Mente abierta para aprender los conceptos básicos y claves sobre tecnologías 4.0 aplicadas a las empresas"
      />
      <Tarjeta
        imagen={Imagen3}
        titulo="METODOLOGÍA"
        descripcion="Nuestros Bootcamp será orientado así:"
        virtual="* Vitrual"
        presencial="* Presencial"
        practico="* 80% Practico"
      />
    </div>
  );
};

export default TresTarjetas;
