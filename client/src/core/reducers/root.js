import { combineReducers } from "redux";
import tutor from "./tutor";
import user from "./user";
import studentShow from "./studentShow";
import offerCourse from "./offerCourse";
import course from "./course";
import qualification from "./qualification";
import pendingTutorListShow from "./PendingTutorShow";
import manageUsers from "./manageUsers";
import manageTutorsProfile from "./manageTutorsProfile";

const rootReducer = combineReducers({
  tutor,
  user,
  studentShow,
  course,
  offerCourse,
  pendingTutorListShow,
  qualification,
  manageUsers,
  manageTutorsProfile,
});

export default rootReducer;
