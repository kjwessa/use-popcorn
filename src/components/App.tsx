const tempMovieData = [
  {
    imdbID: "tt0468569",
    Title: "The Dark Knight",
    Year: "2008",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
  },
  {
    imdbID: "tt0107048",
    Title: "Groundhog Day",
    Year: "1993",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZWIxNzM5YzQtY2FmMS00Yjc3LWI1ZjUtNGVjMjMzZTIxZTIxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
  },
  {
    imdbID: "tt14544192",
    Title: "Bo Burnham: Inside",
    Year: "2021",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMWYwZTVlMTgtZWNkMS00OTk4LWI4YjMtMGNlNzA4OWIyOWU4XkEyXkFqcGdeQXVyNjYyMjE4NDY@._V1_.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt0468569",
    Title: "The Dark Knight",
    Year: "2008",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    runtime: 152,
    imdbRating: 9.0,
    userRating: 9.9,
  },
  {
    imdbID: "tt14544192",
    Title: "Bo Burnham: Inside",
    Year: "2021",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMWYwZTVlMTgtZWNkMS00OTk4LWI4YjMtMGNlNzA4OWIyOWU4XkEyXkFqcGdeQXVyNjYyMjE4NDY@._V1_.jpg",
    runtime: 97,
    imdbRating: 8.6,
    userRating: 10,
  },
];

export default function App() {
  return (
    <div className="h-svh bg-slate-900 p-6 text-slate-100">
      <nav className="grid grid-cols-3 items-center py-1">
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
      <main className="main">
        <div className="box">
          <button className="btn-toggle"></button>
          <ul className="list">
            <li>
              <img src="https://m.media-amazon.com/images/M/MV5BMWYwZTVlMTgtZWNkMS00OTk4LWI4YjMtMGNlNzA4OWIyOWU4XkEyXkFqcGdeQXVyNjYyMjE4NDY@._V1_.jpg" />
              <h3>Bo Burnham: Inside</h3>
              <div>
                <p>
                  <span>🗓</span>
                  <span>2021</span>
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="box">
          <button className="btn-toggle"></button>
          <div className="summary">
            <h2>Movies you watched</h2>
            <div>
              <p>
                <span>#️⃣</span>
                <span>movies</span>
              </p>
              <p>
                <span>⭐️</span>
                <span>IMDB Rating</span>
              </p>
              <p>
                <span>🌟</span>
                <span>User Rating</span>
              </p>
              <p>
                <span>⏳</span>
                <span>RunTime</span>
              </p>
            </div>
          </div>
          <ul className="list">
            <li>
              <img src="https://m.media-amazon.com/images/M/MV5BMWYwZTVlMTgtZWNkMS00OTk4LWI4YjMtMGNlNzA4OWIyOWU4XkEyXkFqcGdeQXVyNjYyMjE4NDY@._V1_.jpg" />
              <h3>Bo Burnham: Inside</h3>
              <div>
                <p>
                  <span>⭐️</span>
                  <span>imdb rating</span>
                </p>
                <p>
                  <span>🌟</span>
                  <span>user rating</span>
                </p>
                <p>
                  <span>⏳</span>
                  <span>runtime minutes</span>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
