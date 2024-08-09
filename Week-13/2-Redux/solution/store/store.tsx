"use client";

import * as React from 'react';
import { Provider } from 'react-redux'; // Ensure this import is correct
import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';

// EXPLANATION:
// The store.tsx file sets up and configures the Redux store, which holds the state of your application.
// The Provider component from react-redux makes the Redux store available to any nested components
//that need to access the Redux state. This setup ensures that your React components can interact with
// the Redux store, allowing for centralized state management.

// Create the Redux store using configureStore from @reduxjs/toolkit
const store = configureStore({ reducer });

// StoreWrapper component to wrap the application with Redux Provider
const StoreWrapper: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreWrapper;
