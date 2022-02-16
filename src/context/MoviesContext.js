import React, { createContext, useEffect, useReducer } from "react";
import moviesReducer, { moviesInitialState } from "../reducers/moviesReducer";
import get from "../utils/httpClient";

export const moviesContext = createContext();

function MoviesContext({ children }) {

  const [movies, setMovies] = useReducer(moviesReducer, moviesInitialState);

  useEffect(() => {
    get("/discover/movie").then((data) => {
      setMovies({ type: "addMovies", movies: data.results });
    });
  }, []);

  return (
    <moviesContext.Provider value={{ movies: movies.movies }}>
      {children}
    </moviesContext.Provider>
  );
}

export default MoviesContext;

// TODO: Manage useReducer for the logic of app
