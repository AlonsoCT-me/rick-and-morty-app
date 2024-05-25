import React, { createContext, useState, ReactNode, useContext } from 'react';

interface Favorite {
  id: number;
  type: 'character' | 'location';
  data: any;
}

interface FavoritesContextProps {
  favorites: Favorite[];
  addFavorite: (favorite: Favorite) => void;
  removeFavorite: (id: number, type: 'character' | 'location') => void;
}

const FavoritesContext = createContext<FavoritesContextProps | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<Favorite[]>([]);

  const addFavorite = (favorite: Favorite) => {
    setFavorites(prevFavorites => [...prevFavorites, favorite]);
  };

  const removeFavorite = (id: number, type: 'character' | 'location') => {
    setFavorites(prevFavorites => prevFavorites.filter(f => f.id !== id || f.type !== type));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);

export default FavoritesContext;