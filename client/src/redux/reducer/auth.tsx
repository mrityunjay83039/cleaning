import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
    token: string;
    firstName:string,
    lastName:string,
    userId:string,
    email: string,
  }

const initialState:AuthState = {
  token: '',
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
    },
    logOut: () => initialState,
  },
});

export const { setCredential, setToken, logOut } = authSlice.actions;
export default authSlice.reducer;

export const selectCurrentUser = (state: any) => state.auth.user