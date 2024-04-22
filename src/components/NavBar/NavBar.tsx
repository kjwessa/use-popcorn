import Logo from "./Logo";
import Search from "./Search";
import NumResults from "./NumResults";
import { WatchedMovieDataProps } from "../../types";

//* NavBar Components
function NavBar({ watched }: { watched: WatchedMovieDataProps[] }) {
  return (
    <nav className="grid grid-cols-3 items-center rounded-lg bg-indigo-800 p-4">
      <Logo />
      <Search />
      <NumResults watched={watched} />
    </nav>
  );
}

export default NavBar;
