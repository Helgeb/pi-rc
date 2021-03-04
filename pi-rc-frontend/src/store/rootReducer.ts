import { combineReducers } from "redux";
import config from "./config/reducer";

export const rootReducer = combineReducers({
  config,
});
