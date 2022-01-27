import React, { Fragment } from "react";
import movies from '../data/movies.json';
import MovieCard from "./MovieCard";

function MoviesGrid() {

  return (
    <Fragment>
      <ul>
      {
        movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie}/>
        ))
      }
      </ul>
    </Fragment>
  );
}

export default MoviesGrid;
