import React from 'react';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { Provider as ThemeProvider } from 'react-native-paper';

import reducers from './reducers';
import Router from './Router';

const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
