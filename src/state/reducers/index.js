import { combineReducers } from "redux";
import amountReducer from "./amountReducer";
import titleReducer from "./titleReducer";

const reducers = combineReducers({
  amount: amountReducer,
  title: titleReducer
})

export default reducers;