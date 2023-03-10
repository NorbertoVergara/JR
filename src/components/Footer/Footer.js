import logo from './logo.png';
import copyright from './copyrightLogo.png';
import './footer.css';

function Footer(){
    return(
        <footer className="pie-pagina">
            <div className="grupo-1">
                <div className="box">
                    <figure>
                        <a href="#">
                            <img src={logo} alt="Logo de DigiBootcamp" />
                        </a>
                        <h2>DIGIBOOTCAMP</h2>
                    </figure>
                </div>
                <div className="box">
                    <h2>Creadores pagina</h2>
                    <p> Vanessa Pabuena</p>
                    <p> Alejandro Espinosa</p>
                    <p> Norberto Vergara</p>
                </div>
            </div>
            <div className='grupo-2'>
                <small>
                    <img className='imagen-copy' src={copyright}/>Copyright
                    2023 <b>DigiBootcamp</b> - Todos los derechos reservados
                </small>
            </div>
        </footer>
    )
}

export default Footer;