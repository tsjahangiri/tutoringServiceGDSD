// @flow
import { takeEvery, call, put } from "redux-saga/effects";
import { executeApiCall } from "./api";
import type { Saga } from "redux-saga";
import { FETCH_TUTOR_LIST } from "../actionTypes/tutor";
import { allTutorListApi } from "../endpoints";
import {
  getTutorListFailed,
  getTutorListSuccess,
} from "../actionCreators/tutor";

export default function* tutorSaga(): Saga<void> {
  yield takeEvery(FETCH_TUTOR_LIST, getTutorList);
}

export function* getTutorList(action: Object): Saga<void> {
  const { filters } = action.payload;

  var url = `${process.env.REACT_APP_API_URL}`;

  if (filters.subjectName) {
    url += `subjectname=${filters.subjectName}&`;
  }

  const apiOptions: ApiOptions = {
    url: allTutorListApi,
    method: "GET",
    useJwtSecret: false,
  };

  const apiResponse: ApiResponse = yield call(executeApiCall, apiOptions);

  const { success, response = {} } = apiResponse;
  if (success) {
    var data = response;
    yield put(getTutorListSuccess({ data }));
  } else {
    var msg = "Failed to load data from API"; //FIXME Improve error message
    yield put(getTutorListFailed({ msg }));
  }
}
