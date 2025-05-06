import React from 'react';
import '../pages/styles/Contacto.css';

function Contacto() {
  return (
    <div className="actividades-container">
      {/* Sección de título con fondo especial */}
      <div className="actividades-header">
        <h1>Actividades Estudiantiles</h1>
        <p className="contacto-email">Escríbenos a <a href="mailto:actividadesestudiantiles@icpna.edu.pe">actividadesestudiantiles@icpna.edu.pe</a></p>
      </div>

      {/* Grid de actividades */}
      <div className="actividades-grid">
        {/* Actividad 1 - ICPNA ENJOY */}
        <div className="actividad-card">
          <div className="actividad-imagen-container">
            {/* Espacio para imagen - 350px x 200px */}
            <img src="/ruta/a/imagen-enjoy.jpg" alt="ICPNA ENJOY" className="actividad-imagen" />
          </div>
          <h3>ICPNA ENJOY</h3>
        </div>

        {/* Actividad 2 - HOME BY ICPNA */}
        <div className="actividad-card">
          <div className="actividad-imagen-container">
            {/* Espacio para imagen - 350px x 200px */}
            <img src="/ruta/a/imagen-home.jpg" alt="HOME BY ICPNA" className="actividad-imagen" />
          </div>
          <h3>HOME BY ICPNA</h3>
        </div>

        {/* Actividad 3 - HOME TIME BY ICPNA */}
        <div className="actividad-card">
          <div className="actividad-imagen-container">
            {/* Espacio para imagen - 350px x 200px */}
            <img src="/ruta/a/imagen-hometime.jpg" alt="HOME TIME BY ICPNA" className="actividad-imagen" />
          </div>
          <h3>HOME TIME BY ICPNA</h3>
        </div>

        {/* Actividad 4 - PODCAST MUNDO ICPNA */}
        <div className="actividad-card">
          <div className="actividad-imagen-container">
            {/* Espacio para imagen - 350px x 200px */}
            <img src="/ruta/a/imagen-podcast.jpg" alt="PODCAST MUNDO ICPNA" className="actividad-imagen" />
          </div>
          <h3>PODCAST MUNDO ICPNA</h3>
        </div>

        {/* Actividad 5 - WORKSHOPS */}
        <div className="actividad-card">
          <div className="actividad-imagen-container">
            {/* Espacio para imagen - 350px x 200px */}
            <img src="/ruta/a/imagen-workshops.jpg" alt="WORKSHOPS PRESENCIAL" className="actividad-imagen" />
          </div>
          <h3>WORKSHOPS PRESENCIAL</h3>
        </div>

        {/* Actividad 6 - BREAKING ART */}
        <div className="actividad-card">
          <div className="actividad-imagen-container">
            {/* Espacio para imagen - 350px x 200px */}
            <img src="/ruta/a/imagen-breakingart.jpg" alt="BREAKING ART PRESENCIAL" className="actividad-imagen" />
          </div>
          <h3>BREAKING ART PRESENCIAL</h3>
          <p className="fecha-actividad">Abril 2024</p>
        </div>
      </div>
    </div>
  );
}

export default Contacto;