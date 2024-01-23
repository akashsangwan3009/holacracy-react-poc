import { combineReducers } from "redux";
import authReducer from "./authReducers.js"
import buyCakeReducer from "./buyCakeReducer.js";


const rootReducer = combineReducers({
    auth: authReducer,
    buyCake:buyCakeReducer
});
  
export default rootReducer;