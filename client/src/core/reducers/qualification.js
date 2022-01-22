/* eslint-disable no-duplicate-case */
// @flow
import {
  SAVE_QUALIFICATION,
  SAVE_QUALIFICATION_SUCCESS,
  SAVE_QUALIFICATION_FAILED,

  UPDATE_QUALIFICATION,
  UPDATE_QUALIFICATION_SUCCESS,
  UPDATE_QUALIFICATION_FAILED
} from "../actionTypes/qualification";

export const INITIAL_STATE = {};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case SAVE_QUALIFICATION:
      return {
        ...state,
        saveAlert: undefined
      };
   
    case UPDATE_QUALIFICATION:
      return {
        ...state,
        updateAlert: undefined
      };

    case SAVE_QUALIFICATION_SUCCESS:
    case UPDATE_QUALIFICATION_SUCCESS:
    return {
        ...state,
        ...action.payload,
      };

    case SAVE_QUALIFICATION_FAILED:
    case UPDATE_QUALIFICATION_FAILED:
       return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
