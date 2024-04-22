import Logo from "./Logo";
import Search from "./Search";
import NumResults from "./NumResults";

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

export default NavBar;
