import React, { createContext, useState, ReactNode, useEffect, useCallback } from 'react';
import axios from 'axios';

interface Location {
  id: number;
  name: string;
}

interface LocationsContextProps {
  locations: Location[];
  loadMoreLocations: () => void;
}

const LocationsContext = createContext<LocationsContextProps | undefined>(undefined);

export const LocationsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [page, setPage] = useState(1);

  const loadMoreLocations = useCallback(async () => {
    const response = await axios.get(`https://rickandmortyapi.com/api/location?page=${page}`);
    setLocations(prevLocations => [...prevLocations, ...response.data.results]);
    setPage(prevPage => prevPage + 1);
  }, [page]);

  useEffect(() => {
    loadMoreLocations();
  }, [loadMoreLocations]);

  return (
    <LocationsContext.Provider value={{ locations, loadMoreLocations }}>
      {children}
    </LocationsContext.Provider>
  );
};

export default LocationsContext;