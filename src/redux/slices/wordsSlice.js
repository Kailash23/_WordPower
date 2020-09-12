import {createAction, createSlice} from '@reduxjs/toolkit';

export const fetchWordDefinition = createAction('FETCH_WORD');

const wordsSlice = createSlice({
  name: 'words',
  initialState: {},
  reducers: {
    addWord(state, action) {
      const {word, definition} = action.payload;
      state.words[word] = definition;
    },
  },
});

export const {addWord} = wordsSlice.actions;

export default wordsSlice.reducer;
