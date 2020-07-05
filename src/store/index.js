import { combineReducers } from "redux";
import { counterReducer as counter } from "./Counter";
import { inputReducer as input } from "./Input";

const rootReducer = combineReducers({
  counter,
  input,
});

export default rootReducer;
export { addCounter, setCounters } from "./Counter";
export { setInput, toggleCheckbox } from "./Input";