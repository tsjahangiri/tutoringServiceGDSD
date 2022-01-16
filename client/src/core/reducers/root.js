import { combineReducers } from "redux";
import tutor from "./tutor";
import course from "./course"

const rootReducer = combineReducers({
  tutor,
  course,
});

export default rootReducer;
