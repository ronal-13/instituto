import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="icpna-footer">
      <div className="footer-container">
        
        {/* Sección ICPNA */}
        <div className="footer-section">
          <h3 className="footer-title">ICPNA</h3>
          <ul className="footer-links">
            <li><a href="/acerca-de-nosotros">Acerca de nosotros</a></li>
            <li><a href="/convenios">Convenios</a></li>
            <li><a href="/sedes">Sedes</a></li>
            <li><a href="/responsabilidad-social">Responsabilidad social</a></li>
            <li><a href="/trabajo-con-nosotros">Trabajo con nosotros</a></li>
            <li><a href="/derechos-arco">Derechos Arco</a></li>
          </ul>
        </div>

        {/* Sección Alumnos */}
        <div className="footer-section">
          <h3 className="footer-title">ALUMNOS</h3>
          <ul className="footer-links">
            <li><a href="/examen-clasificacion">Examen de clasificación</a></li>
            <li><a href="/guia-ninos">Guía de alumnos - Programa para Niños</a></li>
            <li><a href="/guia-jovenes">Guía de alumnos - Programa para Jóvenes y Adultos</a></li>
            <li><a href="/beca-usa">Beca ICPNA USA</a></li>
            <li><a href="/reglamento-becas">Reglamento de Becas</a></li>
            <li><a href="/horarios">Horarios de atención</a></li>
            <li><a href="/reglamento-conducta">Reglamento de Conducta ICPNA</a></li>
          </ul>
        </div>

        {/* Sección Ayuda */}
        <div className="footer-section">
          <h3 className="footer-title">AYUDA</h3>
          <ul className="footer-links">
            <li><a href="/terminos-condiciones">Términos y Condiciones</a></li>
            <li><a href="/preguntas-frecuentes">Preguntas Frecuentes</a></li>
            <li><a href="/libro-reclamaciones">Libro de reclamaciones</a></li>
            <li><a href="/buzon-sugerencias">Buzón de sugerencias</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </div>

        {/* Sección Contacto */}
        <div className="footer-section contact-section">
          <h3 className="footer-title">CONTACTO</h3>
          <div className="contact-info">
            <p className="phone-number">(01) 7067000</p>
          </div>
          <div className="social-media">
            <h4>SÍGUENOS</h4>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} ICPNA. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;