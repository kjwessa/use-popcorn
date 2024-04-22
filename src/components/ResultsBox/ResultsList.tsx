import { useState } from "react";
import tempMovieData from "../../data/tempMovieData";
import ResultsMovie from "./ResultsMovie";

function ResultsList() {
  const [movies, setMovies] = useState(tempMovieData);

  return (
    <ul className="list">
      {movies?.map((movie) => (
        <ResultsMovie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}

export default ResultsList;
