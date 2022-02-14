import { MoviesGrid } from "./pages/MoviesGrid";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import Navbar from "./components/Navbar";

export function App() {
  return (<>
    <BrowserRouter>
    <Navbar/>
      <main>
        <Routes>
          <Route path="/" element={<MoviesGrid />}></Route>
          <Route path="/movie/:movieId" element={<MovieDetails />} />
        </Routes>
      </main>
    </BrowserRouter>
  </>
  );
}
