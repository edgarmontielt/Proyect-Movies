import { Link } from "react-router-dom";
import style from "../css/MovieCard.module.css";

export default function MovieCard({ movie }) {
  const imageUrl = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;

  console.log(movie);

  return (
    <li className={style.movieCard}>
      <Link to={"/movie/" + movie.id}>
        <img
          width={272}
          height={399}
          className={style.movieImage}
          src={imageUrl}
          alt={movie.title}
        />
        <h5>{movie.title}</h5>
        <p>{movie.vote_average}</p>
      </Link>
    </li>
  );
}
