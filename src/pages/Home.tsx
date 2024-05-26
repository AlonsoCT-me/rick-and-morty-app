import React, { useContext } from 'react';
import CharactersContext from '../contexts/CharactersContext';
import CharacterCard from '../components/CharacterCard';

const Home: React.FC = () => {
  const { characters, loadMoreCharacters } = useContext(CharactersContext)!;

  return (
    <div className="container">
      <h1 className="mt-5">Personajes</h1>
      <div className="row mt-4">
        {characters.map(character => (
          <div className="col-lg-4 col-md-6 mb-4" key={character.id}>
            <CharacterCard character={character} />
          </div>
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-primary mt-4" onClick={loadMoreCharacters}>
          Cargar más
        </button>
      </div>
    </div>
  );
};

export default Home;