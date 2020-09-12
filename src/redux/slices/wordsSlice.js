import {createSlice} from '@reduxjs/toolkit';

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
