import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Locations from './pages/Locations';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import NavigationMenu from './components/NavigationMenu';
import { AuthProvider } from './contexts/AuthContext';
import { CharactersProvider } from './contexts/CharactersContext';
import { LocationsProvider } from './contexts/LocationsContext';
import { FavoritesProvider } from './contexts/FavoritesContext';

import './styles/global.scss';

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <CharactersProvider>
          <LocationsProvider>
            <FavoritesProvider>
              <NavigationMenu />
              <Routes>
                <Route path="/locations" element={<Locations />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Home />} />
              </Routes>
            </FavoritesProvider>
          </LocationsProvider>
        </CharactersProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;