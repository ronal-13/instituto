import { Link } from 'react-router-dom';
import './Navbar.css'; // Importas el CSS

function Navbar() {
    return (
      <nav className="navbar">
        <img className="logo" src="https://www.icpna.edu.pe/static/img/logo.svg" alt="Logo ICPNA"/>
        <div className="nav-links">
          <Link to="/">Modalidades</Link>
          <Link to="/nosotros">Examenes Internacionales</Link>
          <Link to="/servicios">Calendario de matricula</Link>
          <Link to="/contacto">Zona alumnos</Link>
          <Link to="/Login">We Canvas</Link>
        </div>
      </nav>
    )
  }

export default Navbar
