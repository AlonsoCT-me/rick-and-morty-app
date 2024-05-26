import React, { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';
import { useFavorites } from '../contexts/FavoritesContext';
import CharacterCard from '../components/CharacterCard';
import LocationCard from '../components/LocationCard';

const Favorites: React.FC = () => {
  const { isAuthenticated } = useContext(AuthContext)!;
  const { favorites, removeFavorite } = useFavorites()!;

  if (!isAuthenticated) {
    return (
      <div className="container">
        <p className="mt-5">Por favor, inicie sesión para ver sus favoritos.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="mt-5">Favoritos</h1>
      <div className="row mt-4">
        {favorites.map(favorite => (
          <div className="col-lg-4 col-md-6 mb-4" key={favorite.id}>
            {favorite.type === 'character' ? (
              <div className="card">
                <CharacterCard character={favorite.data} />
                <div className="card-footer">
                  <button className="btn btn-danger" onClick={() => removeFavorite(favorite.id, 'character')}>
                    Eliminar
                  </button>
                </div>
              </div>
            ) : (
              <div className="card">
                <LocationCard location={favorite.data} />
                <div className="card-footer">
                  <button className="btn btn-danger" onClick={() => removeFavorite(favorite.id, 'location')}>
                    Eliminar
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;