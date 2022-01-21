import { combineReducers } from "redux";
import tutor from "./tutor";
import user from "./user";
import course from "./course"
import pendingTutorListShow from "./PendingTutorShow"
import studentShow from "./studentShow"


const rootReducer = combineReducers({
  tutor,
  user,
  studentShow,
  course, 
  pendingTutorListShow,
});

export default rootReducer;
