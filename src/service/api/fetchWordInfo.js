import {readFile, DocumentDirectoryPath} from 'react-native-fs';
import {ToastAndroid} from 'react-native';

const generatePath = word => {
  const basePath = DocumentDirectoryPath + '/WordPowerDB/WordDB';
  return `${basePath}/${word[0]}/${word.substring(0, 3)}-db.json`;
};

const showToast = message => {
  ToastAndroid.show(message, ToastAndroid.SHORT);
};

export function fetchWordInfo(word) {
  return new Promise(async (resolve, reject) => {
    let path = generatePath(word);
    try {
      const output = await readFile(path);
      const info = JSON.parse(output)[word];

      if (info) {
        showToast(`Saved ${word} !`);
        resolve(info);
      } else {
        showToast(`No definitions found - ${word}`);
        reject();
      }
    } catch (e) {
      showToast(`No definitions found - ${word}`);
      reject();
    }
  });
}
