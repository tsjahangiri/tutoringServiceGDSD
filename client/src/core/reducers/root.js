import { combineReducers } from "redux";
import tutor from "./tutor";
import user from "./user";
import studentShow from "./studentShow";
import course from "./course";
import offerCourse from "./offerCourse";

const rootReducer = combineReducers({
  tutor,
  user,
  studentShow,
  course,
  offerCourse,
});

export default rootReducer;
