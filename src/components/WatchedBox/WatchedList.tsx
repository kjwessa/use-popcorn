import WatchedMovie from "./WatchedMovie";

type WatchedMovieDataProps = {
  imdbID: string;
  title: string;
  year: string;
  poster: string;
  runtime: number;
  imdbRating: number;
  userRating: number;
};

function WatchedList({ watched }: { watched: WatchedMovieDataProps[] }) {
  return (
    <ul className="list">
      {watched?.map((movie) => <WatchedMovie movie={movie} />)}
    </ul>
  );
}

export default WatchedList;
