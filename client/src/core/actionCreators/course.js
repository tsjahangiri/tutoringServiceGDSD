// @flow
import {
  SAVE_COURSE,
  SAVE_COURSE_LOADING,
  SAVE_COURSE_SUCCESS,
  SAVE_COURSE_FAILED,
  FETCH_APPROVED_COURSE_LIST,
  SET_APPROVED_COURSE_LIST,
} from "../actionTypes/course";

export const fetchApprovedCourseList = (payload) => {
  return {
    type: FETCH_APPROVED_COURSE_LIST,
    payload,
  };
};

export const setApprovedCourseList = (payload) => {
  return {
    type: SET_APPROVED_COURSE_LIST,
    payload,
  };
};

export const saveCourse = (data) => {
  console.log("from creators" + data);
  return {
    type: SAVE_COURSE,
    payload: data,
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
