import { combineReducers } from "@reduxjs/toolkit";
import { sellCardsReducer } from "./sellCards/slice";

export const viewReducer = combineReducers({
    sellCards: sellCardsReducer,
});
