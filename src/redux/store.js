import {configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import rootReducer from './slices/wordsSlice';
import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas';
import thunk from 'redux-thunk';
import Reactotron from 'reactotron-react-native';
import reactotronConfig from '../service/reactotron';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const sagaMonitor = Reactotron.createSagaMonitor();

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware({sagaMonitor});

let store = configureStore({
  reducer: persistedReducer,
  middleware: [sagaMiddleware, thunk],
  devTools: (__DEV__ && reactotronConfig.createEnhancer()) || undefined,
});

// Redux persist
let persistor = persistStore(store);

//Redux Saga
sagaMiddleware.run(mySaga);

export {store, persistor};
