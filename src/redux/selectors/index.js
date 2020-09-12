import {createSelector} from 'reselect';
import {map} from 'lodash/collection';

export const getWordsList = createSelector(
  state => state.words,
  words => {
    return map(words, (value, key) => {
      return {[key]: value};
    });
  },
);
