import React from 'react';
import '../pages/styles/Servicios.css';

function Servicios() {
  return (
    <div className="matricula-container">
      <h1 className="matricula-title">Calendario de Matrícula</h1>
      
      <div className="calendar-section">
        <div className="calendar-legend">
          <h3>Leyenda:</h3>
          <ul>
            <li><span className="legend-color inicio"></span> Primer día de clases</li>
            <li><span className="legend-color fin"></span> Último día de clases</li>
          </ul>
        </div>

        <div className="calendar-wrapper">
          <table className="matricula-calendar">
            <thead>
              <tr>
                <th colSpan="10">Mayo 2023</th>
              </tr>
              <tr>
                <th>Evento</th>
                <th>Lun</th>
                <th>Mar</th>
                <th>Mié</th>
                <th>Jue</th>
                <th>Vie</th>
                <th>Sáb</th>
                <th>Dom</th>
                <th>Nivel</th>
                <th>Detalle</th>
              </tr>
            </thead>
            <tbody>
              <tr className="inicio-clases">
                <td>Primer día de clases</td>
                <td>1</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>1</td>
                <td>Primer día de clases dominical</td>
              </tr>
              <tr className="fin-clases">
                <td>Último día de clases</td>
                <td>23</td>
                <td>23</td>
                <td>30</td>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>4</td>
                <td>Primer día de clases dominical</td>
              </tr>
              <tr className="inicio-clases">
                <td>Primer día de clases</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
                <td>8</td>
                <td>9</td>
                <td>10</td>
                <td>11</td>
                <td>5</td>
                <td>Primer día de clases diaria</td>
              </tr>
              <tr className="fin-clases">
                <td>Último día de clases</td>
                <td>12</td>
                <td>13</td>
                <td>14</td>
                <td>15</td>
                <td>18</td>
                <td>17</td>
                <td>18</td>
                <td></td>
                <td>Primer día de clases referencial (Lunes, miércoles y viernes)</td>
              </tr>
              <tr className="inicio-clases">
                <td>Primer día de clases</td>
                <td>19</td>
                <td>20</td>
                <td>21</td>
                <td>22</td>
                <td>23</td>
                <td>24</td>
                <td>25</td>
                <td>6</td>
                <td>Primer día de clases de frecuencia interdiaria (martes y jueves)</td>
              </tr>
              <tr className="fin-clases">
                <td>Último día de clases</td>
                <td>26</td>
                <td>27</td>
                <td>28</td>
                <td>29</td>
                <td>30</td>
                <td>31</td>
                <td>1</td>
                <td>17</td>
                <td>Último día de clases frecuencia sabatina</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="niveles-educativos">
        <h2>Niveles Educativos</h2>
        <ul className="niveles-list">
          <li>Educación Inicial</li>
          <li>Primaria</li>
          <li>Secundaria</li>
        </ul>
      </div>
    </div>
  );
}

export default Servicios;