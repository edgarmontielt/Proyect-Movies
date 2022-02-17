import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App";
import MoviesContext from "./context/MoviesContext";
import  UserContext from "./context/UserContext"

ReactDOM.render(
  <React.StrictMode>
    <UserContext>
      <MoviesContext>
        <App />
      </MoviesContext>
    </UserContext>
  </React.StrictMode>,
  document.getElementById("root")
);
