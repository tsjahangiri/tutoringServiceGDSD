// @flow
import { takeEvery, call, put } from "redux-saga/effects";
import { executeApiCall } from "./api";
import type { Saga } from "redux-saga";
import { FETCH_DASHBOARD_DATA } from "../actionTypes/dashboard";
import { fetchDashboardDataSuccessful } from "../actionCreators/dashboard";
import { dashboardApi } from "../endpoints";

export default function* courseSaga(): Saga<void> {
  yield takeEvery(FETCH_DASHBOARD_DATA, fetchDashboardData);
}

export function* fetchDashboardData(action: Object): Saga<void> {
  const apiOptions: ApiOptions = {
    url: dashboardApi,
    method: "GET",
    useJwtSecret: false,
  };

  const apiResponse: ApiResponse = yield call(executeApiCall, apiOptions);

  const { isSuccessful, response = {} } = apiResponse;

  if (isSuccessful) {
    yield put(fetchDashboardDataSuccessful(response));
  }
}
