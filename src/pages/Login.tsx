import React, { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';

const Login: React.FC = () => {
  const { isAuthenticated, login, logout } = useContext(AuthContext)!;

  return (
    <div>
      <h1>{isAuthenticated ? 'Bienvenido' : 'Por favor, inicie sesión'}</h1>
      {isAuthenticated ? (
        <button onClick={logout}>Cerrar sesión</button>
      ) : (
        <button onClick={login}>Iniciar sesión</button>
      )}
    </div>
  );
};

export default Login;

