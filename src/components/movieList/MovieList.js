import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../movieCard/MovieCard";
import Slider from "react-slick";
import { settings } from "../../common/Settings";
import "./MovieList.scss";

const MovieList = () => {
  let state = useSelector((state) => state);
  let shows = useSelector((state) => state.movies?.shows?.Search);

  let movies = state.movies;
  let { movies: Movies, loading, error } = movies;

  let allMovies = Movies.Search?.map((movie) => (
    <MovieCard key={movie.imdbID} {...movie} />
  ));

  let allShows = shows?.map((show) => (
    <MovieCard key={show.imdbID} {...show} />
  ));

  if (loading) {
    return (
      <h3 style={{ textAlign: "center", padding: "1rem 0", color: "#ffff" }}>
        Loading..
      </h3>
    );
  }

  if (error) {
    return (
      <h3 style={{ textAlign: "center", padding: "1rem 0", color: "#ffff" }}>
        {state.movies.error}
      </h3>
    );
  }

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>movies</h2>
        <div className="movie-container">
          <Slider {...settings}>{allMovies}</Slider>
        </div>
      </div>
      <div className="shows-list">
        <h2>shows</h2>
        <div className="shows-container">
          <Slider {...settings}> {allShows}</Slider>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
