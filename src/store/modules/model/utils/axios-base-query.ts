import { BaseQueryFunction } from "../types";
import { axiosInstance } from "./axiosInstance";

export const axiosBaseQuery =
    (): BaseQueryFunction =>
    async ({
        url,
        method,
        data,
        params,
        headers: headersConfig,
        responseType,
    }) => {
        try {
            const result = await axiosInstance({
                url,
                method,
                data,
                params,
                responseType,
                headers: headersConfig,
            });
            return { data: result.data, meta: result.headers };
        } catch (error) {
            return {
                error,
            };
        }
    };
