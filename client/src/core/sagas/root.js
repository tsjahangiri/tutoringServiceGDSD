// @flow
import { all, fork } from "redux-saga/effects";
import type { Saga } from "redux-saga";
import tutorSaga from "./tutor";
import userSaga from "./user";
import courseSaga from "./course";
import offerCourseSaga from "./offerCourse";
import qualificationSaga from "./qualification";
import profilePictureSaga from "./profilePicture";
import fileUploadSaga from "./fileUpload";
import manageUsersSaga from "./manageUsers";
import manageTutorsProfile from "./manageTutorsProfile";
<<<<<<< HEAD
import dashboard from "./dashboard";
=======
import feedbackSaga from "./feedback";
>>>>>>> 8f69627dfc17e79cf24870642598d63072d2ea76

export default function* rootSaga(): Saga<void> {
  yield all([
    fork(tutorSaga),
    fork(userSaga),
    fork(courseSaga),
    fork(qualificationSaga),
    fork(offerCourseSaga),
    fork(profilePictureSaga),
    fork(fileUploadSaga),
    fork(manageUsersSaga),
    fork(manageTutorsProfile),
<<<<<<< HEAD
    fork(dashboard),
=======
    fork(feedbackSaga),
>>>>>>> 8f69627dfc17e79cf24870642598d63072d2ea76
  ]);
}
