import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Contacto from './pages/Contacto';
import Estudiantes from './pages/estudiantes';
import Home from './pages/Home';
import Idiomas from './pages/idioma';
import Login from './pages/Login';
import Menu from './pages/menu';
import Nosotros from './pages/Nostros';
import Servicios from './pages/Servicios';

// Componente contenedor para rutas protegidas del menú
const MenuLayout = () => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  return isAuthenticated ? (
    <div style={{ display: 'flex' }}>
      <Menu />
      <div style={{ flex: 1, padding: '20px' }}>
        <Routes>
          <Route path="estudiantes" element={<Estudiantes />} />
          <Route path="idiomas" element={<Idiomas />} />
          <Route path="*" element={<Navigate to="estudiantes" />} />
        </Routes>
      </div>
    </div>
  ) : (
    <Navigate to="/login" replace />
  );
};

function App() {
  const location = window.location;

  return (
    <BrowserRouter>
      <div className="app-container">
        {!location.pathname.startsWith('/menu') && <Navbar />}

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/login" element={<Login />} />
            <Route path="/menu/*" element={<MenuLayout />} />
          </Routes>
        </main>

        {!location.pathname.startsWith('/menu') && <Footer />}
      </div>
    </BrowserRouter>
  );
}

export default App;

