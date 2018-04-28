import React from 'react';
import { store } from './store';

export const defaultContext = {
  store
};

export const GlobalContext = React.createContext(defaultContext);