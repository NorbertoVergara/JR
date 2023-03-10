import cursosP from './prencialC.json';
import './cursospre.css';


function Presenciales(){
    return(
        <div className="cursosPresenciales-contenedor" >
            {cursosP.cursosP.map((cursosP, ids)=>(
                <div key={ids} className="cursosP">
                    <h2>{cursosP.titulos}</h2>
                    <img src={cursosP.imagen} alt={cursosP.alt} />
                </div>
            ))}
        </div>
    );
}

export default Presenciales;