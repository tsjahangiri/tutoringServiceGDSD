// @flow
import { takeEvery, call, put } from "redux-saga/effects";
import { executeApiCall } from "./api";
import type { Saga } from "redux-saga";
import { FETCH_USERS_LIST, UPDATE_USER } from "../actionTypes/manageUsers";
import { usersApi } from "../endpoints";
import { setUsersList } from "../actionCreators/manageUsers";

export default function* manageUsersSaga(): Saga<void> {
  yield takeEvery(FETCH_USERS_LIST, fetchUsersList);
  yield takeEvery(UPDATE_USER, updateUser);
}

export function* fetchUsersList(action: Object): Saga<void> {
  const { filters } = action.payload;
  const { firstName, lastName, email, userType, status } = filters;

  var params = {
    FirstName: firstName ? firstName : undefined,
    LastName: lastName ? lastName : undefined,
    Email: email ? email : undefined,
    UserType: userType == -1 ? undefined : userType,
    Status: status == -1 ? undefined : status,
  };

  const apiOptions: ApiOptions = {
    url: usersApi,
    method: "GET",
    params: params,
    useJwtSecret: false,
  };

  const apiResponse: ApiResponse = yield call(executeApiCall, apiOptions);

  const { isSuccessful, response = {} } = apiResponse;

  if (isSuccessful) {
    yield put(setUsersList(response));
  }
}

export function* updateUser(action: Object): Saga<void> {
  const apiOptions: ApiOptions = {
    url: usersApi,
    method: "PUT",
    params: action.payload,
    useJwtSecret: false,
  };

  const apiResponse: ApiResponse = yield call(executeApiCall, apiOptions);
}
