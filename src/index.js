import React from 'react';
import Navigator from './navigations';
import {Provider} from 'react-redux';
import configureStore from './redux/configureStore';
import {PersistGate} from 'redux-persist/integration/react';
const {store, persistor} = configureStore();

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Navigator />
    </PersistGate>
  </Provider>
);

export default App;
