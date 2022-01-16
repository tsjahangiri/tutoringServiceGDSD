// @flow
import { takeEvery, call, put } from "redux-saga/effects";
import { callApi } from "./api";
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
  const { filters } = action.payload;

  var url = process.env.REACT_APP_API_URL;

//need to change the api
  if (filters.subjectName) {
    url += `subjectname=${filters.subjectName}&`;
  }

  const apiOptions: ApiOptions = {
    url,
    method: "POST",
  };

  const apiResponse: ApiResponse = yield call(callApi, apiOptions);

  const { success, response = {} } = apiResponse;

  if (success) {
    var data = response;
    yield put(saveCourseSuccess({ data }));
  } else {
    var msg = "Failed to save data"; //FIXME Improve error message
    yield put(saveCourseFailed({ msg }));
  }
}
