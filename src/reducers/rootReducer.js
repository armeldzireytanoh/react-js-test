import {combineReducers} from "redux";
import listReducer from "./listReducer";
import detailsReducer from "./detailsReducer"

export const rootReducer = combineReducers({
    list:listReducer,
    details:detailsReducer
});