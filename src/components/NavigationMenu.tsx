import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import AuthStatus from './AuthStatus';

const NavigationMenu: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">Inicio</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/locations">Ubicaciones</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/favorites">Favoritos</Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            {!isAuthenticated ? (
              <li className="nav-item">
                <Link className="nav-link" to="/login">Inicio de sesión</Link>
              </li>
            ) : (
              <li className="nav-item">
                <button className="btn btn-outline-primary" onClick={logout}>Cerrar sesión</button>
              </li>
            )}
            <li className="nav-item">
              <AuthStatus />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationMenu;