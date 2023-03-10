import React from "react";
import data from './estadistica.json';
import './estadistica.css';


function Estadistica(){
    return(
        <div className="contestadisticas">
            {data.images.map((image, index)=>(
                <div key={index} className="estadisticaCard">
                    <img src={image.imagen} alt={image.alt} />
                    <h2>{image.numero}</h2>
                    <h3>{image.titulo}</h3>
                </div>
            ))}
        </div>
    );
}

export default Estadistica;