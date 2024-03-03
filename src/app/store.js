import { configureStore } from "@reduxjs/toolkit";
import exercisesSlice from "../features/exercisesSlice";

export const store = configureStore({
  reducer: {
    app: exercisesSlice
  }
});
