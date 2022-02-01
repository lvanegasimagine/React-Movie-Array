import React, { Fragment, useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import MovieCard from "./MovieCard";
import styles from "../module/MovieGrid.module.css";
import Spinner from "./Spinner";
import { useQuery } from "../hooks/UseQuery";
import InfiniteScroll from "react-infinite-scroll-component";

function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //Scroll Infinite
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const query = useQuery();
  const search = query.get("search");
  console.log(search);

  useEffect(() => {
    setIsLoading(true);
    const searchUrl = search
      ? "/search/movie?query=" + search + "&page" + page
      : "/discover/movie?page=" + page;
    get(searchUrl).then((data) => {
      setMovies((prevMovies) => prevMovies.concat(data.results));
      setHasMore(data.page < data.total_pages);
      setIsLoading(false);
    });
  }, [search, page]);

  return (
    <Fragment>
      <InfiniteScroll dataLength={movies.length} hasMore={hasMore} next={() => setPage(prevPage => prevPage + 1)} loader={<Spinner />}>
        <ul className={styles.moviesGrid}>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </ul>
      </InfiniteScroll>
    </Fragment>
  );
}

export default MoviesGrid;
