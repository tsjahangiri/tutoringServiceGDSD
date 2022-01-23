// @flow
import {
  FETCH_TUTOR_LIST,
  SET_TUTOR_LIST_LOADING,
  GET_TUTOR_LIST_SUCCESS,
  GET_TUTOR_LIST_FAILED,
  GET_TUTOR_INFO_BY_ID,
  SET_TUTOR_INFO
} from "../actionTypes/tutor";

export const fetchTutorList = (payload) => {
  const { filters = {} } = payload;
  return {
    type: FETCH_TUTOR_LIST,
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

export const getTutorInfoById = (id) => ({
  type: GET_TUTOR_INFO_BY_ID,
  payload: {
    id,
  },
});

export const setTutorInfo = (payload) => ({
  type: SET_TUTOR_INFO,
  payload,
});