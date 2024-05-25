import React from 'react';
import { useFavorites } from '../contexts/FavoritesContext';

interface Character {
  id: number;
  name: string;
  image: string;
}

const CharacterCard: React.FC<{ character: Character }> = ({ character }) => {
  const { addFavorite } = useFavorites()!;

  const handleAddFavorite = () => {
    addFavorite({ id: character.id, type: 'character', data: character });
  };

  return (
    <div>
      <img src={character.image} alt={character.name} />
      <h2>{character.name}</h2>
      <button onClick={handleAddFavorite}>Agregar a favoritos</button>
    </div>
  );
};

export default CharacterCard;