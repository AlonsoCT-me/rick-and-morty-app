import React, { createContext, useState, ReactNode, useEffect, useCallback } from 'react';
import axios from 'axios';

interface Character {
  id: number;
  name: string;
  image: string;
}

interface CharactersContextProps {
  characters: Character[];
  loadMoreCharacters: () => void;
}

const CharactersContext = createContext<CharactersContextProps | undefined>(undefined);

export const CharactersProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState(1);

  const loadMoreCharacters = useCallback(async () => {
    const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);
    setCharacters(prevCharacters => [...prevCharacters, ...response.data.results]);
    setPage(prevPage => prevPage + 1);
  }, [page]);

  useEffect(() => {
    loadMoreCharacters();
  }, [loadMoreCharacters]);

  return (
    <CharactersContext.Provider value={{ characters, loadMoreCharacters }}>
      {children}
    </CharactersContext.Provider>
  );
};

export default CharactersContext;