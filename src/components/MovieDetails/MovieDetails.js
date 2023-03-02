import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  cleanSelectedMovieOrShow,
  fetchMovieOrShow,
} from "../features/movies/movieSlice";
import { AiFillStar, AiOutlineLike, AiTwotoneCalendar } from "react-icons/ai";
import { ImFilm } from "react-icons/im";
import "./MovieDetails.scss";

const MovieDetails = () => {
  let movie = useSelector((state) => state.movies.selectedMovieOrShow);
  let dispatch = useDispatch();
  let { imdbID } = useParams();
  useEffect(() => {
    dispatch(fetchMovieOrShow(imdbID));
    return () => {
      dispatch(cleanSelectedMovieOrShow());
    };
  }, [dispatch, imdbID]);
  return (
    <div className="movie-section">
      {!Object.keys(movie).length ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <div className="section-left">
            <div className="movie-title">{movie.Title}</div>
            <div className="movie-rating">
              <p>
                <span>
                  <AiFillStar className="fa-star" />
                </span>
                <span>{movie.imdbRating}</span>
              </p>
              <p>
                <span>
                  <AiOutlineLike className="fa-thumbs-up" />
                </span>
                <span>{movie.imdbVotes}</span>
              </p>
              <p>
                <span>
                  <ImFilm className="fa-film" />
                </span>
                <span>{movie.Runtime}</span>
              </p>
              <p>
                <span>
                  <AiTwotoneCalendar className="fa-calendar" />
                </span>
                <span>{movie.Year}</span>
              </p>
            </div>
            <div className="movie-plot">{movie.Plot}</div>
            <div className="movie-info">
              <div>
                <span>Director</span>
                <span>{movie.Director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{movie.Actors}</span>
              </div>
              <div>
                <span>Generes</span>
                <span>{movie.Genre}</span>
              </div>
              <div>
                <span>Languages</span>
                <span>{movie.Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{movie.Awards}</span>
              </div>
            </div>
          </div>
          <div className="section-right">
            <img src={movie.Poster} alt={movie.Title} />
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
