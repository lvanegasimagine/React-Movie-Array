import React, { Fragment } from "react";
import movie from "../data/movie.json";
import styles from "../module/MovieDetails.module.css";

// TODO: el .join permite separar los array

function MovieDetails() {
  const imageUrl = "https://image.tmdb.org./t/p/w500" + movie.poster_path;
  console.log(movie);
  return (
    <Fragment>
      <div className={styles.detailsContainer}>
        <img
          className={`${styles.col} ${styles.movieImage}`}
          src={imageUrl}
          alt={movie.title}
        />
        <div className={`${styles.col} ${styles.movieDetails}`}>
            <p className={styles.firstItem}>
              <strong>Title: </strong>
              {movie.title}
            </p>
            <p>
              <strong>Genres: </strong>
              {movie.genres.map((genre) => genre.name).join(", ")}
            </p>
            <p>
              <strong>Description:</strong> {movie.overview}
            </p>
          </div>
      </div>
    </Fragment>
  );
}

export default MovieDetails;
