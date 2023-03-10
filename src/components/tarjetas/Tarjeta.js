import React from "react";
import './tarjeta.css';

const Tarjeta = (props) => {
  return (
    <div className="tarjeta">
      <img src={props.imagen} alt={props.titulo} />
      <h3>{props.titulo}</h3>
      <p>{props.descripcion}</p>
      <p>{props.virtual}</p>
      <p>{props.presencial}</p>
      <p>{props.practico}</p>
    </div>
  );
};

export default Tarjeta;
