
// @flow
import {
  SAVE_OFFER_COURSE,
  SAVE_OFFER_COURSE_LOADING,
  SAVE_OFFER_COURSE_SUCCESS,
  SAVE_OFFER_COURSE_FAILED,
} from "../actionTypes/offerCourse";

export const saveOfferCourse = (data) => {
  console.log("from creators" + data);
  return {
    type: SAVE_OFFER_COURSE,
    payload: data
  };
};

export const saveOfferCourseLoading = (data) => ({
  type: SAVE_OFFER_COURSE_LOADING,
  data,
});

export const saveOfferCourseSuccess = (data) => ({
  type: SAVE_OFFER_COURSE_SUCCESS,
  data,
});

export const saveOfferCourseFailed = () => ({
  type: SAVE_OFFER_COURSE_FAILED,
});
