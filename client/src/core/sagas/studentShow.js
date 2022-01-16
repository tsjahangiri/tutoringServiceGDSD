// @flow
import { takeEvery, call, put } from "redux-saga/effects";
import { callApi } from "./api";
import type { Saga } from "redux-saga";
import { FETCH_STUDENT_SHOW_LIST } from "../actionTypes/studentShow";
import {
    getTutorListFailed,
    getTutorListSuccess,
} from "../actionCreators/studentShow";

export default function* tutorSaga(): Saga<void> {
    yield takeEvery(FETCH_TUTOR_LIST, getTutorList);
}

export function* getTutorList(action: Object): Saga<void> {
    const { filters } = action.payload;

    var url = process.env.REACT_APP_API_URL;

    if (filters.subjectName) {
        url += `subjectname=${filters.subjectName}&`;
    }

    const apiOptions: ApiOptions = {
        url,
        method: "GET",
    };

    const apiResponse: ApiResponse = yield call(callApi, apiOptions);

    const { success, response = {} } = apiResponse;

    if (success) {
        var data = response;
        yield put(getStudentShowListSuccess({ data }));
    } else {
        var msg = "Failed to load data from API"; //FIXME Improve error message
        yield put(getStudentShowListFailed({ msg }));
    }
}