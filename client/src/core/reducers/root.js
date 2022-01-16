import { combineReducers } from "redux";
import tutor from "./tutor";
import user from "./user";
import studentShow from "./studentShow"
import course from "./course"

const rootReducer = combineReducers({
  tutor,
  user,
//  studentShow,
  course
});

export default rootReducer;
