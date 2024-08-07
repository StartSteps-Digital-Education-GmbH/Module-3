"use client";

import * as React from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reducer, { StudentState } from './reducer';
import { StudentAction } from './action';

const store: Store<StudentState, StudentAction> = configureStore({ reducer });

const StoreWrapper: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreWrapper;
