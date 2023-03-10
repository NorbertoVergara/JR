import './boletin.css';

function Boletin() {
    return (
        <div className="boletin">
            <div className="boletin-contenido">
                <br />
                <br />
                <br />
                <br/>
                <br/>
                <br/>
                <br/>
                <h1 className="Boletin-title">BOLETÍN DE NOTICIAS</h1>
                <h2 className="content">Te invitamos a que te suscribas a través del siguiente formulario y te sumerjas en esta nueva experiencia de aprendizaje en modalidad Bootcamp.</h2>
                <h3 className="welcome">¡Bienvenido!</h3>
                <br />
                <br />
                <br />
                <br />
            </div>
            <form>
                <div className="formulario">
                    <div className="">
                        <input id="name" name="name" placeholder="Nombres" type="text" className="" />
                    </div>
                    <div>
                        <input id="lastname" name="lastname" placeholder="Apellidos" type="text" className="" />
                    </div>
                    <div>
                        <input id="email" name="email" placeholder="Correo electronico" type="email" className="" />
                    </div>
                </div>
            </form>
            <button>Enviar</button>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    )
}

export default Boletin;