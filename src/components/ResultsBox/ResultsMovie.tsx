import { ResultsMovieDataProps } from "../../types";

function ResultsMovie({ movie }: { movie: ResultsMovieDataProps }) {
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

export default ResultsMovie;
