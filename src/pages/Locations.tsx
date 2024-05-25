import React, { useContext } from 'react';
import LocationsContext from '../contexts/LocationsContext';
import LocationCard from '../components/LocationCard';

const Locations: React.FC = () => {
  const { locations, loadMoreLocations } = useContext(LocationsContext)!;

  return (
    <div>
      <h1>Ubicaciones</h1>
      <div>
        {locations.map(location => (
          <LocationCard key={location.id} location={location} />
        ))}
      </div>
      <button onClick={loadMoreLocations}>Cargar más</button>
    </div>
  );
};

export default Locations;