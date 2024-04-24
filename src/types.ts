export type ResultsMovieDataProps = {
  imdbID: string;
  title: string;
  year: string;
  poster: string;
};

export type WatchedMovieDataProps = {
  imdbID: string;
  title: string;
  year: string;
  poster: string;
  runtime: number;
  imdbRating: number;
  userRating: number;
};

export type StarRatingProps = {
  maxRating?: number;
};

export type StarProps = {
  onRate: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isFull: boolean;
};
