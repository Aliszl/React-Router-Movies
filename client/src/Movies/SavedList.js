import React from "react";
import { Link } from "react-router-dom";
// import { addToSavedList } from "../App";
// import Movie from "./Movie";

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <Link to={`/`}>
      <div className="home-button">Home</div>
    </Link>
    {/* <Movie /> */}
  </div>
);

export default SavedList;
