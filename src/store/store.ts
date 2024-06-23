import { configureStore } from "@reduxjs/toolkit";
import { modelMiddleware } from "./modules/model";
import { rootReducer } from "./modules/reducer";

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(modelMiddleware),
});
