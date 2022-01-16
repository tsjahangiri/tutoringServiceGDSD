// @flow
import { takeEvery, call, put } from "redux-saga/effects";
import type { Saga } from "redux-saga";
import jwt_decode from "jwt-decode";
import { executeApiCall } from "./api";
import { loginApi } from "../endpoints";
import { LOGIN_USER } from "../actionTypes/user";
import { setCurrentUser, setLoginError } from "../actionCreators/user";

export default function* loginSaga(): Saga<void> {
  yield takeEvery(LOGIN_USER, login);
}

export function* login(action: Object): Saga<void> {
  const { username, pd } = action.payload;

  const apiOptions: ApiOptions = {
    url: loginApi,
    method: "POST",
    params: {
      username: username,
      password: pd,
    },
    useJwtSecret: false,
  };

  const apiResponse: ApiResponse = yield call(executeApiCall, apiOptions);

  const { isSuccessful, response = {} } = apiResponse;

  console.log(response);

  if (isSuccessful) {
    const { email, token } = response;
    if (token !== undefined) {
      var decoded = jwt_decode(token);
      const { exp, status, user_name, user_type } = decoded;
      yield put(setCurrentUser({ email, user_name, user_type, token, exp }));
    }
  }

  const errorMessage = response.ErrorMessage || response.message;
  yield put(setLoginError(errorMessage));
}
