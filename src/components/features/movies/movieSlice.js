import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../../common/apis/MovieApi";
import { apiKey } from "../../../common/apis/MovieApiKey";

let movieText = "Harry";
export const fetchMoviesThunk = createAsyncThunk(
  "movies/fetchMoviesThunk",
  async (term) => {
    const response = await movieApi.get(
      `?apiKey=${apiKey}&s=${term || movieText}&type=movie`
    );
    return response.data;
  }
);

let seriesText = "Friends";
export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (term) => {
    const response = await movieApi.get(
      `?apiKey=${apiKey}&s=${term || seriesText}&type=series`
    );
    return response.data;
  }
);

export const fetchMovieOrShow = createAsyncThunk(
  "movies/fetchMovieOrShow",
  async (id) => {
    const response = await movieApi.get(`?apiKey=${apiKey}&i=${id}&Plot=full`);
    return response.data;
  }
);

let initialState = {
  movies: [],
  shows: [],
  selectedMovieOrShow: {},
  loading: false,
  error: null,
};

let movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    cleanSelectedMovieOrShow: (state) => {
      state.selectedMovieOrShow = {};
    },
  },
  extraReducers: {
    [fetchMoviesThunk.pending]: (state) => {
      console.log("pending");
      return { ...state, loading: true, shows: [], movies: [] };
    },
    [fetchMoviesThunk.fulfilled]: (state, { payload }) => {
      return { ...state, movies: payload, loading: false, error: null };
    },
    [fetchMoviesThunk.rejected]: (state, { error }) => {
      console.log("Error");
      return {
        ...state,
        shows: [],
        movies: [],
        loading: false,
        error: error.message,
      };
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      return { ...state, shows: payload, loading: false, error: null };
    },
    [fetchAsyncShows.rejected]: (state, { error }) => {
      console.log("Error");
      return {
        ...state,
        shows: [],
        movies: [],
        loading: false,
        error: error.message,
      };
    },
    [fetchMovieOrShow.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        selectedMovieOrShow: payload,
        loading: false,
        error: null,
      };
    },
  },
});

export const { cleanSelectedMovieOrShow } = movieSlice.actions;

export default movieSlice.reducer;
