import React, {useState, useRef} from 'react';
import {View, Button, Text, ToastAndroid, StyleSheet} from 'react-native';
import {
  readDir,
  DocumentDirectoryPath,
  unlink,
  downloadFile,
  exists,
} from 'react-native-fs';
import throttle from 'lodash/throttle';
import {unzip, subscribe} from 'react-native-zip-archive';
import ProgressCircle from 'react-native-progress/Circle';

const path = `${DocumentDirectoryPath}/WordPowerDB.zip`;

const LoadDatabase = () => {
  const [progress, setProgress] = useState(0);
  const [disableDownloadBtn, setDisableDownloadBtn] = useState(false);
  const [message, setMessage] = useState(
    'Download the database and enjoy the offline experience!',
  );

  const getAllFiles = () => {
    return new Promise((resolve, reject) => {
      readDir(DocumentDirectoryPath)
        .then(async result => resolve(result.map(item => item.name)))
        .catch(e => reject(e));
    });
  };

  const updateProgressUI = useRef(
    throttle(val => {
      setMessage(val < 0.5 ? 'Downloading...' : 'Few seconds left...');
      setProgress(val);
    }, 500),
  ).current;

  const downloadWordDatabase = async () => {
    let url =
      'https://download1655.mediafire.com/4cqyaw8tdqgg/r3u3dyt2f2fdfne/WordPowerDB.zip';
    const downloadPromise = downloadFile({
      fromUrl: url,
      toFile: path,
      progress: function({contentLength, jobId, bytesWritten}) {
        if (jobId === downloadPromise?.jobId) {
          let newProgress = Math.abs(bytesWritten) / contentLength;
          updateProgressUI(newProgress / 2);
        }
      },
    });

    const {statusCode} = await downloadPromise.promise;
    if (statusCode === 200) {
      console.log('File Downloaded');
      ToastAndroid.show('Database downloaded!', ToastAndroid.SHORT);
      unZipDatabaseFiles();
    } else {
      handleDownFailure(statusCode);
    }
  };

  const unZipDatabaseFiles = () => {
    const subscription = subscribe(({progress}) => {
      updateProgressUI((1 + progress) / 2);
    });

    unzip(path, DocumentDirectoryPath)
      .then(async () => {
        deleteZippedDb();
        setDisableDownloadBtn(false);
        setProgress(1);
        subscription.remove();
        setTimeout(() => {
          setMessage('Download Complete!');
        }, 100);
      })
      .catch(e => {
        handleDownFailure(e);
      });
  };

  const handleDownFailure = msg => {
    setProgress(0);
    setDisableDownloadBtn(false);
    console.log('Downloading error', msg);
    ToastAndroid.show('Database download error!', ToastAndroid.SHORT);
  };

  const deleteZippedDb = async () => {
    if (await exists(path)) {
      await unlink(path);
    }
  };

  const onPress = async () => {
    try {
      setMessage('Connecting to the server!');
      deleteZippedDb();
      console.log(await getAllFiles());
      setDisableDownloadBtn(true);
      downloadWordDatabase();
      console.log(await getAllFiles());
    } catch (e) {
      handleDownFailure(e.message);
    }
  };

  return (
    <View style={styles.container}>
      <ProgressCircle
        thickness={10}
        showsText={true}
        strokeCap={'round'}
        progress={progress}
        size={200}
      />
      <Text style={styles.message}>{message}</Text>
      <Button
        title={'Download Database'}
        onPress={onPress}
        color={'#0076FF'}
        disabled={disableDownloadBtn}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
  },
  message: {
    fontFamily: 'OpenSans-Bold',
    color: '#0076FF',
    textAlign: 'center',
    fontSize: 20,
  },
  button: {
    borderRadius: 10,
  },
});

export default LoadDatabase;
