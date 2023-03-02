import React, { useEffect } from "react";
import MovieList from "../../components/movieList/MovieList";
import {
  fetchAsyncShows,
  fetchMoviesThunk,
} from "../features/movies/movieSlice";
import { useDispatch } from "react-redux";
const Home = () => {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMoviesThunk());
    dispatch(fetchAsyncShows());
  }, [dispatch]);

  return (
    <>
      <div className="banner-img"></div>
      <MovieList />
    </>
  );
};

export default Home;
