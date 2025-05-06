// menu.jsx
import React from 'react';
import {
  FaCalendarAlt,
  FaLanguage,
  FaSignOutAlt,
  FaUserCircle,
  FaUserGraduate
} from 'react-icons/fa';
import { Outlet, useNavigate } from 'react-router-dom'; // ✅ Importar useNavigate
import './styles/menu.css';

const Menu = () => {
  const navigate = useNavigate(); // ✅ Inicializar useNavigate

  const currentUser = {
    name: "Carlos Pérez",
    role: "Administrador"
  };

  const currentDate = new Date().toLocaleDateString('es-ES', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // ✅ Función para cerrar sesión
  const cerrarSesion = () => {
    localStorage.clear(); // Limpiar datos (ajusta si usas sessionStorage)
    navigate('/login'); // Redirigir al login o landing de WeCanvas
  };

  return (
    <div className="menu-layout">
      <div className="sidebar-container">
        {/* Sidebar */}
        <div className="sidebar-header">
          <div className="user-info">
            <FaUserCircle className="user-icon" size={24} />
            <div>
              <h3>{currentUser.name}</h3>
              <p>{currentUser.role}</p>
            </div>
          </div>
          <div className="current-date">
            <FaCalendarAlt size={14} />
            <span>{currentDate}</span>
          </div>

          <ul>
            <li>
              <a href="/menu/estudiantes" className="menu-item">
                <FaUserGraduate className="menu-icon" />
                <span>Estudiantes</span>
              </a>
            </li>
            <li>
              <a href="/menu/idiomas" className="menu-item">
                <FaLanguage className="menu-icon" />
                <span>Idiomas</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="sidebar-footer">
          <button className="logout-button" onClick={cerrarSesion}>
            <FaSignOutAlt />
            <span>Cerrar sesión</span>
          </button>
        </div>
      </div>

      {/* Contenido de subpáginas */}
      <div className="menu-content">
        <Outlet /> {/* ✅ Aquí se mostrarán Estudiantes.jsx, Idiomas.jsx, etc. */}
      </div>
    </div>
  );
};

export default Menu;

