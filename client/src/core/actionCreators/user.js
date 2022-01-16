// @flow
import {
  LOGIN_USER,
  SET_LOGIN_ERROR,
  LOGOUT_USER,
  SET_CURRENT_USER,
} from "../actionTypes/user";

export const setLoginError = (loginError: string) => ({
  type: SET_LOGIN_ERROR,
  payload: {
    loginError,
  },
});

export const loginUser = (username: string, pd: string) => ({
  type: LOGIN_USER,
  payload: {
    username,
    pd,
  },
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});

export const setCurrentUser = ({
  email,
  user_name,
  user_type,
  token,
  exp,
}) => ({
  type: SET_CURRENT_USER,
  payload: {
    email,
    user_name,
    user_type,
    token,
    exp,
  },
});
