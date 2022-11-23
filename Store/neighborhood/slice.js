import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  neighborhood: [],
  location: [],
};

const neighborhoodSlice = createSlice({
  name: "neighborhoods",
  initialState,
  reducers: {
    setNeighborhoods: (state, action) => {
      state.neighborhood = action.payload;
    },
    setLocation: (state, action) => {
      console.log("payload", action.payload);
      state.location = action.payload;
      console.log("state", state.location);
    },
  },
});

export const { setNeighborhoods, setLocation } = neighborhoodSlice.actions;
export default neighborhoodSlice.reducer;
