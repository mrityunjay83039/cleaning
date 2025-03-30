import { ApiRouteService } from "../../config/app-reference";
import { apiSlice } from "../interceptor/apiSlice";

export interface Blog {
  id: string;
  title: string;
  slug: string;
  imageUrl: string;
  categoryTitle: string;
  categoryId: string;
  blogDetail: string;
  authorName: string;
  createdAt: string;
}

export interface AddPostRequest {
  title: string;
  imageUrl: string;
  categoryTitle: string;
  categoryId: string;
  blogDetail: string;
  authorName: string;
}

export interface UpdatePostRequest {
  title: string;
  imageUrl: string;
  categoryTitle: string;
  categoryId: string;
  blogDetail: string;
  authorName: string;
}

export const blogApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllBlogs: builder.query<Blog[], void>({
      query: () => ({
        url: ApiRouteService.blog,
        method: "GET",
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.blogs.map(({ id }) => ({ type: "Blog", id } as const)),
              { type: "Blog", id: "LIST" },
            ]
          : [{ type: "Blog", id: "LIST" }],
    }),
    
    getBlogById: builder.query<Blog, string>({
      query: (id) => ({
        url: `${ApiRouteService.blog}/${id}`,
        method: "GET",
      }),
      providesTags: (result, error, id) => [{ type: "Blog", id }],
    }),

    getBlogBySlug: builder.query<Blog, string>({
      query: (slug) => ({
        url: `${ApiRouteService.blogBySlug}/${slug}`,
        method: "GET",
      }),
      providesTags: (result, error, slug) => [{ type: "Blog", slug }],
    }),
    
    addPost: builder.mutation<Blog, AddPostRequest>({
      query: (data) => ({
        url: ApiRouteService.blog,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [{ type: "Blog", id: "LIST" }],
    }),
    
    updatePost: builder.mutation<Blog, UpdatePostRequest>({
      query: ({ id, updatedData }) => ({
        url: `${ApiRouteService.blog}/${id}`,
        method: "PUT",
        body: updatedData,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Blog", id }, { type: "Blog", id: "LIST" }],
    }),
    
    deletePost: builder.mutation<void, string>({
      query: (id) => ({
        url: `${ApiRouteService.blog}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [{ type: "Blog", id }, { type: "Blog", id: "LIST" }],
    }),
  }),
});

export const { 
  useGetAllBlogsQuery, 
  useAddPostMutation, 
  useGetBlogByIdQuery,
  useGetBlogBySlugQuery,
  useUpdatePostMutation, 
  useDeletePostMutation 
} = blogApi;
