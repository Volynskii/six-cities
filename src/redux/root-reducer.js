// Core
import { combineReducers } from "redux";

// Reducers
import { hotelsReducer } from "./hotels/reducer";
import {fetchReducer} from "./fetch/reducer";

export const rootReducer = combineReducers({
  hotels: hotelsReducer,
  fetch: fetchReducer
});
