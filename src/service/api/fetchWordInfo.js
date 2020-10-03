import {readFile, DocumentDirectoryPath} from 'react-native-fs';
import {displayToast} from '../../utils';

const generatePath = word => {
  const basePath = DocumentDirectoryPath + '/WordPowerDB/WordDB';
  return `${basePath}/${word[0]}/${word.substring(0, 3)}-db.json`;
};

export function fetchWordInfo(word) {
  return new Promise(async (resolve, reject) => {
    let path = generatePath(word);
    try {
      const output = await readFile(path);
      const info = JSON.parse(output)[word];

      if (info) {
        displayToast(`Saved ${word} !`);
        resolve(info);
      } else {
        displayToast(`No definitions found - ${word}`);
        reject();
      }
    } catch (e) {
      displayToast(`No definitions found - ${word}`);
      reject();
    }
  });
}
