export default function Comment({ reviews, id }) {
  let valueComment = reviews.map((review) => {
    if (review.movieId === id) {
      return <p key={review.id}>{review.comment}</p>;
    }
  });

  return (
    <div>
      {reviews == 0 ? "Sin comentarios..." : valueComment}
    </div>
  );
}
