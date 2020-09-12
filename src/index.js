import './utils/ignore-warnings';
import React from 'react';
import Navigator from './navigation';
import {Provider} from 'react-redux';
import {store, persistor} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  import('../reactotron.js').then(() => {
    Reactotron.clear();
  });
}

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} {...{persistor}}>
      <Navigator />
    </PersistGate>
  </Provider>
);

export default App;
