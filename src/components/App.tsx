import { useState } from "react";

const tempMovieData = [
  {
    imdbID: "tt0468569",
    title: "The Dark Knight",
    year: "2008",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
  },
  {
    imdbID: "tt0107048",
    title: "Groundhog Day",
    year: "1993",
    poster:
      "https://m.media-amazon.com/images/M/MV5BZWIxNzM5YzQtY2FmMS00Yjc3LWI1ZjUtNGVjMjMzZTIxZTIxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
  },
  {
    imdbID: "tt1745960",
    title: "Top Gun: Maverick",
    year: "2022",
    poster:
      "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt0468569",
    title: "The Dark Knight",
    year: "2008",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    runtime: 152,
    imdbRating: 9.0,
    userRating: 9.9,
  },
  {
    imdbID: "tt1745960",
    title: "Top Gun: Maverick",
    year: "2022",
    poster:
      "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
    runtime: 130,
    imdbRating: 8.2,
    userRating: 9,
  },
];

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);

  return (
    <div className="h-svh bg-slate-900 p-6 text-slate-100">
      <nav className="grid grid-cols-3 items-center rounded-lg bg-indigo-800 p-4">
        <div className="flex items-center gap-2">
          <span role="img">🍿</span>
          <h1 className="text-2xl font-semibold">usePopcorn</h1>
        </div>
        <input
          className="min-w-44  rounded-2xl border-none px-6 py-3 placeholder:text-slate-600 focus:text-slate-800 focus:outline-none focus-visible:text-slate-700"
          type="text"
          placeholder="Search movies..."
        ></input>
        <p className="text- justify-self-end text-lg">Found X results</p>
      </nav>
      <main className="mt-2 grid grid-cols-2 gap-2">
        <div className="rounded-lg bg-slate-800">
          <button className="hidden"></button>
          <ul className="list">
            {movies?.map((movie) => (
              <li className="relative grid grid-cols-3 gap-4 border-b-2 border-b-slate-700 px-8 py-4">
                <img className="col-span-1 max-h-24" src={movie.poster} />
                <div className="col-span-2 flex flex-col gap-2 self-center">
                  <h3 className="text-xl font-bold">{movie.title}</h3>
                  <p className="flex gap-2 text-sm">
                    <span>🗓</span>
                    <span>{movie.year}</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[1/2] rounded-lg bg-slate-800">
          <button className="hidden"></button>
          <div className="flex flex-col gap-2 rounded-lg bg-slate-700 p-4 ">
            <h2 className="text-2xl font-bold">Your List</h2>
            <div className="flex gap-2 pl-2">
              <p className="flex gap-2 text-sm">
                <span>#️⃣</span>
                <span>2 movies</span>
              </p>
              <p className="flex gap-2 text-sm">
                <span>⭐️</span>
                <span>8.5</span>
              </p>
              <p className="flex gap-2 text-sm">
                <span>🌟</span>
                <span>9.9</span>
              </p>
              <p className="flex gap-2 text-sm">
                <span>⏳</span>
                <span>24 mins.</span>
              </p>
            </div>
          </div>
          <ul className="list">
            {watched?.map((movie) => (
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
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
