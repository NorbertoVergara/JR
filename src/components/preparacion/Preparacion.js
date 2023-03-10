import image from './images-preparacion/preparacion.jpg';
import './preparacion.css';

function Preparacion (){
    return(
        <div className='preparacion'>
            <br/>
            <br/>
            <br/>
            <img src={image} alt='Imagen' className='imagen'/>
            <div className='contenido-texto'>
                <h1>INICIA HOY TU PREPARACIÓN CAMPAMENTO INTERACTIVO <b>/</b> INMERSIVO</h1>
                <p>La clave del éxito de los Bootcamps de Digibootcamp reside en que, al finalizar, estarás preparado para desarrollar una solución completa de software realizada 100% por ti mismo, 100% practico, pudiendo especializarte en la parte que más te guste.</p>
                <p>No serás únicamente un Full Stack Developer, Científico de Datos o experto en IA, Tendrás el conocimiento para ser y hacer lo que quieras y encajar donde sea. Tú decides.</p>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    )
}

export default Preparacion;