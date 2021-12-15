// @flow
import {
    takeEvery,
    call,
    put,
} from 'redux-saga/effects';
import { callApi } from '../../core/sagas/api';
import type { Saga } from 'redux-saga';
import { GET_TUTOR_LIST } from './actionTypes';
import {
    getTutorListFailed,
    getTutorListSuccess,
} from './actionCreators'

export default function* homeSaga(): Saga<void> {
    yield takeEvery(GET_TUTOR_LIST, getTutorList);
}

export function* getTutorList(action: Object): Saga<void> {
    const { filters } = action.payload;

    var url = process.env.REACT_APP_API_URL;


    if(filters.subjectName) {
        url += `subjectname=${filters.subjectName}`;
    }
    
    const apiOptions: ApiOptions = {
        url,
        method: 'GET',
    };

    const apiResponse: ApiResponse = yield call(callApi, apiOptions);
    
    const { success, response = {} } = apiResponse;

    if (success) {
        var data = response.data;
        yield put(getTutorListSuccess({ data }));
    } else {
        var msg = 'Failed to load data from API' //FIXME Improve error message
        yield put(getTutorListFailed({ msg }));
    }
}