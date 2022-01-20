/* eslint-disable no-duplicate-case */
// @flow
import {
  SAVE_COURSE,
  SAVE_COURSE_LOADING,
  SAVE_COURSE_SUCCESS,
  SAVE_COURSE_FAILED,
  FETCH_COURSE_LIST_BY_STATUS,
  SET_COURSE_LIST_BY_STATUS_LOADING,
  GET_COURSE_LIST_BY_STATUS_SUCCESS,
  GET_COURSE_LIST_BY_STATUS_FAILED
} from "../actionTypes/course";

export const INITIAL_STATE = {
  data: [],
  status: ""
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_COURSE:
      return {
        ...state,
      };
    case SAVE_COURSE_LOADING:
      return INITIAL_STATE;
    case SAVE_COURSE_SUCCESS:
      return INITIAL_STATE;
    case SAVE_COURSE_FAILED:
     case FETCH_COURSE_LIST_BY_STATUS:
      const { status } = action.payload;
      return {
        ...state,
        status: status,
      };
    case SET_COURSE_LIST_BY_STATUS_LOADING:
      return INITIAL_STATE;
    case GET_COURSE_LIST_BY_STATUS_SUCCESS:
      const { data } = action.payload;
      return {
        ...state,
        data: data,
      };
    case GET_COURSE_LIST_BY_STATUS_FAILED:
      return INITIAL_STATE;
    default:
      return state;
  }
};
