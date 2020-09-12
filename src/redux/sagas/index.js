import {call, put, takeLatest} from 'redux-saga/effects';
import {fetchWordInfo} from '../../service/api';
import * as TYPES from '../actions/types';

function* fetchWordDef(action) {
  try {
    const wordDef = yield call(fetchWordInfo, action.payload);
    yield put({
      type: TYPES.WORD_FETCH_SUCCEEDED,
      payload: {
        [action.payload]: wordDef,
      },
    });
  } catch (e) {
    console.log(e);
    yield put({type: TYPES.WORD_FETCH_FAILED});
  }
}

function* mySaga() {
  yield takeLatest(TYPES.WORD_FETCH_REQUEST, fetchWordDef);
}

export default mySaga;
