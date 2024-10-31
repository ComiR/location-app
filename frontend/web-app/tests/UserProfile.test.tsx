import React from 'react';
import { render } from '@testing-library/react';
import UserProfile from '../src/components/UserProfile';

describe('UserProfile', () => {
  it('renders user information correctly', () => {
    const { getByText } = render(
      <UserProfile username="testuser" reputation={100} points={200} />
    );

    expect(getByText('testuser')).toBeInTheDocument();
    expect(getByText('Reputation: 100')).toBeInTheDocument();
    expect(getByText('Points: 200')).toBeInTheDocument();
  });
});
