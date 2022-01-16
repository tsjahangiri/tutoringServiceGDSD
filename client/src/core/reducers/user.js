// @flow
import {
  LOGIN_USER,
  SET_LOGIN_ERROR,
  LOGOUT_USER,
  SET_CURRENT_USER,
} from "../actionTypes/user";

export const INITIAL_STATE = {
  isAuthenticated: false,
};

// A reducer is a pure function that takes an action and the *previous state* of the application
// and returns the new state.
export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        authenticationError: undefined,
      };
    case SET_LOGIN_ERROR:
      return {
        ...state,
        ...action.payload,
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        current: action.payload,
        isAuthenticated: true,
      };
    case LOGOUT_USER:
      return {
        ...state,
        current: undefined,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};
