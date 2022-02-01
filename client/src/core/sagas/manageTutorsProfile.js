// @flow
import { takeEvery, call, put } from "redux-saga/effects";
import { executeApiCall } from "./api";
import type { Saga } from "redux-saga";
import { FETCH_TUTORS_PROFILE_LIST, UPDATE_TUTOR_PROFILE } from "../actionTypes/manageTutorsProfile";
import { tutorsApi } from "../endpoints";
import { setTutorsProfileList } from "../actionCreators/manageTutorsProfile";

export default function* manageTutorsProfileSaga(): Saga<void> {
  yield takeEvery(FETCH_TUTORS_PROFILE_LIST, fetchTutorsProfileList);
  yield takeEvery(UPDATE_TUTOR_PROFILE, updateTutorProfile);
}

export function* fetchTutorsProfileList(action: Object): Saga<void> {
  const { filters } = action.payload;
  const { status } = filters;

  var params = {
    status: status == -1 ? undefined : status,
  };

  const apiOptions: ApiOptions = {
    url: `${tutorsApi}/status`,
    method: "GET",
    params: params,
    useJwtSecret: false,
  };

  const apiResponse: ApiResponse = yield call(executeApiCall, apiOptions);

  const { isSuccessful, response = {} } = apiResponse;

  if (isSuccessful) {
    yield put(setTutorsProfileList(response));
  }
}

export function* updateTutorProfile(action: Object): Saga<void> {
  const apiOptions: ApiOptions = {
    url: tutorsApi,
    method: "PUT",
    params: action.payload,
    useJwtSecret: false,
  };

  const apiResponse: ApiResponse = yield call(executeApiCall, apiOptions);
}

