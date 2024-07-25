// Task 4: Create a Feed Page to Display All Users
import React from 'react';
import { users } from './data';
import UserCard from './components/UserCard';

const Feed: React.FC = () => {
  return (
    <div>
      {users.map((user, index) => (
        <UserCard key={index} user={user} />
      ))}
    </div>
  );
};

export default Feed;
