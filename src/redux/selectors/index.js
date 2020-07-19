import {createSelector} from 'reselect';
import {map} from 'lodash/collection';

export const getWordsList = createSelector(
  (state) => state.words,
  (words) => map(words, (value, key) => ({[key]: value})),
);
