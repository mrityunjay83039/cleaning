import { ApiRouteService } from "../../config/app-reference";
import { apiSlice } from "../interceptor/apiSlice";

export interface Login {
  userKey: string;
  password: string;
  key: string;
}

export const blogApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllBlogs: builder.mutation<Login, Partial<Login>>({
      query: () => ({
        url: ApiRouteService.allBlogs,
        method: "GET",
      }),
    }),

    addPost: builder.mutation<any, any>({
      query: (data) => ({
        url: ApiRouteService.addPost,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetAllBlogsMutation, useAddPostMutation } = blogApi;
