// @flow
import { takeEvery, call, put } from "redux-saga/effects";
import { executeApiCall } from "./api";
import type { Saga } from "redux-saga";
import { FETCH_TUTOR_LIST, GET_TUTOR_INFO_BY_ID, GET_TUTOR_OFFERED_COURSE_BY_ID } from "../actionTypes/tutor";
import {allTutorListApi, getTutorInfoById, getTutorOfferedCoursesById} from "../endpoints"
import {
  getTutorListFailed,
  getTutorListSuccess,
  setTutorInfo,
  setTutorOfferedCourse
} from "../actionCreators/tutor";

export default function* tutorSaga(): Saga<void> {
  yield takeEvery(FETCH_TUTOR_LIST, getTutorList);
  yield takeEvery(GET_TUTOR_INFO_BY_ID, getTutorInfoDataById);
  yield takeEvery(GET_TUTOR_OFFERED_COURSE_BY_ID, getTutorOfferedCourseDataById);

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

  const { isSuccessful, response = {} } = apiResponse;

  if (isSuccessful) {
    var data = response;
    yield put(getTutorListSuccess({ data }));
  } else {
    var msg = "Failed to load data from API"; //FIXME Improve error message
    yield put(getTutorListFailed({ msg }));
  }
}

export function* getTutorInfoDataById(action: Object): Saga<void> {
  const {id} = action.payload;
  var url = `${process.env.REACT_APP_API_URL}`;
  const apiOptions: ApiOptions = {
    url : getTutorInfoById(id),
    method: "GET",
    useJwtSecret: false,
  };

  const apiResponse: ApiResponse = yield call(executeApiCall, apiOptions);
  const { isSuccessful, response = {} } = apiResponse;
  if (isSuccessful) {
    yield(put(setTutorInfo(response)));
  }
}

export function* getTutorOfferedCourseDataById(action: Object): Saga<void> {
  const {id} = action.payload;
  var url = `${process.env.REACT_APP_API_URL}`;
  const apiOptions: ApiOptions = {
    url : getTutorOfferedCoursesById(id),
    method: "GET",
    useJwtSecret: false,
  };

  const apiResponse: ApiResponse = yield call(executeApiCall, apiOptions);
  const { isSuccessful, response = {} } = apiResponse;
  if (isSuccessful) {
    yield(put(setTutorOfferedCourse(response)));
  }
}
