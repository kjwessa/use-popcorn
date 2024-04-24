import { WatchedMovieDataProps } from "../../types";

function WatchedMovie({ movie }: { movie: WatchedMovieDataProps }) {
  return (
    <li className="grid grid-cols-3 gap-2 px-8 py-4">
      <img className="col-span-1 max-h-24" src={movie.poster} />
      <div className="col-span-2 self-center">
        <h3 className="text-xl font-bold">{movie.title}</h3>
        <div className="flex gap-2">
          <p className="flex gap-2 text-sm">
            <span>⭐️</span>
            <span>{movie.imdbRating}</span>
          </p>
          <p className="flex gap-2 text-sm">
            <span>🌟</span>
            <span>{movie.userRating}</span>
          </p>
          <p className="flex gap-2 text-sm">
            <span>⏳</span>
            <span>{movie.runtime} mins.</span>
          </p>
        </div>
      </div>
    </li>
  );
}

export default WatchedMovie;
