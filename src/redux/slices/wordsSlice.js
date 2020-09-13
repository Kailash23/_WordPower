import {createAction, createSlice} from '@reduxjs/toolkit';

export const fetchWordDefinition = createAction('FETCH_WORD');

const initialState = {
  words: {},
};

const wordsSlice = createSlice({
  initialState,
  name: 'words',
  reducers: {
    addWord(state, action) {
      const {word, definition} = action.payload;
      state.words = {
        [word]: definition,
        ...state.words,
      };
    },
    deleteWord(state, action) {
      delete state.words[action.payload];
    },
  },
});

export const {addWord, deleteWord} = wordsSlice.actions;

export default wordsSlice.reducer;
