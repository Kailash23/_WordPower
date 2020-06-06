import * as TYPES from './types';

export const addWord = word => ({
  type: TYPES.ADD_WORD,
  word: word,
});
