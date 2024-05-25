import React, { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';
import { useFavorites } from '../contexts/FavoritesContext';
import CharacterCard from '../components/CharacterCard';
import LocationCard from '../components/LocationCard';

const Favorites: React.FC = () => {
  const { isAuthenticated } = useContext(AuthContext)!;
  const { favorites, removeFavorite } = useFavorites()!;

  if (!isAuthenticated) {
    return <p>Por favor, inicie sesión para ver sus favoritos.</p>;
  }

  return (
    <div>
      <h1>Favoritos</h1>
      <div>
        {favorites.map(favorite => {
          if (favorite.type === 'character') {
            return (
              <div key={favorite.id}>
                <CharacterCard character={favorite.data} />
                <button onClick={() => removeFavorite(favorite.id, 'character')}>Eliminar</button>
              </div>
            );
          } else {
            return (
              <div key={favorite.id}>
                <LocationCard location={favorite.data} />
                <button onClick={() => removeFavorite(favorite.id, 'location')}>Eliminar</button>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Favorites;