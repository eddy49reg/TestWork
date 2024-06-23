import { createApi } from "@reduxjs/toolkit/query/react";
import { API_REDUCER_PATH, TAG_TYPE } from "./constants";
import { axiosBaseQuery } from "./utils/axios-base-query";

export const api = createApi({
    reducerPath: API_REDUCER_PATH,
    baseQuery: axiosBaseQuery(),
    tagTypes: Object.values(TAG_TYPE),
    keepUnusedDataFor: 1000000,
    endpoints: () => ({}),
});

export const { reducer, middleware } = api;
