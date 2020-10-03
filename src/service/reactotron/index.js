import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {reactotronRedux as reduxPlugin} from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

if (__DEV__) {
  var reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure()
    .use(reduxPlugin())
    .use(sagaPlugin())
    .useReactNative()
    .connect();

  console.tron = reactotron;
  console.rtron = reactotron.logImportant;
}

export default reactotron;
