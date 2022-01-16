// @flow
import {
  SAVE_COURSE,
  SAVE_COURSE_LOADING,
  SAVE_COURSE_SUCCESS,
  SAVE_COURSE_FAILED,
} from "../actionTypes/course";

export const INITIAL_STATE = {
  data: [],
  filters: {
    subjectName: "",
  },
};

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case SAVE_COURSE:
      const { filters } = action.payload;
      return {
        ...state,
        filters: filters,
      };
    case SAVE_COURSE_LOADING:
      return INITIAL_STATE;
    case SAVE_COURSE_SUCCESS:
      const { data } = action.payload;
      return {
        ...state,
        data: data,
      };
    case SAVE_COURSE_FAILED:
      return INITIAL_STATE;
    default:
      return state;
  }
};
