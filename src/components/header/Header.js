import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import User from "../../components/images/user.png";
import { BsSearch } from "react-icons/bs";
import "./Header.scss";
import {
  fetchAsyncShows,
  fetchMoviesThunk,
} from "../features/movies/movieSlice";

const Header = () => {
  let [term, setTerm] = useState("");
  let dispatch = useDispatch();
  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchMoviesThunk(term));
    dispatch(fetchAsyncShows(term));
    setTerm("");
  };
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Movie App</Link>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={term}
            placeholder="Search"
            onChange={(e) => setTerm(e.target.value)}
          />
          <button type="submit">
            <BsSearch />
          </button>
        </form>
      </div>
      <div className="user-img">
        <img src={User} alt="user" />
      </div>
    </header>
  );
};

export default Header;
