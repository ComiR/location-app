import React from 'react';

interface Location {
  name: string;
  description: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
}

interface LocationListProps {
  locations: Location[];
}

const LocationList: React.FC<LocationListProps> = ({ locations }) => {
  return (
    <div className="location-list">
      {locations.map((location, index) => (
        <div key={index} className="location-item">
          <h3>{location.name}</h3>
          <p>{location.description}</p>
          <p>
            Coordinates: {location.coordinates.latitude}, {location.coordinates.longitude}
          </p>
        </div>
      ))}
    </div>
  );
};

export default LocationList;
