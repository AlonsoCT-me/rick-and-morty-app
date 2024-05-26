import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import { useAuth } from '../contexts/AuthContext';

const Login: React.FC = () => {
  const { login } = useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    login(); // Aquí podrías implementar la lógica de autenticación real si lo deseas
  };

  if (isLoggedIn) {
    return (
      <div className="container">
        <p className="mt-5">¡Ya estás conectado!</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h2 className="mt-5">Iniciar sesión</h2>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default Login;