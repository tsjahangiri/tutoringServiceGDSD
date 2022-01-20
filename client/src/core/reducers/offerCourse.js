/* eslint-disable no-duplicate-case */
// @flow
import {
  SAVE_OFFER_COURSE,
  SAVE_OFFER_COURSE_LOADING,
  SAVE_OFFER_COURSE_SUCCESS,
  SAVE_OFFER_COURSE_FAILED,
} from "../actionTypes/offerCourse";

export const INITIAL_STATE = {};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_OFFER_COURSE:
      return {
        ...state,
      };
    case SAVE_OFFER_COURSE_LOADING:
      return INITIAL_STATE;
    case SAVE_OFFER_COURSE_SUCCESS:
      return INITIAL_STATE;
    case SAVE_OFFER_COURSE_FAILED:
      return INITIAL_STATE;
    default:
      return state;
  }
};
