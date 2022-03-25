// @flow
import {
  SAVE_FEEDBACK
} from "../actionTypes/feedback";

export const INITIAL_STATE = {
  data: [],
  feedbackData: []
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
    case SET_TUTOR_OFFERED_COURSE:
      return {
        ...state,
        tutorCourseData: action.payload,
      };
    case SET_TUTOR_FILES:
      return {
        ...state,
        tutorFilesData: action.payload,
      };
    case SET_TUTOR_QUALIFICATION:
      return {
        ...state,
        tutorQualificationData: action.payload,
      };
    case SET_TUTOR_REVIEW:
      return {
        ...state,
        tutorReviewData: action.payload,
      };
  }
};
