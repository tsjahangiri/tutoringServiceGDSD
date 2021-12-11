// @flow
import {
    GET_TUTOR_LIST,
    SET_TUTOR_LIST_LOADING,
    GET_TUTOR_LIST_SUCCESS,
    GET_TUTOR_LIST_FAILED,
} from './actionTypes';

export const INITIAL_STATE = {
    data: [],
    filters: {
        keywords: '',
    }
};

const homeReducer = (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case GET_TUTOR_LIST:
            const { filters } = action.payload;
            return {
                ...state,
                filters: filters
            };
        case SET_TUTOR_LIST_LOADING:
            return INITIAL_STATE;
        case GET_TUTOR_LIST_SUCCESS:
            const { data } = action.payload;
            console.log(data);
            return {
                ...state,
                data: data
            };
        case GET_TUTOR_LIST_FAILED:
            return INITIAL_STATE;
        default:
            return state;
    }
};

export default homeReducer;
