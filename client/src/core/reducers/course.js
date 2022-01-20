// @flow
import {
  SAVE_COURSE,
  SAVE_COURSE_LOADING,
  SAVE_COURSE_SUCCESS,
  SAVE_COURSE_FAILED,
} from "../actionTypes/course";

export const INITIAL_STATE = {};

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
      return INITIAL_STATE;
    default:
      return state;
  }
};