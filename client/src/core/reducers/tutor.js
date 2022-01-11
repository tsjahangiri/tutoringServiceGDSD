// @flow
import {
  FETCH_TUTOR_LIST,
  SET_TUTOR_LIST_LOADING,
  GET_TUTOR_LIST_SUCCESS,
  GET_TUTOR_LIST_FAILED,
} from "../actionTypes/tutor";

export const INITIAL_STATE = {
  data: [],
  filters: {
    subjectName: "",
  },
};

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case FETCH_TUTOR_LIST:
      const { filters } = action.payload;
      return {
        ...state,
        filters: filters,
      };
    case SET_TUTOR_LIST_LOADING:
      return INITIAL_STATE;
    case GET_TUTOR_LIST_SUCCESS:
      const { data } = action.payload;
      return {
        ...state,
        data: data,
      };
    case GET_TUTOR_LIST_FAILED:
      return INITIAL_STATE;
    default:
      return state;
  }
};
