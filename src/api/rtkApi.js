import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const params = {
  _limit: 4,
  _sort: "-rating",
};

export const rtkApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: __API__ }),
  endpoints: (builder) => ({
    getPizzas: builder.query({
      query: () => ({
        url: `/pizzas`,
        params: params,
      }),
    }),
    getBurgers: builder.query({
      query: () => ({
        url: `/burgers`,
        params: params,
      }),
    }),
    getOthers: builder.query({
      query: () => ({
        url: `/other`,
        params: params,
      }),
    }),
  }),
});

export const useGetPizzas = rtkApi.useGetPizzasQuery;
export const useGetBurgers = rtkApi.useGetBurgersQuery;
export const useGetOthers = rtkApi.useGetOthersQuery;
