import React, {useState, useCallback, useEffect} from 'react';
import {
  View,
  Text,
  ToastAndroid,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import throttle from 'lodash/throttle';
import {subscribe} from 'react-native-zip-archive';
import ProgressCircle from 'react-native-progress/Circle';
import {downloadDb} from '../api/LoadDataOffline';
import RNBootSplash from 'react-native-bootsplash';

const LoadDatabase = ({navigation}) => {
  const [progress, setProgress] = useState(0);
  const [disableDownloadBtn, setDisableDownloadBtn] = useState(false);
  const [message, setMessage] = useState(
    'Download the database and enjoy the offline experience!',
  );

  useEffect(() => {
    const subscription = subscribe(({progress: newProgress}) => {
      updateProgressUI((1 + newProgress) / 2);
    });
    RNBootSplash.hide({duration: 250});
    return () => {
      subscription.remove();
    };
  }, []);

  const updateProgressUI = useCallback(
    throttle(val => {
      if (val !== 1) {
        setMessage(val < 0.5 ? 'Downloading...' : 'Few seconds left...');
        setProgress(val);
      }
    }, 1000),
    [],
  );

  const downloadWordDatabase = async () => {
    let promise = downloadDb(newProgress => {
      updateProgressUI(newProgress / 2);
    });

    promise.catch(handleDownFailure);

    let {statusCode} = await promise;

    if (statusCode === 200) {
      console.log('File Downloaded');
      setProgress(1);
      setMessage('Download Complete!');
      setTimeout(() => {
        navigation.replace('AppNavigator');
      }, 1000);
    }
  };

  const handleDownFailure = msg => {
    setTimeout(() => {
      setProgress(0);
      setDisableDownloadBtn(false);
      setMessage('Something went wrong, please try again!');
    }, 1000);
    console.log('Downloading error', msg);
    ToastAndroid.show('Database download error!', ToastAndroid.SHORT);
  };

  const onPress = async () => {
    setMessage('Connecting to the server!');
    setDisableDownloadBtn(true);
    downloadWordDatabase();
  };

  return (
    <View style={styles.container}>
      <ProgressCircle
        thickness={10}
        showsText={true}
        strokeCap={'round'}
        color={'white'}
        progress={progress}
        size={200}
      />
      <Text style={styles.message}>{message}</Text>
      <TouchableOpacity
        disabled={disableDownloadBtn}
        style={[styles.loadBtn, disableDownloadBtn && styles.disableBtn]}
        onPress={onPress}
        activeOpacity={0.7}>
        <Text style={styles.btnTitle}>Load Database</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#5A5B99',
  },
  message: {
    fontFamily: 'OpenSans-SemiBold',
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
  loadBtn: {
    width: '60%',
    backgroundColor: 'white',
    aspectRatio: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 3,
    shadowColor: 'rgba(0,0,0, .4)',
    shadowOffset: {height: 1, width: 1},
    shadowOpacity: 1,
    shadowRadius: 1,
  },
  disableBtn: {
    backgroundColor: '#141518',
  },
  btnTitle: {
    color: '#5A5B99',
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
  },
});

export default LoadDatabase;
