import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { MovieCard } from "../components/MovieCard";
import style from "../css/MoviesGrid.module.css";

export function MoviesGrid() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    get("/discover/movie")
    .then((data) => {
      setMovies(data.results);
    });
  }, []);

  return (
    <ul className={style.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}