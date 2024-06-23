import { BaseQueryFn } from "@reduxjs/toolkit/query";
import { AxiosRequestConfig } from "axios";

export type BaseQueryFunction = BaseQueryFn<{
    url: string;
    method: AxiosRequestConfig["method"];
    data?: AxiosRequestConfig["data"];
    params?: AxiosRequestConfig["params"];
    headers?: AxiosRequestConfig["headers"];
    responseType?: AxiosRequestConfig["responseType"];
}>;
