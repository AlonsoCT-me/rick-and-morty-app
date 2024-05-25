import React, { useContext } from 'react';
import CharactersContext from '../contexts/CharactersContext';
import CharacterCard from '../components/CharacterCard';

const Home: React.FC = () => {
  const { characters, loadMoreCharacters } = useContext(CharactersContext)!;

  return (
    <div>
      <h1>Personajes</h1>
      <div>
        {characters.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
      <button onClick={loadMoreCharacters}>Cargar más</button>
    </div>
  );
};

export default Home;