import {readFile, DocumentDirectoryPath} from 'react-native-fs';
import {ToastAndroid} from 'react-native';

const generatePath = word => {
  const basePath = DocumentDirectoryPath + '/WordPowerDB/WordDB';
  return `${basePath}/${word[0]}/${word.substring(0, 3)}-db.json`;
};

const showToast = (info, word) => {
  let capitalisedWord = `${word.charAt(0).toUpperCase() + word.slice(1)}`;
  let message;
  if (!info) {
    message = `No definitions found for this word - ${capitalisedWord}`;
  } else {
    message = `${capitalisedWord} Saved!`;
  }
  ToastAndroid.show(message, ToastAndroid.LONG);
};

export function fetchWordInfo(word) {
  return new Promise(async resolve => {
    let path = generatePath(word);
    try {
      const output = await readFile(path);
      const info = JSON.parse(output)[word];
      showToast(info, word);
      resolve(info);
    } catch (e) {
      console.log('No definitions found for this word : ', e);
      resolve(false);
    }
  });
}
