import {readDir, readFile, DocumentDirectoryPath} from 'react-native-fs';
import pMemoize from 'promise-memoize';

const basePath = DocumentDirectoryPath + '/WordPowerDB/WordMap';

const generatePath = partialWord => {
  return `${basePath}/${partialWord[0]}/${partialWord}-map.json`;
};

export const memGetSuggestions = pMemoize(getSuggestions, {maxAge: 20000});

async function getSuggestions(partialWord) {
  return new Promise(async resolve => {
    if (partialWord.length === 3) {
      let path = generatePath(partialWord);
      try {
        console.log('deep dive');
        let words = await readFile(path);
        resolve(JSON.parse(words));
      } catch (e) {
        console.log('Fetching suggestions : ', e);
        resolve([]);
      }
    } else {
      resolve([]);
    }
  });
}
