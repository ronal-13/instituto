import React from 'react';
import '../pages/styles/Nostros.css'; // Asegúrate de crear este archivo CSS

function Nosotros() {
  return (
    <div className="examenes-container">
      <h1 className="examenes-title">Exámenes Internacionales</h1>
      <p className="examenes-intro">Ofrecemos una variedad de exámenes internacionales reconocidos mundialmente para validar tus conocimientos de inglés.</p>
      
      <div className="examenes-grid">
        {/* TOEFL ITP Remoto */}
        <div className="examen-card">
          <h2>TOEFL ITP® Remoto para alumnos ICPNA</h2>
          <p>TOEFL Executive para alumnos del Programa para Alumnos y Adultos</p>
          <div className="examen-actions">
            <button className="examen-button">CONOCE MÁS</button>
          </div>
        </div>

        {/* TOEFL Junior */}
        <div className="examen-card">
          <h2>TOEFL Junior®</h2>
          <p>TOEFL Junior®</p>
          <span className="examen-codigo">CONICC N45.0</span>
          <div className="examen-actions">
            <button className="examen-button">CONOCE MÁS</button>
          </div>
        </div>

        {/* TOEFL ITP Presencial */}
        <div className="examen-card">
          <h2>TOEFL ITP® Presencial para alumnos ICPNA</h2>
          <p>TOEFL ITP®</p>
          <button className="examen-button">CONOCE MÁS</button>
        </div>

        {/* TOEFL Primary */}
        <div className="examen-card">
          <h2>TOEFL Primary®</h2>
          <p>TOEFL Primary®</p>
          <div className="examen-actions">
            <span className="examen-codigo">CONICC N46.0</span>
            <button className="examen-button">CONOCE MÁS</button>
          </div>
        </div>

        {/* USMLE */}
        <div className="examen-card">
          <h2>USMLE</h2>
          <p>United States Medical Licensing Examination</p>
          <div className="examen-actions">
            <span className="examen-codigo">CONICC N48.0</span>
            <button className="examen-button">CONOCE MÁS</button>
          </div>
        </div>

        {/* GRE */}
        <div className="examen-card">
          <h2>GRE</h2>
          <p>Graduate Record Examination</p>
          <div className="examen-actions">
            <span className="examen-codigo">CONICC N45.0</span>
            <button className="examen-button">CONOCE MÁS</button>
          </div>
        </div>

        {/* ECCE */}
        <div className="examen-card">
          <h2>ECCE</h2>
          <p>Examination for the Certificate of Competency in English</p>
          <div className="examen-actions">
            <span className="examen-codigo">CONICC N46.0</span>
            <button className="examen-button">CONOCE MÁS</button>
          </div>
        </div>

        {/* ECPE */}
        <div className="examen-card">
          <h2>ECPE</h2>
          <p>Examination for the Certificate of Proficiency in English</p>
          <div className="examen-actions">
            <span className="examen-codigo">CONICC N46.0</span>
            <button className="examen-button">CONOCE MÁS</button>
          </div>
        </div>

        {/* ECPE */}
        <div className="examen-card">
          <h2>ECPE</h2>
          <p>Examination for the Certificate of Proficiency in English</p>
          <div className="examen-actions">
            <span className="examen-codigo">CONICC N46.0</span>
            <button className="examen-button">CONOCE MÁS</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nosotros;