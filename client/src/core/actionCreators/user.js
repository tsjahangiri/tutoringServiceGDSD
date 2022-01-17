// @flow
import {
  LOGIN_USER,
  SET_LOGIN_ALERT,
  LOGOUT_USER,
  SET_CURRENT_USER,
  REGISTER_USER,
  SET_REGISTRATION_ALERT,
} from "../actionTypes/user";

export const setLoginAlert = (message: string, type: string = "danger") => ({
  type: SET_LOGIN_ALERT,
  payload: {
    loginAlert: {
      message,
      type,
    },
  },
});

export const setRegistrationAlert = (
  message: string,
  type: string = "danger"
) => ({
  type: SET_REGISTRATION_ALERT,
  payload: {
    registrationAlert: {
      message,
      type,
    },
  },
});

export const loginUser = (username: string, pd: string) => ({
  type: LOGIN_USER,
  payload: {
    username,
    pd,
  },
});

export const registerUser = (payload) => ({
  type: REGISTER_USER,
  payload,
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
