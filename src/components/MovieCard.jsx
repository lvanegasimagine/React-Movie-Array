import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "../module/MovieCard.module.css";

function MovieCard({ movie }) {
  const imageUrl = "https://image.tmdb.org./t/p/w300" + movie.poster_path;
  console.log(movie);
  return (
    <Fragment>
      <li className={styles.movieCard}>
        <Link to={"/movies/" + movie.id}>
          <img
            width={230}
            height={345}
            className={styles.movieImage}
            src={imageUrl}
            alt={movie.title}
          />
          <div>{movie.title}</div>
        </Link>
      </li>
    </Fragment>
  );
}

export default MovieCard;
