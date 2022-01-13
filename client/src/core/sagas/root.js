// @flow
import { all, fork } from "redux-saga/effects";
import type { Saga } from "redux-saga";
import tutorSaga from "./tutor";

export default function* rootSaga(): Saga<void> {
  yield all([fork(tutorSaga)]);
}
