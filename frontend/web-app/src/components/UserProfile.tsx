import React from 'react';

interface UserProfileProps {
  username: string;
  reputation: number;
  points: number;
}

const UserProfile: React.FC<UserProfileProps> = ({ username, reputation, points }) => {
  return (
    <div className="user-profile">
      <h2>{username}</h2>
      <p>Reputation: {reputation}</p>
      <p>Points: {points}</p>
    </div>
  );
};

export default UserProfile;
