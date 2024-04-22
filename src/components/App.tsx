import { useState } from "react";
import tempMovieData from "../data/tempMovieData";
import tempWatchedData from "../data/tempWatchedData";

const average = (arr: number[]): number => {
  const sum = arr.reduce((acc, cur) => acc + cur, 0);
  return arr.length > 0 ? sum / arr.length : 0;
};

//* App Components

export default function App() {
  return (
    <div className="h-svh bg-slate-900 p-6 text-slate-100">
      <NavBar />
      <Main />
    </div>
  );
}

//* NavBar Components
function NavBar() {
  return (
    <nav className="grid grid-cols-3 items-center rounded-lg bg-indigo-800 p-4">
      <Logo />
      <Search />
      <NumResults />
    </nav>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <span role="img">🍿</span>
      <h1 className="text-2xl font-semibold">usePopcorn</h1>
    </div>
  );
}

function Search() {
  const [query, setQuery] = useState("");
  return (
    <input
      className="min-w-44 rounded-2xl border-none px-6 py-3 text-slate-600 placeholder:text-slate-600 focus:text-slate-800 focus:outline-none focus-visible:text-slate-700"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    ></input>
  );
}

function NumResults() {
  return <p className="text- justify-self-end text-lg">Found X results</p>;
}

//* Main Components
function Main() {
  return (
    <main className="mt-2 grid grid-cols-2 gap-2">
      <ResultsBox />
      <WatchedBox />
    </main>
  );
}

function ResultsBox() {
  const [btnMoviesOpen, setBtnMoviesOpen] = useState(true);

  return (
    <div className="relative rounded-lg bg-slate-800 pt-6">
      <button
        className="absolute right-1 top-1 z-10 h-6 w-6 rounded-full bg-slate-50 text-slate-800"
        onClick={() => setBtnMoviesOpen((open) => !open)}
      >
        {btnMoviesOpen ? "+" : "-"}
      </button>
      {btnMoviesOpen && <ResultsList />}
    </div>
  );
}

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

type ResultsMovieProps = {
  imdbID: string;
  title: string;
  year: string;
  poster: string;
};

function ResultsMovie({ movie }: { movie: ResultsMovieProps }) {
  return (
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
  );
}

type WatchedMovie = {
  imdbID: string;
  title: string;
  year: string;
  poster: string;
  runtime: number;
  imdbRating: number;
  userRating: number;
};

function WatchedBox() {
  const [watched, setWatched] = useState(tempWatchedData);
  const [btnWatchedOpen, setBtnWatchedOpen] = useState(true);

  return (
    <div className="relative w-[1/2] rounded-lg bg-slate-800">
      <button
        className="absolute right-1 top-1 z-10 h-6 w-6 rounded-full bg-slate-50 text-slate-800"
        onClick={() => setBtnWatchedOpen((open) => !open)}
      >
        {btnWatchedOpen ? "+" : "-"}
      </button>
      <WatchedSummary watched={watched} />
      {btnWatchedOpen && <WatchedList watched={watched} />}
    </div>
  );
}

function WatchedSummary({ watched }: { watched: WatchedMovie[] }) {
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

function WatchedList({ watched }: { watched: WatchedMovie[] }) {
  return (
    <ul className="list">
      {watched?.map((movie) => <WatchedMovie movie={movie} />)}
    </ul>
  );
}

function WatchedMovie({ movie }: { movie: WatchedMovie }) {
  return (
    <li className="grid grid-cols-3 gap-2 px-8 py-4" key={movie.imdbID}>
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
