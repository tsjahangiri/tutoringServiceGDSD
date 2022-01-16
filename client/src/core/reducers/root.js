import { combineReducers } from "redux";
import tutor from "./tutor";
import user from "./user";

const rootReducer = combineReducers({
  tutor,
  user
});

export default rootReducer;
