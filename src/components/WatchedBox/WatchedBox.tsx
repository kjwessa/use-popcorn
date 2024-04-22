import { useState } from "react";
import WatchedList from "./WatchedList";
import WatchedSummary from "./WatchedSummary";
import { WatchedMovieDataProps } from "../../types";

function WatchedBox({ watched }: { watched: WatchedMovieDataProps[] }) {
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

export default WatchedBox;
