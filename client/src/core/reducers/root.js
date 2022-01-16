import { combineReducers } from "redux";
import tutor from "./tutor";
import user from "./user";
import studentShow from "./studentShow"

const rootReducer = combineReducers({
  tutor,
  user,
<<<<<<< HEAD
  studentShow,
=======
  course
>>>>>>> origin/api-integration-rakib
});

export default rootReducer;
