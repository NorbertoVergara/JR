import '../components/css/DigiBootcamp.css';
function DigiBootcamp() {
  return (
    <header class="header">
    <nav class="nav">
        <a><img href="#" class="logo" src='imagenes/logo.png'/>DIGIBOOTCAMP</a>
      <button class="nav-toggle" aria-label="Abrir menú">
        <i class="fas fa-bars"></i>
      </button>
      <ul class="nav-menu">
        <li class="nav-menu-item">
          <a href="#" class="nav-menu-link nav-link">Blog</a>
        </li>
        <li class="nav-menu-item">
          <a href="#" class="nav-menu-link nav-link">Videos</a>
        </li>
        <li class="nav-menu-item">
          <a href="#" class="nav-menu-link nav-link">Sobre mí</a>
        </li>
        <li class="nav-menu-item">
          <a href="#" class="nav-menu-link nav-link "
            >Contacto</a
          >
        </li>
      </ul>
    </nav>
  </header>
  );
}

export default DigiBootcamp ;
