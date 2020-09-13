import {readFile, DocumentDirectoryPath} from 'react-native-fs';
import pMemoize from 'promise-memoize';

const generatePath = partialWord => {
  const basePath = DocumentDirectoryPath + '/WordPowerDB/WordAC';
  return `${basePath}/${partialWord[0]}/${partialWord}-ac.json`;
};

export const memGetSuggestions = pMemoize(getSuggestions, {maxAge: 30000});

function getSuggestions(partialWord) {
  return new Promise(async resolve => {
    let path = generatePath(partialWord);
    try {
      let output = await readFile(path);
      resolve(JSON.parse(output));
    } catch (e) {
      console.log('Fetching suggestions : ', e);
      resolve([]);
    }
  });
}
