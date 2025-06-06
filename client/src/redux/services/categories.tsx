import { ApiRouteService } from "../../config/app-reference";
import { apiSlice } from "../interceptor/apiSlice";

export const categoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => ({
        url: ApiRouteService.category+"/public",
        method: "GET",
      }),
      providesTags: ["Category"],
    }),

    addCategory: builder.mutation<any, any>({
      query: (data) => ({
        url: ApiRouteService.category,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Category"],
    }),

    getCategoryById: builder.query({
      query: (id) => ({
        url: `${ApiRouteService.category}/${id}`,
        method: "GET",
      }),
      providesTags: ["Category"],
    }),

    // Update Category
    updateCategory: builder.mutation({
      query: ({ id, updatedData }) => ({
        url: `${ApiRouteService.category}/${id}`,
        method: "PUT",
        body: updatedData,
      }),
      invalidatesTags: ["Category"],
    }),

    // Delete Category
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `${ApiRouteService.category}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Category"],
    }),
  }),
});

export const { 
  useGetAllCategoriesQuery, 
  useGetCategoryByIdQuery, 
  useAddCategoryMutation, 
  useUpdateCategoryMutation, 
  useDeleteCategoryMutation 
} = categoryApi;
