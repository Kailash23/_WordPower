import React from 'react';
import Navigator from './navigation';
import {Provider} from 'react-redux';
import configureStore from './redux/configureStore';
import {PersistGate} from 'redux-persist/integration/react';
import {YellowBox} from 'react-native';
import Reactotron from 'reactotron-react-native';

const {store, persistor} = configureStore();

if (__DEV__) {
  import('../reactotron.js').then(() => {
    Reactotron.clear();
    console.log('Reactotron Configured!');
  });
}

YellowBox.ignoreWarnings(['VirtualizedLists should never be nested']);

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} {...{persistor}}>
      <Navigator />
    </PersistGate>
  </Provider>
);

export default App;
