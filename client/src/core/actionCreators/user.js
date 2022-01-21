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

export const loginUser = (email: string, pd: string) => ({
  type: LOGIN_USER,
  payload: {
    email,
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
  id,
  email,
  user_type,
  status,
  exp,
  token,
}) => ({
  type: SET_CURRENT_USER,
  payload: {
    id,
    email,
    user_type,
    status,
    exp,
    token,
  },
});
