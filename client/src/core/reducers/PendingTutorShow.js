// @flow
import {
    FETCH_PENDING_TUTOR_SHOW_LIST,
    SET_PENDING_TUTOR_SHOW_LIST_LOADING,
    GET_PENDING_TUTOR_SHOW_LIST_SUCCESS,
    GET_PENDING_TUTOR_SHOW_LIST_FAILED,
} from "../actionTypes/PendingTutorShow";

export const INITIAL_STATE = {
    data: [],
    filters: {
        subjectName: "",
    },
};

export default (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case FETCH_PENDING_TUTOR_SHOW_LIST:
            const { filters } = action.payload;
            return {
                ...state,
                filters: filters,
            };
        case SET_PENDING_TUTOR_SHOW_LIST_LOADING:
            return INITIAL_STATE;
        case GET_PENDING_TUTOR_SHOW_LIST_SUCCESS:
            const { data } = action.payload;
            return {
                ...state,
                data: data,
            };
        case GET_PENDING_TUTOR_SHOW_LIST_FAILED:
            return INITIAL_STATE;
        default:
            return state;
    }
};  