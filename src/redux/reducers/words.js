import * as TYPES from '../actions/types';

const words = (state = {}, action) => {
  switch (action.type) {
    case TYPES.ADD_WORD:
      return {
        ...action.word,
        ...state,
      };
    default:
      return state;
  }
};

export default words;
