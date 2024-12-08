import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isUserAuth: false,
  userData: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveuserData: (state, action) => {
      (state.isUserAuth = true), (state.userData = action.payload);
    },
    clearuserData: (state) => {
      (state.isUserAuth = false), (state.userData = {});
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveuserData, clearuserData } = userSlice.actions;

export default userSlice.reducer;
