// @flow
import { takeEvery, call, put } from "redux-saga/effects";
import { executeApiCall } from "./api";
import type { Saga } from "redux-saga";
import { FETCH_TUTORPROFILE_LIST } from "../actionTypes/tutorprofile";
import {
  GET_TUTORPROFILE_LIST_SUCCESS,
  GET_TUTORPROFILE_LIST_FAILED,
} from "../actionCreators/tutorprofile";

export default function* tutorSaga(): Saga<void> {
  yield takeEvery(FETCH_TUTORPROFILE_LIST, getTutorProfileList);
}

export function* getTutorProfileList(action: Object): Saga<void> {
  // const { filters } = action.payload;

  var url = `${process.env.REACT_APP_API_URL}`;

  if (filters.subjectName) {
    url += `/tutor/id=${id}&`;
  }

  const apiOptions: ApiOptions = {
    url,
    method: "GET",
  };

  const apiResponse: ApiResponse = yield call(executeApiCall, apiOptions);

  const { success, response = {} } = apiResponse;

  if (success) {
    var data = response;
    yield put(getTutorProfileListSuccess({ data }));
  } else {
    var msg = "Failed to load data from API"; //FIXME Improve error message
    yield put(getTutorProfileListFailed({ msg }));
  }
}
