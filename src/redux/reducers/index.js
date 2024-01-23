import { combineReducers } from "redux";
import authReducer from "./authReducers.js"
import { changeTheNumber } from "./changeTheNumber.js";

const rootReducer = combineReducers({
    auth: authReducer,
    changeTheNumber
  });
  
export default rootReducer;