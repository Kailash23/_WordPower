import * as TYPES from './types';

export const saveWord = word => ({
  type: TYPES.WORD_FETCH_REQUEST,
  word: word,
});
