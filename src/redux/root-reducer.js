// Core
import { combineReducers } from "redux";

// Reducers
import { hotelsReducer } from "./hotels/reducer";
import {fetchReducer} from "./fetch/reducer";
import { authReducer } from "./auth/reducer";

export const rootReducer = combineReducers({
  hotels: hotelsReducer,
  fetch: fetchReducer,
  auth: authReducer
});
