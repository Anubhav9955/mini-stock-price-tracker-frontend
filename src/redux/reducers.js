import stockReducer from "./stocks/reducer";
import { combineReducers } from "redux";

const createRootReducer = () =>
  combineReducers({
    stock: stockReducer,
  });

export default createRootReducer;
