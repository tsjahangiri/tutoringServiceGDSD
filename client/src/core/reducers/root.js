import { combineReducers } from "redux";
import tutor from "./tutor";
import user from "./user";
import offerCourse from "./offerCourse";
import course from "./course";
import qualification from "./qualification";
import manageUsers from "./manageUsers";
import manageTutorsProfile from "./manageTutorsProfile";
<<<<<<< HEAD
import dashboard from "./dashboard";
=======
import feedback from "./feedback";
>>>>>>> 8f69627dfc17e79cf24870642598d63072d2ea76

const rootReducer = combineReducers({
  tutor,
  user,
  course,
  offerCourse,
  qualification,
  manageUsers,
  manageTutorsProfile,
<<<<<<< HEAD
  dashboard,
=======
  feedback,
>>>>>>> 8f69627dfc17e79cf24870642598d63072d2ea76
});

export default rootReducer;
