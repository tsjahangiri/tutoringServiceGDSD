// @flow
import { takeEvery, call, put } from "redux-saga/effects";
import { executeApiCall } from "./api";
import type { Saga } from "redux-saga";
import {
  FETCH_TUTOR_LIST,
  GET_TUTOR_INFO_BY_ID,
  GET_TUTOR_OFFERED_COURSE_BY_ID,
  GET_TUTOR_QUALIFICATION_BY_ID,
  GET_TUTOR_REVIEW_BY_ID,
  SAVE_REVIEW,
} from "../actionTypes/tutor";
import {
  allTutorListApi,
  getTutorInfoById,
  getTutorOfferedCoursesById,
  getTutorQualificationById,
  getTutorReviewsById,
  reviewApi,
} from "../endpoints";
import {
  getTutorListFailed,
  getTutorListSuccess,
  setTutorInfo,
  setTutorOfferedCourse,
  setTutorQualification,
  setTutorReview,
  saveReviewSuccess,
  saveReviewFailed,
} from "../actionCreators/tutor";

export default function* tutorSaga(): Saga<void> {
  yield takeEvery(FETCH_TUTOR_LIST, getTutorList);
  yield takeEvery(GET_TUTOR_INFO_BY_ID, getTutorInfoDataById);
  yield takeEvery(
    GET_TUTOR_OFFERED_COURSE_BY_ID,
    getTutorOfferedCourseDataById
  );
  yield takeEvery(GET_TUTOR_QUALIFICATION_BY_ID, getTutorQualificationDataById);
  yield takeEvery(GET_TUTOR_REVIEW_BY_ID, getTutorReviewDataById);
  yield takeEvery(SAVE_REVIEW, saveReview);
}

export function* getTutorList(action: Object): Saga<void> {
  const { filters } = action.payload;

  var url = allTutorListApi;

  if (filters.fName) {
    url += `&FirstName=${filters.fName}`;
  }
  if (filters.lName) {
    url += `&LastName=${filters.lName}`;
  }
  if (filters.email) {
    url += `&Email=${filters.email}`;
  }

  const apiOptions: ApiOptions = {
    url: url,
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
  const { id } = action.payload;
  var url = `${process.env.REACT_APP_API_URL}`;
  const apiOptions: ApiOptions = {
    url: getTutorInfoById(id),
    method: "GET",
    useJwtSecret: false,
  };

  const apiResponse: ApiResponse = yield call(executeApiCall, apiOptions);
  const { isSuccessful, response = {} } = apiResponse;
  if (isSuccessful) {
    yield put(setTutorInfo(response));
  }
}

export function* getTutorOfferedCourseDataById(action: Object): Saga<void> {
  const { id } = action.payload;
  var url = `${process.env.REACT_APP_API_URL}`;
  const apiOptions: ApiOptions = {
    url: getTutorOfferedCoursesById(id),
    method: "GET",
    useJwtSecret: false,
  };

  const apiResponse: ApiResponse = yield call(executeApiCall, apiOptions);
  const { isSuccessful, response = {} } = apiResponse;
  if (isSuccessful) {
    yield put(setTutorOfferedCourse(response));
  }
}

export function* getTutorQualificationDataById(action: Object): Saga<void> {
  const { id } = action.payload;
  var url = `${process.env.REACT_APP_API_URL}`;
  const apiOptions: ApiOptions = {
    url: getTutorQualificationById(id),
    method: "GET",
    useJwtSecret: false,
  };

  const apiResponse: ApiResponse = yield call(executeApiCall, apiOptions);
  const { isSuccessful, response = {} } = apiResponse;
  if (isSuccessful) {
    yield put(setTutorQualification(response));
  }
}

export function* getTutorReviewDataById(action: Object): Saga<void> {
  const { id } = action.payload;
  var url = `${process.env.REACT_APP_API_URL}`;
  const apiOptions: ApiOptions = {
    url: getTutorReviewsById(id),
    method: "GET",
    useJwtSecret: false,
  };

  const apiResponse: ApiResponse = yield call(executeApiCall, apiOptions);
  const { isSuccessful, response = {} } = apiResponse;
  if (isSuccessful) {
    yield put(setTutorReview(response));
  }
}

export function* saveReview(action: Object): Saga<void> {
  // const { course } = action.payload;
  console.log(action.payload);

  // var url = process.env.REACT_APP_API_URL;
  // url += `/reviews`;

  const apiOptions: ApiOptions = {
    url: reviewApi,
    method: "POST",
    params: action.payload,
    useJwtSecret: false,
  };

  const apiResponse: ApiResponse = yield call(executeApiCall, apiOptions);

  const { success } = apiResponse;
  var msg = "";
  if (success) {
    msg = "Review Saved Successfully";
    yield put(saveReviewSuccess({ msg }));
  } else {
    msg = "Failed to save data"; //FIXME Improve error message
    yield put(saveReviewFailed({ msg }));
  }
}
