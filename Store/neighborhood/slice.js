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
      state.location = action.payload;
    },
  },
});

export const { setNeighborhoods, setLocation } = neighborhoodSlice.actions;
export default neighborhoodSlice.reducer;
