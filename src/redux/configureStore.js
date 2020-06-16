import {createStore, applyMiddleware, compose} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas';
import reactotron from '../../reactotron';
import Reactotron from 'reactotron-react-native';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

// create our new saga monitor
const sagaMonitor = Reactotron.createSagaMonitor();

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware({sagaMonitor});

const configureStore = () => {
  let store = createStore(
    persistedReducer,
    compose(
      applyMiddleware(sagaMiddleware),
      (__DEV__ && reactotron.createEnhancer()) || undefined,
    ),
  );
  let persistor = persistStore(store);
  sagaMiddleware.run(mySaga);
  return {store, persistor};
};

export default configureStore;
