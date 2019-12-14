import React from 'react';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { Provider as ThemeProvider } from 'react-native-paper';

import reducers from './reducers';
import Router from './Router';
import { theme } from './shared/theme/';
import Dialogue from './shared/components/Dialogue';

const store = createStore(
  reducers,
  applyMiddleware(thunk)
);


const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>

        <Router />
        <Dialogue />
        
      </ThemeProvider>
    </Provider>
  );
};

export default App;
