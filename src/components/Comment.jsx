import { useContext } from "react";
import { userContext } from "../context/UserContext";
import styles from "../css/Comment.module.css";

export default function Comment({ reviews, id }) {
  const { user } = useContext(userContext);

  let valueComment = reviews.map((review) => {
    if (review.movieId === id) {
      return (
        <div className={styles.container_comment}>
          <div className={styles.container_user_pic}>
            <img
              className={styles.user_pic}
              src="https://lanmo.unam.mx/repositorio/LANMO/rn/hablantes/imagenes/directorio/hablante_blank.png"
              alt="profile_pic"
            />
          </div>
          <div>
            <p key={review.id + 1} className={styles.user_comment}>
              {user.logged ? user.name : "Desconocido"}
            </p>
            <p key={review.id}>{review.comment}</p>
          </div>
        </div>
      );
    }
  });

  return <>{reviews == 0 ? "Sin comentarios..." : valueComment}</>;
}

//Credentials : {edgarmontiel961@gmail.com -- moviesReact}
