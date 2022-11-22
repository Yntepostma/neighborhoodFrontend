import { configureStore } from "@reduxjs/toolkit";
import neighborhoodReducer from "./neighborhood/slice";

const store = configureStore({
  reducer: {
    neighborhoods: neighborhoodReducer,
  },
});

export default store;
