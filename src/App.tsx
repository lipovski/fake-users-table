import React from 'react';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const App: React.FC = () => {
  const store = configureStore();

  return (
    <Provider store={store}>
      <div className="App">yo</div>
    </Provider>
  );
};
export default App;
