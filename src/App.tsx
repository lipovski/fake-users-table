import React from 'react';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import rootReducer from './slices';

import Dashboard from './UI/Dashboard';

const App: React.FC = () => {
  const store = configureStore({ reducer: rootReducer });

  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
};
export default App;
