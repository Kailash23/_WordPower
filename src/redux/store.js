import {configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import rootReducer from './slices/wordsSlice';
import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas';
import reactotron from '../../reactotron';
import Reactotron from 'reactotron-react-native';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

// create our new saga monitor
const sagaMonitor = Reactotron.createSagaMonitor();

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware({sagaMonitor});

let store = configureStore({
  reducer: persistedReducer,
  middleware: [sagaMiddleware, thunk],
  enhancers: (__DEV__ && [reactotron.createEnhancer()]) || undefined,
});

// Redux persist
let persistor = persistStore(store);

//Redux Saga
sagaMiddleware.run(mySaga);

export {store, persistor};
