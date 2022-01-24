// @flow
import { all, fork } from "redux-saga/effects";
import type { Saga } from "redux-saga";
import tutorSaga from "./tutor";
import userSaga from "./user";
import courseSaga from "./course";
import studentShowSaga from "./studentShow";
import offerCourseSaga from "./offerCourse";
import qualificationSaga from "./qualification";
import profilePictureSaga from "./profilePicture";
import pendingTutorListShowSaga from "./PendingTutorShow";
import fileUploadSaga from "./fileUpload"

export default function* rootSaga(): Saga<void> {
  yield all([
    fork(tutorSaga),
    fork(userSaga),
    fork(courseSaga),
    fork(studentShowSaga),
    fork(qualificationSaga),
    fork(offerCourseSaga),
    fork(profilePictureSaga),
    fork(pendingTutorListShowSaga),
    fork(fileUploadSaga),
  ]);
}
