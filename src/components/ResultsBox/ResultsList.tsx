import { useState } from "react";
import ResultsMovie from "./ResultsMovie";
import { ResultsMovieDataProps } from "../../types";

function ResultsList({ movies }: { movies: ResultsMovieDataProps[] }) {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <ResultsMovie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}

export default ResultsList;
