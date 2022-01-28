import React, { Fragment } from "react";
import movies from '../data/movies.json';
import MovieCard from "./MovieCard";
import styles from "../module/MovieGrid.module.css";

function MoviesGrid() {

  return (
    <Fragment>
      <ul className={styles.moviesGrid}>
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
