import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App  from "./App";
import MoviesContext from "./context/MoviesContext";

ReactDOM.render(
  <MoviesContext>
      <App />
  </MoviesContext>,
  document.getElementById("root")
);