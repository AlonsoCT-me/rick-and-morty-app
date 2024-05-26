import React from 'react';
import { useFavorites } from '../contexts/FavoritesContext';
import styles from '../styles/LocationCard.module.scss';

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
    <div className={`card ${styles.card}`} style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className={`card-title ${styles['card-title']}`}>{location.name}</h5>
        <button className={`btn btn-primary ${styles.btn}`} onClick={handleAddFavorite}>Agregar a favoritos</button>
      </div>
    </div>
  );
};

export default LocationCard;