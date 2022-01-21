
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


//POST
export const saveCourse = (data) => {
  console.log("from creators" + data);
  return {
    type: SAVE_COURSE,
    payload: data
  };
};

export const saveCourseLoading = (data) => ({
  type: SAVE_COURSE_LOADING,
  data,
});

export const saveCourseSuccess = (data) => ({
  type: SAVE_COURSE_SUCCESS,
  data,
});

export const saveCourseFailed = () => ({
  type: SAVE_COURSE_FAILED,
});

//GET by status
export const fetchCourseListByStatus = (status) => {
  
  
  return {
    type: FETCH_COURSE_LIST_BY_STATUS,
    payload: {
      status,
    },
  };
};

export const setCourseListByStatusLoading = (payload) => ({
  type: SET_COURSE_LIST_BY_STATUS_LOADING,
  payload,
});

export const getCourseListByStatusSuccess = (payload) => ({
  type: GET_COURSE_LIST_BY_STATUS_SUCCESS,
  payload,
});

export const getCourseListByStatusFailed = () => ({
  type: GET_COURSE_LIST_BY_STATUS_FAILED,
});

