import { ResultsMovieDataProps } from "../../types";

function NumResults({ movies }: { movies: ResultsMovieDataProps[] }) {
  return (
    <p className="text- justify-self-end text-lg">
      Found {movies.length} results
    </p>
  );
}

export default NumResults;
