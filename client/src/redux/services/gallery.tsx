import { ApiRouteService } from "../../config/app-reference";
import { apiSlice } from "../interceptor/apiSlice";

export interface Gallery {
  id: string;
  title: string;
  imageUrl: string;
  authorName: string;
  createdAt: string;
}

export interface AddGalleryRequest {
  title: string;
  imageUrl: string;
  authorName: string;
}

export interface UpdateGalleryRequest {
  title: string;
  imageUrl: string;
  authorName: string;
}

export const galleryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllGalleries: builder.query<Gallery[], void>({
      query: () => ({
        url: ApiRouteService.gallery,
        method: "GET",
      }),
      providesTags: ["Gallery"], 
    }),

    getGalleryById: builder.query<Gallery, string>({
      query: (id) => ({
        url: `${ApiRouteService.gallery}/${id}`,
        method: "GET",
      }),
      providesTags: (result, error, id) => [{ type: "Gallery", id }],
    }),

    addGallery: builder.mutation<Gallery, AddGalleryRequest>({
      query: (data) => ({
        url: ApiRouteService.gallery,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Gallery"], 
    }),

    updateGallery: builder.mutation<Gallery, { id: string; updatedData: UpdateGalleryRequest }>({
      query: ({ id, updatedData }) => ({
        url: `${ApiRouteService.gallery}/${id}`,
        method: "PUT",
        body: updatedData,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Gallery", id }, "Gallery"],
    }),

    deleteGallery: builder.mutation<void, string>({
      query: (id) => ({
        url: `${ApiRouteService.gallery}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Gallery"],
    }),
  }),
});

export const { 
  useGetAllGalleriesQuery, 
  useAddGalleryMutation, 
  useGetGalleryByIdQuery, 
  useUpdateGalleryMutation, 
  useDeleteGalleryMutation 
} = galleryApi;
