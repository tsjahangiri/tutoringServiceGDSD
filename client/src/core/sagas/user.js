// @flow
import { takeEvery, call, put } from "redux-saga/effects";
import type { Saga } from "redux-saga";
import jwt_decode from "jwt-decode";
import { executeApiCall } from "./api";
import { loginApi, registerApi } from "../endpoints";
import { LOGIN_USER, REGISTER_USER } from "../actionTypes/user";
import {
  setCurrentUser,
  setLoginAlert,
  setRegistrationAlert,
} from "../actionCreators/user";

export default function* loginSaga(): Saga<void> {
  yield takeEvery(LOGIN_USER, login);
  yield takeEvery(REGISTER_USER, register);
}

export function* login(action: Object): Saga<void> {
  const { email, pd } = action.payload;

  const apiOptions: ApiOptions = {
    url: loginApi,
    method: "POST",
    params: {
      email: email,
      password: pd,
    },
    useJwtSecret: false,
  };

  const apiResponse: ApiResponse = yield call(executeApiCall, apiOptions);

  const { isSuccessful, response = {} } = apiResponse;

  if (isSuccessful) {
    const { id, email, token } = response;
    if (token !== undefined) {
      var decoded = jwt_decode(token);
      const { id, email, user_type, status, exp } = decoded;
      yield put(setCurrentUser({ id, email, user_type, status, exp, token }));
    }
  } else {
    const errorMessage = response.ErrorMessage || response.message;
    yield put(setLoginAlert(errorMessage));
  }
}

export function* register(action: Object): Saga<void> {
  const apiOptions: ApiOptions = {
    url: registerApi,
    method: "POST",
    params: action.payload.data,
    useJwtSecret: false,
  };

  const apiResponse: ApiResponse = yield call(executeApiCall, apiOptions);

  const { isSuccessful, response = {} } = apiResponse;

  if (isSuccessful) {
    const { message } = response;
    action.payload.navigate("/login");
    yield put(setLoginAlert(message, "success"));
  } else {
    const errorMessage = response.ErrorMessage || response.message;
    yield put(setRegistrationAlert(errorMessage));
  }
}
