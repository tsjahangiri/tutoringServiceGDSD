// @flow
import {
    GET_TUTOR_LIST,
    SET_TUTOR_LIST_LOADING,
    GET_TUTOR_LIST_SUCCESS,
    GET_TUTOR_LIST_FAILED,
} from './actionTypes';

export const getTutorList = (payload) => {
  const {
    filters = {},
  } = payload;
  return {
    type: GET_TUTOR_LIST,
    payload: {
      filters,
    },
  };
};
  
export const setTutorListLoading = (payload) => ({
  type: SET_TUTOR_LIST_LOADING,
  payload,
});

export const getTutorListSuccess = (payload) => ({
  type: GET_TUTOR_LIST_SUCCESS,
  payload,
});

export const getTutorListFailed = () => ({
  type: GET_TUTOR_LIST_FAILED,
});
