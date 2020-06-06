import * as actionTypes from '../actions/types';

const words = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.ADD_WORD:
      return {
        ...action.word,
        ...state,
      };
    default:
      return state;
  }
};

export default words;
