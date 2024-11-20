import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './login.css';

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Enviar las credenciales a la ruta de la base de datos
      const response = await axios.post('http://localhost:8800/admin', {
        username,
        password,
      });


      if (response.data.success) {
        // Redirigir al panel de administración si el login es exitoso
        navigate('/');
      } else {
        // Mostrar error si las credenciales no son correctas
        setError('Usuario o contraseña incorrectos');
      }
    } catch (error) {
      console.error('Error en la autenticación:', error);
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
<div className="login-container">
  <div className="title-box">
    <h2>Bienvenido</h2>
  </div>
  <form onSubmit={handleLogin}>
    <div className="form-group">
      <label htmlFor="username">
        <i className="fas fa-user"></i>
      </label>
      <input
        type="text"
        id="username"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Usuario"
        required
      />
    </div>
    <div className="form-group">
      <label htmlFor="password">
        <i className="fas fa-lock"></i>
      </label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Contraseña"
        required
      />
    </div>
    {error && <p className="error">{error}</p>}
    <button type="submit">Iniciar sesión</button>
  </form>
</div>


  );
  
}

export default AdminLogin;