import { useState, useEffect, useContext} from "react";
import styles from "../css/MovieDetails.module.css";
import Poster from "../components/Poster";
import get from "../utils/httpClient";
import { useParams } from "react-router-dom";

export default function MovieData() {
  const { movieId } = useParams();
  const [movie, setMovie ] = useState(null)

  useEffect(() => {
    get("/movie/" + movieId).then((data) => {
      setMovie(data);
      console.log(movieId)
    });
  }, [movieId]);

  if (!movie) {
    return null;
  }

  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <>
      <Poster imageUrl={imageUrl} title={movie.title} />
      <div className={`${styles.col} ${styles.movieDetails}`}>
        <h2>{movie.title}</h2>
        <p>⭐⭐⭐⭐⭐</p>
        <p><strong>Description:</strong> {movie.overview}</p>
        <p><strong>Genero: </strong>{movie.genres.map((genre) => genre.name).join(", ")}</p>
      </div>
    </>
  );
}
