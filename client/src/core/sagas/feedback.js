// @flow
import { takeEvery, call, put } from "redux-saga/effects";
import { executeApiCall } from "./api";
import { getFeedback } from "../endpoints"
import type { Saga } from "redux-saga";
import {  SAVE_FEEDBACK } from "../actionTypes/feedback";
import {
  saveFeedback
} from "../actionCreators/feedback";

export default function* feedbackSaga(): Saga<void> {
  yield takeEvery(SAVE_FEEDBACK, saveFeedback);
}


export function* saveFeedback(action: Object): Saga<void> {
  console.log("saga" +  action.payload);
  const apiOptions: ApiOptions = {
    url:getFeedback,
    method: "POST",
    params: action.payload,
    useJwtSecret: true
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