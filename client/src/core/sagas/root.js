// @flow
import { all, fork } from 'redux-saga/effects';
import type { Saga } from 'redux-saga';
import homeSaga from '../../pages/home/sagas';

export default function* rootSaga(): Saga<void> {
  yield all([
    fork(homeSaga),
  ]);
}
