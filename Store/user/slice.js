import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  profile: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducer: {},
});

export const {} = userSlice.actions;
export default userSlice.reducer;
