import { combineReducers } from "redux";
import tutor from "./tutor";
import user from "./user";
import studentShow from "./studentShow"
import course from "./course"
import tutorprofile from "./tutorprofile"

const rootReducer = combineReducers({
  tutor,
  user,
  studentShow,
  course,
  tutorprofile
});

export default rootReducer;
