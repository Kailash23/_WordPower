import React from 'react';
import Navigator from './navigations';
import {Provider} from 'react-redux';
import configureStore from './redux/configureStore';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);

export default App;
