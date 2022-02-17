import { useState, useRef } from "react";
import Comment from "./Comment";
import styles from "../css/Comment.module.css"

export default function Comments({ movieId }) {

  const [reviews, setReviews] = useState([]);
  const comentario = useRef();

  const add = () => {
    let comment = comentario.current.value;
    setReviews([...reviews, { id: reviews.length, movieId, comment }]);
  };

  return (
    <div className={styles.comment}>
      <h4>Comentarios</h4>
      <div className={styles.comment_container}>
        <input
          ref={comentario}
          type="text"
          id="details__input"
          placeholder="Escribe tu reseña..."
        ></input>
        <button onClick={add} id="details__button">
          Agregar review
        </button>
      </div>
      <div className={styles.comment_single}>
        <Comment reviews={reviews} id={movieId} />
      </div>
    </div>
  );
}
