/* eslint-disable no-duplicate-case */
// @flow
import {
  SAVE_QUALIFICATION,
  SAVE_QUALIFICATION_LOADING,
  SAVE_QUALIFICATION_SUCCESS,
  SAVE_QUALIFICATION_FAILED,
} from "../actionTypes/qualification";

export const INITIAL_STATE = {};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_QUALIFICATION:
      return {
        ...state,
      };
    case SAVE_QUALIFICATION_LOADING:
      return INITIAL_STATE;
    case SAVE_QUALIFICATION_SUCCESS:
      return INITIAL_STATE;
    case SAVE_QUALIFICATION_FAILED:
      return INITIAL_STATE;
    default:
      return state;
  }
};
