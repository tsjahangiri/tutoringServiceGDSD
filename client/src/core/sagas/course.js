// @flow
import { takeEvery, call, put } from "redux-saga/effects";
import { executeApiCall } from "./api";
import type { Saga } from "redux-saga";
import { SAVE_COURSE } from "../actionTypes/course";
import {
  saveCourseSuccess,
  saveCourseFailed
} from "../actionCreators/course";

export default function* courseSaga(): Saga<void> {
  yield takeEvery(SAVE_COURSE, saveCourse);
}

export function* saveCourse(action: Object): Saga<void> {
  // const { course } = action.payload;
  console.log("hello")
 
  var url = process.env.REACT_APP_API_URL;
  url += `/course`;

  const apiOptions: ApiOptions = {
    url,
    method: "POST",
    params: action.payload,
    useJwtSecret: false
  };

  const apiResponse: ApiResponse = yield call(executeApiCall, apiOptions);

  const { success } = apiResponse;
  var msg = "";
  if (success) {
    msg = "Course Saved Successfully";
    yield put(saveCourseSuccess({ msg }));
  } else {
    msg = "Failed to save data"; //FIXME Improve error message
    yield put(saveCourseFailed({ msg }));
  }
}