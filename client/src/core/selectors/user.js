// @flow
export const getUserType = (state: Object) => {
  if (state.user.current === undefined) return "guest";
  switch (state.user.current.user_type) {
    case 100: // Admin
      return "admin";
    case 101: // Tutor
      return "tutor";
    case 102: // Student
      return "student";
    default:
      return "guest";
  }
};

export const getLoginAlert = (state: Object) => state.user.loginAlert;

export const getRegistrationAlert = (state: Object) =>
  state.user.registrationAlert;

export const isAuthenticated = (state: Object) => state.user.isAuthenticated;

export const getCurrentUser = (state: Object) => state.user.current;

export const getJwtSecret = (state: Object) => ({
  Secret: state.user.current.token,
  Expiry: state.user.current.exp,
});
