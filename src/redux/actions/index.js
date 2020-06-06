import * as actionTypes from './types';

export const addWord = word => {
  return {
    type: actionTypes.ADD_WORD,
    word: word,
  };
};
