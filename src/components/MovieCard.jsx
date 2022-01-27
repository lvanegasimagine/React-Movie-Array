import React, { Fragment } from "react";

function MovieCard({movie}) {

  const imageUrl = "https://image.tmdb.org./t/p/w300" + movie.poster_path;
  return (
    <Fragment>
      <img src={imageUrl} alt={movie.title} />
      <li>{movie.title}</li>
    </Fragment>
  );
}

export default MovieCard;
