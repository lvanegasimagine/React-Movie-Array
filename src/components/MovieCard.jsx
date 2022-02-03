import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "../module/MovieCard.module.css";
import placeholder from "../placeholder.jpg";
import { getMovieImg } from "../utils/getMovieImg";

function MovieCard({ movie }) {
  const imageUrl = getMovieImg(movie.poster_path, 300);
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
