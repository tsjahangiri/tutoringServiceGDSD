
// @flow
import {
  SAVE_COURSE,
  SAVE_COURSE_LOADING,
  SAVE_COURSE_SUCCESS,
  SAVE_COURSE_FAILED,
} from "../actionTypes/course";

export const saveCourse = (payload) => {
  const { filters = {} } = payload;
  return {
    type: SAVE_COURSE,
    payload: {
      filters,
    },
  };
};

export const saveCourseLoading = (payload) => ({
  type: SAVE_COURSE_LOADING,
  payload,
});

export const saveCourseSuccess = (payload) => ({
  type: SAVE_COURSE_SUCCESS,
  payload,
});

export const saveCourseFailed = () => ({
  type: SAVE_COURSE_FAILED,
});
