import {call, put, takeLatest} from 'redux-saga/effects';
import {fetchWordInfo} from '../../service/api';
import {addWord, fetchWordDefinition} from '../slices/wordsSlice';

function* fetchWordDef(action) {
  try {
    const wordDef = yield call(fetchWordInfo, action.payload);
    yield put({
      type: addWord.type,
      payload: {
        word: action.payload,
        definition: wordDef,
      },
    });
    console.log(addWord.type);
  } catch (e) {
    console.log(e);
  }
}

function* mySaga() {
  yield takeLatest(fetchWordDefinition.type, fetchWordDef);
}

export default mySaga;
