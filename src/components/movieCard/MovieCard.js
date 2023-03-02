import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.scss";

const MovieCard = ({ Title, Year, imdbID, Poster }) => {
  return (
    <Link to={`/movie/${imdbID}`}>
      <div className="card-item">
        <div className="card-inner">
          <div className="card-top">
            <img src={Poster} alt={Title} />
          </div>
          <div className="card-bottom">
            <div className="card-info">
              <h4>{Title}</h4>
              <h4>{Year}</h4>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
