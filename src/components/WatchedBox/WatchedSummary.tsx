type WatchedMovieDataProps = {
  imdbID: string;
  title: string;
  year: string;
  poster: string;
  runtime: number;
  imdbRating: number;
  userRating: number;
};

const average = (arr: number[]): number => {
  const sum = arr.reduce((acc, cur) => acc + cur, 0);
  return arr.length > 0 ? sum / arr.length : 0;
};

function WatchedSummary({ watched }: { watched: WatchedMovieDataProps[] }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRunTime = average(watched.map((movie) => movie.runtime));

  return (
    <div className="flex flex-col gap-2 rounded-lg bg-slate-700 p-4 ">
      <h2 className="text-2xl font-bold">Your List</h2>
      <div className="flex gap-2 pl-2">
        <p className="flex gap-2 text-sm">
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p className="flex gap-2 text-sm">
          <span>⭐️</span>
          <span>{avgImdbRating}</span>
        </p>
        <p className="flex gap-2 text-sm">
          <span>🌟</span>
          <span>{avgUserRating}</span>
        </p>
        <p className="flex gap-2 text-sm">
          <span>⏳</span>
          <span>{avgRunTime} mins.</span>
        </p>
      </div>
    </div>
  );
}

export default WatchedSummary;
