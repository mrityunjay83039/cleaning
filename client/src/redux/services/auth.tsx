import { ApiRouteService } from "../../config/app-reference";
import { apiSlice } from "../interceptor/apiSlice";

export interface Login {
  userKey: string;
  password: string;
  key: string;
}

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    /**
     * Checks if a user is valid.
     * @param userKey The user key to check.
     * @returns A Promise that resolves to the login information.
     */
    // checkUser: builder.mutation<Login, { userKey: string }>({
    //   query: (userKey) => ({
    //     url: ApiRouteService.checkUser,
    //     method: "Get",
    //     params: userKey,
    //   }),
    // }),
    /**
     * Performs a login request.
     *
     * @param body - The login credentials.
     * @returns A Promise that resolves to the login response.
     */
    login: builder.mutation<Login, Partial<Login>>({
      query: (body) => ({
        url: ApiRouteService.login,
        method: "POST",
        body,
      }),
    }),
  
    UserLogout: builder.mutation<Login, Partial<Login>>({
      query: (body) => ({
        url: ApiRouteService.logout,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLoginMutation, useUserLogoutMutation } = authApi;
