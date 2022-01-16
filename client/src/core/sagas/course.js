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

 
  var url = process.env.REACT_APP_API_URL;
  url += `/course`;

  const apiOptions: ApiOptions = {
    url,
    method: "POST",
    params: action.payload,
  };

  const apiResponse: ApiResponse = yield call(executeApiCall, apiOptions);

  const { success, response = {} } = apiResponse;
  var msg = "";
  if (success) {
    var data = response;
    msg = "Course Saved Successfully";
    yield put(saveCourseSuccess({ msg }));
  } else {
    var msg = "Failed to save data"; //FIXME Improve error message
    yield put(saveCourseFailed({ msg }));
  }
}
