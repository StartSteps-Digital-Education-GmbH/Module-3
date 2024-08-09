// Task 3: Create a UserCard Component
import React from 'react';
import { SocialNetworkUser } from '../interfaces';

interface UserCardProps {
  user: SocialNetworkUser;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div>
      <h2>{user.name} {user.lastName}</h2>
      <p>{user.statusMessage}</p>
    </div>
  );
};

export default UserCard;
