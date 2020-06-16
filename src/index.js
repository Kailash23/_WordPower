import React from 'react';
import Navigator from './navigations';
import {Provider} from 'react-redux';
import configureStore from './redux/configureStore';
import {PersistGate} from 'redux-persist/integration/react';
import {YellowBox} from 'react-native';
const {store, persistor} = configureStore();

YellowBox.ignoreWarnings(['VirtualizedLists should never be nested']);

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Navigator />
    </PersistGate>
  </Provider>
);

export default App;
