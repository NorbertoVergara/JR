import '../css/Bootcamp.css';

const { useState, useEffect } = require("react");

function Contenido(){
    const [reto, setReto] = useState([])

    useEffect(() => {
        fetch("json/Reto.json")
        .then(response => response.json())
        .then (datos => {
            setReto(datos)
        }, [])
    })
    
    return reto
}

export default function Bootcamp(){
    const reto = Contenido();

    return (
        <div>
                {reto.map(items => (
                    <div key={items.id}>
                        <div className="contenedor-bootcamp">
                                <img className="imagen-bootcamp" src={require(`../imagenes/${items.img}`)} alt={items.nombre}/>
                                <div className='contenedor-texto-bootcamp'>  
                                <p className="titulo-bootcamp">{items.titulo}</p>
                                <p className="contenido-bootcamp">{items.contenido}</p>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
}