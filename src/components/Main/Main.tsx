import WatchedBox from "../WatchedBox/WatchedBox";
import ResultsBox from "../ResultsBox/ResultsBox";
import { ResultsMovieDataProps } from "../../types";
import { WatchedMovieDataProps } from "../../types";

//* Main Components
function Main({
  movies,
  watched,
}: {
  movies: ResultsMovieDataProps[];
  watched: WatchedMovieDataProps[];
}) {
  return (
    <main className="mt-2 grid grid-cols-2 gap-2">
      <ResultsBox movies={movies} />
      <WatchedBox watched={watched} />
    </main>
  );
}

export default Main;
