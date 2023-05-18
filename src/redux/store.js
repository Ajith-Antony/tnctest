import { combineReducers } from "redux";
import studentReducer from "./reducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const reducer = combineReducers({
  studentReducer,
});

export default function configureStore() {
  return createStore(reducer, applyMiddleware(thunk));
}
