// @flow
import { takeEvery, call, put } from "redux-saga/effects";
import { executeApiCall } from "./api";
import { qualificationApi } from "../endpoints"
import type { Saga } from "redux-saga";
import {  SAVE_QUALIFICATION,  UPDATE_QUALIFICATION, FETCH_QUALIFICATION_BY_ID} from "../actionTypes/qualification";
import {
  setQualification,
  saveQualificationSuccess,
  saveQualificationFailed,
  updateQualificationSuccess,
  updateQualificationFailed
} from "../actionCreators/qualification";

export default function* qualificationSaga(): Saga<void> {
  yield takeEvery(FETCH_QUALIFICATION_BY_ID, fetchQualificationById);
  yield takeEvery(SAVE_QUALIFICATION, saveQualification);
  yield takeEvery(UPDATE_QUALIFICATION, updateQualification);
}

export function* fetchQualificationById(action: Object): Saga<void> {
  const { id } = action.payload;
 
  console.log(action.payload)
  // qualificationApi+=`/id=${id}`;

  var url = qualificationApi + `/id:${id}`;

  const apiOptions: ApiOptions = {
    url: url,
    method: "GET",
    useJwtSecret: false,
  };

  const apiResponse: ApiResponse = yield call(executeApiCall, apiOptions);
  const { isSuccessful, response = {} } = apiResponse;
  if (isSuccessful) {
    yield put(setQualification(response));
  }
}


export function* saveQualification(action: Object): Saga<void> {
  console.log("saga" + qualificationApi);
  const apiOptions: ApiOptions = {
    url:qualificationApi,
    method: "POST",
    params: action.payload,
    useJwtSecret: false
  };
  console.log("saga" + apiOptions.url);
  const apiResponse: ApiResponse = yield call(executeApiCall, apiOptions);

  const { isSuccessful } = apiResponse;
  var msg = "";
  if (isSuccessful) {
    msg = "Qualification Saved Successfully";
    yield put(saveQualificationSuccess( msg ));
  } else {
    msg = "Failed to save data"; //FIXME Improve error message
    yield put(saveQualificationFailed( msg ));
  }
}

export function* updateQualification(action: Object): Saga<void> {
  const apiOptions: ApiOptions = {
    url:qualificationApi,
    method: "PUT",
    params: action.payload,
    useJwtSecret: false
  };

  const apiResponse: ApiResponse = yield call(executeApiCall, apiOptions);

  const { isSuccessful } = apiResponse;
  var msg = "";
  if (isSuccessful) {
    msg = "Qualification Updated Successfully";
    yield put(updateQualificationSuccess( msg ));
  } else {
    msg = "Failed to update data"; //FIXME Improve error message
    yield put(updateQualificationFailed( msg ));
  }
}
