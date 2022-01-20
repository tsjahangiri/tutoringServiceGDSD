// @flow
import {
    FETCH_STUDENT_SHOW_LIST,
    SET_STUDENT_SHOW_LIST_LOADING,
    GET_STUDENT_SHOW_LIST_SUCCESS,
    GET_STUDENT_SHOW_LIST_FAILED,
} from "../actionTypes/studentShow";

export const INITIAL_STATE = {
    data: [],
    filters: {
        subjectName: "",
    },
};

export default (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case FETCH_STUDENT_SHOW_LIST:
            const { filters } = action.payload;
            return {
                ...state,
                filters: filters,
            };
        case SET_STUDENT_SHOW_LIST_LOADING:
            return INITIAL_STATE;
        case GET_STUDENT_SHOW_LIST_SUCCESS:
            const { data } = action.payload;
            return {
                ...state,
                data: data,
            };
        case GET_STUDENT_SHOW_LIST_FAILED:
            return INITIAL_STATE;
        default:
            return state;
    }
};  