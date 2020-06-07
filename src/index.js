import React from 'react';
import Navigator from './navigations';
import {Provider} from 'react-redux';
import configureStore from './redux/configureStore';
import {PersistGate} from 'redux-persist/integration/react';
import RNBootSplash from 'react-native-bootsplash';
import {StatusBar} from 'react-native';
const {store, persistor} = configureStore();

RNBootSplash.show();

const App = () => (
  <Provider store={store}>
    <StatusBar backgroundColor="#5a5b99" />
    <PersistGate loading={null} persistor={persistor}>
      <Navigator />
    </PersistGate>
  </Provider>
);

export default App;
