import React from 'react';
import { useFavorites } from '../contexts/FavoritesContext';

interface Location {
  id: number;
  name: string;
}

const LocationCard: React.FC<{ location: Location }> = ({ location }) => {
  const { addFavorite } = useFavorites()!;

  const handleAddFavorite = () => {
    addFavorite({ id: location.id, type: 'location', data: location });
  };

  return (
    <div>
      <h2>{location.name}</h2>
      <button onClick={handleAddFavorite}>Agregar a favoritos</button>
    </div>
  );
};

export default LocationCard;