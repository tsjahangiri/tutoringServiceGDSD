// @flow
import { all, fork } from "redux-saga/effects";
import type { Saga } from "redux-saga";
import tutorSaga from "./tutor";
import userSaga from "./user";
import courseSaga from "./course"
import studentShowSaga from "./studentShow"

export default function* rootSaga(): Saga<void> {
  yield all([fork(tutorSaga), fork(userSaga), fork(studentShowSaga), fork(courseSaga)]);
}
