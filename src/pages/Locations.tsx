import React, { useContext } from 'react';
import LocationsContext from '../contexts/LocationsContext';
import LocationCard from '../components/LocationCard';

const Locations: React.FC = () => {
  const { locations, loadMoreLocations } = useContext(LocationsContext)!;

  return (
    <div className="container">
      <h1 className="mt-5">Ubicaciones</h1>
      <div className="row mt-4">
        {locations.map(location => (
          <div className="col-lg-4 col-md-6 mb-4" key={location.id}>
            <LocationCard location={location} />
          </div>
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-primary mt-4" onClick={loadMoreLocations}>
          Cargar más
        </button>
      </div>
    </div>
  );
};

export default Locations;