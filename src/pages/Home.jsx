import { useContext } from "react";
import MoviesGrid from "../components/MoviesGrid";
import { moviesContext } from "../context/MoviesContext";

export default function Home() {
  const { movies } = useContext(moviesContext);

  return (
    <div className="page">
      <MoviesGrid movies={movies} />
    </div>
  );
}
