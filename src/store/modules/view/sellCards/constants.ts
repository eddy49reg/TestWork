import { SellCardsState } from "./types";

export const initialState: SellCardsState = {
    items: [],
    filter: {
        query: "",
        status: "",
    },
};

export const SLICE_NAME = "SELLCARD_VIEW";
