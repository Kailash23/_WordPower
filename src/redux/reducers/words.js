import * as TYPES from '../actions/types';

const words = (state = {}, action) => {
  switch (action.type) {
    case TYPES.WORD_FETCH_SUCCEEDED:
      return {
        ...action.word,
        ...state,
      };
    default:
      return state;
  }
};

export default words;
