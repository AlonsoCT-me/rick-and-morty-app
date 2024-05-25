import React from 'react';
import { Link } from 'react-router-dom';

const NavigationMenu: React.FC = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/locations">Ubicaciones</Link></li>
        <li><Link to="/favorites">Favoritos</Link></li>
        <li><Link to="/login">Inicio de sesión</Link></li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;