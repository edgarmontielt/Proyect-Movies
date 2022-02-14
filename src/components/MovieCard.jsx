import { Link } from "react-router-dom";
import style from "../css/MovieCard.module.css";

export default function MovieCard({ movie }) {
  const imageUrl = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;

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
        <div>{movie.title}</div>
      </Link>
    </li>
  );
}
