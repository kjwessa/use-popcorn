import WatchedMovie from "./WatchedMovie";
import { WatchedMovieDataProps } from "../../types";

function WatchedList({ watched }: { watched: WatchedMovieDataProps[] }) {
  return (
    <ul className="list">
      {watched?.map((movie) => (
        <WatchedMovie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}

export default WatchedList;
