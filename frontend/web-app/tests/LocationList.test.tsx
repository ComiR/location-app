import React from 'react';
import { render } from '@testing-library/react';
import LocationList from '../src/components/LocationList';

describe('LocationList', () => {
  it('renders location information correctly', () => {
    const locations = [
      {
        name: 'Location 1',
        description: 'Description 1',
        coordinates: { latitude: 10, longitude: 20 },
      },
      {
        name: 'Location 2',
        description: 'Description 2',
        coordinates: { latitude: 30, longitude: 40 },
      },
    ];

    const { getByText } = render(<LocationList locations={locations} />);

    expect(getByText('Location 1')).toBeInTheDocument();
    expect(getByText('Description 1')).toBeInTheDocument();
    expect(getByText('Coordinates: 10, 20')).toBeInTheDocument();

    expect(getByText('Location 2')).toBeInTheDocument();
    expect(getByText('Description 2')).toBeInTheDocument();
    expect(getByText('Coordinates: 30, 40')).toBeInTheDocument();
  });
});
