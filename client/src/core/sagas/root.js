// @flow
import { all, fork } from "redux-saga/effects";
import type { Saga } from "redux-saga";
import tutorSaga from "./tutor";
import userSaga from "./user";
import courseSaga from "./course"
import studentShowSaga from "./studentShow"
import qualificationSaga from "./qualification"
import offerCourseSaga from "./offerCourse"

export default function* rootSaga(): Saga<void> {
  yield all([fork(tutorSaga), fork(userSaga), fork(courseSaga), fork(studentShowSaga), fork(qualificationSaga), fork(offerCourseSaga)]);
}
