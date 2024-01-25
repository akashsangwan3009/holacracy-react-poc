import { combineReducers } from "redux";
import authReducer from "./authReducers.js"
import buyCakeReducer from "./buyCakeReducer.js";
import counterReducer from "./counterSlice.js";


const rootReducer = combineReducers({
    auth: authReducer,
    buyCake:buyCakeReducer,
    counterReducer:counterReducer
});
  
export default rootReducer;