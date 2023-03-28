import { combineReducers } from "redux";
import ReducerUser from './userReducer';

const RootReducer = combineReducers({
  ReducerUser: ReducerUser
});

export default RootReducer;