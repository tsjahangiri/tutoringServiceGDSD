// @flow
import {
    FETCH_STUDENT_SHOW_LIST,
    SET_STUDENT_SHOW_LIST_LOADING,
    GET_STUDENT_SHOW_LIST_SUCCESS,
    GET_STUDENT_SHOW_LIST_FAILED,
} from "../actionTypes/studentShow";

export const fetchStudentShowList = (payload) => {
    const { filters = {} } = payload;
    return {
        type: FETCH_STUDENT_SHOW_LIST,
        payload: {
            filters,
        },
    };
};

export const setStudentShowListLoading = (payload) => ({
    type: SET_STUDENT_SHOW_LIST_LOADING,
    payload,
});

export const getStudentShowListSuccess = (payload) => ({
    type: GET_STUDENT_SHOW_LIST_SUCCESS,
    payload,
});

export const getStudentShowListFailed = () => ({
    type: GET_STUDENT_SHOW_LIST_FAILED,
});