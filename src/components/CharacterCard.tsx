import React from 'react';
import { useFavorites } from '../contexts/FavoritesContext';
import styles from '../styles/CharacterCard.module.scss';

interface Character {
  id: number;
  name: string;
  image: string;
}

const CharacterCard: React.FC<{ character: Character }> = ({ character }) => {
  const { addFavorite, favorites } = useFavorites()!;

  const isFavorite = favorites.some(favorite => favorite.id === character.id && favorite.type === 'character');


  const handleAddFavorite = () => {
    addFavorite({ id: character.id, type: 'character', data: character });
  };

  return (
    <div className={`card ${styles.card}`} style={{ width: '18rem' }}>
      <img src={character.image} className={`card-img-top ${styles['card-img-top']}`} alt={character.name} />
      <div className={`card-body ${styles['card-body']}`}>
        <h5 className={`card-title ${styles['card-title']}`}>{character.name}</h5>
        {!isFavorite && <button className={`btn btn-primary ${styles.btn}`} onClick={handleAddFavorite}>Agregar a favoritos</button>}
        {isFavorite && <button disabled>Ya en favoritos</button>}
      </div>
    </div>
  );
};

export default CharacterCard;