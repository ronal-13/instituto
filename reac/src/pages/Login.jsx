import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/styles/login.css';

const LoginForm = () => {
  const [username, setUsername] = useState(''); // Cambiado de email a username
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
  
    if (username === 'ronal13' && password === '12345678') {
      // 1. Guarda el estado de autenticación
      localStorage.setItem('isAuthenticated', 'true');
      
      // 2. Si quiere recordar sesión (opcional)
      if (rememberMe) {
        localStorage.setItem('rememberedUser', 'true');
      }
      
      // 3. Redirige usando la ruta definida en tu router
      navigate('../menu'); // Cambiado a la ruta correcta
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>ICPNA Canvas</h1>
          <p>Accede a tu plataforma educativa</p>
        </div>

        {/* Mensaje de error */}
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Usuario</label> {/* Cambiado de email a username */}
            <input
              type="text" // Cambiado de email a text
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Ingresa tu usuario"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>

          <div className="form-options">
            <label className="remember-me">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <span>Recordar sesión</span>
            </label>
            <a href="/forgot-password" className="forgot-password">
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          <button type="submit" className="login-button">
            Iniciar sesión
          </button>
        </form>

        <div className="login-footer">
          <p>¿No tienes una cuenta? <a href="/register">Regístrate aquí</a></p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;