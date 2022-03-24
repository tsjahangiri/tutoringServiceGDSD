/* eslint-disable no-duplicate-case */
// @flow
import {
  FETCH_POLL_BY_ID,
  SET_POLL,
  SAVE_POLL,
  SAVE_POLL_LOADING,
  SAVE_POLL_SUCCESS,
  SAVE_POLL_FAILED,
  UPDATE_POLL,
  UPDATE_POLL_SUCCESS,
  UPDATE_POLL_FAILED,
} from "../actionTypes/votingPoll";

export const INITIAL_STATE = {};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case FETCH_POLL_BY_ID:
      const { id } = action.payload;
      return {
        ...state,
        id: id,
      };
    case SET_POLL:
      return {
        ...state,
        data: action.payload,
      };

    case SAVE_POLL:
      console.log("Called");
      return {
        ...state,
        saveAlert: undefined,
      };

    case UPDATE_POLL:
      return {
        ...state,
        updateAlert: undefined,
      };

    case SAVE_POLL_SUCCESS:
    case UPDATE_POLL_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };

    case SAVE_POLL_FAILED:
    case UPDATE_POLL_FAILED:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
