import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
    token: string;
    refreshToken:string;
    firstName:string,
    lastName:string,
    userId:string,
    email: string,
  }

const initialState:AuthState = {
  token: '',
  refreshToken:'',
  firstName: '',
  lastName: '',
  userId: '',
  email: '',
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredential: (state, action:PayloadAction<string>) => {
      const { firstName, lastName, email, userId } = action.payload;
      state.firstName = firstName;
      state.lastName = lastName;
      state.email = email;
      state.userId = userId;
    },
    setToken: (state, action:PayloadAction<string>) => {
      state.token = action.payload;
      state.refreshToken = action.payload;
    },
    setRefreshToken: (state, action:PayloadAction<string>) => {
      state.refreshToken = action.payload;
    },
    logOut: () => initialState,
  },
});

export const { setCredential, setToken,setRefreshToken, logOut } = authSlice.actions;
export default authSlice.reducer;

export const selectCurrentUser = (state: any) => state.auth.email