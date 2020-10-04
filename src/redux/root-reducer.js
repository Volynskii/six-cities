// Core
import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";

// Reducers
import {hotelsReducer} from "./hotels/reducer";
import {fetchReducer} from "./fetch/reducer";
import {authReducer} from "./auth/reducer";


export const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    fetch: fetchReducer,
    hotels: hotelsReducer,
    auth: authReducer
  });
