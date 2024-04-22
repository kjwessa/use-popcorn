import { useState } from "react";
import tempMovieData from "../../data/tempMovieData";
import tempWatchedData from "../../data/tempWatchedData";
import { ResultsMovieDataProps } from "../../types";
import { WatchedMovieDataProps } from "../../types";
import NavBar from "../NavBar/NavBar";
import Main from "../Main/Main";

export default function App() {
  const [movies, setMovies] = useState<ResultsMovieDataProps[]>(tempMovieData);
  const [watched, setWatched] =
    useState<WatchedMovieDataProps[]>(tempWatchedData);

  return (
    <div className="h-svh bg-slate-900 p-6 text-slate-100">
      <NavBar watched={watched} />
      <Main movies={movies} watched={watched} />
    </div>
  );
}
