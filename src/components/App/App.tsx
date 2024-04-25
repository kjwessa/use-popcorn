import { useState } from "react";
import tempMovieData from "../../data/tempMovieData";
import tempWatchedData from "../../data/tempWatchedData";
import { ResultsMovieDataProps } from "../../types";
import { WatchedMovieDataProps } from "../../types";
import NavBar from "../NavBar/NavBar";
import Logo from "../NavBar/Logo";
import Search from "../NavBar/Search";
import NumResults from "../NavBar/NumResults";
import Main from "../Main/Main";
import Box from "../Box/Box";
import WatchedSummary from "../Watched/WatchedSummary";
import WatchedList from "../Watched/WatchedList";
import ResultsList from "../Results/ResultsList";
import StarRating from "../Star/StarRating";

function App() {
  const [movies, setMovies] = useState<ResultsMovieDataProps[]>(tempMovieData);
  const [watched, setWatched] =
    useState<WatchedMovieDataProps[]>(tempWatchedData);

  return (
    <div className="h-svh bg-slate-900 p-6 text-slate-100">
      <NavBar>
        <Logo />
        <Search />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <Box>
          <ResultsList movies={movies} />
        </Box>
        <Box>
          <WatchedSummary watched={watched} />
          <WatchedList watched={watched} />
          <StarRating />
        </Box>
      </Main>
    </div>
  );
}

export default App;
