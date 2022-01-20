// @flow
import { takeEvery, call, put } from "redux-saga/effects";
import { executeApiCall } from "./api";
import type { Saga } from "redux-saga";
import {  SAVE_QUALIFICATION } from "../actionTypes/qualification";
import {
  saveQualificationSuccess,
  saveQualificationFailed
} from "../actionCreators/qualification";

export default function* qualificationSaga(): Saga<void> {
  yield takeEvery(SAVE_QUALIFICATION, saveQualification);
}

export function* saveQualification(action: Object): Saga<void> {

  var url = process.env.REACT_APP_API_URL;
  url += `/tutor/qualification`;

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
    msg = "Qualification Saved Successfully";
    yield put(saveQualificationSuccess({ msg }));
  } else {
    msg = "Failed to save data"; //FIXME Improve error message
    yield put(saveQualificationFailed({ msg }));
  }
}
