import { WatchedMovieDataProps } from "../../types";

function NumResults({ watched }: { watched: WatchedMovieDataProps[] }) {
  return (
    <p className="text- justify-self-end text-lg">
      Found {watched.length} results
    </p>
  );
}

export default NumResults;
