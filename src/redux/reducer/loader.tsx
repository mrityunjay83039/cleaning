import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  loader: false,
  progress: false,
};

const loaderSlice = createSlice({
  name: "loader",
  initialState: initialState,
  reducers: {
    setLoader: (state, action) => {
      state.loader = action.payload;
    },
    setProgress: (state, action) => {
      state.progress = action.payload;
    },
  },
});

export const { setLoader, setProgress } = loaderSlice.actions;
export default loaderSlice.reducer;
export const selectLoader = (state: any) => state.loader.loader;
export const selectPorgress = (state: any) => state.loader.progress;
