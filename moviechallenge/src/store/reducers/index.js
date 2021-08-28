import { combineReducers } from "redux";
import movieReducer from "./login-reducer";


export default combineReducers({
  movie: movieReducer,
});
