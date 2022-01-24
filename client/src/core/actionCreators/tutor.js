// @flow
import {
  FETCH_TUTOR_LIST,
  SET_TUTOR_LIST_LOADING,
  GET_TUTOR_LIST_SUCCESS,
  GET_TUTOR_LIST_FAILED,
  GET_TUTOR_INFO_BY_ID,
  SET_TUTOR_INFO,
  GET_TUTOR_OFFERED_COURSE_BY_ID,
  SET_TUTOR_OFFERED_COURSE,
  GET_TUTOR_QUALIFICATION_BY_ID,
  SET_TUTOR_QUALIFICATION
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

export const getTutorOfferedCourseById = (id) => ({
  type: GET_TUTOR_OFFERED_COURSE_BY_ID,
  payload: {
    id,
  },
});

export const setTutorOfferedCourse = (payload) => ({
  type: SET_TUTOR_OFFERED_COURSE,
  payload,
});

export const getTutorQualificationById = (id) => ({
  type: GET_TUTOR_QUALIFICATION_BY_ID,
  payload: {
    id,
  },
});

export const setTutorQualification = (payload) => ({
  type: SET_TUTOR_QUALIFICATION,
  payload,
});