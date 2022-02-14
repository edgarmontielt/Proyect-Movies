import styles from "../css/Poster.module.css";

export default function Poster({ imageUrl, title }) {
  return (
    <img
      className={`${styles.col} ${styles.movieImage}`}
      src={imageUrl}
      alt={title}
    />
  );
}
