import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SellsCard } from "../../model/endpoints/sellCards/types";
import { initialState, SLICE_NAME } from "./constants";

const sellCardsSlice = createSlice({
    name: SLICE_NAME,
    initialState,
    reducers: {
        setSellCards(state, action: PayloadAction<SellsCard[]>) {
            state.items = action.payload;
        },
        setFilterQuery(state, action: PayloadAction<string>) {
            state.filter.query = action.payload;
        },
        setFilterStatus(state, action: PayloadAction<string>) {
            state.filter.status = action.payload;
        },
    },
});

export const sellCardActions = sellCardsSlice.actions;
export const sellCardsReducer = sellCardsSlice.reducer;
