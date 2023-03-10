import React from "react";
import cursosV from './virtualC.json';
import './cursosvirt.css';


function Virtuales(){
    return(
        <>
        <div className="cursosVirtuales-contenedor" >
            {cursosV.cursos.map((cursos, id)=>(
                <div key={id} className="cursos">
                    <img src={cursos.imagen} alt={cursos.alt} />
                    <h3>{cursos.titulo}</h3>
                </div>
            ))}
        </div>
        <div className="titulo-pres">
            <h1>NUESTROS BOOTCAMPS</h1>
            <h2>BOOTCAMPS <b>PRECENCIALES</b> </h2>
        </div>
        </>
    );
}

export default Virtuales;