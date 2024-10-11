import { all } from 'redux-saga/effects';
import sampleSaga from './sampleRedux/saga';

export default function* rootSaga() {
  yield all([
    sampleSaga(),
  ]);
}
