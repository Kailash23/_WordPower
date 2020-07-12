import {ToastAndroid} from 'react-native';

export default message => {
  if (message) {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  }
};
