import { ApiRouteService } from "../../config/app-reference";
import { apiSlice } from "../interceptor/apiSlice";

export interface Job {
  id: string;
  title: string;
  imageUrl: string;
  jobDetail: string;
  authorName: string;
  createdAt: string;
}

export interface AddJobRequest {
  title: string;
  imageUrl: string;
  jobDetail: string;
  authorName: string;
}

export interface UpdateJobRequest {
  title: string;
  imageUrl: string;
  jobDetail: string;
  authorName: string;
}

export const jobApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllJobs: builder.query<Job[], void>({
      query: () => ({
        url: ApiRouteService.job,
        method: "GET",
      }),
      providesTags: ["Job"], 
    }),

    getAllPublicJobs: builder.query<Job[], void>({
      query: () => ({
        url: ApiRouteService.job+'/public',
        method: "GET",
      }),
      providesTags: ["Job"], 
    }),

    getJobById: builder.query<Job, string>({
      query: (id) => ({
        url: `${ApiRouteService.job}/${id}`,
        method: "GET",
      }),
      providesTags: (result, error, id) => [{ type: "Job", id }],
    }),

    getJobBySlug: builder.query<Job, string>({
      query: (slug) => ({
        url: `${ApiRouteService.job}/slug/${slug}`,
        method: "GET",
      }),
      providesTags: (result, error, slug) => [{ type: "Job", slug }],
    }),

    addJob: builder.mutation<Job, AddJobRequest>({
      query: (data) => ({
        url: ApiRouteService.job,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Job"], // 👈 Invalidates the cache after adding a job
    }),

    updateJob: builder.mutation<Job, { id: string; updatedData: UpdateJobRequest }>({
      query: ({ id, updatedData }) => ({
        url: `${ApiRouteService.job}/${id}`,
        method: "PUT",
        body: updatedData,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Job", id }, "Job"], // 👈 Refresh specific and all jobs
    }),

    deleteJob: builder.mutation<void, string>({
      query: (id) => ({
        url: `${ApiRouteService.job}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Job"], // 👈 Refresh job list after deletion
    }),
  }),
});

export const { 
  useGetAllJobsQuery, 
  useGetAllPublicJobsQuery,
  useGetJobBySlugQuery,
  useAddJobMutation, 
  useGetJobByIdQuery, 
  useUpdateJobMutation, 
  useDeleteJobMutation 
} = jobApi;
