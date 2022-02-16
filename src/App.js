import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./pages/MovieDetails";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home";

// import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movie/:movieId" element={<MovieDetails />} />
          <Route path="/movie/login" element={<Login />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
