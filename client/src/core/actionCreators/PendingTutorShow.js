// @flow
import {
    FETCH_PENDING_TUTOR_SHOW_LIST,
    SET_PENDING_TUTOR_SHOW_LIST_LOADING,
    GET_PENDING_TUTOR_SHOW_LIST_SUCCESS,
    GET_PENDING_TUTOR_SHOW_LIST_FAILED,
} from "../actionTypes/PendingTutorShow";

export const fetchPendingTutorShowList = (payload) => {
    const { filters = {} } = payload;
    return {
        type: FETCH_PENDING_TUTOR_SHOW_LIST,
        payload: {
            filters,
        },
    };
};

export const setPendingTutorShowListLoading = (payload) => ({
    type: SET_PENDING_TUTOR_SHOW_LIST_LOADING,
    payload,
});

export const getPendingTutorShowListSuccess = (payload) => ({
    type: GET_PENDING_TUTOR_SHOW_LIST_SUCCESS,
    payload,
});

export const getPendingTutorShowListFailed = () => ({
    type: GET_PENDING_TUTOR_SHOW_LIST_FAILED,
});