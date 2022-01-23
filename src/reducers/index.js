import { combineReducers } from "redux";

import users from "./users.js";
import questions from "./questions";

export default combineReducers({
  users,
  questions,
});
