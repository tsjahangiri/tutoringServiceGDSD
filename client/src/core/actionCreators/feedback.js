// @flow
import {
  SAVE_FEEDBACK,
  SAVE_FEEDBACK_LOADING,
  SAVE_FEEDBACK_SUCCESS,
  SAVE_FEEDBACK_FAILED
} from "../actionTypes/feedback";


//SAVE
export const saveFeedback = (payload) => {
  return {
    type: SAVE_FEEDBACK,
    payload
  };
};