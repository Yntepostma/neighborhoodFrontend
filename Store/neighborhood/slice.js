import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  neighborhood: [],
};

const neighborhoodSlice = createSlice({
  name: "neighborhoods",
  initialState,
  reducers: {
    setNeighborhoods: (state, action) => {
      state.neighborhood = action.payload;
    },
  },
});

export const { setNeighborhoods } = neighborhoodSlice.actions;
export default neighborhoodSlice.reducer;
