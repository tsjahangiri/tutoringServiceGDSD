// @flow
import { takeEvery, call, put } from "redux-saga/effects";
import { executeApiCall } from "./api";
import type { Saga } from "redux-saga";
import { FETCH_STUDENT_SHOW_LIST } from "../actionTypes/studentShow";
import { pendingTutorListApi } from "../endpoints";
import {
    getPendingTutorShowListFailed,
    getPendingTutorShowListSuccess,
} from "../actionCreators/PendingTutorShow";

export default function* pendingTutorListShowSaga(): Saga<void> {
    yield takeEvery(FETCH_STUDENT_SHOW_LIST, getPendingTutorShowList);
}

export function* getPendingTutorShowList(action: Object): Saga<void> {
    const { filters } = action.payload;

    var url = process.env.REACT_APP_API_URL;

    if (filters.subjectName) {
        url += `subjectname=${filters.subjectName}&`;
    }
  
    const apiOptions: ApiOptions = {
        url: pendingTutorListApi,
        method: "GET",
        useJwtSecret: false,
    };

    const apiResponse: ApiResponse = yield call(executeApiCall, apiOptions);
    const { isSuccessful, response = {} } = apiResponse;

    if (isSuccessful) {
        var data = response;
        yield put(getPendingTutorShowListSuccess({ data }));
    } else {
        var msg = "Failed to load data from API"; //FIXME Improve error message
        yield put(getPendingTutorShowListFailed({ msg }));
    }
}