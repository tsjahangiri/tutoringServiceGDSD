// @flow
import {
    FETCH_TUTORPROFILE_LIST,
    SET_TUTORPROFILE_LIST_LOADING,
    GET_TUTORPROFILE_LIST_SUCCESS,
    GET_TUTORPROFILE_LIST_FAILED,
  } from "../actionTypes/tutor";
  
  export const INITIAL_STATE = {
    data: [],
    filters: {
      subjectName: "",
    },
  };
  
  export default (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
      case FETCH_TUTORPROFILE_LIST:
        const { filters } = action.payload;
        return {
          ...state,
          filters: filters,
        };
      case SET_TUTORPROFILE_LIST_LOADING:
        return INITIAL_STATE;
      case GET_TUTORPROFILE_LIST_SUCCESS:
        const { data } = action.payload;
        return {
          ...state,
          data: data,
        };
      case GET_TUTORPROFILE_LIST_FAILED:
        return INITIAL_STATE;
      default:
        return state;
    }
  };
  