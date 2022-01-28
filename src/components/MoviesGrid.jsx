import React, { Fragment, useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import styles from "../module/MovieGrid.module.css";
import { get } from "../utils/httpClient";

function MoviesGrid() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    get("/discover/movie").then((data) => {
      setMovies(data.results);
    });
  }, []);
  

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
