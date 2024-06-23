import { combineReducers } from "@reduxjs/toolkit";
import { modelReducer } from "./model";
import { viewReducer } from "./view/reducer";

export const rootReducer = combineReducers({
    model: modelReducer,
    view: viewReducer,
});
