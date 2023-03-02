import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movies/movieSlice";
export default configureStore({
  reducer: {
    movies: moviesReducer,
  },
});
