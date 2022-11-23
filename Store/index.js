import { configureStore } from "@reduxjs/toolkit";
import neighborhoodReducer from "./neighborhood/slice";
import userReducer from "./user/slice";

const store = configureStore({
  reducer: {
    neighborhoods: neighborhoodReducer,
    user: userReducer,
  },
});

export default store;
