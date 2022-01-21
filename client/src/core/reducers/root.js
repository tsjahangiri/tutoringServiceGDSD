import { combineReducers } from "redux";
import tutor from "./tutor";
import user from "./user";
import studentShow from "./studentShow";
import offerCourse from "./offerCourse";
import course from "./course";
import pendingTutorListShow from "./PendingTutorShow";

const rootReducer = combineReducers({
  tutor,
  user,
  studentShow,
  course,
  offerCourse,
  pendingTutorListShow,
});

export default rootReducer;
