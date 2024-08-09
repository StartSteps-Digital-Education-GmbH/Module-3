"use client"; // Mark this component as a client component

import React, { Component } from 'react';
import UserCard from './UserCard';
import { users } from '../data';
import { SocialNetworkUser } from '../interfaces';

// Bonus Task: Incorporate React Class Components

// Define the state interface for the UserList component
interface UserListState {
  users: SocialNetworkUser[];
}

// Create the UserList class component
class UserList extends Component<{}, UserListState> {
  // Initialize the state with the users array
  constructor(props: {}) {
    super(props);
    this.state = {
      users: users,
    };
  }

  // Render method to display the list of users using UserCard component
  render() {
    return (
      <div>
        {this.state.users.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </div>
    );
  }
}

export default UserList;
