import React from 'react';
import NavigationBar from './components/navbar/navbar';
import Barner from './components/barner-principal/Barner';
import TresTarjetas from "./components/tarjetas/TresTarjetas";
import Preparacion from './components/preparacion/Preparacion';
import Estadistica from './components/estadistica/Estadistica';
import Experiencia from './components/experiencia/Experiencia';
import CursosVirtuales from './components/cursos-virtuales/Cursos-vir';
import CursosPresenciales from './components/cursos-presenciales/Cursos-Precen';
import Footer from './components/Footer/Footer';
import Boletin from './components/boletin-noticias/Boletin';



const App = () => {
  return (
    <div>
      <NavigationBar />
      <Barner />
      <TresTarjetas />
      <Preparacion />
      <Estadistica />
      <Experiencia />
      <CursosVirtuales />
      <CursosPresenciales/>
      <Boletin/>
      <Footer />
  
    </div>
  );
}

export default App;
