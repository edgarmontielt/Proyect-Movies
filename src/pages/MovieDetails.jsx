import styles from "../css/MovieDetails.module.css";
import MovieData from "../components/MovieData";

export function MovieDetails() {
  return (
    <div className={styles.detailsContainer}>
      <MovieData />
    </div>
  );
}
