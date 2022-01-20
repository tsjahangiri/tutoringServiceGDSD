// @flow
import { takeEvery, call, put } from "redux-saga/effects";
import { executeApiCall } from "./api";
import type { Saga } from "redux-saga";
import { FETCH_STUDENT_SHOW_LIST } from "../actionTypes/studentShow";
import { allStudentListApi } from "../endpoints";
import {
    getStudentShowListFailed,
    getStudentShowListSuccess,
} from "../actionCreators/studentShow";

export default function* studentShowSaga(): Saga<void> {
    yield takeEvery(FETCH_STUDENT_SHOW_LIST, getStudentShowList);
}

export function* getStudentShowList(action: Object): Saga<void> {
    const { filters } = action.payload;

    var url = process.env.REACT_APP_API_URL;

    if (filters.subjectName) {
        url += `subjectname=${filters.subjectName}&`;
    }
    console.log(url)
    const apiOptions: ApiOptions = {
        url: allStudentListApi,
        method: "GET",
        useJwtSecret: false,
    };

    const apiResponse: ApiResponse = yield call(executeApiCall, apiOptions);
    const { isSuccessful, response = {} } = apiResponse;

    if (isSuccessful) {
        var data = response;
        yield put(getStudentShowListSuccess({ data }));
    } else {
        var msg = "Failed to load data from API"; //FIXME Improve error message
        yield put(getStudentShowListFailed({ msg }));
    }
}