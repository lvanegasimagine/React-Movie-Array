import React, { Fragment, useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import styles from "../module/MovieGrid.module.css";

function MoviesGrid() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/discover/movie", {
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ODVhNWFhZTljYTU4YjI5MmZkNDVlMTFmNTJhMmM0YSIsInN1YiI6IjVlZTdhMmVlM2ZmMmRmMDAyMTZjMmYxMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qoJSjrsD2aJE_Jy4ZqVGeA-zpviuQ6DSO6NvpMQ4r0g",
        "Content-Type": "application/json;charset=utf-8"
      }
    }).then((result) => result.json()).then((data) => {
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
