import { combineReducers } from "redux";
import tutor from "./tutor";
import user from "./user";
import course from "./course"

const rootReducer = combineReducers({
  tutor,
  user,
  course
});

export default rootReducer;
