import React, { createContext, useEffect, useState } from "react";
import get from "../utils/httpClient";

export const moviesContext = createContext();

function MoviesContext({ children }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    get("/discover/movie").then((data) => {
      setMovies(data.results);
    });
  }, []);

  return (
    <moviesContext.Provider value={{ movies, setMovies}}>
      {children}
    </moviesContext.Provider>
  );
}

export default MoviesContext;
