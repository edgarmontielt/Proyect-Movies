import MovieCard from "./MovieCard";
import style from "../css/MoviesGrid.module.css";

export default function MoviesGrid({ movies }) {
  return (
    <>
      <div className={style.moviesGrid_title}>
        <h2>Peliculas Recientes</h2>
      </div>
      <div className={style.moviesGrid}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}
