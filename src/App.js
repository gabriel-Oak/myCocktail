import React, { Component } from 'react';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { Provider as ThemeProvider } from 'react-native-paper';
import CodePush from 'react-native-code-push';
import OneSignal from 'react-native-onesignal';

import reducers from './reducers';
import Router from './Router';
import { theme } from './shared/theme/';
import Dialogue from './shared/components/Dialogue';

const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

const CODE_PUSH = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME
}


class App extends Component {
  constructor(props) {
    super(props);

    OneSignal.init('34624390-c827-4ffe-a28f-25d35984bfa7');
    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opnened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onOpened(data) {

  }

  onReceived(notification) {

  }

  onIds(id) {

  }

  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>

          <Router />
          <Dialogue />
          
        </ThemeProvider>
      </Provider>
    );
  }
};

export default CodePush(CODE_PUSH)(App);
