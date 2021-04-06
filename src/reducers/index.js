import { combineReducers } from "redux";

import  {mapReducer}  from "./Map";

 export const reducers = combineReducers({
     usStates: mapReducer
 }); 