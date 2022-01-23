// @flow
import {
  FETCH_TUTOR_LIST,
  SET_TUTOR_LIST_LOADING,
  GET_TUTOR_LIST_SUCCESS,
  GET_TUTOR_LIST_FAILED,
  SET_TUTOR_INFO
} from "../actionTypes/tutor";

export const INITIAL_STATE = {
  data: [],
  tutorInfoData: [],
  filters: {
    subjectId: undefined,
    level: "%",
    minRate: 0,
    gender: "%",
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
    case SET_TUTOR_INFO:
      return {
        ...state,
        tutorInfoData: action.payload,
      };
  }
};
