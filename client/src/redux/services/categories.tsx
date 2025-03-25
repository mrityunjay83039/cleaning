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

    addCategory: builder.mutation<any, any>({
      query: (data) => ({
        url: ApiRouteService.category,
        method: "POST",
        body: data,
      }),
    }),

    getCategoryById: builder.query({
      query: (id) => ({
        url: `${ApiRouteService.category}/${id}`,
        method: "GET",
      }),
    }),

    // Update Category
    updateCategory: builder.mutation({
      query: ({ id, updatedData }) => ({
        url: `${ApiRouteService.category}/${id}`,
        method: "PUT",
        body: updatedData,
      }),
    }),

    // Delete Category
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `${ApiRouteService.category}/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { 
  useGetAllCategoriesMutation, 
  useGetCategoryByIdQuery, 
  useAddCategoryMutation, 
  useUpdateCategoryMutation, 
  useDeleteCategoryMutation 
} = categoryApi;
