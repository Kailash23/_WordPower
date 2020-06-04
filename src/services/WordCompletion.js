import {readFile, DocumentDirectoryPath} from 'react-native-fs';
import pMemoize from 'promise-memoize';

const generatePath = partialWord => {
  const basePath = DocumentDirectoryPath + '/WordPowerDB/WordMap';
  return `${basePath}/${partialWord[0]}/${partialWord}-map.json`;
};

export const memGetSuggestions = pMemoize(getSuggestions, {maxAge: 20000});

function getSuggestions(partialWord) {
  return new Promise(async resolve => {
    let path = generatePath(partialWord);
    try {
      let output = await readFile(path);
      console.log('<Heavy call>')
      resolve(JSON.parse(output));
    } catch (e) {
      console.log('Fetching suggestions : ', e);
      resolve([]);
    }
  });
}
