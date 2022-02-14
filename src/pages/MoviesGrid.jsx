import { useContext} from "react";
import MovieCard from "../components/MovieCard";
import style from "../css/MoviesGrid.module.css";
import { moviesContext } from "../context/MoviesContext";

export default function MoviesGrid() {
  const { movies } = useContext(moviesContext)
  return (
    <>
      <ul className={style.moviesGrid}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </>
  );
}
