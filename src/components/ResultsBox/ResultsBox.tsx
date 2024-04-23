import { useState } from "react";

function ResultsBox({ children }: React.PropsWithChildren<{}>) {
  const [btnMoviesOpen, setBtnMoviesOpen] = useState(true);

  return (
    <div className="relative rounded-lg bg-slate-800 pt-6">
      <button
        className="absolute right-1 top-1 z-10 h-6 w-6 rounded-full bg-slate-50 text-slate-800"
        onClick={() => setBtnMoviesOpen((open) => !open)}
      >
        {btnMoviesOpen ? "+" : "-"}
      </button>
      {btnMoviesOpen && children}
    </div>
  );
}

export default ResultsBox;
