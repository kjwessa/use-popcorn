import WatchedBox from "../WatchedBox/WatchedBox";
import ResultsBox from "../ResultsBox/ResultsBox";

//* Main Components
function Main() {
  return (
    <main className="mt-2 grid grid-cols-2 gap-2">
      <ResultsBox />
      <WatchedBox />
    </main>
  );
}

export default Main;
