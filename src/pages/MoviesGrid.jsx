import { useContext} from "react";
import MovieCard from "../components/MovieCard";
import style from "../css/MoviesGrid.module.css";
import { moviesContext } from "../context/MoviesContext";

export default function MoviesGrid() {
  const { movies } = useContext(moviesContext)
  return (
    <>
    <div className={style.moviesGrid_title}><h2>Peliculas Recientes</h2></div>
      <ul className={style.moviesGrid}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </>
  );
}
