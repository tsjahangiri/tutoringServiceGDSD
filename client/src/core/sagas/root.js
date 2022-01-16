// @flow
import { all, fork } from "redux-saga/effects";
import type { Saga } from "redux-saga";
import tutorSaga from "./tutor";
import userSaga from "./user";
<<<<<<< HEAD
<<<<<<< HEAD
import courseSaga from "./course"

export default function* rootSaga(): Saga<void> {
  yield all([fork(tutorSaga), fork(userSaga), fork(courseSaga)]);
=======
import studentShowSaga from "./studentShow"

export default function* rootSaga(): Saga<void> {
  yield all([fork(tutorSaga), fork(userSaga), fork(studentShowSaga)]);
>>>>>>> origin/frontend_hasib
=======
import courseSaga from "./course"
import studentShowSaga from "./studentShow"

export default function* rootSaga(): Saga<void> {
  yield all([fork(tutorSaga), fork(userSaga), fork(studentShowSaga), fork(courseSaga)]);
>>>>>>> origin/frontend_hasib
}
