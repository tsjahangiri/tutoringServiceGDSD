// @flow
export const getUserType = (state: Object) =>
  state.user.current?.userType ?? "guest";

export const getLoginError = (state: Object) => state.user.loginError;

export const isAuthenticated = (state: Object) => state.user.isAuthenticated;

export const getCurrentUser = (state: Object) => state.user.current;

export const getJwtSecret = (state: Object) => ({
  Secret: state.user.current.Secret,
  Expiry: state.user.current.Expiry,
});
