import { combineReducers } from "redux";
import tutor from "./tutor";
import user from "./user";
import offerCourse from "./offerCourse";
import course from "./course";
import qualification from "./qualification";
import manageUsers from "./manageUsers";
import manageTutorsProfile from "./manageTutorsProfile";

const rootReducer = combineReducers({
  tutor,
  user,
  course,
  offerCourse,
  qualification,
  manageUsers,
  manageTutorsProfile,
});

export default rootReducer;
