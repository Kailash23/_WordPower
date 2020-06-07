import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  let store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
  let persistor = persistStore(store);
  sagaMiddleware.run(mySaga);
  return {store, persistor};
};

export default configureStore;
