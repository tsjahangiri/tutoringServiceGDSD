import { combineReducers } from "redux";
import tutor from "./tutor";
import user from "./user";
import studentShow from "./studentShow";
import offerCourse from "./offerCourse";
import course from "./course";
import qualification from "./qualification";
import pendingTutorListShow from "./PendingTutorShow";

const rootReducer = combineReducers({
  tutor,
  user,
  studentShow,
  course,
  offerCourse,
  pendingTutorListShow,
  qualification
});

export default rootReducer;
