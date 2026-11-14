import { configureStore } from "@reduxjs/toolkit";

import savedJobsReducer from "../features/savedJobsSlice";

export const store = configureStore({
  reducer: {
    savedJobs: savedJobsReducer
  }
});