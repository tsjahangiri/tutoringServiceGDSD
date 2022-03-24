// @flow
import { takeEvery, call, put } from "redux-saga/effects";
import { executeApiCall } from "./api";
import { pollApi } from "../endpoints"
import type { Saga } from "redux-saga";

import {  
    SAVE_POLL,  
    UPDATE_POLL, 
    FETCH_POLL_BY_ID
} from "../actionTypes/votingPoll";

import {
    setPoll,
    savePollSuccess,
    savePollFailed,
    updatePollSuccess,
    updatePollFailed
} from "../actionCreators/votingPoll";

export default function* pollSaga(): Saga<void> {
  yield takeEvery(FETCH_POLL_BY_ID, fetchPollById);
  yield takeEvery(SAVE_POLL, savePoll);
  yield takeEvery(UPDATE_POLL, updatePoll);
}

export function* fetchPollById(action: Object): Saga<void> {
  const { id } = action.payload;
 
  console.log(action.payload)

  var url = pollApi + `/id:${id}`;

  const apiOptions: ApiOptions = {
    url: url,
    method: "GET",
    useJwtSecret: false,
  };

  const apiResponse: ApiResponse = yield call(executeApiCall, apiOptions);
  const { isSuccessful, response = {} } = apiResponse;
  if (isSuccessful) {
    yield put(setPoll(response));
  }
}


export function* savePoll(action: Object): Saga<void> {
  console.log("saga" +  action.payload);
  const apiOptions: ApiOptions = {
    url:pollApi,
    method: "POST",
    params: action.payload,
    useJwtSecret: false
  };
  console.log("saga" + apiOptions.url);
  const apiResponse: ApiResponse = yield call(executeApiCall, apiOptions);

  const { isSuccessful } = apiResponse;
  var msg = "";
  if (isSuccessful) {
    msg = "Poll Saved Successfully";
    yield put(savePollSuccess( msg ));
  } else {
    msg = "Failed to save data"; //FIXME Improve error message
    yield put(savePollFailed( msg ));
  }
}

export function* updatePoll(action: Object): Saga<void> {
  const apiOptions: ApiOptions = {
    url:pollApi,
    method: "PUT",
    params: action.payload,
    useJwtSecret: false
  };

  const apiResponse: ApiResponse = yield call(executeApiCall, apiOptions);

  const { isSuccessful } = apiResponse;
  var msg = "";
  if (isSuccessful) {
    msg = "Poll Updated Successfully";
    yield put(updatePollSuccess( msg ));
  } else {
    msg = "Failed to update data"; //FIXME Improve error message
    yield put(updatePollFailed( msg ));
  }
}
