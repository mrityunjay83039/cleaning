import { ApiRouteService } from "../../config/app-reference";
import { apiSlice } from "../interceptor/apiSlice";

export interface Login {
  userKey: string;
  password: string;
  key: string;
}

export const categoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllCategories: builder.mutation({
      query: () => ({
        url: ApiRouteService.category,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllCategoriesMutation } = categoryApi;
