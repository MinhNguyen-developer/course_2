/** @format */

import { combineReducers } from "redux";
import cartReducer from "./cartExcersiceReducer";
import diceExcersiseReducer from "./diceExcersiseReducer";

const rootReducer = combineReducers({
  cartState: cartReducer,
  diceExcersiseReducer, // state dice excersise
});

export default rootReducer;
