import { api } from "../../api";
import { TAG_TYPE } from "../../constants";
import { GetSellsCardResponse } from "./types";

export const sellCardsEndpoints = api.injectEndpoints({
    endpoints: builder => ({
        getSellsCards: builder.query<GetSellsCardResponse, void>({
            query: () => ({
                url: "/",
                method: "GET",
            }),
            providesTags: result =>
                result
                    ? [
                          ...result.data.map(({ id }) => ({
                              type: TAG_TYPE.SELL_CARDS,
                              id,
                          })),
                          { type: TAG_TYPE.SELL_CARDS, id: "LIST" },
                      ]
                    : [{ type: TAG_TYPE.SELL_CARDS, id: "LIST" }],
        }),
    }),
});

export const { useGetSellsCardsQuery } = sellCardsEndpoints;
export const useReadSellCardsState =
    sellCardsEndpoints.endpoints.getSellsCards.useQueryState;
