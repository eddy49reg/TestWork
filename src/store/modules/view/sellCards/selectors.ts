import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../types";

export const getState = (state: RootState) => state.view.sellCards;

export const getSellCardsItems = createSelector(getState, state => state.items);
export const getSellCardFiltersQuery = createSelector(
    getState,
    state => state.filter.query
);
export const getSellCardFiltersStatus = createSelector(
    getState,
    state => state.filter.status
);
