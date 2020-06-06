import {combineReducers} from 'redux';
import words from './words';

const wordPowerApp = combineReducers({
  words,
});

export default wordPowerApp;
