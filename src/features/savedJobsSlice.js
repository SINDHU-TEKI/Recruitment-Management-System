
import { createSlice } from "@reduxjs/toolkit";

const savedJobsSlice = createSlice({
  name: "savedJobs",

  initialState:
    JSON.parse(
      localStorage.getItem("savedJobs")
    ) || [],

  reducers: {

    addFavorite: (state, action) => {

      const exists = state.find(
        job => job.id === action.payload.id
      );

      if (!exists) {
        state.push(action.payload);

        localStorage.setItem(
          "savedJobs",
          JSON.stringify(state)
        );

        alert("Job added to saved jobs!");
      }
    },

    removeFavorite: (state, action) => {

      const updated =
        state.filter(
          job => job.id !== action.payload
        );

      localStorage.setItem(
        "savedJobs",
        JSON.stringify(updated)
      );

      return updated;
    }

  }
});

export const {
  addFavorite,
  removeFavorite
} = savedJobsSlice.actions;

export default savedJobsSlice.reducer;
