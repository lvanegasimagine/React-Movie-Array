import React, { Fragment, useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import MovieCard from "./MovieCard";
import styles from "../module/MovieGrid.module.css";
import Spinner from "./Spinner";
import { useQuery } from "../hooks/UseQuery";


function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const query = useQuery();
  const search = query.get("search");
  console.log(search);

  useEffect(() => {
    setIsLoading(true);
    const searchUrl = search ? "/search/movie?query=" + search : "/discover/movie"
    get(searchUrl).then((data) => {
      setMovies(data.results);
      setIsLoading(false);
    });
  }, [search]);
  
  if(isLoading){
    return <Spinner/>
  }

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
